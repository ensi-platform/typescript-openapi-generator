import { HTTPMethods } from 'fastify';
import { OpenAPIV3 } from 'openapi-types';

import { IOpenApiSchamaParser, IParsedSchemaItem } from './types';

export enum HttpMethodsEnum {
    GET = 'get',
    PUT = 'put',
    POST = 'post',
    DELETE = 'delete',
    OPTIONS = 'options',
    HEAD = 'head',
    PATCH = 'patch',
    TRACE = 'trace',
}

const getApiUrls = ({ path, urlPrefixs }: { path: string; urlPrefixs?: string[] }) => {
    if (urlPrefixs)
        return urlPrefixs.map(url => {
            return `${url.endsWith('/') ? url.slice(0, -1) : url}/${
                path.startsWith('/') ? path.slice(1, path.length) : path
            }`;
        });

    return [path];
};

export class OpenApiParser implements IOpenApiSchamaParser {
    private schemaObject!: OpenAPIV3.Document;

    constructor(schemaObject: OpenAPIV3.Document) {
        this.schemaObject = schemaObject;
    }

    async parse() {
        const paths = Object.keys(this.schemaObject.paths) as string[];
        if (paths.length === 0) throw new Error('[SchemaParser] No paths found in openapi schema.');

        const urlPrefixs = this.schemaObject.servers?.map(({ url }) => url);

        return paths.map(pathKey => {
            const { ref, ...value } = this.schemaObject.paths[pathKey] as Record<
                HTTPMethods,
                IParsedSchemaItem['operationData']
            > & {
                ref: string;
            };

            const apiUrls = getApiUrls({ urlPrefixs, path: pathKey });

            return Object.entries(value).map(([methodKey, operationData]) => ({
                path: pathKey,
                ref,
                apiUrls,
                method: methodKey,
                operationData,
            }));
        });
    }
}
