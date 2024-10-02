import { mkdir, writeFile } from 'node:fs/promises';
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

    getTypeSchemaOperationRequestItem({ ref, method, path, operationData }: IParsedSchemaItem): string {
        if (!operationData.requestBody?.content) return '';

        const typeName = getTypeName({ ref, path, method, type: 'request' });

        const description = operationData.summary || operationData.description || operationData.description || '';
        const type = Object.keys(operationData.requestBody.content);
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
            const schema = (operationData.requestBody.content?.['application/json'] as { schema: SchemaObjectType })
                ?.schema;
            if (schema) return this.jsonSchemaParser.parse({ name: typeName, description, schema });
            return '';
        }

        return '';
    }

    async parse() {
        const types = this.schema.reduce((acc, schema) => {
            const folder = getFolderName(schema[0].path);

            const requestContentArr = schema.reduce<string[]>((requestAcc, item) => {
                const requestItem = this.getTypeSchemaOperationRequestItem(item);
                if (requestItem) requestAcc.push(requestItem);

                return requestAcc;
            }, []);

            const content = requestContentArr.reduce((contentAcc, item) => {
                if (item) return contentAcc + item + '\n';

                return contentAcc;
            }, '');

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
            // return writeFile(`${folder}/index.ts`, content, { flag: 'wx' });
            return writeFile(`${folder}/index.ts`, parsedContent, { flag: 'wx' });
        });

        await Promise.all(promises);
    }
}
