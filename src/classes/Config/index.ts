import { existsSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createJiti } from 'jiti';
import { InputOptions, Options, OutputOptions } from 'orval';

import { ILoaderOptionsParam } from '../Loader';

const configLoader = createJiti(import.meta.url);

interface IConfigOrval extends Omit<Options, 'input' | 'output'> {
    input?: Omit<InputOptions, 'target'>;
    output?: Omit<OutputOptions, 'target' | 'schemas'>;
}
export interface ITypescriptOpenapiGeneratorConfig {
    cache: {
        /**
         * OpenAPI spec: `http`/`https` URL, `file://` URL, or local filesystem path (resolved from cwd).
         */
        input: string;
        output: string;
    }[];
    loaderOptions?: ILoaderOptionsParam;
    orval: IConfigOrval;
}

export class Config {
    static DEFAULT = `import { type ITypescriptOpenapiGeneratorConfig } from '@ensi-platform/typescript-openapi-generator';

const config: ITypescriptOpenapiGeneratorConfig = {
    cache: [
        {
            input: '',
            output: '',
        },
    ],
    orval: {},
};

export default config;`;

    static async create() {
        const path = './typescript-openapi-generator.ts';

        if (existsSync(path)) {
            throw new Error('The file already exists');
        }

        await writeFile(path, Config.DEFAULT);
    }

    public async load(): Promise<ITypescriptOpenapiGeneratorConfig | undefined> {
        const configPath = resolve(process.cwd(), 'typescript-openapi-generator.ts');

        if (!existsSync(configPath)) {
            console.error(
                `Config not found: ${configPath}. Run typescript-openapi-generator-init or create the file.`
            );
            return;
        }

        try {
            const exportedContent = (await configLoader.import(configPath, {
                default: true,
            })) as ITypescriptOpenapiGeneratorConfig | undefined;

            if (!exportedContent) {
                throw new Error('typescript-openapi-generator.ts must export default config.');
            }
            return exportedContent;
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : String(error);
            console.error(`Failed to load ${configPath}: ${message}`);
            if (error instanceof Error && error.stack) {
                console.error(error.stack);
            }
            return;
        }
    }
}
