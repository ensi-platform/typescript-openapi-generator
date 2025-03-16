import { pascal } from 'case';
import { mkdir, writeFile } from 'node:fs/promises';
import { MediaTypeObject, ReferenceObject, ResponseObject } from 'openapi-typescript';
import prettier from 'prettier';

import { serializeTypeString } from '../../common/serializeType';
import { IParsedSchema, IParsedSchemaItem } from '../OpenApiSchemaParser/types';
import { SchemaObjectParser } from '../SchemaObjectParser';
import { SchemaObjectType } from '../SchemaObjectParser/types';
import { getFolderName, getTypeName } from './helpers';

export class TypesGenerator {
    private schema: IParsedSchema;
    private jsonSchemaParser = new SchemaObjectParser();

    constructor(schema: IParsedSchema) {
        this.schema = schema;
    }

    getTypeSchemaOperationItem({
        typeName,
        description,
        content,
    }: {
        typeName: string;
        description: string;
        content: ReferenceObject | MediaTypeObject;
    }): string {
        const type = Object.keys(content);

        if (type.includes('multipart/form-data')) {
            return serializeTypeString({
                description,
                content: `export type ${typeName} = FormData;`,
                example: '',
                type: '',
            });
        }

        if (type.includes('application/octet-stream')) {
            return serializeTypeString({
                description,
                content: `export type ${typeName} = string;`,
                example: '',
                type: '',
            });
        }

        if (type.includes('application/json')) {
            const schema = (
                (content as { [contentType: string]: MediaTypeObject | ReferenceObject })['application/json'] as {
                    schema: SchemaObjectType;
                }
            )?.schema;
            if (schema) return this.jsonSchemaParser.parse({ name: typeName, description, schema });
            return '';
        }

        return '';
    }

    getTypeSchemaOperationParamsItem({ ref, method, path, operationData }: IParsedSchemaItem): string {
        if (!operationData.parameters) return '';
        // if (Array.isArray(operationData.parameters)) {
        //     operationData.parameters.red
        // }
        return Object.keys(operationData.parameters).reduce((acc, code) => {
            const typeName = getTypeName({ ref, path, postFix: pascal(method) + pascal(code), type: 'response' });
            const value = operationData.responses![code] as ResponseObject;

            if (!value.content) return acc;

            const description = value.description || '';
            const responseString = this.getTypeSchemaOperationItem({ typeName, description, content: value.content });

            return acc + '\n' + responseString;
        }, '');
    }

    getTypeSchemaOperationResponseItem({ ref, method, path, operationData }: IParsedSchemaItem): string {
        if (!operationData.responses) return '';

        return Object.keys(operationData.responses).reduce((acc, code) => {
            const typeName = getTypeName({ ref, path, postFix: pascal(method) + pascal(code), type: 'response' });
            const value = operationData.responses![code] as ResponseObject;

            if (!value.content) return acc;

            const description = value.description || '';
            const responseString = this.getTypeSchemaOperationItem({ typeName, description, content: value.content });

            return acc + '\n' + responseString;
        }, '');
    }

    getTypeSchemaOperationRequestItem({ ref, method, path, operationData }: IParsedSchemaItem): string {
        if (!operationData.requestBody?.content) return '';

        const typeName = getTypeName({ ref, path, postFix: method, type: 'request' });

        const description = operationData.summary || operationData.description || '';
        return this.getTypeSchemaOperationItem({ typeName, description, content: operationData.requestBody?.content });
    }

    async parse() {
        const types = this.schema.reduce((acc, schema) => {
            const folder = getFolderName(schema[0].path);

            const requestContentArr = schema.reduce<string[]>((requestAcc, item) => {
                const requestItem = this.getTypeSchemaOperationRequestItem(item);
                if (requestItem) requestAcc.push(requestItem);

                return requestAcc;
            }, []);

            const resopnseContentArr = schema.reduce<string[]>((responseAcc, item) => {
                const requestItem = this.getTypeSchemaOperationResponseItem(item);
                if (requestItem) responseAcc.push(requestItem);

                return responseAcc;
            }, []);

            const content = [...requestContentArr, ...resopnseContentArr].join('\n');

            if (content) {
                acc[folder] = acc[folder] ? acc[folder] + content : content;
            }

            return acc;
        }, {} as Record<string, string>);

        const promises = Object.entries(types).map(async ([folder, content]) => {
            await mkdir(folder, { recursive: true });
            const parsedContent = await prettier.format(content, {
                parser: 'babel-ts',
            });
            return writeFile(`${folder}/index.ts`, parsedContent, { flag: 'wx' });
        });

        await Promise.all(promises);
    }
}
