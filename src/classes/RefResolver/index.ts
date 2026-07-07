import fs from 'node:fs';
import path from 'node:path';
import {
    OpenAPI3,
    ParameterObject,
    PathsObject,
    ReferenceObject,
    ResponseObject,
    SchemaObject,
} from 'openapi-typescript';
import yaml from 'yaml';

import { NODE_SEPARATOR } from '../../common/constants';
import { getFile } from '../../common/file';
import { getNestedValue, resolvePathSegments, serializeNodeName } from '../../common/helpers';
import { SchemaObjectValueType, ValidSchemaObjectType } from '../../common/types';

enum ComponentTypeEnum {
    RESPONSES = 'responses',
    SCHEMAS = 'schemas',
    PARAMETERS = 'parameters',
}

type SchemaComponentType = ParameterObject | ResponseObject | SchemaObject;

export class RefResolver {
    private pathToIndex: string;

    private paths = new Map<string, string>();

    private componentSchemas = new Map<string, SchemaComponentType>();

    private componentResponses = new Map<string, SchemaComponentType>();

    private componentParameters = new Map<string, SchemaComponentType>();

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
        this.duplicateMap = duplicateMap;
    }

    private getObjectFromMap(map: Map<string, any>) {
        const array = [...map.values()];

        return array.reduce<any>((accumulator, item) => ({ ...accumulator, ...item }), {});
    }

    private getComponentObj = (component: SchemaComponentType, name: string) => {
        let type: ComponentTypeEnum | undefined;

        if ((component as ParameterObject).in) {
            type = ComponentTypeEnum.PARAMETERS;
        } else if ((component as ResponseObject).content) {
            type = ComponentTypeEnum.RESPONSES;
        } else if (Object.keys(component).length > 0) {
            type = ComponentTypeEnum.SCHEMAS;
        }

        if (type) {
            return {
                type,
                path: `${NODE_SEPARATOR}components/${type}/${name}`,
            };
        }

        return null;
    };

    private setComponentToMap = (component: SchemaComponentType, type: string, componentPath: string) => {
        if (type === ComponentTypeEnum.PARAMETERS) this.componentParameters.set(componentPath, component);
        if (type === ComponentTypeEnum.SCHEMAS) this.componentSchemas.set(componentPath, component);
        if (type === ComponentTypeEnum.RESPONSES) this.componentResponses.set(componentPath, component);
    };

    private getComponentForIndex = (pathToNode: string) => {
        let map: Map<string, SchemaComponentType> | undefined;
        let type: ComponentTypeEnum | undefined;

        if (this.componentParameters.has(pathToNode)) {
            map = this.componentParameters;
            type = ComponentTypeEnum.PARAMETERS;
        }

        if (this.componentSchemas.has(pathToNode)) {
            map = this.componentSchemas;
            type = ComponentTypeEnum.SCHEMAS;
        }

        if (this.componentResponses.has(pathToNode)) {
            map = this.componentResponses;
            type = ComponentTypeEnum.RESPONSES;
        }

        if (map && type) {
            const object = map.get(pathToNode)!;
            return {
                component: object,
                path: `${NODE_SEPARATOR}components/${type}/${Object.keys(object)[0]}`,
            };
        }
    };

    private getValidSchemaObject = (value: SchemaObjectValueType): ValidSchemaObjectType | undefined => {
        if (!value) return;
        if (typeof value !== 'object') return;
        return value;
    };

    private setSchemaObject({
        referenceObj,
        componentObj,
        obj,
        name,
        filePath,
        filePathWithNode,
    }: {
        referenceObj: ReferenceObject;
        componentObj: { type: ComponentTypeEnum; path: string };
        name: string;
        filePath: string;
        filePathWithNode: string;
        obj: SchemaObjectValueType;
    }) {
        referenceObj.$ref = componentObj.path;
        const objectFormMap = { [name]: obj };
        this.setComponentToMap(objectFormMap as never as ParameterObject, componentObj.type, filePathWithNode);
        this.resolveSchemaAnyObject(obj, filePath);
    }

    private resolveReferenceObject = (object: SchemaObjectValueType, relativePath: string) => {
        const reference = (object as ReferenceObject).$ref;

        if (reference) {
            const referenceObject = object as ReferenceObject;

            const filePathWithNode = path.join(resolvePathSegments([relativePath, reference]));

            const [filePath, node] = filePathWithNode.split(NODE_SEPARATOR);

            if (filePathWithNode.includes(this.pathToIndex)) {
                referenceObject.$ref = `${NODE_SEPARATOR}${node}`;
                return;
            }

            const savedPath = this.getComponentForIndex(filePathWithNode);

            if (savedPath?.component) {
                referenceObject.$ref = savedPath.path;
                return;
            }

            const response = getFile(filePath);
            if (!response) {
                return;
            }

            const newNodeName = this.duplicateMap.get(filePathWithNode)?.newName;

            if (node) {
                const isCompondNode = node.includes('/');
                const nodeObject = (
                    isCompondNode
                        ? getNestedValue(response as unknown as Record<string, unknown>, node.split('/'))
                        : (response as any)[node]
                ) as SchemaObjectValueType;
                const nodeName = newNodeName || ((isCompondNode ? node.split('/').at(-1) : node) as string);

                const componentObject = this.getComponentObj(nodeObject as unknown as ParameterObject, nodeName);

                if (componentObject) {
                    this.setSchemaObject({
                        referenceObj: referenceObject,
                        componentObj: componentObject,
                        name: nodeName,
                        filePath,
                        filePathWithNode,
                        obj: nodeObject,
                    });
                }
            } else {
                const serializedFileName = newNodeName || serializeNodeName(filePath);

                if (!serializedFileName) return;

                const componentObject = this.getComponentObj(response, serializedFileName);

                if (componentObject) {
                    this.setSchemaObject({
                        referenceObj: referenceObject,
                        componentObj: componentObject,
                        name: serializedFileName,
                        filePath,
                        filePathWithNode,
                        obj: response,
                    });
                }
            }

            return;
        }

        this.resolveSchemaAnyObject(object, relativePath);
    };

    private resolveSchemaAnyObject = (object: SchemaObjectValueType, relativePath: string) => {
        if ((object as ReferenceObject).$ref) {
            this.resolveReferenceObject(object, relativePath);
            return;
        }

        const keys = Object.keys(object);
        for (const key of keys) {
            const value = (object as any)[key] as SchemaObjectValueType;

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

    private resolveSchemaPaths(object: PathsObject) {
        const endpoints = Object.keys(object);

        for (const endpoint of endpoints) {
            const value = object[endpoint] as ReferenceObject;
            if (!value.$ref) continue;

            const reference = value.$ref;

            const filePathWithNode = path.join(resolvePathSegments([this.pathToIndex, reference]));

            const [filePath, node] = filePathWithNode.split(NODE_SEPARATOR);

            const response = getFile(filePath);
            if (!response) continue;

            this.paths.set(endpoint, filePath);

            if (node) {
                const isCompondNode = node.includes('/');
                const nodeObject = (
                    isCompondNode
                        ? getNestedValue(response as unknown as Record<string, unknown>, node.split('/'))
                        : (response as any)[node]
                ) as SchemaObjectValueType;

                delete (object[endpoint] as any).$ref;
                if (typeof nodeObject === 'object') object[endpoint] = { ...object[endpoint], ...nodeObject };
            } else {
                delete (object[endpoint] as any).$ref;
                object[endpoint] = { ...object[endpoint], ...response };
            }
        }
    }

    private resolveObjectsInSchemaPaths(object: PathsObject) {
        const endpoints = Object.keys(object);

        for (const endpoint of endpoints) {
            const relativePath = this.paths.get(endpoint);
            if (!relativePath) continue;
            const value = object[endpoint];

            this.resolveSchemaAnyObject(value as SchemaObjectValueType, relativePath);
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

        this.resolveSchemaAnyObject(otherJsonFile as unknown as SchemaObjectValueType, this.pathToIndex);

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
