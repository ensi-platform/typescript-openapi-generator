import fs from 'node:fs';
import { rm } from 'node:fs/promises';
import path from 'node:path';
import { generate as oravalGenerate } from 'orval';
import yaml from 'yaml';

import { Config, ITypescriptOpenapiGeneratorConfig } from '../../classes/Config';
import { ILoaderOptionsParam as ILoaderOptionsParameter } from '../../classes/Loader';
import { TerminalLoader } from '../../classes/TerminalLoader';
import { displayLogs } from '../../common/console';
import { normalizeInputToUrl } from '../../common/normalizeInputUrl';
import { normalizeObjectAllOfSchemas } from '../../common/normalizeObjectAllOfSchemas';
import { sanitizeEnumAllOfSchemas } from '../../common/sanitizeEnumAllOfSchemas';
import { sanitizeRequiredOnlySchemas } from '../../common/sanitizeRequiredOnlySchemas';
import { stubExcludedComponentSchemas } from '../../common/stubExcludedComponentSchemas';
import { resolveSpec } from './resolveSpec';

const CACHE_DIR = './cache';
const RESOLVED_SCHEMA_PATH = './cache/resolved-schema.yaml';

const serialize = async (
    file: { input: string; output: string },
    orval: ITypescriptOpenapiGeneratorConfig['orval'],
    { loaderOptions = {} }: { loaderOptions?: ILoaderOptionsParameter }
) => {
    try {
        await rm(CACHE_DIR, { recursive: true, force: true });
        await fs.mkdirSync(CACHE_DIR, { recursive: true });

        const terminalLoader = new TerminalLoader({
            startInfo: 'Files loading has started',
            processInfo: 'Loading files',
            finishInfo: '🎉 Files loading completed successfully',
            error: 'Generation error, process stopped',
        });

        const inputUrl = normalizeInputToUrl(file.input);

        const resolvedSchema = await terminalLoader.processing(async () => {
            const result = await resolveSpec(inputUrl, CACHE_DIR, loaderOptions);
            displayLogs();
            return result;
        });

        const resolvedSpec = resolvedSchema as unknown as Record<string, unknown>;
        sanitizeRequiredOnlySchemas(resolvedSpec);
        normalizeObjectAllOfSchemas(resolvedSpec);
        sanitizeEnumAllOfSchemas(resolvedSpec);
        stubExcludedComponentSchemas(resolvedSpec, orval.input?.filters);

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

        await rm(CACHE_DIR, { recursive: true, force: true });
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
