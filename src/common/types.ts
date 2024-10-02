import { JSONSchema } from '@stoplight/json-schema-ref-parser';
import { OpenAPIV3 } from 'openapi-types';
import { PathItemObject } from 'openapi-typescript';

import { HttpMethod } from './helpers';

export interface ImportData {
    from: string;
    name: string;
    isDefault?: boolean; // default false
}

export type AugmentedOperation = {
    parentDescription: string | null;

    original: OpenAPIV3.OperationObject;
    originalPath: string;

    /**
     * Папка где будет лежать метод, и типы
     */
    storePath: string;

    pathSubstituted: string;
    pathVariables: string[];
    queryParams: OpenAPIV3.ParameterObject[];
    method: HttpMethod;
    group: string;
    isMutation: boolean;

    hookName: string;
    queryKey: string | undefined;

    isFileUpload: boolean;
    hasPathParams: boolean;

    invalidationTargets: AugmentedOperation[];
};

export type OverridePolicy = 'override' | 'skip';

export interface RefSchemaData {
    group: string;
    name: string;
    originalPath: string;
    savedPath: string;
    importPath: string;
    schema: JSONSchema;
}

export type OperationsToPathsFn = (operations: AugmentedOperation[]) => Record<string, AugmentedOperation[]>;

export type ICommonRefObjectItem = PathItemObject;

// PathItemObject | ReferenceObject | SchemaObject;
