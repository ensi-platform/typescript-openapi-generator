import { $Refs, FileInfo, JSONSchema } from '@stoplight/json-schema-ref-parser';
import { OpenAPIV3 } from 'openapi-types';
import { OpenAPI3 } from 'openapi-typescript';

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
    original: OpenAPIV3.OperationObject;
    path: string;
    pathSubstituted: string;
    pathVariables: string[];
    queryParams: OpenAPIV3.ParameterObject[];
    method: string;
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

export type ParsedSchema = {
    refs: $Refs;
    derefedSchema: OpenAPIV3.Document;
    unrefedSchema: OpenAPIV3.Document;
    operations: AugmentedOperation[];
    derefedPathGroupedOps: Record<string, AugmentedOperation[]>;
    groups: string[];
};
