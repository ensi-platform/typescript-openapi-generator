import { JSONSchema } from '@stoplight/json-schema-ref-parser';
import { MediaTypeObject, RequestBodyObject, ResponseObject } from 'openapi-typescript';

import { augmentPathsOperations, groupOperations } from '../helpers';
import { ParsedSchema } from '../types';
import { AugmentedRequest, AugmentedResponse } from './types';

export class TypeParser {
    private schema: ParsedSchema;

    constructor(schema: ParsedSchema) {
        this.schema = schema;
    }

    public parse() {
        const { groups, groupedOperations } = this.schema;

        console.log('[typegen/Parser] groups count:', groups.length);

        for (const g of groups) {
            const ops = groupedOperations[g];

            for (const operation of ops) {
                const responses: AugmentedResponse[] = [];
                const requests: AugmentedRequest[] = [];

                if (operation.original.requestBody) {
                    const { content, required } = operation.original.requestBody as RequestBodyObject;
                    const possibleKeys = ['multipart/form-data', 'application/json'];

                    for (const key of possibleKeys) {
                        if (key in content) {
                            const { schema } = content[key] as MediaTypeObject;
                            const ref = this.schema.objectAccesedMap.get(schema!);

                            requests.push({
                                isRef: !!ref,
                                isRequired: required || false,
                                jsonSchema: schema as JSONSchema,
                                refInfo: ref,
                            });

                            break;
                        }
                    }
                }

                const responseEntries = Object.entries(operation.original.responses || {});
                responseEntries.forEach(([code, obj]) => {
                    const content = (obj as ResponseObject).content!;
                    const possibleKeys = ['application/octet-stream', 'application/json'];

                    for (const key of possibleKeys) {
                        if (key in content) {
                            const { schema } = content[key];
                            const ref = this.schema.objectAccesedMap.get(schema!);

                            responses.push({
                                code,
                                isRef: !!ref,
                                jsonSchema: schema as JSONSchema,
                                refInfo: ref,
                                contentType: key,
                            });

                            break;
                        }
                    }
                });

                operation.responses = responses;
                operation.request = requests.length ? requests[0] : null;
            }
        }
    }
}
