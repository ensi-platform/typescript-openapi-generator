// https://admin-gui-backend-master-dev.ensi.tech/api-docs/v1/index.yaml
import { FileInfo } from '@stoplight/json-schema-ref-parser';
import { parse } from '@stoplight/yaml';
import { OpenAPI3 } from 'openapi-typescript';

import { ApiClient } from '../common/ApiClient';
import { ISchemaLoader } from '../common/types';

const valueOrArrayElement = (value: any) => {
    if (Array.isArray(value) && value.length > 0) return value[0];
    if (Array.isArray(value) && value.length === 0) return null;

    return value;
};

const sanitizeUrl = (url: string) => {
    if (process.platform === 'linux') {
        const cwd = process.cwd() + '/';
        return url.split(cwd)[1];
    }

    if (url.includes('/json-schema-ref-parser/dist/')) return url.split('/json-schema-ref-parser/dist/')[1];
    if (url.includes('/json-schema-ref-parser/')) return url.split('/json-schema-ref-parser/')[1];

    return url;
};

export class UrlLoader implements ISchemaLoader {
    private url!: string;
    private apiClient = new ApiClient(1);

    constructor(url: string) {
        this.url = url.replace('/index.yaml', '');

        if (this.url.at(-1) === '/') this.url = this.url.slice(0, Math.max(0, this.url.length - 1));
    }

    public getType() {
        return 'http' as const;
    }

    public async loadIndex() {
        const result = await this.apiClient.fetch<string>(`${this.url}/index.yaml`);

        const parsed = parse(result);

        return valueOrArrayElement(parsed) as OpenAPI3;
    }

    public async readSubfile(file: FileInfo, cb: (error: any, result: any) => any) {
        const portionUrl = `${this.url}/${sanitizeUrl(file.url)}`;

        try {
            const res = await this.apiClient.fetch<string>(portionUrl);
            cb(undefined, res);
            return res;
        } catch (error: any) {
            console.error(error);
            cb(error, undefined);
            return '';
        }
    }
}
