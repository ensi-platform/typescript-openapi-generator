/* eslint-disable no-await-in-loop */
import { parse } from '@stoplight/yaml';
import cloneDeep from 'lodash.clonedeep';
import fs from 'node:fs';
import path from 'node:path';
import { ArraySubtype, ObjectSubtype, SchemaObject } from 'openapi-typescript';
import yaml from 'yaml';

type LocalSchemaObjectType = SchemaObject & {
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
    } as LocalSchemaObjectType,
    object: {
        type: 'object',
        additionalProperties: {
            type: 'string',
        },
    } as LocalSchemaObjectType,
} as any;

const parseItem = (schema: LocalSchemaObjectType): LocalSchemaObjectType => {
    if (schema.type === 'array' && !(schema as ArraySubtype).items) {
        return { ...schema, ...cloneDeep(OPENAPI_DEFAULT_VALUES.array) } as LocalSchemaObjectType;
    }

    if (schema.type === 'object' && !(schema as ObjectSubtype).properties) {
        return { ...schema, ...cloneDeep(OPENAPI_DEFAULT_VALUES.object) } as LocalSchemaObjectType;
    }

    if (schema.required && Array.isArray(schema.required) && !(schema as ObjectSubtype).properties) {
        return { ...schema, ...cloneDeep(OPENAPI_DEFAULT_VALUES.object) } as LocalSchemaObjectType;
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
    private queue: string[] = []; // Queue of URLs to process
    private visitedUrls: Set<string> = new Set();

    constructor(url: string, cacheDir: string) {
        this.queue.push(url);
        this.cacheDir = cacheDir;
    }

    private updateFilePath = (filePath: string, baseUrl: string) => {
        if (filePath.startsWith('/')) {
            const fileName = path.basename(filePath);
            return `${baseUrl}/${fileName}`;
        }

        if (!filePath.startsWith('http')) {
            return new URL(filePath, baseUrl).toString();
        }
    };

    private loadYaml = async (url: string) => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.status}`);
        }

        const responseContent = await response.text();

        return responseContent;
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

    // Traverse the schema to find $ref references
    private addingRefToQueue = (obj: LocalSchemaObjectType, baseUrl: string) => {
        if (typeof obj === 'object' && obj !== null) {
            if (Array.isArray(obj)) {
                for (const item of obj) this.addingRefToQueue(item, baseUrl);
                return;
            }

            for (const key of Object.keys(obj)) {
                const value = (obj as any)[key];

                if (key === '$ref' && typeof value === 'string') {
                    // Check if the file has already been downloaded
                    const refRelativePath = new URL(value).pathname;

                    const refFilePath = path.join(this.cacheDir, refRelativePath);

                    if (!fs.existsSync(refFilePath)) {
                        // Add the file to the queue for downloading
                        this.queue.push(value);
                    }

                    continue;
                }

                if (typeof value === 'object') this.addingRefToQueue(value, baseUrl);
            }
        }
    };

    public download = async () => {
        while (this.queue.length > 0) {
            const currentUrl = this.queue.shift();
            if (!currentUrl) continue;

            // Skip already processed URLs
            if (this.visitedUrls.has(currentUrl)) {
                continue;
            }

            this.visitedUrls.add(currentUrl);

            try {
                // Download the file
                console.info(`Downloading ${currentUrl}...`);

                const responseContent = await this.loadYaml(currentUrl);

                // Determine the relative path for caching
                const relativePath = new URL(currentUrl).pathname;
                const filePath = path.join(this.cacheDir, relativePath);

                // Ensure the directory exists
                const dirName = path.dirname(filePath);

                if (!fs.existsSync(dirName)) {
                    fs.mkdirSync(dirName, { recursive: true });
                    console.info(`Created directory: ${dirName}`);
                }

                const parsedFile: LocalSchemaObjectType = parse(responseContent);
                const parsedSchema = parseSchema(parsedFile);
                const yamlSchema = yaml.stringify(parsedSchema);

                // Write the file to the cache
                fs.writeFileSync(filePath, yamlSchema);
                console.info(`Downloaded ${currentUrl} to ${filePath}`);

                // Parse the file content
                const parsedUrl = new URL(currentUrl);

                const pathParts = parsedUrl.pathname.split('/').slice(0, -1);
                const internalBaseUrl = `${parsedUrl.origin}${pathParts.join('/')}/`;

                // Preprocess the schema to resolve $ref references
                const preprocessedSchema = this.preprocessSchema(parsedSchema, internalBaseUrl);
                this.addingRefToQueue(preprocessedSchema, this.cacheDir);
            } catch (error) {
                console.error(`Error processing URL ${currentUrl}: ${(error as any).message}`);
            }
        }
    };
}
