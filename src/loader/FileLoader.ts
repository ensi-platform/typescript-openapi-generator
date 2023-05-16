import { FileInfo } from '@stoplight/json-schema-ref-parser';
import { parse } from '@stoplight/yaml';
import { readFile } from 'node:fs/promises';
import { OpenAPI3 } from 'openapi-typescript';

import { ISchemaLoader } from '../types';

const valueOrArrayElement = (value: any) => {
    if (Array.isArray(value) && value.length > 0) return value[0];
    if (Array.isArray(value) && value.length === 0) return null;

    return value;
};

const resolvePath = (path: string, against: string) => {
    console.log('resolving path: ' + path, 'against', against);
    return path;
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

    public async readSubfile(file: FileInfo, cb: (error: any, result: any) => any) {
        if (file.url.includes('json-schema-ref-parser/dist/')) {
            const realPath = resolvePath(file.url.split('json-schema-ref-parser/dist/')[1], __dirname);
            const res = await readFile(realPath, 'utf8');
            cb(undefined, res);
            return res;
        }

        const res = readFile(file.url, 'utf8');
        cb(undefined, res);
        return res;
    }
}
