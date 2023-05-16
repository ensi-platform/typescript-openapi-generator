import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';

import { OverridePolicy } from '../types';

export enum Target {
    TYPES = 'types',
    ENUMS = 'enums',
    REACT_QUERY = 'react-query',
}

export interface ConfigSchema {
    openapi_path: string;
    targets: Target[];
    override_policies: Record<Target, OverridePolicy | undefined>;
}

// eslint-disable-next-line unicorn/no-static-only-class
export class Config {
    static DEFAULT: ConfigSchema = {
        openapi_path: '',
        targets: [],
        override_policies: {
            types: undefined,
            'react-query': undefined,
            enums: undefined,
        },
    };

    static async create() {
        const path = './openapi-generator.json';

        if (existsSync(path)) {
            throw new Error('Файл уже существует.');
        }

        await writeFile(path, JSON.stringify(Config.DEFAULT, null, 2));
    }

    static async load() {
        const path = './openapi-generator.json';

        if (!existsSync(path)) {
            return Config.DEFAULT;
        }

        const content = await readFile(path, 'utf8');

        try {
            const data = JSON.parse(content) as ConfigSchema;

            if (typeof data.override_policies !== 'object') {
                data.override_policies = Config.DEFAULT.override_policies;
            }

            if (!Array.isArray(data.targets)) {
                data.targets = Config.DEFAULT.targets;
            }

            return data;
        } catch (error) {
            console.error(error);
            return Config.DEFAULT;
        }
    }
}
