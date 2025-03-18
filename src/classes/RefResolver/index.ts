import fs from 'node:fs';
import path from 'node:path';
import { OpenAPI3, PathsObject, ReferenceObject, SchemaObject } from 'openapi-typescript';
import yaml from 'yaml';

import { cleanPathFromTheFile, resolvePathSegments, serializeToCamelCase } from '../../common/helpers';

type SchemaObjectValueType =
    | ReferenceObject
    | ReferenceObject[]
    | SchemaObject
    | SchemaObject[]
    | string
    | string[]
    | boolean
    | number
    | number[];
type ValidSchemaObjectType = string[] | ReferenceObject | ReferenceObject[] | SchemaObject | SchemaObject[] | number[];

const getNestedValue = (obj: any, objPath: string[]) => {
    const target = objPath.reduce<any>((acc, key) => acc[key] || {}, obj);

    return target;
};

export class RefResolver {
    private pathToIndex: string;
    private cachedPath: string;

    private paths = new Map<string, string>();

    private componentSchemas = new Map<string, any>();
    private componentResponses = new Map<string, any>();
    private componentParameters = new Map<string, any>();

    private duplicateMap = new Map<string, { name: string; newName: string }>();

    constructor(
        pathToIndex: string,
        duplicateMap: Map<
            string,
            {
                name: string;
                newName: string;
            }
        >
    ) {
        this.pathToIndex = pathToIndex;
        this.cachedPath = cleanPathFromTheFile(pathToIndex);
        this.duplicateMap = duplicateMap;
    }

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

        if (Object.keys(component).length > 0) {
            return {
                type: 'schema',
                path: `#/components/schemas/${name}`,
            };
        }
        // if (component.type || component.allOf || component.oneOf || component.anyOf || component.$ref) {
        //     return {
        //         type: 'schema',
        //         path: `#/components/schemas/${name}`,
        //     };
        // }

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
                path: `#/components/schemas/${Object.keys(obj)[0]}`,
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

    private getValidSchemaObject = (value: SchemaObjectValueType): ValidSchemaObjectType | undefined => {
        if (!value) return;
        if (typeof value !== 'object') return;
        return value;
    };

    private getFile = (filePath: string) => {
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            return yaml.parse(content) as SchemaObject;
        } catch (error) {
            console.error(`Error reading file: ${filePath} - ${error}`);
            return null;
        }
    };

    private resolveReferenceObject = (obj: SchemaObjectValueType, relativePath: string) => {
        const ref = (obj as ReferenceObject).$ref;

        if (ref) {
            const referenceObj = obj as ReferenceObject;

            const filePathWithNode = path.join(resolvePathSegments([relativePath, ref]));

            const [filePath, node] = filePathWithNode.split('#/');

            if (filePathWithNode.includes(this.pathToIndex)) {
                referenceObj.$ref = `#/${node}`;
                return;
            }

            const savedPath = this.getComponentForIndex(filePathWithNode);

            if (savedPath?.component) {
                referenceObj.$ref = savedPath.path;
                return;
            }

            const response = this.getFile(filePath);
            if (!response) {
                return;
            }

            const newNodeName = this.duplicateMap.get(filePathWithNode)?.newName;

            if (node) {
                const isCompondNode = node.includes('/');
                const nodeObj = (
                    isCompondNode ? getNestedValue(response, node.split('/')) : (response as any)[node]
                ) as SchemaObjectValueType;
                const nodeName = newNodeName || ((isCompondNode ? node.split('/').at(-1) : node) as string);

                const componentObj = this.getComponentObj(nodeObj, nodeName);

                if (componentObj) {
                    referenceObj.$ref = componentObj.path;
                    const objFormMap = { [nodeName]: nodeObj };
                    this.setComponentToMap(objFormMap, componentObj.type, filePathWithNode);

                    this.resolveSchemaAnyObject(nodeObj, filePath);
                }
            } else {
                const file = filePath.split('/').at(-1);
                if (!file) return;
                const fileName = file.replace('.yaml', '');
                const serializedFileName = newNodeName || serializeToCamelCase(fileName);

                const componentObj = this.getComponentObj(response, serializedFileName);

                if (componentObj) {
                    referenceObj.$ref = componentObj.path;
                    const objFormMap = { [serializedFileName]: response };
                    this.setComponentToMap(objFormMap, componentObj.type, filePathWithNode);
                    this.resolveSchemaAnyObject(response, filePath);
                }
            }

            return;
        }

        this.resolveSchemaAnyObject(obj, relativePath);
    };

    private resolveSchemaAnyObject = (obj: SchemaObjectValueType, relativePath: string) => {
        if ((obj as ReferenceObject).$ref) {
            this.resolveReferenceObject(obj, relativePath);
            return;
        }

        const keys = Object.keys(obj);
        for (const key of keys) {
            const value = (obj as any)[key] as SchemaObjectValueType;

            const validValue = this.getValidSchemaObject(value);
            if (!validValue) continue;

            if (Array.isArray(validValue)) {
                for (const v of validValue) {
                    const validV = this.getValidSchemaObject(v);
                    if (!validV) continue;
                    if (Array.isArray(validV)) continue;
                    this.resolveReferenceObject(validV, relativePath);
                }

                continue;
            }

            this.resolveReferenceObject(validValue, relativePath);
        }
    };

    private resolveSchemaPaths(obj: PathsObject) {
        const endpoints = Object.keys(obj);

        for (const endpoint of endpoints) {
            const value = obj[endpoint] as ReferenceObject;
            if (!value.$ref) continue;

            const ref = value.$ref;

            const filePathWithNode = path.join(resolvePathSegments([this.cachedPath, ref]));

            const [filePath, node] = filePathWithNode.split('#/');

            const response = this.getFile(filePath);
            if (!response) continue;

            this.paths.set(endpoint, filePath);

            if (node) {
                const isCompondNode = node.includes('/');
                const nodeObj = (
                    isCompondNode ? getNestedValue(response, node.split('/')) : (response as any)[node]
                ) as SchemaObjectValueType;

                delete (obj[endpoint] as any).$ref;
                if (typeof nodeObj === 'object') obj[endpoint] = { ...obj[endpoint], ...nodeObj };
            } else {
                delete (obj[endpoint] as any).$ref;
                obj[endpoint] = { ...obj[endpoint], ...response };
            }
        }
    }

    private resolveObjectsInSchemaPaths(obj: PathsObject) {
        const endpoints = Object.keys(obj);

        for (const endpoint of endpoints) {
            const relativePath = this.paths.get(endpoint);
            if (!relativePath) continue;
            const value = obj[endpoint];

            this.resolveSchemaAnyObject(value, relativePath);
        }
    }

    public resolve = async () => {
        const indexFileContent = fs.readFileSync(this.pathToIndex, 'utf8');
        const jsonIndexFile: OpenAPI3 = yaml.parse(indexFileContent);
        const { paths, ...otherJsonFile } = jsonIndexFile;

        if (paths) {
            this.resolveSchemaPaths(paths);
            this.resolveObjectsInSchemaPaths(paths);
        }

        this.resolveSchemaAnyObject(otherJsonFile, this.cachedPath);

        const totalJson = {
            ...jsonIndexFile,
            components: {
                ...jsonIndexFile.components,
                responses: {
                    ...jsonIndexFile.components?.responses,
                    ...this.getObjectFromMap(this.componentResponses),
                },
                parameters: {
                    ...jsonIndexFile.components?.parameters,
                    ...this.getObjectFromMap(this.componentParameters),
                },
                schemas: {
                    ...jsonIndexFile.components?.schemas,
                    ...this.getObjectFromMap(this.componentSchemas),
                },
            },
        };

        return totalJson;
    };
}
