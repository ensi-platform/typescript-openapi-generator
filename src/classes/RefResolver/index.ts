/* eslint-disable @typescript-eslint/ban-ts-comment */
import fs from 'node:fs';
import path from 'node:path';
// @ts-ignore
import yaml from 'yaml';

import { cleanPathFromTheFile, resolvePathSegments } from '../../common/helpers';

interface ISchemaObject {
    [key: string]: string | ISchemaObject | ISchemaObject[];
}

const serializeToCamelCase = (str: string) => {
    const words = str.split('_'); // Разделяем по символу '_'
    const camelCaseName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(''); // Собираем обратно в строку

    return camelCaseName;
};

export class RefResolver {
    private pathToIndex: string;
    private cachedPath: string;

    private paths = new Map<string, string>();

    private componentSchemas = new Map<string, any>();
    private componentResponses = new Map<string, any>();
    private componentParameters = new Map<string, any>();

    constructor(pathToIndex: string) {
        this.pathToIndex = pathToIndex;
        this.cachedPath = cleanPathFromTheFile(pathToIndex);
    }

    // private findAllYamlFiles = (dir: string) => {
    //     let results: string[] = [];
    //     const files = fs.readdirSync(dir);

    //     for (const file of files) {
    //         const filePath = path.join(dir, file);
    //         const stat = fs.statSync(filePath);

    //         if (stat.isDirectory()) {
    //             // Рекурсивно обрабатываем поддиректории
    //             results = [...results, ...this.findAllYamlFiles(filePath)];
    //         } else if (file.endsWith('.yaml') || file.endsWith('.yaml')) {
    //             // Добавляем только .yaml файлы
    //             results.push(filePath);
    //         }
    //     }

    //     return results;
    // };

    // private wrapObjToName = (content: ISchemaObject, filePath: string) => {
    //     const file = filePath.split('/').at(-1);
    //     if (!file) return content;
    //     const fileName = file.replace('.yaml', '');
    //     const serializedFileName = serializeToCamelCase(fileName);
    //     this.newVariables.set(file, serializedFileName);
    //     // console.log(file, serializedFileName);
    //     return {
    //         [serializedFileName]: content,
    //     };
    // };

    // private collectOpenApiObjects(rootDir: string, excludes: string[] = []) {
    //     // 1. Находим все .yaml файлы
    //     const yamlFiles = this.findAllYamlFiles(rootDir).filter(file => {
    //         return !excludes.includes(`./${file}`);
    //     });
    //     console.log(yamlFiles);
    //     console.log(yamlFiles.find(f => f.includes('index.yaml')));
    //     // 2. Читаем и парсим каждый файл
    //     const openapiObjects: ISchemaObject[] = yamlFiles.map((filePath: string) => {
    //         const content = fs.readFileSync(filePath, 'utf8');
    //         const json: ISchemaObject = yaml.parse(content);
    //         // console.log(filePath);
    //         const parsedContent = Object.keys(json).includes('type') ? this.wrapObjToName(json, filePath) : json;
    //         for (const k of Object.keys(parsedContent)) {
    //             if (k === 'components') delete parsedContent[k];
    //         }

    //         return parsedContent;
    //     });

    //     return openapiObjects;
    // }
    // private updateNodeRef = (schema: ISchemaObject | ISchemaObject[], relativePath: string) => {
    //     if (!schema || typeof schema !== 'object') return null;

    //     if (Array.isArray(schema)) {
    //         return schema.reduce<ISchemaObject[]>((acc, item) => {
    //             const result = this.updateNodeRef(item, relativePath) as ISchemaObject;
    //             if (result) acc.push(result);
    //             return acc;
    //         }, []);
    //     }

    //     // Обрабатываем объекты
    //     const resolvedSchema = Object.entries(schema).reduce((acc, [key, value]) => {
    //         if (key === '$ref' && typeof value === 'string') {
    //             const isAbsolute = value.startsWith('http') || value.startsWith('/');
    //             if (isAbsolute) return acc;

    //             const relativeRefPath = resolvePathSegments([relativePath, value]);
    //             const parsedRefPath =
    //                 relativeRefPath.startsWith('./index.yaml') || relativeRefPath.startsWith('../index.yaml')
    //                     ? relativeRefPath.replace('./index.yaml', '').replace('../index.yaml', '')
    //                     : relativeRefPath;
    //             acc[key] = parsedRefPath;

    //             return acc;
    //         }

    //         if (typeof value === 'object') {
    //             // Рекурсивно обходим вложенные объекты
    //             const v = this.updateNodeRef(value, relativePath);
    //             if (v) acc[key] = v;
    //             return acc;
    //         }

    //         acc[key] = value;
    //         return acc;
    //     }, {} as ISchemaObject);
    //     if (!resolvedSchema) return null;
    //     return resolvedSchema;
    // };

    // private resolveCicleItem = (schema: ISchemaObject | ISchemaObject[], relativePath: string) => {
    //     if (typeof schema === 'object' && schema !== null) {
    //         if (Array.isArray(schema)) {
    //             for (const element of schema) {
    //                 if (element) this.resolveCicleItem(element, relativePath);
    //             }

    //             return;
    //         }

    //         const keys = Object.keys(schema);

    //         for (const key of keys) {
    //             if (key === '$ref' && typeof schema[key] === 'string') {
    //                 const refPath = schema[key] as string;

    //                 if (!refPath) continue;

    //                 try {
    //                     console.info(`Resolving local $ref: ${refPath}`);
    //                     const [filePathWithDir, node] = path.join(relativePath, refPath).split('#');

    //                     const parsedNode = node.replaceAll('/', '');

    //                     const resolvedContent = parse<ISchemaObject>(fs.readFileSync(filePathWithDir, 'utf8'));

    //                     const refSchema = (
    //                         typeof resolvedContent[parsedNode] === 'object'
    //                             ? resolvedContent[parsedNode]
    //                             : resolvedContent
    //                     ) as ISchemaObject;

    //                     const content = this.updateNodeRef(refSchema, refPath);
    //                     // Заменяем $ref на разрешённое значение
    //                     delete schema.$ref;
    //                     Object.assign(schema, content);
    //                 } catch {
    //                     console.warn(`Failed to resolve $ref: ${refPath}. Wrapping in anyOf.`);

    //                     schema.anyOf = [{ $ref: refPath }];
    //                     delete schema.$ref;
    //                 }

    //                 continue;
    //             }

    //             if (typeof schema === 'object' && typeof schema[key] === 'object') {
    //                 this.resolveCicleItem(schema[key] as ISchemaObject, relativePath);
    //             }
    //         }
    //     }
    // };

    // private resolveCicles = async (schema: ISchemaObject) => {
    //     try {
    //         const clonedSchema: ISchemaObject = JSON.parse(JSON.stringify(schema));

    //         this.resolveCicleItem(clonedSchema, this.cachedPath);
    //         return clonedSchema;
    //     } catch (error) {
    //         console.error('Не удалось разрешить цикличные пути:', error);
    //     }
    // };

    // private resolveRefWithoutNode = () => {};

    // private resolveFirstTimeComponents = (component: any, collectedObjs: any[]) => {
    //     return Object.entries(component).reduce<any>((acc, [key, value]: [any, any]) => {
    //         const { $ref: ref, ...obj } = value as any;

    //         if (!ref) {
    //             acc[key] = value;
    //             return acc;
    //         }

    //         if (ref.includes('#')) {
    //             const node = ref.split('#/')[1];
    //             if (!node) {
    //                 acc[key] = value;
    //                 return acc;
    //             }

    //             const v = collectedObjs.find(objFromArray => Boolean(objFromArray[node]))?.[node];
    //             acc[key] = { ...obj, v };
    //             return acc;
    //         }

    //         const fileName = ref.split('/').pop();
    //         if (this.newVariables.has(fileName)) {
    //             const resolvedName = this.newVariables.get(fileName);
    //             if (!resolvedName) {
    //                 acc[key] = value;
    //                 return acc;
    //             }

    //             const v = collectedObjs.find(objFromArray => Boolean(objFromArray[resolvedName]))?.[resolvedName];
    //             acc[key] = { ...obj, v };
    //         }

    //         return acc;
    //     }, {});
    // };

    // updateRefs(schema: any) {
    //     if (typeof schema !== 'object' || schema === null) {
    //         return;
    //     }

    //     // Если это массив, обходим каждый элемент
    //     if (Array.isArray(schema)) {
    //         for (const item of schema) this.updateRefs(item);
    //         return;
    //     }

    //     // Если это объект, проверяем свойства
    //     for (const key in schema) {
    //         if (schema.hasOwnProperty(key)) {
    //             const value = schema[key];

    //             // Если нашли $ref, проверяем и заменяем его
    //             if (key === '$ref' && typeof value === 'string') {
    //                 if (schema.type === 'string' || schema.type === 'integer') {
    //                     delete schema[key];
    //                 } else {
    //                     const node = value.split('#/')[1];
    //                     if (node) {
    //                         if (this.paths.has(node)) {
    //                             const v = this.paths.get(node);
    //                             if (!v) console.log(node);
    //                             schema[key] = this.paths.get(node); // Заменяем $ref
    //                         } else {
    //                             // console.log(node);
    //                             schema[key] = `#/${node}`;
    //                         }
    //                     }
    //                 }
    //             }

    //             if (value && typeof value === 'object' && value.type && value.type === 'array' && value.items?.$ref) {
    //                 delete value.items.$ref;
    //                 value.items = { type: 'string' };
    //             } else if (
    //                 value &&
    //                 typeof value === 'object' &&
    //                 value.allOf &&
    //                 value.allOf.some((item: any) => item.$ref)
    //             ) {
    //                 delete value.allOf;
    //                 value.type = 'string';
    //             } else {
    //                 // Рекурсивно обрабатываем вложенные объекты
    //                 this.updateRefs(value);
    //             }
    //         }
    //     }
    // }

    // public resolve = async () => {
    //     const indexFileContent = fs.readFileSync('./cache/api-docs/v1/index.yaml', 'utf8');
    //     const jsonIndexFile = yaml.parse(indexFileContent);

    //     const excludePaths = Object.keys(jsonIndexFile.paths).reduce<string[]>((acc, pathKey) => {
    //         const pathValue = jsonIndexFile.paths[pathKey];
    //         const ref = pathValue.$ref;

    //         if (ref) acc.push((ref as string).split('#/')[0]);
    //         return acc;
    //     }, []);

    //     console.log(excludePaths);
    //     const objs = this.collectOpenApiObjects('./cache/api-docs/v1/', [
    //         'cache/api-docs/v1/index.yaml',
    //         ...excludePaths,
    //     ]);

    //     const components = jsonIndexFile.components;

    //     const resolvedComponents = Object.entries(components).reduce<any>((acc, [key, value]: [any, any]) => {
    //         acc[key] = this.resolveFirstTimeComponents(value, objs);

    //         return acc;
    //     }, {});

    //     const innerResolvedComponents = objs.reduce((acc, v) => {
    //         return { ...acc, ...v };
    //     });
    //     const totalComponents = {
    //         ...resolvedComponents,
    //         schemas: {
    //             ...innerResolvedComponents,
    //             ...resolvedComponents.schemas,
    //         },
    //     };

    //     for (const [key, value] of Object.entries(totalComponents)) {
    //         for (const componentName of Object.keys(value as any)) {
    //             this.paths.set(componentName, `#/components/${key}/${componentName}`);
    //         }
    //     }

    //     const schema = { ...jsonIndexFile, components: totalComponents };
    //     this.updateRefs(schema);

    //     // const resolvedSchema = (await $RefsResolve.bundle(this.pathToIndex, {
    //     //     dereference: {
    //     //         circular: true,
    //     //     },
    //     // })) as ISchemaObject;

    //     // const fileContent = await fs.promises.readFile(this.pathToIndex, 'utf8');
    //     // const json = yaml.parse(fileContent);

    //     // // Инициализируем SwaggerClient
    //     // const resolvedSpec = await SwaggerClient.resolve({
    //     //     spec: json,
    //     //     baseDoc: path.resolve('./cache/api-docs/v1/'), // Базовый путь для разрешения относительных $ref
    //     // });
    //     // console.log(resolvedSpec);

    //     // const resolvedSchema = resolvedSpec.spec;

    //     // const resolvedCiclesSchema = this.resolveCicles(resolvedSchema);

    //     // const yamlString = yaml.stringify(resolvedCiclesSchema);
    //     // await fs.writeFileSync('./cache/api-docs/v1/resolved-schema.yaml', yamlString);

    //     // setTimeout(async () => {
    //     //     try {
    //     //         const resolvedTwoSchema = (await $RefsResolve.dereference('./cache/api-docs/v1/resolved-schema.yaml', {
    //     //             dereference: {
    //     //                 circular: 'ignore',
    //     //             },
    //     //         })) as ISchemaObject;

    //     //         console.log('resolvedTwoSchema=', resolvedTwoSchema);
    //     //     } catch (error) {
    //     //         console.error(error);
    //     //     }
    //     // }, 5000);

    //     return schema;
    // };

    private getObjectFromMap(map: Map<string, any>) {
        const arr = [...map.values()];

        return arr.reduce<any>((acc, item) => {
            return { ...acc, ...item };
        }, {});
    }

    private getComponentObj = (component: any, name: string) => {
        if (component.in) {
            return {
                type: 'parameter',
                path: `#/components/parameters/${name}`,
            };
        }

        if (component.content) {
            return {
                type: 'reponse',
                path: `#/components/responses/${name}`,
            };
        }

        if (component.type || component.allOf || component.oneOf || component.anyOf || component.$ref) {
            return {
                type: 'schema',
                path: `#/components/schemas/${name}`,
            };
        }

        return null;
    };

    private setComponentToMap = (component: any, type: string, componentPath: string) => {
        if (type === 'parameter') this.componentParameters.set(componentPath, component);
        if (type === 'schema') this.componentSchemas.set(componentPath, component);
        if (type === 'responses') this.componentResponses.set(componentPath, component);
    };

    private getComponentForIndex = (pathToNode: string) => {
        if (this.componentParameters.has(pathToNode)) {
            const obj = this.componentParameters.get(pathToNode);

            return {
                component: obj,
                path: `#/components/parameters/${Object.keys(obj)[0]}`,
            };
        }

        if (this.componentSchemas.has(pathToNode)) {
            const obj = this.componentSchemas.get(pathToNode);

            return {
                component: obj,
                path: `#/components/schema/${Object.keys(obj)[0]}`,
            };
        }

        if (this.componentResponses.has(pathToNode)) {
            const obj = this.componentResponses.get(pathToNode);

            return {
                component: obj,
                path: `#/components/responses/${Object.keys(obj)[0]}`,
            };
        }
    };

    private resolveAllIndexPath = (obj: any | any[], originalObj: any): any => {
        const clonedObj = JSON.parse(JSON.stringify(obj)) as any;
        // Если obj не является объектом или равен null/undefined, завершаем рекурсию
        if (!clonedObj || typeof clonedObj !== 'object') {
            return clonedObj;
        }

        // Если obj — массив, обрабатываем каждый элемент рекурсивно
        if (Array.isArray(obj)) {
            return (clonedObj as any[]).map(item => this.resolveAllIndexPath(item, originalObj)) as never as any;
        }

        // Если obj содержит ссылку ($ref), разрешаем её
        const ref = obj.$ref;

        if (ref) {
            const [, node] = ref.split('#/');
            const resolvedObj = originalObj[node];

            if (resolvedObj) {
                // Удаляем $ref и объединяем текущий объект с разрешённым объектом
                delete clonedObj.$ref;
                return { ...clonedObj, ...resolvedObj };
            }
        }

        // Рекурсивно обрабатываем все свойства объекта
        for (const [key, value] of Object.entries(clonedObj)) {
            clonedObj[key] = this.resolveAllIndexPath(value, originalObj);
        }

        return clonedObj;
    };

    private resolveIndexPaths = (paths: any) => {
        return Object.entries(paths).reduce<any>((acc, [p, value]) => {
            let originalObj: any;
            const ref = (value as any).$ref as string | undefined;
            if (ref) {
                const [filePath, node] = ref.split('#/');

                const content = fs.readFileSync(path.join(this.cachedPath, filePath), 'utf8');
                const json: ISchemaObject = yaml.parse(content);

                originalObj = json;
                const findedNode = node ? json[node] : null;
                this.paths.set(p, filePath);

                // TODO: проверка на наличие ключей - методов
                if (findedNode) {
                    acc[p] = findedNode;
                } else if (json.type) {
                    acc[p] = json;
                }
            } else {
                acc[p] = value;
            }

            if (acc[p]) acc[p] = this.resolveAllIndexPath(acc[p], originalObj);
            return acc;
        }, {});
    };

    private resolveItemFromIndexPaths = (pathsObj: any, methodParam?: string) => {
        if (!pathsObj || typeof pathsObj !== 'object') return;
        if (Array.isArray(pathsObj)) for (const p of pathsObj) this.resolveItemFromIndexPaths(p, methodParam);

        for (const [key, value] of Object.entries(pathsObj)) {
            const isUrl = key.includes('/') && key !== 'application/json' && key !== 'multipart/form-data';
            const method = isUrl ? key : methodParam;

            const ref = (value as any).$ref as string | undefined;
            if (ref) {
                if (ref.includes('index.yaml#/')) {
                    const nodePath = ref.split('#/')[1];
                    pathsObj[key].$ref = `#/${nodePath}`;
                    continue;
                }

                const methodPath = method ? this.paths.get(method) : undefined;

                const componentPath = resolvePathSegments(
                    methodPath ? [this.cachedPath, methodPath, ref] : [this.cachedPath, ref]
                );

                const [pathToFile, node] = componentPath.split('#/');
                if (!pathToFile) continue;
                const content = fs.readFileSync(pathToFile, 'utf8');
                const json: ISchemaObject = yaml.parse(content);

                if (node) {
                    const nodeObj = json[node];
                    const componentObj = this.getComponentObj(nodeObj, node);

                    if (componentObj) {
                        pathsObj[key].$ref = componentObj.path;
                        this.setComponentToMap({ [node]: nodeObj }, componentObj.type, componentPath);
                    }
                } else {
                    const file = componentPath.split('/').at(-1);
                    if (!file) continue;
                    const fileName = file.replace('.yaml', '');
                    const serializedFileName = serializeToCamelCase(fileName);

                    const componentObj = this.getComponentObj(json, serializedFileName);

                    if (componentObj) {
                        pathsObj[key].$ref = componentObj.path;
                        this.setComponentToMap({ [serializedFileName]: json }, componentObj.type, componentPath);
                    }
                }
            } else {
                this.resolveItemFromIndexPaths(value, method);
            }
        }
    };

    private searchComponents = (schema: any, relativePath: string) => {
        // console.log(schema);
        if (!schema || typeof schema !== 'object') return;

        if (Array.isArray(schema)) {
            for (const s of schema) {
                this.searchComponents(s, relativePath);
            }

            return;
        }

        for (const [key, value] of Object.entries(schema)) {
            if (!value) continue;
            if (Array.isArray(value)) {
                this.searchComponents(value, relativePath);
                continue;
            }

            let ref: string | undefined;
            let schemaLink: any;
            if (key === '$ref') {
                ref = value as string;
                schemaLink = schema;
            } else {
                ref = (value as any).$ref as string | undefined;
                schemaLink = schema[key];
            }

            if (ref?.startsWith('#/components')) {
                continue;
            }

            if (ref) {
                const pathFileWithNode = path.join(resolvePathSegments([relativePath, ref]));
                const [pathFile, node] = pathFileWithNode.split('#/');
                let currentPathFile = pathFile;
                if (!currentPathFile) {
                    currentPathFile = relativePath;
                }

                const savedPath = this.getComponentForIndex(pathFileWithNode);

                if (savedPath?.component) {
                    schemaLink.$ref = savedPath.path;
                    this.searchComponents(savedPath.component, currentPathFile);
                    continue;
                }

                const content = fs.readFileSync(currentPathFile, 'utf8');
                const json: ISchemaObject = yaml.parse(content);

                if (node) {
                    const nodeObj = json[node];
                    const componentObj = this.getComponentObj(nodeObj, node);

                    if (componentObj) {
                        schemaLink.$ref = componentObj.path;
                        const obj = { [node]: nodeObj };
                        this.setComponentToMap(obj, componentObj.type, pathFileWithNode);

                        this.searchComponents(obj, currentPathFile);
                    }
                } else {
                    const file = currentPathFile.split('/').at(-1);
                    if (!file) continue;
                    const fileName = file.replace('.yaml', '');
                    const serializedFileName = serializeToCamelCase(fileName);

                    const componentObj = this.getComponentObj(json, serializedFileName);

                    if (componentObj) {
                        schemaLink.$ref = componentObj.path;
                        const obj = { [serializedFileName]: json };
                        this.setComponentToMap(obj, componentObj.type, pathFileWithNode);
                        this.searchComponents(obj, currentPathFile);
                    }
                }

                continue;
            }

            this.searchComponents(value, relativePath);
        }
    };

    private resolveMap = (mapSchemas: Map<string, any>) => {
        const arr = [...mapSchemas.keys()];

        for (const key of arr) {
            const value = mapSchemas.get(key);
            const [pathFile] = key.split('#/');
            this.searchComponents(value, pathFile);
        }
    };

    public resolve = async () => {
        const indexFileContent = fs.readFileSync(this.pathToIndex, 'utf8');
        const jsonIndexFile = yaml.parse(indexFileContent);

        const paths = jsonIndexFile.paths;

        // Первый резолв
        const resolvedPaths = this.resolveIndexPaths(paths);
        // Повторно обходим поинты в схеме для того чтобы зарезолвить локальные пути и сделать локальные ссылки на componnents
        this.resolveItemFromIndexPaths(resolvedPaths);
        this.paths.clear();

        const resolvedJsonindexFile = { ...jsonIndexFile, paths: resolvedPaths };
        this.searchComponents(resolvedJsonindexFile, this.cachedPath);
        this.resolveMap(this.componentResponses);
        this.resolveMap(this.componentParameters);
        this.resolveMap(this.componentSchemas);

        const totalJson = {
            ...resolvedJsonindexFile,
            components: {
                ...resolvedJsonindexFile.components,
                responses: {
                    ...resolvedJsonindexFile.components.responses,
                    ...this.getObjectFromMap(this.componentResponses),
                },
                parameters: {
                    ...resolvedJsonindexFile.components.parameters,
                    ...this.getObjectFromMap(this.componentParameters),
                },
                schemas: {
                    ...resolvedJsonindexFile.components.schemas,
                    ...this.getObjectFromMap(this.componentSchemas),
                },
            },
        };
        return totalJson;
    };
}
