import { existsSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { Options, OutputOptions } from 'orval';
import { tsImport } from 'ts-import';

import { ILoaderOptionsParam } from '../Loader';

interface IConfigOrval extends Omit<Options, 'input' | 'output'> {
    output?: Omit<OutputOptions, 'target' | 'schemas'>;
}
export interface ITypescriptOpenapiGeneratorConfig {
    cache: {
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

    public async load() {
        const path = resolve(process.cwd(), './typescript-openapi-generator.ts');
        try {
            const exportedContent: { default: ITypescriptOpenapiGeneratorConfig } = await tsImport.compile(path);

            if (!exportedContent) throw new Error();
            return exportedContent.default;
        } catch (error: any) {
            console.error('Cannot find module typescript-openapi-generator.ts', error);
        }
    }
}
