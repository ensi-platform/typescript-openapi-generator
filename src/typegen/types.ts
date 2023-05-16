import { JSONSchema } from '@stoplight/json-schema-ref-parser';

import { RefSchemaData } from '../types';

export interface AugmentedResponse {
    code: string;
    jsonSchema: JSONSchema;
    isRef: boolean;
    refInfo?: RefSchemaData;
    contentType: string;
}

export interface AugmentedRequest {
    jsonSchema: JSONSchema;
    isRef: boolean;
    refInfo?: RefSchemaData;
    isRequired: boolean;
}
