/* eslint-disable guard-for-in */
import { pascal } from 'case';
import type { JSONSchema4 } from 'json-schema';
import kleur from 'kleur';
import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { basename, dirname, join, relative } from 'node:path';
import { OpenAPIV3 } from 'openapi-types';
import { Project } from 'ts-morph';

import { ParsedSchema } from '../common/SchemaParser';
import {
    HttpMethod,
    extractRefAnchor,
    extractSegment,
    removeTrailingLineBreak,
    renderImports,
} from '../common/helpers';
import { ImportData, OverridePolicy } from '../common/types';
import { ConfigSchema } from '../config/Config';
import { Reference } from '../deref';
import JsonSchemaRenderer, { InterfaceNameFunction, RenderElement } from './JsonSchemaRenderer';
import refToTypesFile from './refToTypesFile';

export type TypeInfo = Omit<RenderElement, 'deps'> & {
    importFrom: string;
    reference: Reference | null;
    deps: TypeInfo[];
};

export type OperationTypes = {
    request?: TypeInfo;
    response?: TypeInfo;
};

/**
 *
 * @param reference array of $ref paths
 * @param suffix extra suffix, for example when its a key in the object
 * @returns string representing name of the type
 */
const typeNameFunction: InterfaceNameFunction = reference => {
    let name = extractRefAnchor(reference.refPath);

    if (!name) {
        name = basename(reference.refPath).replace('.yaml', '');
        name = pascal(name);
        // console.warn('warn! missing name for schema', schema, 'at', refPath, 'falling back to', name);
    }

    if (reference.extraKey) {
        // console.log('trying to add reference.extraKey=', reference.extraKey);
        name += pascal(reference.extraKey);
    }

    if (name.startsWith('components/')) {
        name = name.split('/').pop()!;
    }

    return name;
};

type ContentType = 'multipart/form-data' | 'application/json' | 'application/octet-stream';

export class TypeRenderer {
    private overridePolicy: OverridePolicy;
    private config: ConfigSchema;

    private parsedSchema: ParsedSchema;

    private pathsToEndpointsTypeCache = new Map<string, Partial<Record<HttpMethod, OperationTypes>>>();

    private getHelpersPath() {
        return join(this.config.output_path, 'helpers.ts').replaceAll('\\', '/');
    }

    public getTypesForRequest(path: string, method: HttpMethod) {
        return this.pathsToEndpointsTypeCache.get(path)?.[method.toLowerCase() as HttpMethod];
    }

    private jsonSchemaRenderer = new JsonSchemaRenderer(typeNameFunction);

    private typeInfoImportsResolver(root: TypeInfo, currentFile: string) {
        const result: ImportData[] = [];
        const importableTypes = new Set(['object', 'enum', 'combination']);

        const traverse = (cur: TypeInfo) => {
            const isExternal = cur.importFrom !== currentFile;
            const isImportable = importableTypes.has(cur.type);

            const isExternalImport = isExternal && isImportable;

            // eslint-disable-next-line unicorn/no-negated-condition
            if (!isExternalImport) {
                for (const dep of cur.deps) {
                    traverse(dep);
                }
            } else {
                const relativeImportPath = relative(dirname(currentFile), dirname(cur.importFrom)).replaceAll(
                    '\\',
                    '/'
                );

                result.push({
                    from: `${relativeImportPath || '.'}/${basename(cur.importFrom).replace('.ts', '')}`,
                    name: cur.name,
                });
            }
        };

        traverse(root);

        return result;
    }

    renderJsonSchema(
        description: string,
        type: ContentType,
        reference: Reference,
        schema: Record<string, any>
    ): TypeInfo {
        const typeName = typeNameFunction(reference);

        schema.description = description;

        if (type === 'multipart/form-data') {
            return {
                needsParenthesis: false,
                definition: {
                    description: `/**\n* ${description}\n **/\n`,
                    code: `export type ${typeName} = FormData;`,
                },
                deps: [],
                importFrom: refToTypesFile(reference),
                name: typeName,
                reference,
                type: 'object',
                extraImports: [],
            };
        }

        if (type === 'application/octet-stream') {
            return {
                needsParenthesis: false,
                definition: {
                    description: `/**\n* ${description}\n **/\n`,
                    code: `export type ${typeName} = string;`,
                },
                deps: [],
                importFrom: refToTypesFile(reference),
                name: typeName,
                reference,
                type: 'object',
                extraImports: [],
            };
        }

        const element = this.jsonSchemaRenderer.render(schema, reference);

        const traverse = (rendered: RenderElement): TypeInfo => {
            const ref = rendered.reference;
            const importFrom = refToTypesFile(ref);

            const newTree: TypeInfo = { ...rendered, reference: ref, importFrom, deps: [] };

            if (rendered.deps && rendered.deps.length > 0) {
                newTree.deps = rendered.deps.map(child => traverse(child));
            }

            return newTree;
        };

        const result = traverse(element);

        return result;
    }

    constructor({
        overridePolicy,
        parsedSchema,
        config,
    }: {
        overridePolicy: OverridePolicy;
        parsedSchema: ParsedSchema;
        config: ConfigSchema;
    }) {
        this.overridePolicy = overridePolicy;
        this.parsedSchema = parsedSchema;
        this.config = config;
    }

    extractResponseJsonSchema(schema: JSONSchema4) {
        if (schema.type !== 'object' || !schema.properties)
            throw new Error('Invalid json schema for response:' + JSON.stringify(schema));
        if (!('data' in schema.properties!) && !('meta' in schema.properties!))
            throw new Error('Invalid json schema for response:' + JSON.stringify(schema));

        let data;
        let meta;

        if ('data' in schema.properties!) {
            data = schema.properties.data;
        }

        if ('meta' in schema.properties!) {
            meta = schema.properties.meta;
        }

        return { data, meta };
    }

    private renderRequest(
        rootReference: Reference,
        groupName: string,
        operationInfo: OpenAPIV3.PathItemObject,
        method: OpenAPIV3.OperationObject
    ) {
        if (!method.requestBody) return;

        const { content } = method.requestBody as OpenAPIV3.RequestBodyObject;

        const valid = ['application/json', 'multipart/form-data'] as const;
        for (const type of valid) {
            if (content[type]) {
                if (!content[type].schema) {
                    console.error(kleur.red('no schema for request body'), type, groupName, method.operationId);
                    continue;
                }

                const value = content[type].schema;
                const reference = (value as any).$reference || rootReference;

                const description =
                    method.summary || method.description || operationInfo.summary || operationInfo.description || '';

                return this.renderJsonSchema(description, type, reference, content[type].schema!);
            }
        }
    }

    private renderResponse(
        rootReference: Reference,
        groupName: string,
        operationInfo: OpenAPIV3.PathItemObject,
        method: OpenAPIV3.OperationObject
    ) {
        if (!method.responses) return;

        const codes = Object.keys(method.responses);

        const description =
            method.summary || method.description || operationInfo.summary || operationInfo.description || '';

        for (const code of codes) {
            let reference = rootReference;

            const response = method.responses[code] as OpenAPIV3.ResponseObject & { $reference?: Reference };
            const { content, $reference } = response;

            if ($reference) {
                reference = $reference;
            }

            if (!content) continue;

            if (content.$reference) {
                reference = content.$reference as Reference;
            }

            const valid = ['application/json', 'application/octet-stream'] as const;

            for (const type of valid) {
                if (!content[type]) continue;

                const contentTyped = content[type]; // object under application/json

                if ((contentTyped as any).$reference) {
                    reference = (contentTyped as any).$reference;
                }

                const schema = contentTyped.schema!;

                if ((schema as any).$reference) {
                    reference = (schema as any).$reference;
                }

                return this.renderJsonSchema(description, type, reference, schema);
            }
        }
    }

    /**
     * Хранит в себе готовые к записи в файл данные - строки кода и импорты
     */
    private filesToContent: Record<
        string,
        {
            codeLines: Set<string>;
            imports: ImportData[];
        }
    > = {};

    clear() {
        this.filesToContent = {};
    }

    upsertFileContent(file: string) {
        if (!this.filesToContent[file])
            this.filesToContent[file] = {
                codeLines: new Set<string>(),
                imports: [],
            };

        return this.filesToContent[file];
    }

    renderTypeToFile(req: TypeInfo) {
        const traverse = (typeInfo: TypeInfo) => {
            const file = this.upsertFileContent(typeInfo.importFrom);

            if (typeInfo.deps) {
                for (const dep of typeInfo.deps) traverse(dep);
                file.imports.push(...this.typeInfoImportsResolver(typeInfo, typeInfo.importFrom));
            }

            // extraImports всегда относительны helpers
            if (typeInfo.extraImports) {
                file.imports.push(
                    ...typeInfo.extraImports.map(e => {
                        const relativeImportPath = relative(
                            dirname(typeInfo.importFrom),
                            dirname(e.fromOutput)
                        ).replaceAll('\\', '/');

                        return {
                            from: `${relativeImportPath}/${basename(e.fromOutput)}`,
                            name: e.name,
                        };
                    })
                );
            }

            if (typeInfo.definition.code && !file.codeLines.has(typeInfo.definition.code)) {
                file.codeLines.add(`\n${removeTrailingLineBreak(typeInfo.definition.description)}`);
                file.codeLines.add(typeInfo.definition.code);
            }

            return typeInfo;
        };

        traverse(req);
    }

    upsertPathToEndpointTypeCache(path: string) {
        if (!this.pathsToEndpointsTypeCache.has(path)) {
            this.pathsToEndpointsTypeCache.set(path, {});
        }

        return this.pathsToEndpointsTypeCache.get(path)!;
    }

    async render() {
        this.clear();

        const schema = this.parsedSchema.document;

        for (const path in schema.paths) {
            const groupName = extractSegment(path)!;

            const reference: Reference = (schema.paths[path] as any).$reference || {
                absolutePath: '',
                targetObject: null,
                path: [],
                refPath: '',
                target: '',
            };

            const operationInfo = schema.paths[path] as OpenAPIV3.PathItemObject;
            const httpMethods = Object.keys(operationInfo) as (HttpMethod | '$reference')[];

            for (const httpMethod of httpMethods) {
                if (httpMethod === '$reference') continue;

                const method = operationInfo[httpMethod];
                if (!method) continue;

                // if (method.operationId !== 'createBaseSynonymsJob') continue;

                const endpointTypes = this.upsertPathToEndpointTypeCache(path);

                if (!endpointTypes[httpMethod]) {
                    endpointTypes[httpMethod] = {};
                }

                const req = this.renderRequest(reference, groupName, operationInfo, method);
                if (req) {
                    this.renderTypeToFile(req);

                    endpointTypes[httpMethod]!.request = {
                        ...req,
                        deps: [],
                        extraImports: [],
                        definition: { code: '', description: '' },
                    };
                }

                const res = this.renderResponse(reference, groupName, operationInfo, method);
                if (res) {
                    this.renderTypeToFile(res);
                    endpointTypes[httpMethod]!.response = {
                        ...res,
                        deps: [],
                        extraImports: [],
                        definition: { code: '', description: '' },
                    };
                }
            }
        }

        const filePaths = Object.keys(this.filesToContent);

        const tasks = filePaths.map(async path => {
            const content = this.filesToContent[path];
            const project = new Project();
            const sourceFile = project.createSourceFile('types.ts', '', {
                overwrite: true,
            });

            renderImports(sourceFile, content.imports);

            const fileContent = sourceFile.getFullText() + '\n' + [...content.codeLines.values()].join('\n') + '\n';
            const filePath = join(this.config.output_path, path);

            const folder = dirname(filePath);
            await mkdir(folder, { recursive: true });

            const isExisting = existsSync(filePath);
            if (this.overridePolicy === 'skip' && isExisting) {
                console.log(kleur.italic(kleur.bgWhite(kleur.black(path))), 'типы пропущены как существующие');
                return;
            }

            return writeFile(filePath, fileContent);
        });

        await Promise.all(tasks);

        await writeFile(this.getHelpersPath(), this.jsonSchemaRenderer.getHelpersCode());
    }
}
