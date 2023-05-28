import { $Refs, FileInfo, JSONSchema } from '@stoplight/json-schema-ref-parser';
import { OpenAPIV3 } from 'openapi-types';
import { OpenAPI3, OperationObject } from 'openapi-typescript';

import { AugmentedRequest, AugmentedResponse } from '../typegen/types';

export interface ISchemaLoader {
    loadIndex: () => Promise<OpenAPI3>;
    readSubfile: (file: FileInfo, cb: (error: any, result: any) => any) => Promise<string>;

    getType: () => 'file' | 'http';
}

export interface ImportData {
    from: string;
    name: string;
    isDefault?: boolean; // default false
}

export type AugmentedOperation = {
    original: OperationObject;
    path: string;
    pathWithVariables: string;
    method: string;
    group: string;
    isMutation: boolean;

    hookName: string;
    queryKey: string | undefined;

    responses: AugmentedResponse[];
    request: AugmentedRequest | null;

    isFileUpload: boolean;
    hasPathParams: boolean;

    invalidatees: AugmentedOperation[];
};

export type OverridePolicy = 'override' | 'skip'; // TODO: augment

export interface RefSchemaData {
    group: string;
    name: string;
    originalPath: string;
    savedPath: string;
    importPath: string;
    schema: JSONSchema;
}

export type ParsedSchema = {
    refs: $Refs;
    derefedSchema: OpenAPIV3.Document;
    unrefedSchema: OpenAPIV3.Document;
    operations: AugmentedOperation[];
    derefedPathGroupedOps: Record<string, AugmentedOperation[]>;
    groups: string[];
};
