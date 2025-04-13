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

const CACHE_DIR = './cache';
const RESOLVED_SCHEMA_PATH = './cache/resolved-schema.yaml';

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

        const loader = new Loader(file.input, CACHE_DIR, loaderOptions);

        await loader.download({});

        displayLogs();

        const pathname = new URL(file.input).pathname;
        const pathToIndex = path.join(CACHE_DIR, pathname);

        const terminalLoader = new TerminalLoader({
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
                    target: './cache/resolved-schema.yaml',
                },
            })
        );
        if (fs.existsSync(CACHE_DIR)) {
            await rimraf(CACHE_DIR);
        }
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
        // eslint-disable-next-line no-await-in-loop
        await serialize(file, configData.orval, { loaderOptions: configData.loaderOptions });
    }
};
