import { parse } from '@stoplight/yaml';
import { readFile } from 'node:fs/promises';
import { OpenAPI3 } from 'openapi-typescript';

import { Reference } from '../deref';
import { ISchemaLoader } from './types';

const valueOrArrayElement = (value: any) => {
    if (Array.isArray(value) && value.length > 0) return value[0];
    if (Array.isArray(value) && value.length === 0) return null;

    return value;
};

export class FileLoader implements ISchemaLoader {
    private path!: string;

    constructor(path: string) {
        this.path = path;
    }

    public getType() {
        return 'file' as const;
    }

    public async loadIndex() {
        const indexSchemaContent = await readFile(this.path, 'utf8');
        const parsed = parse(indexSchemaContent);

        return valueOrArrayElement(parsed) as OpenAPI3;
    }

    public async loadJson(reference: Reference['absolutePath']) {
        console.error('not implemented:', reference);
        return {};
    }
}
