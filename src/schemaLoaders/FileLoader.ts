import { readFile } from 'node:fs/promises';

import { getOpenApiDocument } from './helpers';
import { ISchemaLoader } from './types';

export class FileLoader implements ISchemaLoader {
    private path: string;

    constructor(path: string) {
        this.path = path;
    }

    public async loadIndex() {
        const indexSchemaContent = await readFile(this.path, 'utf8');
        return getOpenApiDocument(indexSchemaContent);
    }

    public async loadJson(url: string) {
        console.error('not implemented:', url);
        return {};
    }
}
