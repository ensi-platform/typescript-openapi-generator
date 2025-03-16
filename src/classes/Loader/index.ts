/* eslint-disable no-await-in-loop */

/* eslint-disable max-depth */
import { parse } from '@stoplight/yaml';
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'yaml';

interface ISchemaObject {
    [key: string]: string | ISchemaObject;
}

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
    } as never as ISchemaObject,
    object: {
        type: 'object',
        additionalProperties: {
            type: 'string',
        },
    } as ISchemaObject,
    // object: {
    //   properties: {
    //     id: {
    //       type: 'string',
    //     },
    //   },
    // },
} as any;

const parseItem = (schema: ISchemaObject): ISchemaObject => {
    // if (schema.type === 'array') {
    //     console.log('schema=', schema);
    // }

    if (schema.type === 'array' && !schema.items) {
        return { ...schema, ...JSON.parse(JSON.stringify(OPENAPI_DEFAULT_VALUES.array)) } as ISchemaObject;
    }

    if (schema.type === 'object' && !schema.properties) {
        return { ...schema, ...JSON.parse(JSON.stringify(OPENAPI_DEFAULT_VALUES.object)) } as ISchemaObject;
    }

    if (schema.required && Array.isArray(schema.required) && !schema.properties) {
        return { ...schema, ...JSON.parse(JSON.stringify(OPENAPI_DEFAULT_VALUES.object)) } as ISchemaObject;
    }

    return schema;
};

const transformItem = (schema: ISchemaObject): ISchemaObject => {
    if (!schema) return schema;
    if (typeof schema === 'object') {
        if (Array.isArray(schema)) {
            return schema.map(s => transformItem(s)) as any;
        }

        const parsedSchema = parseItem(schema);

        return Object.keys(parsedSchema).reduce<any>((acc, key) => {
            const v = parsedSchema[key];

            if (typeof v !== 'object' || !v) return { ...acc, [key]: v };
            if (Array.isArray(v)) return { ...acc, [key]: (v as any[]).map(vItem => transformItem(vItem)) };
            if (v.type) return { ...acc, [key]: transformItem(parseItem(v)) };
            return { ...acc, [key]: transformItem(v) };
        }, {}) as any;
    }

    return schema;
};

const parseSchema = (inputSchema: ISchemaObject) => {
    return {
        ...Object.entries(inputSchema).reduce<ISchemaObject>((acc, [key, value]) => {
            const parsedObj = transformItem(value as any);
            if (parsedObj) acc[key] = parsedObj;
            return acc;
        }, {}),
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

    // Функция для предобработки схемы
    private preprocessSchema = (schema: ISchemaObject, baseUrl: string) => {
        const clonedSchema: ISchemaObject = JSON.parse(JSON.stringify(schema));

        const preprocessSchemaItem = (innerSchema: ISchemaObject, innerBaseUrl: string) => {
            if (typeof innerSchema === 'object' && innerSchema !== null) {
                if (Array.isArray(innerSchema)) {
                    for (const item of innerSchema) preprocessSchemaItem(item, innerBaseUrl);
                } else {
                    for (const key of Object.keys(innerSchema)) {
                        const value = innerSchema[key];

                        if (key === '$ref' && typeof value === 'string') {
                            const v = this.updateFilePath(value, innerBaseUrl);
                            if (!v) continue;
                            innerSchema[key] = v;
                            continue;
                        }

                        if (typeof value === 'object') preprocessSchemaItem(value, innerBaseUrl);
                    }
                }
            }
        };

        preprocessSchemaItem(clonedSchema, baseUrl);

        return clonedSchema;
    };

    // Traverse the schema to find $ref references
    private addingRefToQueue = (obj: ISchemaObject, baseUrl: string) => {
        if (typeof obj === 'object' && obj !== null) {
            if (Array.isArray(obj)) {
                for (const item of obj) this.addingRefToQueue(item, baseUrl);
                return;
            }

            for (const key of Object.keys(obj)) {
                const value = obj[key];

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
                // console.info(`Downloading ${currentUrl}...`);

                const responseContent = await this.loadYaml(currentUrl);

                // Determine the relative path for caching
                const relativePath = new URL(currentUrl).pathname;
                const filePath = path.join(this.cacheDir, relativePath);

                // Ensure the directory exists
                const dirName = path.dirname(filePath);

                if (!fs.existsSync(dirName)) {
                    fs.mkdirSync(dirName, { recursive: true });
                    // console.info(`Created directory: ${dirName}`);
                }

                const parsedFile: ISchemaObject = parse(responseContent);
                const parsedSchema = parseSchema(parsedFile);
                const yamlSchema = yaml.stringify(parsedSchema);

                // Write the file to the cache
                fs.writeFileSync(filePath, yamlSchema);
                // console.info(`Downloaded ${currentUrl} to ${filePath}`);

                // Parse the file content
                const parsedUrl = new URL(currentUrl);

                // Удаляем файл и фрагмент, оставляя только путь до каталога
                const pathParts = parsedUrl.pathname.split('/').slice(0, -1); // Убираем последний элемент (файл)
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
