/* eslint-disable max-depth */

/* eslint-disable guard-for-in */
import toJsonSchema from '@openapi-contrib/openapi-schema-to-json-schema';
import { pascal } from 'case';
import type { JSONSchema4 } from 'json-schema';
import kleur from 'kleur';
import { existsSync, writeFileSync } from 'node:fs';
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
import JsonSchemaRenderer, { InterfaceNameFunction } from './JsonSchemaRenderer';

export interface TypeInfo {
    /**
     * Name of the type
     * @example SearchProductsRequest
     */
    name: string;

    /**
     * Path to import relative to output folder
     * @example cms/types/nameplateProducts
     */
    importFrom: string;

    /**
     * Full code that defines this type
     * @example export type SearchProductsRequest = { ... }
     */
    definitionCode: string;

    /**
     * If this type is referenced, then @example "common_schemas.yaml#/RequestOffsetPagination"
     */
    $ref: string | null;

    /**
     * TypeInfo dependencies
     */
    dependencies: TypeInfo[];

    /**
     * Extraneous imports to make it work
     */
    externalImports: ImportData[];
}

type EndpointPath = string;
type EndpointHttpMethod = HttpMethod;
type Endpoint = `${EndpointHttpMethod}_${EndpointPath}`;

type OperationTypes = {
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

    if (suffix && !name.includes('Enum')) {
        name += pascal(suffix);
    }

    return name;
};

export class TypeRenderer {
    private overridePolicy: OverridePolicy;
    private config: ConfigSchema;

    private parsedSchema: ParsedSchema;

    public endpointsToTypeCache: Map<Endpoint, OperationTypes> = new Map<Endpoint, OperationTypes>();

    // eslint-disable-next-line unicorn/consistent-function-scoping
    private jsonSchemaRenderer = new JsonSchemaRenderer(refPath => {
        const $ref = resolveRefPath(refPath);

        const result = this.deref({ $ref });
        delete result.$ref;

        return result;
    }, typeNameFunction);

    private refToTypesFile(ref: string) {
        const [dir, file] = refToPath(ref);

        const isEnum = dir.endsWith('enum/') || dir.endsWith('enums/');
        const suffix = isEnum ? '' : 'types/';

        return `${dir}${suffix}${file}.ts`;
    }

    renderJsonSchema(type: 'multipart/form-data' | 'application/json', refPath: string[], obj: object): TypeInfo {
        const $ref = resolveRefPath(refPath);

        const depsHolder = new Set<string[]>();
        const importsHolder: ImportData[] = [];

        const typeName = typeNameFunction(refPath);
        const element = this.jsonSchemaRenderer.render(depsHolder, importsHolder, obj, refPath);

        const code = type === 'multipart/form-data' ? `export type ${typeName} = FormData;` : element.definition;
        const dependencies: TypeInfo[] = [];

        const importFrom = this.refToTypesFile($ref!);

        for (const dependency of element.deps) {
            if (type === 'multipart/form-data') break;

            const path = resolveRefPath(dependency.refPath);

            const depImportFrom = this.refToTypesFile(path);

            if (importFrom !== depImportFrom) {
                console.log('importFrom=', importFrom, 'depImportFrom=', depImportFrom, dependency.name);
            }

            dependencies.push({
                $ref: path,
                definitionCode: dependency.definition,
                dependencies: [],
                importFrom: depImportFrom,
                name: dependency.name,
                externalImports: importsHolder,
            });
        }

        const result: TypeInfo = {
            $ref,
            definitionCode: code,
            dependencies,
            importFrom,
            name: typeName,
            externalImports: importsHolder,
        };

        return result;
    }

    renderRefJsonSchema(type: 'multipart/form-data' | 'application/json', refs: string[]): TypeInfo {
        const $ref = resolveRefPath(refs);

        const obj = this.parsedSchema.refs.get($ref) as object;
        return this.renderJsonSchema(type, refs, obj);
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

            return { ...(this.parsedSchema.refs.get($ref) as never as TCast & { $ref?: string }), $ref: $refObj.$ref };
        }

        return $refObj as never as TCast & { $ref?: string };
    }

    convertToJsonSchema(schema: any) {
        const res = toJsonSchema(schema, {
            cloneSchema: false,
            strictMode: false,
            keepNotSupported: ['nullable'],
            beforeTransform: schema => {
                if (!('type' in schema)) return schema;

                if (schema.type === 'int') {
                    schema.type = 'integer';
                }

                if (Array.isArray(schema.type)) {
                    if (schema.type.includes('null'))
                        return {
                            type: schema.type.find(e => e !== 'null'),
                            nullable: true,
                        };
                    throw new Error('Invalid type tuple: ' + JSON.stringify(schema));
                }

                return schema as any;
            },
        });
        delete res.$schema;
        return res;
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

                if ('$ref' in content[type].schema!) {
                    const res = this.renderRefJsonSchema(type, [
                        operationInfo.$ref,
                        $ref,
                        (content[type].schema! as any).$ref,
                    ]);

                    return res;
                }

                const res = this.renderJsonSchema(type, [operationInfo.$ref, $ref], content[type].schema!);
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
            dependencies: TypeInfo[];
            extraImports: ImportData[];
        }
    > = {};

    clear() {
        this.filesToContent = {};
    }

    initFileContent(file: string) {
        if (!this.filesToContent[file])
            this.filesToContent[file] = {
                codeLines: new Set<string>(),
                dependencies: [],
                extraImports: [],
            };
    }

    processRequest(httpMethod: HttpMethod, path: string, req: TypeInfo) {
        this.initFileContent(req.importFrom);

        const curFile = this.filesToContent[req.importFrom];

        curFile.extraImports.push(...req.externalImports);

        const locals: TypeInfo[] = [];
        const externals: TypeInfo[] = [];

        for (const dep of req.dependencies) {
            if (dep.importFrom === req.importFrom) locals.push(dep);
            else externals.push(dep);
        }

        for (const dep of externals) {
            if (!dep.$ref) {
                console.warn('[warn] external dep', dep, 'without $ref');
                continue;
            }

            if (curFile.dependencies.some(e => e.definitionCode === dep.definitionCode)) continue;

            curFile.dependencies.push(dep);
        }

        for (const dep of locals) {
            if (!dep.definitionCode) continue;
            // curFile.codeLines.add('/* localCodeDep */');
            curFile.codeLines.add(`${dep.definitionCode}`);
        }

        curFile.codeLines.add(req.definitionCode);

        // make sure all dependencies are rendered.
        for (const dep of curFile.dependencies) {
            const code = this.jsonSchemaRenderer.get(dep.name);
            if (!code) continue;

            this.initFileContent(dep.importFrom);
            const depFile = this.filesToContent[dep.importFrom];

            depFile.codeLines.add(code);
            depFile.extraImports.push(...dep.externalImports);
        }

        this.endpointsToTypeCache.get(`${httpMethod}_${path}`)!.request = req;
    }

    async render() {
        this.clear();

        const schema = this.parsedSchema.unrefedSchema;

        for (const path in schema.paths) {
            const groupName = extractSegment(path)!;

            if (groupName !== 'units') continue;

            const operationInfo = this.deref<OpenAPIV3.PathItemObject>(schema.paths[path]);
            const httpMethods = Object.keys(operationInfo) as (HttpMethod | '$ref')[];

            for (const httpMethod of httpMethods) {
                if (httpMethod === '$ref') continue;

                const method = operationInfo[httpMethod];
                if (!method) continue;

                if (!this.endpointsToTypeCache.has(`${httpMethod}_${path}`)) {
                    this.endpointsToTypeCache.set(`${httpMethod}_${path}`, {});
                }

                const req = this.renderRequest(groupName, operationInfo, method);
                if (req) this.processRequest(httpMethod, path, req);

                // const res = this.renderResponse(groupName, operationInfo, method);
                // if (res) {
                //     groupedStuff[groupName].push(req);
                //     this.operationIdTypeCache.get(method.operationId!)!.response = res;
                // }
            }
        }

        const filePaths = Object.keys(this.filesToContent);

        const tasks = filePaths.map(async path => {
            const content = this.filesToContent[path];

            const deps = content.dependencies;

            const typeDeps = deps
                .filter(({ importFrom }) => importFrom !== path)
                .map(e => ({
                    // two back because [group]/[types]/[file].ts
                    from: '../../' + e.importFrom.replace('.ts', ''),
                    name: e.name,
                }));

            const extraDeps = content.extraImports;

            const project = new Project();
            const sourceFile = project.createSourceFile('types.ts', '', { overwrite: true });

            renderImports(sourceFile, [...typeDeps, ...extraDeps]);

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

        await writeFile(
            join(this.config.output_path, 'helpers.ts'),
            `export type Prettify<T> = {
                [K in keyof T]: T[K];
            }`
        );

        writeFileSync('allStuff.json', this.jsonSchemaRenderer.getTotalText());
        writeFileSync('filesContents.json', JSON.stringify(this.filesToContent, null, 2));
        writeFileSync(
            'operationIdsToTypes.json',
            JSON.stringify(Object.fromEntries(this.endpointsToTypeCache.entries()), null, 2)
        );
    }
}
