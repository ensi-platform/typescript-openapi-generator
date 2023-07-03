import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';

import { ImportData, OverridePolicy } from '../common/types';

export enum Target {
    TYPES = 'types',
    ENUMS = 'enums',
    REACT_QUERY = 'react-query',
}

export interface ConfigSchema {
    openapi_path: string;
    output_path: string;
    targets: Target[];
    override_policies: Record<Target, OverridePolicy | undefined>;
    is_unix: boolean;
    ['react-query']: {
        generate_invalidations: boolean;
        imports: ImportData[];
        hooks: string[];
        api_client_name: string;
    };
}

// eslint-disable-next-line unicorn/no-static-only-class
export class Config {
    static DEFAULT: ConfigSchema = {
        is_unix: ['darwin', 'linux'].includes(process.platform),
        openapi_path: '',
        output_path: '',
        targets: [],
        override_policies: {
            types: undefined,
            'react-query': undefined,
            enums: undefined,
        },
        'react-query': {
            generate_invalidations: true,
            api_client_name: 'apiClient',
            hooks: [],
            imports: [],
        },
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

            if (typeof data.override_policies !== 'object') {
                data.override_policies = Config.DEFAULT.override_policies;
            }

            if (!Array.isArray(data.targets)) {
                data.targets = Config.DEFAULT.targets;
            }

            if (typeof data.output_path !== 'string') {
                data.output_path = Config.DEFAULT.output_path;
            }

            if (typeof data['react-query'] !== 'object') {
                data['react-query'] = Config.DEFAULT['react-query'];
            }

            if (typeof data['react-query'].generate_invalidations !== 'boolean') {
                data['react-query'].generate_invalidations = Config.DEFAULT['react-query'].generate_invalidations;
            }

            if (typeof data['react-query'].api_client_name !== 'string') {
                data['react-query'].api_client_name = Config.DEFAULT['react-query'].api_client_name;
            }

            if (!Array.isArray(data['react-query'].hooks)) {
                data['react-query'].hooks = Config.DEFAULT['react-query'].hooks;
            }

            if (!Array.isArray(data['react-query'].imports)) {
                data['react-query'].imports = Config.DEFAULT['react-query'].imports;
            }

            return data;
        } catch (error) {
            console.error(error);
            return Config.DEFAULT;
        }
    }
}
