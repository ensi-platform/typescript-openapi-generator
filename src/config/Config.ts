import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';

export interface ConfigSchema {
    openapi_path: string;
    output_path: string;
    is_unix: boolean;
}

// eslint-disable-next-line unicorn/no-static-only-class
export class Config {
    static DEFAULT: ConfigSchema = {
        is_unix: ['darwin', 'linux'].includes(process.platform),
        openapi_path: '',
        output_path: '',
    };

    static async create() {
        const path = './openapi-generator.json';

        if (existsSync(path)) {
            throw new Error('Файл уже существует.');
        }

        await writeFile(path, JSON.stringify(Config.DEFAULT, null, 2));
    }

    static async save(config: ConfigSchema) {
        const path = './openapi-generator.json';

        await writeFile(path, JSON.stringify(config, null, 2));
    }

    static async load() {
        const path = './openapi-generator.json';

        if (!existsSync(path)) {
            return Config.DEFAULT;
        }

        const content = await readFile(path, 'utf8');

        try {
            const data = JSON.parse(content) as ConfigSchema;

            if (typeof data.is_unix !== 'boolean') {
                data.is_unix = Config.DEFAULT.is_unix;
            }

            if (typeof data.output_path !== 'string') {
                data.output_path = Config.DEFAULT.output_path;
            }

            return data;
        } catch (error) {
            console.error(error);
            return Config.DEFAULT;
        }
    }
}
