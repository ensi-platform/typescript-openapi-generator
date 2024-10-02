import { OperationObject, RequestBodyObject } from 'openapi-typescript';

export interface IParsedSchemaItem {
    path: string;
    apiUrls: string[];
    ref: string;
    method: string;
    operationData: OperationObject & {
        requestBody?: RequestBodyObject;
    };
}

export type IParsedSchema = IParsedSchemaItem[][];

export interface IOpenApiSchamaParser {
    parse: () => Promise<IParsedSchema>;
}
