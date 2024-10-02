import { parse } from '@stoplight/yaml';

import { ApiClient } from '../common/ApiClient';
import { ICommonRefObjectItem } from '../common/types';
import { getOpenApiDocument } from './helpers';
import { ILoadedData, ISchemaLoader } from './types';

const removeLeadingSlash = (str: string) => {
    if (str.startsWith('/')) return str.slice(1);
    return str;
};

export class UrlLoader implements ISchemaLoader {
    private url: string;
    private apiClient = new ApiClient(1);

    constructor(url: string) {
        this.url = url.replace('/index.yaml', '');

        if (this.url.endsWith('/')) this.url = this.url.slice(0, -1);
    }

    public async loadIndex() {
        const result = await this.apiClient.fetch<string>(`${this.url}/index.yaml`);
        return getOpenApiDocument(result);
    }

    private requestCache = new Map<string, Promise<string>>();
    private objectCache = new Map<string, ILoadedData>();

    public async loadJson(path: string) {
        try {
            const safePath = removeLeadingSlash(path) || 'index.yaml';
            const url = `${this.url}/${safePath}`;

            if (this.objectCache.has(url)) return this.objectCache.get(url)!;

            if (this.requestCache.has(url)) {
                const res = await this.requestCache.get(url)!;
                const obj = parse<ILoadedData>(res);

                this.objectCache.set(url, obj);

                return obj;
            }

            const request = this.apiClient.fetch<string>(url);
            this.requestCache.set(url, request);

            const res = await this.apiClient.fetch<string>(url);
            const obj = parse<ILoadedData>(res);

            this.objectCache.set(url, obj);
            return obj;
        } catch (error) {
            console.error(error);
            return {} as ICommonRefObjectItem;
        }
    }
}
