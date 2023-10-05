// https://admin-gui-backend-master-dev.ensi.tech/api-docs/v1/index.yaml
import { parse } from '@stoplight/yaml';
import { OpenAPI3 } from 'openapi-typescript';

import { ApiClient } from '../common/ApiClient';
import { ConfigSchema } from '../config/Config';
import { Reference } from '../deref';
import { ISchemaLoader } from './types';

const valueOrArrayElement = (value: any) => {
    if (Array.isArray(value) && value.length > 0) return value[0];
    if (Array.isArray(value) && value.length === 0) return null;

    return value;
};

const removeLeadingSlash = (str: string) => {
    if (str.startsWith('/')) return str.slice(1);
    return str;
};

export class UrlLoader implements ISchemaLoader {
    private url!: string;
    private apiClient = new ApiClient(1);
    private config: ConfigSchema;

    constructor(url: string, config: ConfigSchema) {
        this.config = config;
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

    private requestCache = new Map<string, Promise<string>>();
    private objectCache = new Map<string, Record<string, any>>();

    public async loadJson(absolutePath: Reference['absolutePath']) {
        const safePath = removeLeadingSlash(absolutePath) || 'index.yaml';
        const url = `${this.url}/${safePath}`;

        if (this.objectCache.has(url)) return this.objectCache.get(url)!;

        if (this.requestCache.has(url)) {
            const res = await this.requestCache.get(url)!;
            const obj = parse(res) as Record<string, any>;

            this.objectCache.set(url, obj);

            return obj;
        }

        const request = this.apiClient.fetch<string>(url);
        this.requestCache.set(url, request);

        const res = await this.apiClient.fetch<string>(url);
        const obj = parse(res) as Record<string, any>;

        this.objectCache.set(url, obj);

        return obj;
    }
}
