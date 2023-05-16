import RefParser from '@apidevtools/json-schema-ref-parser';
import { kebab, pascal } from 'case';
import type { OpenAPIV3 } from 'openapi-types';

import { augmentPathsOperations, groupOperations } from './helpers';
import { ISchemaLoader, ParsedSchema, RefSchemaData } from './types';

function parsePath(p: string) {
    let preparedPath = p.replaceAll('../', '').replaceAll('./', '');

    if (preparedPath.startsWith('#/')) {
        preparedPath = `common/${preparedPath.slice(2)}`;
    }

    const transformPath = (path: string) => pascal(path.replace('.yaml', '').replaceAll('/', '_').toLowerCase());

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
            if (typeof current === 'object' && current !== null) {
                if ('$ref' in current) {
                    const ref = current['$ref'];
                    const uniqueRef = ref.split('#')[0];
                    this.uniqueRefs.add(uniqueRef);
                }
                for (const key in current) {
                    if (current.hasOwnProperty(key)) {
                        const value = current[key];
                        if (typeof value === 'object' && value !== null) {
                            stack.push(value);
                        }
                    }
                }
            }
        }

        return this.uniqueRefs.size;
    }

    countUniqueRefsInYaml(yamlString: string): number {
        const regex = /(\$ref:\s*['"])([^#]+)(#[^'"]+)?(['"])/g;
        let match;
        while ((match = regex.exec(yamlString)) !== null) {
            const ref = match[2].replace(/\n\s*/g, '');
            const uniqueRef = ref.split('.yaml')[0] + '.yaml';
            this.uniqueRefs.add(uniqueRef);
        }

        return this.uniqueRefs.size;
    }

    async parse(): Promise<ParsedSchema> {
        const isFile = this.schemaLoader.getType() === 'file';
        const counter = {
            processed: 0,
            total: this.countUniqueRefs(this.schemaObject),
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

        const fullSchemaArr = (await RefParser.dereference(this.schemaObject, {
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
        const parsedPaths = paths.map(parsePath);

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

        const objectAccesedMap = new Map<object, RefSchemaData>();

        [...grouped.entries()].forEach(([group, other]) => {
            other.forEach(({ name, originalPath }) => {
                // Ignore path-specific schemas as they must not be common shared
                if (group.startsWith('Schemas')) return;

                const obj = derefedMap.get(originalPath)!;
                const fileName = kebab(group.replace('Common', '').replace('Schemas', '')) || 'index';
                const value: RefSchemaData = {
                    group,
                    name,
                    originalPath,
                    importPath: `@api/commonTypes/${fileName}`,
                    savedPath: `commonTypes/${fileName}.ts`,
                    schema: obj,
                };

                objectAccesedMap.set(obj, value);
            });
        });

        const allPaths = fullSchemaArr.paths;

        if (!allPaths) throw new Error('[SchemaParser] No paths found in openapi schema.');

        console.log('[SchemaParser] found paths:', Object.keys(allPaths).length);

        const operations = augmentPathsOperations(allPaths);
        const groupedOperations = groupOperations(operations);
        const groups = Object.keys(groupedOperations);

        return {
            derefedSchema: fullSchemaArr,
            objectAccesedMap,
            operations,
            groupedOperations,
            groups,
        };
    }
}
