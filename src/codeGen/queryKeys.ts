import { OpenAPIV3 } from 'openapi-types';
import { SourceFile, VariableDeclarationKind } from 'ts-morph';

import { SEARCH_OPCODES, parseOpcode } from '../common/helpers';
import { AugmentedOperation } from '../common/types';

type OperationId = string;
export type QueryKeysSchema = {
    searchOperations: AugmentedOperation[];
    items: Record<OperationId, AugmentedOperation & { hasPathParams: boolean; hasBody: boolean }>;
};

export function generateQueryKeysSchema(flatOperations: AugmentedOperation[]): QueryKeysSchema {
    const searchOperations = flatOperations.filter(e => SEARCH_OPCODES.includes(parseOpcode(e)));

    const items = searchOperations.reduce((acc, searchOperation) => {
        const pathParameters =
            (searchOperation.original.parameters as OpenAPIV3.ParameterObject[])?.filter(e => e.in === 'path') || [];

        if (pathParameters.length > 0 && searchOperation.original.requestBody) {
            // throw new Error(
            //     `[group=${group}] Unsupported route definition: path parameters + requestBody.
            //     Please move your path parameters (${JSON.stringify(pathParameters)}) into request body`
            // );
        }

        if (pathParameters.length > 1) {
            throw new Error('Unsupported multiple path parameters.');
        }

        acc[searchOperation.original.operationId!] = {
            ...searchOperation,
            hasPathParams: pathParameters.length > 0,
            hasBody: Boolean(searchOperation.original.requestBody),
        };

        return acc;
    }, {} as QueryKeysSchema['items']);

    return {
        items,
        searchOperations,
    };
}

export function generateQueryKeysConstant(schema: QueryKeysSchema, sourceFile: SourceFile) {
    sourceFile.addVariableStatement({
        isExported: true,
        declarationKind: VariableDeclarationKind.Const,
        declarations: [
            {
                name: 'QueryKeys',
                initializer: writer => {
                    const entries = Object.entries(schema.items);
                    writer.writeLine('{');

                    for (const [key, operation] of entries) {
                        const vars = operation.pathVariables;
                        const varsTypes = vars.map(variable => `${variable}?: number | string`).join(',');

                        if (operation.hasBody && operation.hasPathParams) {
                            writer.writeLine(
                                `${key}: (${varsTypes}, data?: any) => (${vars.join('||')} || data) ? ['${
                                    operation.queryKey
                                }', ${vars.join(',')}, data] : ['${operation.queryKey}'],`
                            );
                        } else if (operation.hasPathParams) {
                            writer.writeLine(
                                `${key}: (${varsTypes}) => (${vars.join('||')}) ? ['${operation.queryKey}', ${vars.join(
                                    ','
                                )}] : ['${operation.queryKey}'],`
                            );
                        } else if (operation.hasBody) {
                            writer.writeLine(
                                `${key}: (data?: any) => data ? ['${operation.queryKey}', data] : ['${operation.queryKey}'],`
                            );
                        } else {
                            writer.writeLine(`${key}: () => ['${operation.queryKey}'],`);
                        }
                    }

                    writer.writeLine('}');
                },
            },
        ],
    });
}

export function createCallQueryKey(operation: AugmentedOperation, type: 'query' | 'mutation') {
    console.log(type, operation);
    const isHavePathParams = operation.hasPathParams;

    const keyPrefix = type === 'mutation' ? 'data?.' : '';
    const keyParts = operation.pathVariables.map(e => `${keyPrefix}${e}`).join(',');

    // Always invalidate search of multiple entities.
    if (type === 'mutation' && operation.path.endsWith(':search'))
        return `QueryKeys.${operation.original.operationId}()`;

    if (operation.original.requestBody && isHavePathParams) {
        return `QueryKeys.${operation.original.operationId}(${keyParts}, data)`;
    }

    if (isHavePathParams) {
        return `QueryKeys.${operation.original.operationId}(${keyParts})`;
    }

    if (operation.original.requestBody) {
        return `QueryKeys.${operation.original.operationId}(data)`;
    }

    return `QueryKeys.${operation.original.operationId}()`;
}
