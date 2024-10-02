import { mkdir, writeFile } from 'node:fs/promises';

import { IParsedSchema, IParsedSchemaItem } from '../OpenApiSchemaParser/types';
import { getFolderName, getTypeName } from './helpers';
import { ITypeObject } from './types';

export class TypesGenerator {
    private schema: IParsedSchema;

    constructor(schema: IParsedSchema) {
        this.schema = schema;
    }

    getTypeSchemaOperationRequestItem({ ref, method, path, operationData }: IParsedSchemaItem): ITypeObject | null {
        if (!operationData.requestBody?.content) return null;
        // генерируем название типа
        const typeName = getTypeName({ ref, path, method, type: 'request' });

        const description = operationData.summary || operationData.description || operationData.description || '';
        const type = Object.keys(operationData.requestBody.content);
        if (type.includes('multipart/form-data')) {
            return {
                definition: {
                    description: `/**\n* ${description}\n **/\n`,
                    code: `export type ${typeName} = FormData;`,
                },
                name: typeName,
                method,
                type: 'object',
            };
        }

        if (type.includes('application/octet-stream')) {
            return {
                definition: {
                    description: `/**\n* ${description}\n **/\n`,
                    code: `export type ${typeName} = string;`,
                },
                name: typeName,
                method,
                type: 'object',
            };
        }

        return {
            definition: {
                description: `/**\n* ${description}\n **/\n`,
                code: `export interface ${typeName} {}`,
            },
            name: typeName,
            method,
            type: 'object',
        };
    }

    async parse() {
        const types = this.schema.reduce((acc, schema) => {
            const folder = getFolderName(schema[0].path);

            const requestDataArr = schema.reduce<ITypeObject[]>((requestAcc, item) => {
                const requestItem = this.getTypeSchemaOperationRequestItem(item);
                if (requestItem) requestAcc.push(requestItem);

                return requestAcc;
            }, []);

            const content = requestDataArr.reduce((contentAcc, item) => {
                if (item.definition.code) return contentAcc + item.definition.description + item.definition.code + '\n';

                return contentAcc;
            }, '');

            if (content) {
                acc[folder] = acc[folder] ? acc[folder] + content : content;
            }

            return acc;
        }, {} as Record<string, string>);

        const promises = Object.entries(types).map(async ([folder, content]) => {
            await mkdir(folder, { recursive: true });
            return writeFile(`${folder}/index.ts`, content, { flag: 'wx' });
        });

        await Promise.all(promises);
    }
}
