import { JSONSchema } from '@stoplight/json-schema-ref-parser';
import { OpenAPIV3 } from 'openapi-types';

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

