import { Command } from '@oclif/core';
import fsExtra from 'fs-extra';
import fs from 'node:fs';
import path from 'node:path';
import { generate } from 'orval';
import yaml from 'yaml';

import { DuplicateResolver } from '../../classes/DuplicateResolver';
import { Loader } from '../../classes/Loader';
import { Progress } from '../../classes/Progress';
import { RefResolver } from '../../classes/RefResolver';
import { TerminalLoader } from '../../classes/TerminalLoader';
import { displayLogs } from '../../common/console';

const CACHE_DIR = './cache';
const RESOLVED_SCHEMA_PATH = './cache/resolved-schema.yaml';

const FILES = [
    {
        input: 'https://admin-gui-backend-master-dev.ensi.tech/api-docs/v1/index.yaml',
        output: './app/gen/',
    },
];

const serialize = async (file: { input: string; output: string }) => {
    try {
        const progress = new Progress({
            startInfo: `Downloading files from ${file.input} has started`,
            processInfo: 'Downloading files',
            finishInfo: `🎉 Files from ${file.input} download completed successfully`,
        });

        if (fs.existsSync(CACHE_DIR)) {
            await fsExtra.remove(CACHE_DIR);
        }

        fs.mkdirSync(CACHE_DIR, { recursive: true });

        const loader = new Loader(file.input, CACHE_DIR);

        const updateProgress = ({ downloadedUrls, allUrls }: { downloadedUrls: Set<string>; allUrls: Set<string> }) => {
            progress.update(downloadedUrls.size, allUrls.size);
        };

        await progress.processing(loader.download({ getFilesData: updateProgress }));

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
        fs.writeFileSync(RESOLVED_SCHEMA_PATH, yamlString);

        terminalLoader.reinit({
            startInfo: 'Files generation has started',
            processInfo: 'Generationing files',
            finishInfo: '🎉 Files generation completed successfully',
        });

        await terminalLoader.processing(() =>
            generate({
                output: {
                    headers: true,
                    docs: true,
                    clean: true,
                    override: {
                        fetch: {
                            includeHttpResponseReturnType: false,
                        },
                        header: () => ['The file is automatically generated, do not touch it manually'],
                    },
                    mode: 'tags-split',
                    target: file.output,
                    schemas: path.join(file.output, './models'),
                    client: 'fetch',
                },
                input: {
                    target: './cache/resolved-schema.yaml',
                },
            })
        );
        if (fs.existsSync(CACHE_DIR)) {
            await fsExtra.remove(CACHE_DIR);
        }
    } catch (error) {
        console.error(error);
    }
};

export default class Generate extends Command {
    async run(): Promise<void> {
        for (const file of FILES) {
            // eslint-disable-next-line no-await-in-loop
            await serialize(file);
        }
    }
}
