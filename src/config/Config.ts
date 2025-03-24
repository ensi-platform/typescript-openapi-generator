import { existsSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { Options } from 'orval';

interface IConfigOrval extends Omit<Options, 'input'> {
    output?: {
        target: never;
        schemas: never;
    };
}
export interface ITypescriptOpenapiGeneratorConfig {
    cache: {
        input: string;
        output: string;
    }[];
    orval: IConfigOrval;
}

export class Config {
    static DEFAULT = `export default {
    cache: [
        {
            input: '',
            output: '',
        },
    ],
    orval: {},
};`;

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
            const configModule = await import(path);
            const exportedContent = configModule.default as ITypescriptOpenapiGeneratorConfig;
            // eslint-disable-next-line unicorn/error-message
            if (!exportedContent) throw new Error('');
            return exportedContent;
        } catch {
            console.error('Cannot find module typescript-openapi-generator.ts');
        }
    }
}
