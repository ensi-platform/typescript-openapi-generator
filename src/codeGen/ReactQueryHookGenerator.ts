import kleur from 'kleur';
import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { OpenAPIV3 } from 'openapi-types';
import prettier from 'prettier';
import { ParameterDeclarationStructure, Project, SourceFile, VariableDeclarationKind } from 'ts-morph';

import { renderImports } from '../common/helpers';
import { AugmentedOperation, ImportData, OverridePolicy } from '../common/types';
import { ConfigSchema } from '../config/Config';
import { OperationTypes } from '../typegen/TypeRenderer';
import { QueryKeysSchema, createCallQueryKey, generateQueryKeysConstant, generateQueryKeysSchema } from './queryKeys';

export type TypeFetcher = (operation: AugmentedOperation) => OperationTypes;

export class ReactQueryHookGenerator {
    private config: ConfigSchema;
    private overridePolicy: OverridePolicy;
    private typeFetcher: TypeFetcher;

    private queryKeysSchema!: QueryKeysSchema;

    constructor({
        config,
        overridePolicy,
        typeFetcher,
    }: {
        typeFetcher: TypeFetcher;
        config: ConfigSchema;
        overridePolicy: OverridePolicy;
    }) {
        this.config = config;
        this.overridePolicy = overridePolicy;
        this.typeFetcher = typeFetcher;
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

    getApiCallCode(operation: AugmentedOperation, queryParams: OpenAPIV3.ParameterObject[], withData = false) {
        const escapedPath = operation.hasPathParams
            ? `\`${operation.pathSubstituted}\``
            : `'${operation.pathSubstituted}'`;

        const method = operation.method.toLowerCase();
        const args: string[] = [];

        if (withData) {
            if (operation.isFileUpload && operation.hasPathParams) {
                args.push('data: data.formData');
            } else {
                args.push('data');
            }
        }

        if (queryParams.length > 0) args.push('params');

        return `${this.config['react-query'].api_client_name}.${method}(${escapedPath}, {${args.join(', ')}})`;
    }

    addMutation(operation: AugmentedOperation, imports: ImportData[], sourceFile: SourceFile) {
        const queryParams = operation.queryParams;

        const name = operation.hookName;
        const { request: typeRequest, response: typeResponse } = this.typeFetcher(operation);

        if (!typeRequest) {
            // console.warn(
            //     `Request does not exist for ${operation.path} ${operation.method}, falling back to Record<string, any>`
            // );
        }

        if (!typeResponse) {
            // console.warn(
            //     `Response does not exist for ${operation.path} ${operation.method}, falling back to Record<string, any>`
            // );
        }

        const defaultType = {
            $ref: null,
            definition: '',
            deps: [],
            extraImports: [],
            importFrom: '',
            name: 'Record<string, any>',
            refPath: [],
            type: 'literal',
        };

        const request = typeRequest || defaultType;
        const response = typeResponse || defaultType;

        const dataParamInfo = {
            type: null as string | null,
            definition: '()',
            hasRequestBody: Boolean(operation.original.requestBody),
        };

        const vars = operation.pathVariables;
        const varsTypes = vars.map(variable => `${variable}: number | string`).join(',');

        if (operation.hasPathParams && operation.original.requestBody) {
            dataParamInfo.type = `{ ${varsTypes} } & ${request.name}`;
            dataParamInfo.definition = `({ ${vars.join(',')}, ...data })`;
        } else if (operation.hasPathParams) {
            dataParamInfo.type = `{ ${varsTypes} }`;
            dataParamInfo.definition = `({ ${vars.join(',')} })`;
        } else if (operation.original.requestBody) {
            dataParamInfo.type = request.name;
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

                        const opsToInvalidate =
                            this.queryKeysSchema.searchOperations.length > 0 ? operation.invalidationTargets : [];

                        if (opsToInvalidate.length > 0) {
                            writer.writeLine('const queryClient = useQueryClient();');

                            imports.push({
                                from: 'react-query',
                                name: 'useQueryClient',
                            });

                            writer.blankLine();
                        }

                        for (const hook of this.config['react-query'].hooks) {
                            writer.writeLine(hook);
                        }

                        writer.writeLine(`return useMutation<${response.name}, FetchError, ${dataParamInfo.type}>(`);

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
                                writer.write(createCallQueryKey(op, 'mutation'));
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

    addQuery(operation: AugmentedOperation, sourceFile: SourceFile) {
        const queryParams = operation.queryParams;
        const name = operation.hookName;
        const { request: typeRequest, response: typeResponse } = this.typeFetcher(operation);

        if (!typeRequest) {
            // console.warn(
            //     `Request does not exist for ${operation.path} ${operation.method}, falling back to Record<string, any>`
            // );
        }

        if (!typeResponse) {
            // console.warn(
            //     `Response does not exist for ${operation.path} ${operation.method}, falling back to Record<string, any>`
            // );
        }

        const defaultType = {
            $ref: null,
            definition: '',
            deps: [],
            extraImports: [],
            importFrom: '',
            name: 'Record<string, any>',
            refPath: [],
            type: 'literal',
        };

        const request = typeRequest || defaultType;
        const response = typeResponse || defaultType;

        const dataParamInfo = {
            type: null as string | null,
            definition: 'data',
        };

        const vars = operation.pathVariables;
        const varsTypes = vars.map(variable => `${variable}: number | string`).join(',');

        if (operation.hasPathParams && operation.original.requestBody) {
            dataParamInfo.type = `{ ${varsTypes} } & ${request.name}`;
            dataParamInfo.definition = `{ ${vars.join(',')}, ...data }`;
        } else if (operation.hasPathParams) {
            dataParamInfo.type = `{ ${varsTypes} }`;
            dataParamInfo.definition = `{ ${vars.join(',')} }`;
        } else if (operation.original.requestBody) {
            dataParamInfo.type = request.name;
            dataParamInfo.definition = 'data';
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
                              name: dataParamInfo.definition,
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
                for (const hook of this.config['react-query'].hooks) {
                    writer.writeLine(hook);
                }

                writer.writeLine(`return useQuery<${response.name}, FetchError>({`);
                writer.indent(2);

                if (operation.original.operationId! in this.queryKeysSchema.items) {
                    const call = createCallQueryKey(operation, 'query');

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
            { from: '@api/commonTypes', name: 'FetchError' },
        ];

        imports.push(...this.config['react-query'].imports);

        this.queryKeysSchema = generateQueryKeysSchema(flatOperations);
        generateQueryKeysConstant(this.queryKeysSchema, sourceFile);

        for (const operation of flatOperations) {
            const queryParams = operation.queryParams;

            if (queryParams.length > 0 && operation.isMutation)
                throw new Error('Mutations with queryParams are not supported yet: check ' + JSON.stringify(operation));

            const types = this.typeFetcher(operation);

            // eslint-disable-next-line unicorn/consistent-function-scoping
            const resolveImport = (path: string) => {
                const fullPath = join(this.config.output_path, path).replaceAll('\\', '/');
                const filePathNorm = filePath.replaceAll('\\', '/');

                let relativePath = relative(dirname(filePathNorm), fullPath).replaceAll('\\', '/');

                if (relativePath[0] !== '.') {
                    relativePath = './' + relativePath;
                }

                return relativePath;
            };

            if (types.request) {
                imports.push({
                    from: resolveImport(types.request.importFrom).replace('.ts', ''),
                    name: types.request.name,
                });
            }

            imports.push({
                from: resolveImport(types.response!.importFrom).replace('.ts', ''),
                name: types.response!.name,
            });

            if (operation.isMutation) {
                this.addMutation(operation, imports, sourceFile);
            } else {
                this.addQuery(operation, sourceFile);
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
