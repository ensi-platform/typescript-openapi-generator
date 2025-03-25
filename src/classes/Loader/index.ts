import { parse } from '@stoplight/yaml';
import cloneDeep from 'lodash.clonedeep';
import fs from 'node:fs';
import path from 'node:path';
import { ArraySubtype, ObjectSubtype, ParameterObject, ReferenceObject, SchemaObject } from 'openapi-typescript';
import yaml from 'yaml';

import { consoleError, consoleWarn } from '../../common/console';
import { NODE_SEPARATOR } from '../../common/constants';

type LocalSchemaObjectType = (SchemaObject | ParameterObject) & {
    type: 'string' | 'number' | 'integer' | 'array' | 'boolean' | 'null' | 'object';
};
const OPENAPI_DEFAULT_VALUES = {
    array: {
        type: 'array',
        items: {
            oneOf: [
                {
                    type: 'string',
                },
                {
                    type: 'integer',
                },
            ],
        },
    },
    object: {
        type: 'object',
        additionalProperties: {
            type: 'string',
        },
    },
    parameter: {
        schema: {
            type: 'string',
        },
    },
} as const;

const parseItem = (schema: LocalSchemaObjectType): LocalSchemaObjectType => {
    if (schema.type === 'array' && !(schema as ArraySubtype).items) {
        return { ...schema, ...cloneDeep(OPENAPI_DEFAULT_VALUES.array) } as LocalSchemaObjectType;
    }

    if (schema.type === 'object' && !(schema as ObjectSubtype).properties) {
        return { ...schema, ...cloneDeep(OPENAPI_DEFAULT_VALUES.object) } as LocalSchemaObjectType;
    }

    if (
        (schema as ParameterObject).in &&
        !(schema as never as ReferenceObject).$ref &&
        !(schema as ParameterObject).schema
    ) {
        return { ...schema, ...cloneDeep(OPENAPI_DEFAULT_VALUES.parameter) } as any;
    }

    return schema;
};

const transformItem = (schema: LocalSchemaObjectType): LocalSchemaObjectType | LocalSchemaObjectType[] => {
    if (!schema) return schema;
    if (typeof schema === 'object') {
        if (Array.isArray(schema)) {
            return schema.map(s => transformItem(s)) as LocalSchemaObjectType[];
        }

        const parsedSchema = parseItem(schema);

        return Object.keys(parsedSchema).reduce<LocalSchemaObjectType>((acc, key) => {
            const v = (parsedSchema as any)[key] as LocalSchemaObjectType;

            if (typeof v !== 'object' || !v) return { ...acc, [key]: v };
            if (Array.isArray(v))
                return { ...acc, [key]: (v as LocalSchemaObjectType[]).map(vItem => transformItem(vItem)) };
            if (v.type) return { ...acc, [key]: transformItem(parseItem(v)) };
            return { ...acc, [key]: transformItem(v) };
        }, {} as LocalSchemaObjectType);
    }

    return schema;
};

const parseSchema = (inputSchema: LocalSchemaObjectType) => {
    return {
        ...Object.entries(inputSchema).reduce<LocalSchemaObjectType>(
            (acc, [key, value]: [key: string, value: LocalSchemaObjectType]) => {
                const parsedObj = transformItem(value);
                if (parsedObj) (acc as any)[key] = parsedObj;
                return acc;
            },
            {} as LocalSchemaObjectType
        ),
    };
};

export class Loader {
    private cacheDir: string;
    private indexUrl: string;
    private visitedUrls: Set<string> = new Set();
    private downloadedUrls: Set<string> = new Set();
    private allUrls: Set<string> = new Set();

    constructor(url: string, cacheDir: string) {
        this.indexUrl = url;
        this.cacheDir = cacheDir;
    }

    private loadYaml = async (url: string) => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.status}`);
        }

        const responseContent = await response.text();

        return responseContent;
    };

    private updateFilePath = (filePath: string, baseUrl: string) => {
        if (filePath.startsWith('/')) {
            const fileName = path.basename(filePath);
            return `${baseUrl}/${fileName}`;
        }

        if (!filePath.startsWith('http')) {
            return new URL(filePath, baseUrl).toString();
        }
    };

    private getFilePath = (url: string) => {
        try {
            const relativePath = new URL(url).pathname;
            const filePath = path.join(this.cacheDir, relativePath);

            // Ensure the directory exists
            const dirName = path.dirname(filePath);

            if (!fs.existsSync(dirName)) {
                fs.mkdirSync(dirName, { recursive: true });
            }

            return filePath;
        } catch {}
    };

    private savingFile = (content: string, url: string) => {
        try {
            const filePath = this.getFilePath(url);
            if (!filePath) throw new Error(`File ${url} was't saving`);

            const parsedFile: LocalSchemaObjectType = parse(content);
            const parsedSchema = parseSchema(parsedFile);
            const yamlSchema = yaml.stringify(parsedSchema);

            fs.writeFileSync(filePath, yamlSchema);

            return parsedSchema;
        } catch (error) {
            consoleWarn((error as any).message);
        }
    };

    private preprocessSchema = (schema: LocalSchemaObjectType, baseUrl: string) => {
        const clonedSchema: LocalSchemaObjectType = JSON.parse(JSON.stringify(schema));

        const preprocessSchemaItem = (innerSchema: LocalSchemaObjectType, innerBaseUrl: string) => {
            if (typeof innerSchema === 'object' && innerSchema !== null) {
                if (Array.isArray(innerSchema)) {
                    for (const item of innerSchema) preprocessSchemaItem(item, innerBaseUrl);
                    return;
                }

                for (const key of Object.keys(innerSchema)) {
                    const value = (innerSchema as any)[key];

                    if (key === '$ref' && typeof value === 'string') {
                        const v = this.updateFilePath(value, innerBaseUrl);
                        if (!v) continue;
                        (innerSchema as any)[key] = v;
                        continue;
                    }

                    if (typeof value === 'object') preprocessSchemaItem(value, innerBaseUrl);
                }
            }
        };

        preprocessSchemaItem(clonedSchema, baseUrl);

        return clonedSchema;
    };

    private addAllUrls = (refs: string[]) => {
        for (const r of refs) this.allUrls.add(r);
    };

    // Traverse the schema to find $ref references
    private getRefsFromFile = (obj: LocalSchemaObjectType, baseUrl: string) => {
        const refs: string[] = [];

        if (typeof obj === 'object' && obj !== null) {
            if (Array.isArray(obj)) {
                for (const item of obj) {
                    refs.push(...this.getRefsFromFile(item, baseUrl));
                }

                return refs;
            }

            for (const key of Object.keys(obj)) {
                const value = (obj as any)[key];

                if (key === '$ref' && typeof value === 'string') {
                    // Check if the file has already been downloaded
                    const refRelativePath = new URL(value).pathname;

                    const refFilePath = path.join(this.cacheDir, refRelativePath);

                    if (!fs.existsSync(refFilePath)) {
                        // Add the file to the queue for downloading
                        refs.push(value.split(NODE_SEPARATOR)[0]);
                    }

                    continue;
                }

                if (typeof value === 'object') {
                    refs.push(...this.getRefsFromFile(value, baseUrl));
                }
            }
        }

        return refs;
    };

    private loadSchema = async (
        url: string,
        getFilesData: (data: { downloadedUrls: Set<string>; allUrls: Set<string> }) => void
    ) => {
        const fileUrl = url.split(NODE_SEPARATOR)[0];
        // Skip already processed URLs
        if (this.visitedUrls.has(fileUrl)) {
            return;
        }

        this.visitedUrls.add(fileUrl);

        try {
            const responseContent = await this.loadYaml(fileUrl);

            const parsedSchema = this.savingFile(responseContent, fileUrl);

            this.downloadedUrls.add(url);

            if (!parsedSchema) return;

            const parsedUrl = new URL(fileUrl);

            const pathParts = parsedUrl.pathname.split('/').slice(0, -1);
            const internalBaseUrl = `${parsedUrl.origin}${pathParts.join('/')}/`;

            const preprocessedSchema = this.preprocessSchema(parsedSchema, internalBaseUrl);
            const refs = this.getRefsFromFile(preprocessedSchema, this.cacheDir);

            if (refs.length > 0) {
                this.addAllUrls(refs);
                getFilesData({ downloadedUrls: this.downloadedUrls, allUrls: this.allUrls });

                await Promise.all(refs.map(ref => this.loadSchema(ref, getFilesData)));
            }
        } catch (error) {
            consoleError(`⚠️ Error processing URL ${fileUrl}: ${(error as any).message}`);
        }
    };

    public download = async ({
        getFilesData,
    }: {
        getFilesData: (data: { downloadedUrls: Set<string>; allUrls: Set<string> }) => void;
    }) => {
        await this.loadSchema(this.indexUrl, getFilesData);
    };
}
