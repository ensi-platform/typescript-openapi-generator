import fs from 'node:fs';
import path from 'node:path';
import { generate as oravalGenerate } from 'orval';
import { rimraf } from 'rimraf';
import yaml from 'yaml';

import { Config, ITypescriptOpenapiGeneratorConfig } from '../../classes/Config';
import { DuplicateResolver } from '../../classes/DuplicateResolver';
import { ILoaderOptionsParam, Loader } from '../../classes/Loader';
import { RefResolver } from '../../classes/RefResolver';
import { TerminalLoader } from '../../classes/TerminalLoader';
import { displayLogs } from '../../common/console';
import { normalizeInputToUrl } from '../../common/normalizeInputUrl';

const CACHE_DIR = './cache';
const RESOLVED_SCHEMA_PATH = './cache/resolved-schema.yaml';

/**
 * Orval валидирует spec до применения filters.schemas. Подменяем исключённые схемы на валидную
 * заглушку (не delete — иначе падают $ref на #/components/schemas/...).
 */
function stubExcludedComponentSchemas(
    spec: Record<string, unknown>,
    filters: { mode?: 'include' | 'exclude'; schemas?: (string | RegExp)[] } | undefined
): void {
    if (!filters || filters.mode !== 'exclude' || !filters.schemas?.length) {
        return;
    }
    const components = spec.components as Record<string, unknown> | undefined;
    const schemas = components?.schemas as Record<string, unknown> | undefined;
    if (!schemas) {
        return;
    }
    const { schemas: patterns } = filters;
    for (const key of Object.keys(schemas)) {
        const match = patterns.some((p) => (typeof p === 'string' ? p === key : p.test(key)));
        if (match) {
            schemas[key] = { type: 'object', additionalProperties: true };
        }
    }
}

const serialize = async (
    file: { input: string; output: string },
    orval: ITypescriptOpenapiGeneratorConfig['orval'],
    { loaderOptions = {} }: { loaderOptions?: ILoaderOptionsParam }
) => {
    try {
        if (fs.existsSync(CACHE_DIR)) {
            await rimraf(CACHE_DIR);
        }

        await fs.mkdirSync(CACHE_DIR, { recursive: true });

        const terminalLoader = new TerminalLoader({
            startInfo: 'Files loading has started',
            processInfo: 'Loading files',
            finishInfo: '🎉 Files loading completed successfully',
            error: 'Generation error, process stopped',
        });

        const inputUrl = normalizeInputToUrl(file.input);
        const loader = new Loader(inputUrl, CACHE_DIR, loaderOptions);

        await terminalLoader.processing(async () => loader.download({}));

        displayLogs();

        const pathToIndex = path.join(CACHE_DIR, new URL(inputUrl).pathname);

        terminalLoader.reinit({
            startInfo: 'Files resolved has started',
            processInfo: 'Resolving files',
            finishInfo: '🎉 Files resolve completed successfully',
        });
        const duplicateResolver = new DuplicateResolver(pathToIndex);

        const resolvedSchema = await terminalLoader.processing(async () => {
            const duplicateMap = duplicateResolver.resolve();
            const refResolver = new RefResolver(pathToIndex, duplicateMap);

            const result = await refResolver.resolve();
            return result;
        });

        stubExcludedComponentSchemas(resolvedSchema as Record<string, unknown>, orval.input?.filters);

        const yamlString = yaml.stringify(resolvedSchema);
        await fs.writeFileSync(RESOLVED_SCHEMA_PATH, yamlString);

        terminalLoader.reinit({
            startInfo: 'Files generation has started',
            processInfo: 'Generationing files',
            finishInfo: '🎉 Files generation completed successfully',
        });

        await terminalLoader.processing(() =>
            oravalGenerate({
                ...orval,
                output: {
                    ...orval.output,
                    target: file.output,
                    schemas: path.join(file.output, './models'),
                },
                input: {
                    ...orval.input,
                    target: RESOLVED_SCHEMA_PATH,
                },
            })
        );

        await rimraf(CACHE_DIR);
    } catch (error) {
        console.error(error);
    }
};

export const generate = async () => {
    const config = new Config();
    const configData = await config.load();

    if (!configData?.cache) {
        return;
    }

    for (const file of configData.cache) {
        await serialize(file, configData.orval, { loaderOptions: configData.loaderOptions });
    }
};
