import kleur from 'kleur';
import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { OpenAPIV3 } from 'openapi-types';
import prettier from 'prettier';
import { ParameterDeclarationStructure, Project, SourceFile, VariableDeclarationKind } from 'ts-morph';

import { SEARCH_OPCODES, parseOpcode, renderImports } from '../common/helpers';
import { AugmentedOperation, ImportData, OverridePolicy } from '../common/types';
import { ConfigSchema } from '../config/Config';

export class ReactQueryHookGenerator {
    private config: ConfigSchema;
    private overridePolicy: OverridePolicy;

    constructor({ config, overridePolicy }: { config: ConfigSchema; overridePolicy: OverridePolicy }) {
        this.config = config;
        this.overridePolicy = overridePolicy;
    }

    async checkFilePathForGroup(group: string) {
        const folder = join(this.config.output_path, group);
        await mkdir(folder, { recursive: true });
        const filePath = `${folder}/index.ts`;

        const isExisting = existsSync(filePath);

        if (this.overridePolicy === 'skip' && isExisting) {
            console.log(kleur.italic(kleur.bgWhite(kleur.black(group))), 'хуки react-query пропущены как существующие');
            return null;
        }

        return filePath;
    }

    createCallQueryKey(operation: AugmentedOperation, forInvalidation = false) {
        const isHavePathParams = operation.hasPathParams;
        const id = forInvalidation ? 'data?.id' : 'id';

        // Always invalidate search of multiple entities.
        if (forInvalidation && operation.path.endsWith(':search'))
            return `QueryKeys.${operation.original.operationId}()`;

        if (operation.original.requestBody && isHavePathParams) {
            return `QueryKeys.${operation.original.operationId}(${id}, data)`;
        }

        if (isHavePathParams) {
            return `QueryKeys.${operation.original.operationId}(${id})`;
        }

        if (operation.original.requestBody) {
            return `QueryKeys.${operation.original.operationId}(data)`;
        }

        return `QueryKeys.${operation.original.operationId}()`;
    }

    generateQueryKeysConstant(
        sourceFile: SourceFile,
        queryKeys: Record<
            string,
            AugmentedOperation & {
                hasPathParams: boolean;
                hasBody: boolean;
            }
        >
    ) {
        sourceFile.addVariableStatement({
            isExported: true,
            declarationKind: VariableDeclarationKind.Const,
            declarations: [
                {
                    name: 'QueryKeys',
                    initializer: writer => {
                        const entries = Object.entries(queryKeys);
                        writer.writeLine('{');

                        for (const [key, op] of entries) {
                            if (op.hasBody && op.hasPathParams) {
                                writer.writeLine(
                                    `${key}: (id?: number | string, data?: any) => (id || data) ? ['${op.queryKey}', id, data] : ['${op.queryKey}'],`
                                );
                            } else if (op.hasPathParams) {
                                writer.writeLine(
                                    `${key}: (id?: number | string) => id ? ['${op.queryKey}', id] : ['${op.queryKey}'],`
                                );
                            } else if (op.hasBody) {
                                writer.writeLine(
                                    `${key}: (data?: any) => data ? ['${op.queryKey}', data] : ['${op.queryKey}'],`
                                );
                            } else {
                                writer.writeLine(`${key}: () => ['${op.queryKey}'],`);
                            }
                        }

                        writer.writeLine('}');
                    },
                },
            ],
        });
    }

    getApiCallCode(operation: AugmentedOperation, queryParams: OpenAPIV3.ParameterObject[], withData = false) {
        const escapedPath = operation.hasPathParams
            ? `\`${operation.pathWithVariables}\``
            : `'${operation.pathWithVariables}'`;

        const method = operation.method.toLowerCase();
        const args: string[] = [];

        if (withData) {
            if (operation.isFileUpload) {
                args.push('data: data.formData');
            } else {
                args.push('data');
            }
        }

        if (queryParams.length > 0) args.push('params');

        return `apiClient.${method}(${escapedPath}, {${args.join(', ')}})`;
    }

    getQueryParams(operation: AugmentedOperation) {
        return (
            (operation.original.parameters?.filter(e => {
                if (!('in' in e)) return false;
                return e.in === 'query';
            }) as OpenAPIV3.ParameterObject[] | undefined) || []
        );
    }

    addMutation(
        operation: AugmentedOperation,
        searchOperations: AugmentedOperation[],
        imports: ImportData[],
        sourceFile: SourceFile
    ) {
        const queryParams = this.getQueryParams(operation);

        const name = operation.hookName;
        const types = operation.typeNames;

        const dataParamInfo = {
            type: null as string | null,
            definition: '',
            hasRequestBody: Boolean(operation.original.requestBody),
        };

        if (operation.hasPathParams && operation.original.requestBody) {
            dataParamInfo.type = `{ id: number | string } & ${types.request}`;
            dataParamInfo.definition = '({ id, ...data })';
        } else if (operation.hasPathParams) {
            dataParamInfo.type = types.request;
            dataParamInfo.definition = '({ id, })';
        } else if (operation.original.requestBody) {
            dataParamInfo.type = types.request;
            dataParamInfo.definition = '(data)';
        }

        sourceFile.addVariableStatement({
            declarationKind: VariableDeclarationKind.Const,
            docs: operation.original.description ? [operation.original.description] : [],
            declarations: [
                {
                    name: name,
                    initializer: writer => {
                        writer.write('() => {');

                        const opsToInvalidate = searchOperations.length > 0 ? operation.invalidatees : [];

                        if (opsToInvalidate.length > 0) {
                            writer.writeLine('const queryClient = useQueryClient();');

                            imports.push({
                                from: 'react-query',
                                name: 'useQueryClient',
                            });

                            writer.blankLine();
                        }

                        writer.writeLine(`return useMutation<${types.response}, FetchError, ${dataParamInfo.type}>(`);

                        writer.writeLine(
                            `${dataParamInfo.definition} => ${this.getApiCallCode(
                                operation,
                                queryParams,
                                dataParamInfo.hasRequestBody
                            )}`
                        );

                        if (opsToInvalidate.length > 0) {
                            writer.writeLine(',{');
                            writer.writeLine('onSuccess: ({ data }) => {');
                            for (const op of opsToInvalidate) {
                                writer.write('queryClient.invalidateQueries(');
                                writer.write(this.createCallQueryKey(op, true));
                                writer.write(');');
                                writer.blankLine();
                            }

                            writer.writeLine('},');
                            writer.writeLine('}');
                        }

                        writer.writeLine(');');
                        writer.write('}');
                    },
                },
            ],
            isExported: true,
        });
    }

    addQuery(
        operation: AugmentedOperation,
        queryKeys: Record<
            string,
            AugmentedOperation & {
                hasPathParams: boolean;
                hasBody: boolean;
            }
        >,
        sourceFile: SourceFile
    ) {
        const queryParams = this.getQueryParams(operation);
        const name = operation.hookName;
        const types = operation.typeNames;

        const dataParamInfo = {
            type: null as string | null,
            name: 'data',
        };

        if (operation.hasPathParams && operation.original.requestBody) {
            dataParamInfo.type = `{ id: number | string } & ${types.request}`;
            dataParamInfo.name = '{ id, ...data }';
        } else if (operation.hasPathParams) {
            dataParamInfo.type = '{ id: number | string }';
            dataParamInfo.name = '{ id, }';
        } else if (operation.original.requestBody) {
            dataParamInfo.type = types.request;
            dataParamInfo.name = 'data';
        }

        sourceFile.addFunction({
            name: name,
            docs: operation.original.description ? [operation.original.description] : [],
            isExported: true,
            isDefaultExport: false,
            parameters: [
                ...(dataParamInfo.type
                    ? ([
                          {
                              name: dataParamInfo.name,
                              type: dataParamInfo.type,
                          },
                      ] as ParameterDeclarationStructure[])
                    : []),
                ...(queryParams.length > 0
                    ? ([
                          {
                              name: 'params',
                              type: 'Record<string, any>',
                              initializer: '{}',
                          },
                      ] as ParameterDeclarationStructure[])
                    : []),
                {
                    name: 'enabled',
                    initializer: 'true',
                },
            ],
            statements: writer => {
                writer.writeLine(`return useQuery<${types.response}, FetchError>({`);
                writer.indent(2);

                if (operation.original.operationId! in queryKeys) {
                    const call = this.createCallQueryKey(operation);

                    if (call) {
                        writer.write(`queryKey: ${call},`);
                    }
                }

                writer.indent(2);
                writer.writeLine(
                    `queryFn: () => ${this.getApiCallCode(
                        operation,
                        queryParams,
                        Boolean(operation.original.requestBody)
                    )},`
                );
                writer.writeLine('enabled,');
                writer.writeLine('});');
            },
        });
    }

    async generate(group: string, flatOperations: AugmentedOperation[]) {
        const filePath = await this.checkFilePathForGroup(group);
        if (!filePath) return;

        const project = new Project();
        const sourceFile = project.createSourceFile('index.ts', '', { overwrite: true });

        const imports: ImportData[] = [
            { from: 'react-query', name: 'useMutation' },
            { from: 'react-query', name: 'useQuery' },
            { from: '@api/common/types', name: 'FetchError' },
            { from: '@api/', name: 'apiClient' },
        ];

        const searchOperations = flatOperations.filter(e => SEARCH_OPCODES.includes(parseOpcode(e)));

        type OperationId = string;
        const queryKeys = searchOperations.reduce((acc, searchOperation) => {
            const pathParameters =
                (searchOperation.original.parameters as OpenAPIV3.ParameterObject[])?.filter(e => e.in === 'path') ||
                [];

            if (pathParameters.length > 0 && searchOperation.original.requestBody) {
                throw new Error(
                    `Unsupported route definition: path parameters + requestBody. 
                    Please move your path parameters (${JSON.stringify(pathParameters)}) into request body`
                );
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
        }, {} as Record<OperationId, AugmentedOperation & { hasPathParams: boolean; hasBody: boolean }>);

        this.generateQueryKeysConstant(sourceFile, queryKeys);

        for (const operation of flatOperations) {
            const queryParams = this.getQueryParams(operation);

            if (queryParams.length > 0 && operation.isMutation)
                throw new Error('Mutations with queryParams are not supported yet: check ' + JSON.stringify(operation));

            const types = operation.typeNames;

            if (types.request) {
                imports.push({
                    from: './types',
                    name: types.request,
                });
            }

            imports.push({
                from: './types',
                name: types.response,
            });

            if (operation.isMutation) {
                this.addMutation(operation, searchOperations, imports, sourceFile);
            } else {
                this.addQuery(operation, queryKeys, sourceFile);
            }
        }

        renderImports(sourceFile, imports);

        const content = sourceFile.getFullText();

        await writeFile(
            filePath,
            prettier.format(content, {
                parser: 'babel-ts',
            })
        );
    }
}
