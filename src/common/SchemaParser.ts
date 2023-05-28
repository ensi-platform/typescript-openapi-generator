import RefParser from '@apidevtools/json-schema-ref-parser';
import { $Refs } from '@stoplight/json-schema-ref-parser';
import { kebab, pascal } from 'case';
import { writeFileSync } from 'fs';
import type { OpenAPIV3 } from 'openapi-types';

import { augmentPathsOperations, groupOperations } from './helpers';
import { ISchemaLoader, ParsedSchema, RefSchemaData } from './types';

const transformPath = (path: string) => pascal(path.replace('.yaml', '').replaceAll('/', '_').toLowerCase());

function parsePath(p: string) {
    let preparedPath = p.replaceAll('../', '').replaceAll('./', '');

    if (preparedPath.startsWith('#/')) {
        preparedPath = `common/${preparedPath.slice(2)}`;
    }

    if (preparedPath.includes('#/')) {
        const [path, obj] = preparedPath.split('#/');

        return [transformPath(path), obj, p] as const;
    }

    if (preparedPath.endsWith('.yaml')) {
        const [objYaml, ...rest] = preparedPath.split('/').reverse();
        const obj = objYaml.replace('.yaml', '');
        const path = rest.join('/');

        return [transformPath(path), obj, p] as const;
    }

    if (preparedPath.startsWith('common/')) {
        const obj = preparedPath.split('common/')[1];

        return ['common', obj, p] as const;
    }

    return [];
}

export class SchemaParser {
    private schemaObject!: object;
    private schemaLoader: ISchemaLoader;
    private onProgress?: (progress: number) => void;
    private readonly uniqueRefs = new Set<string>();

    constructor(schemaObject: object, schemaLoader: ISchemaLoader, onProgress?: (progress: number) => void) {
        this.schemaObject = schemaObject;
        this.schemaLoader = schemaLoader;

        this.onProgress = onProgress;
    }

    countUniqueRefs(obj: any): number {
        const stack = [obj];

        while (stack.length > 0) {
            const current = stack.pop();

            if (typeof current !== 'object' || current === null) {
                continue;
            }

            if ('$ref' in current) {
                const ref = current.$ref;
                const uniqueRef = ref.split('#')[0];
                this.uniqueRefs.add(uniqueRef);
            }

            for (const key in current) {
                if (!current.hasOwnProperty(key)) {
                    continue;
                }

                const value = current[key];

                if (typeof value === 'object' && value !== null) {
                    stack.push(value);
                }
            }
        }

        return this.uniqueRefs.size;
    }

    countUniqueRefsInYaml(yamlString: string): number {
        const regex = /(\$ref:\s*["'])([^#]+)(#[^"']+)?(["'])/g;
        let match;
        while ((match = regex.exec(yamlString)) !== null) {
            const ref = match[2].replaceAll(/\n\s*/g, '');
            const uniqueRef = ref.split('.yaml')[0] + '.yaml';
            this.uniqueRefs.add(uniqueRef);
        }

        return this.uniqueRefs.size;
    }

    async parse(): Promise<ParsedSchema> {
        const schemaObject = JSON.parse(JSON.stringify(this.schemaObject));
        const isFile = this.schemaLoader.getType() === 'file';
        const counter = {
            processed: 0,
            total: this.countUniqueRefs(schemaObject),
            lastSent: 0,
        };

        const onProgress = () => {
            if (!this.onProgress) return;

            const val = Math.floor((counter.processed / counter.total) * 100);

            if (val - counter.lastSent >= 10) {
                counter.lastSent = val;
                this.onProgress(val);
            }
        };

        const derefedMap = new Map<string, object>();

        const refs = (await RefParser.resolve(schemaObject, {
            continueOnError: false,
            parse: {
                json: false,
                yaml: {
                    allowEmpty: false,
                },
            },
            resolve: {
                ...(isFile
                    ? {
                          file: {
                              read: (file: any, cb: any) => this.schemaLoader.readSubfile(file, cb),
                          },
                      }
                    : {
                          external: true,
                          http: {
                              read: (file: any, cb: any) => this.schemaLoader.readSubfile(file, cb),
                              canRead: true,
                          },
                      }),
            },
        })) as never as $Refs;

        const fullSchemaArr = (await RefParser.dereference(schemaObject, {
            continueOnError: false,
            parse: {
                json: false,
                yaml: {
                    allowEmpty: false,
                },
            },
            resolve: {
                ...(isFile
                    ? {
                          file: {
                              read: (file: any, cb: any) =>
                                  this.schemaLoader.readSubfile(file, cb).then(str => {
                                      counter.total = this.countUniqueRefsInYaml(str);
                                      counter.processed++;
                                      onProgress();
                                  }),
                          },
                      }
                    : {
                          external: true,
                          http: {
                              read: (file: any, cb: any) =>
                                  this.schemaLoader.readSubfile(file, cb).then(str => {
                                      counter.total = this.countUniqueRefsInYaml(str);
                                      counter.processed++;
                                      onProgress();
                                  }),
                              canRead: true,
                          },
                      }),
            },
            dereference: {
                // circular: true,
                onDereference: (path: string, value: any) => {
                    derefedMap.set(path, value);
                },
            },
        })) as OpenAPIV3.Document;

        const grouped = new Map<string, { name: string; originalPath: string }[]>();
        const paths = [...new Set(derefedMap.keys())];
        const parsedPaths = paths.map(element => parsePath(element));

        for (const [path, name, originalPath] of parsedPaths) {
            if (!path) continue;

            if (!grouped.get(path)) {
                grouped.set(path, []);
            }

            grouped.get(path)!.push({
                name: pascal(name),
                originalPath,
            });
        }

        const allPaths = fullSchemaArr.paths;

        if (!allPaths) throw new Error('[SchemaParser] No paths found in openapi schema.');

        console.log('[SchemaParser] found paths:', Object.keys(allPaths).length);

        const operations = augmentPathsOperations(allPaths, refs);
        const derefedPathGroupedOps = groupOperations(operations);
        const groups = Object.keys(derefedPathGroupedOps);

        return {
            derefedSchema: fullSchemaArr,
            unrefedSchema: this.schemaObject as OpenAPIV3.Document,
            refs,
            operations,
            derefedPathGroupedOps,
            groups,
        };
    }
}
