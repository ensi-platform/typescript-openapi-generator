/* eslint-disable guard-for-in */
import { pascal } from 'case';
import type { JSONSchema4 } from 'json-schema';
import kleur from 'kleur';
import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { basename, dirname, join } from 'node:path';
import { OpenAPIV3 } from 'openapi-types';
import { Project } from 'ts-morph';

import {
    HttpMethod,
    extractRefAnchor,
    extractSegment,
    refToPath,
    renderImports,
    resolveRefPath,
} from '../common/helpers';
import { ImportData, OverridePolicy, ParsedSchema } from '../common/types';
import { ConfigSchema } from '../config/Config';
import JsonSchemaRenderer, { InterfaceNameFunction, RenderElement } from './JsonSchemaRenderer';

export type TypeInfo = Omit<RenderElement, 'deps'> & {
    importFrom: string;
    $ref: string | null;
    deps: TypeInfo[];
};

export type OperationTypes = {
    request?: TypeInfo;
    response?: TypeInfo;
};

/**
 *
 * @param refPath array of $ref paths
 * @param suffix extra suffix, for example when its a key in the object
 * @returns string representing name of the type
 */
const typeNameFunction: InterfaceNameFunction = (refPath, suffix) => {
    let name = extractRefAnchor(resolveRefPath(refPath));

    if (!name) {
        name = basename(refPath.at(-1)!).replace('.yaml', '');
        name = pascal(name);
        // console.warn('warn! missing name for schema', schema, 'at', refPath, 'falling back to', name);
    }

    if (suffix) {
        name += pascal(suffix);
    }

    return name;
};

type ContentType = 'multipart/form-data' | 'application/json' | 'application/octet-stream';

export class TypeRenderer {
    private overridePolicy: OverridePolicy;
    private config: ConfigSchema;

    private parsedSchema: ParsedSchema;

    private pathsToEndpointsTypeCache = new Map<string, Partial<Record<HttpMethod, OperationTypes>>>();

    public getTypesForRequest(path: string, method: HttpMethod) {
        return this.pathsToEndpointsTypeCache.get(path)?.[method.toLowerCase() as HttpMethod];
    }

    private jsonSchemaRenderer = new JsonSchemaRenderer(
        // eslint-disable-next-line unicorn/consistent-function-scoping
        refPath => {
            const $ref = resolveRefPath(refPath);

            const result = this.deref({ $ref });
            delete result.$ref;

            return result;
        },
        typeNameFunction,
        // eslint-disable-next-line unicorn/consistent-function-scoping
        path => `../../${path}`
    );

    private typeInfoImportsResolver(root: TypeInfo, currentFile: string) {
        const result: ImportData[] = [];
        const importableTypes = new Set(['object', 'enum']);

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
                result.push({
                    // two back because [group]/[types]/[file].ts
                    from: '../../' + cur.importFrom.replace('.ts', ''),
                    name: cur.name,
                });
            }
        };

        traverse(root);

        return result;
    }

    private refToTypesFile(ref: string) {
        const [dir, file] = refToPath(ref);

        const isEnum = dir.endsWith('enum/') || dir.endsWith('enums/');
        const suffix = isEnum ? '' : 'types/';

        return `${dir}${suffix}${file}.ts`;
    }

    renderJsonSchema(description: string, type: ContentType, refPath: string[], schema: Record<string, any>): TypeInfo {
        const typeName = typeNameFunction(refPath);

        schema.description = description;

        if (type === 'multipart/form-data') {
            return {
                $ref: null,
                definition: {
                    description: `/**\n* ${description}\n **/\n`,
                    code: `export type ${typeName} = FormData;`,
                },
                deps: [],
                importFrom: this.refToTypesFile(resolveRefPath(refPath)),
                name: typeName,
                refPath,
                type: 'object',
                extraImports: [],
            };
        }

        if (type === 'application/octet-stream') {
            return {
                $ref: null,
                definition: {
                    description: `/**\n* ${description}\n **/\n`,
                    code: `export type ${typeName} = strimg;`,
                },
                deps: [],
                importFrom: this.refToTypesFile(resolveRefPath(refPath)),
                name: typeName,
                refPath,
                type: 'object',
                extraImports: [],
            };
        }

        const element = this.jsonSchemaRenderer.render(schema, refPath);

        const traverse = (rendered: RenderElement): TypeInfo => {
            const $ref = resolveRefPath(rendered.refPath);
            const importFrom = this.refToTypesFile($ref!);

            const newTree: TypeInfo = { ...rendered, $ref, importFrom, deps: [] };

            if (rendered.deps && rendered.deps.length > 0) {
                newTree.deps = rendered.deps.map(child => traverse(child));
            }

            return newTree;
        };

        const result = traverse(element);

        return result;
    }

    renderRefJsonSchema(description: string, type: ContentType, refs: string[]): TypeInfo {
        const $ref = resolveRefPath(refs);

        const obj = this.parsedSchema.refs.get($ref) as Record<string, any>;
        return this.renderJsonSchema(description, type, refs, obj);
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

    deref<TCast>($refObj: any) {
        if (typeof $refObj !== 'object' || !$refObj) throw new Error('$refObj must be an object');

        if ('$ref' in $refObj) {
            if (!$refObj.$ref) {
                throw new Error('$ref must have value');
            }

            const $ref = ($refObj.$ref! as string).replace('../index.yaml#', 'index.yaml#');

            return {
                ...(this.parsedSchema.refs.get($ref) as never as TCast & {
                    $ref?: string;
                }),
                $ref: $refObj.$ref,
            };
        }

        return $refObj as never as TCast & { $ref?: string };
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
        groupName: string,
        operationInfo: OpenAPIV3.PathItemObject,
        method: OpenAPIV3.OperationObject
    ) {
        if (!method.requestBody) return;

        const { content, $ref } = this.deref<OpenAPIV3.RequestBodyObject>(method.requestBody);
        if (!content) return;

        const valid = ['application/json', 'multipart/form-data'] as const;

        for (const type of valid) {
            if (content[type]) {
                if (!content[type].schema) {
                    console.error(kleur.red('no schema for request body'), type, groupName, method.operationId);
                }

                const description =
                    method.summary || method.description || operationInfo.summary || operationInfo.description || '';

                if ('$ref' in content[type].schema!) {
                    const res = this.renderRefJsonSchema(description, type, [
                        operationInfo.$ref,
                        $ref,
                        (content[type].schema! as any).$ref,
                    ]);

                    return res;
                }

                const res = this.renderJsonSchema(description, type, [operationInfo.$ref, $ref], content[type].schema!);
                return res;
            }
        }
    }

    private renderResponse(
        groupName: string,
        operationInfo: OpenAPIV3.PathItemObject,
        method: OpenAPIV3.OperationObject
    ) {
        if (!method.responses) return;

        const codes = Object.keys(method.responses);

        const description =
            method.summary || method.description || operationInfo.summary || operationInfo.description || '';

        for (const code of codes) {
            const { content, $ref } = this.deref<OpenAPIV3.ResponseObject>(method.responses[code]);
            if (!content) continue;

            const valid = ['application/json', 'application/octet-stream'] as const;

            for (const type of valid) {
                if (!content[type]) continue;

                if ('$ref' in content[type].schema!) {
                    const res = this.renderRefJsonSchema(description, type, [
                        operationInfo.$ref,
                        $ref,
                        (content[type].schema! as any).$ref,
                    ]);

                    return res;
                }

                const res = this.renderJsonSchema(description, type, [operationInfo.$ref, $ref], content[type].schema!);
                return res;
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

            if (typeInfo.extraImports) {
                file.imports.push(...typeInfo.extraImports);
            }

            if (typeInfo.definition.code && !file.codeLines.has(typeInfo.definition.code)) {
                file.codeLines.add(typeInfo.definition.description);
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

        const schema = this.parsedSchema.unrefedSchema;

        for (const path in schema.paths) {
            const groupName = extractSegment(path)!;

            const operationInfo = this.deref<OpenAPIV3.PathItemObject>(schema.paths[path]);
            const httpMethods = Object.keys(operationInfo) as (HttpMethod | '$ref')[];

            for (const httpMethod of httpMethods) {
                if (httpMethod === '$ref') continue;

                const method = operationInfo[httpMethod];
                if (!method) continue;

                const endpointTypes = this.upsertPathToEndpointTypeCache(path);

                if (!endpointTypes[httpMethod]) {
                    endpointTypes[httpMethod] = {};
                }

                const req = this.renderRequest(groupName, operationInfo, method);
                if (req) {
                    this.renderTypeToFile(req);

                    endpointTypes[httpMethod]!.request = {
                        ...req,
                        deps: [],
                        extraImports: [],
                        definition: { code: '', description: '' },
                    };
                }

                const res = this.renderResponse(groupName, operationInfo, method);
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

        await writeFile(join(this.config.output_path, 'helpers.ts'), this.jsonSchemaRenderer.getHelpersCode());
    }
}
