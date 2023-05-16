import toJsonSchema from '@openapi-contrib/openapi-schema-to-json-schema';
import type { JSONSchema4 } from 'json-schema';
import { compile as compileTypescript } from 'json-schema-to-typescript';
import kleur from 'kleur';
import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { MediaTypeObject, RequestBodyObject } from 'openapi-typescript';
import { CodeBlockWriter, Project } from 'ts-morph';

import { RequestContentType, renderImports } from '../helpers';
import { AugmentedOperation, ImportData, OverridePolicy, RefSchemaData } from '../types';

export class TypeRenderer {
    private overridePolicy: OverridePolicy;

    constructor({ overridePolicy }: { overridePolicy: OverridePolicy }) {
        this.overridePolicy = overridePolicy;
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

    private async generateRequestType(operation: AugmentedOperation, imports: ImportData[]) {
        const types = operation.typeNames;
        const isWithParam = operation.hasPathParams;

        if (operation.request) {
            const requestBody = operation.original.requestBody as RequestBodyObject;
            const content = requestBody.content as Record<RequestContentType, MediaTypeObject>;

            if (content['application/json'] && content['multipart/form-data'])
                throw new Error(
                    'Invalid operation has both json and multipart content in request body: ' +
                        JSON.stringify(operation)
                );

            // Form-data always resolves to FormData
            if (content['multipart/form-data']?.schema) {
                return `export type ${types.request} = {
                        formData: FormData;
                        ${isWithParam ? 'id: number | string;' : ''}
                    }`;
            }

            // If reference, just import!
            if (operation.request.refInfo) {
                imports.push({
                    from: operation.request.refInfo.importPath.replace('.ts', ''),
                    name: operation.request.refInfo.name,
                });
                return `export type ${types.request} = ${operation.request.refInfo?.name};`;
            }

            if (content['application/json']?.schema && types.request) {
                const jsonSchema = this.convertToJsonSchema(operation.request.jsonSchema);

                const ts = await compileTypescript(jsonSchema, types.request, {
                    bannerComment: '',
                    additionalProperties: false,
                });

                return ts;
            }
        } else if (isWithParam && types.request) {
            return `export type ${types.request} = { id: number | string };`;
        }

        // console.error('warn: No request/path params found for operation:', operation);
        return '';
    }

    private async generateResponseType(operation: AugmentedOperation, imports: ImportData[]) {
        if (operation.responses.length === 0)
            throw new Error('Invalid operation: ' + JSON.stringify(operation) + '. It has no responses.');

        const types = operation.typeNames;

        const datas: JSONSchema4[] = [];
        const metas: JSONSchema4[] = [];

        const refed: string[] = [];

        for (const response of operation.responses) {
            // If reference, just import!
            if (response.refInfo) {
                imports.push({
                    from: response.refInfo.importPath.replace('.ts', ''),
                    name: response.refInfo.name,
                });

                if (!refed.includes(response.refInfo.name)) refed.push(response.refInfo.name);
                continue;
            }

            if (response.contentType === 'application/octet-stream') {
                datas.length = 0;
                metas.length = 0;

                refed.push('string');

                break;
            }

            if (response.contentType === 'application/json') {
                const jsonSchema = this.convertToJsonSchema(response.jsonSchema);

                try {
                    const { data, meta } = this.extractResponseJsonSchema(jsonSchema);
                    if (data) datas.push(data);
                    if (meta) metas.push(meta);
                } catch {
                    console.error(
                        `${kleur.red(
                            '[TypesGenerator] Формат возвращаемых данных ошибочно отличается от шаблона '
                        )}${kleur.red().bold(operation.path)}`,
                        `Используем взамен ${kleur.cyan(`type ${types.response} = object;`)}`
                    );

                    return `export type ${types.response} = object;`;
                }
            } else {
                console.log(
                    '[typegen/Parser]',
                    operation.path,
                    'has invalid response',
                    kleur.italic(response.code),
                    ': unsupported content-type',
                    kleur.red(response.contentType)
                );
            }

            // TODO: check and test
            // return `export type ${types.response} = CommonResponse<any>;`;
        }

        // Pure referenced output
        if (datas.length === 0 || metas.length === 0) {
            return `export type ${types.response} = ${refed.join(' | ')};\n`;
        }

        const dataCode = await compileTypescript(
            {
                oneOf: datas,
            },
            types.responseData!,
            {
                bannerComment: '',
                additionalProperties: false,
            }
        );

        const metaCode = await compileTypescript(
            {
                oneOf: metas,
            },
            types.responseMeta!,
            {
                bannerComment: '',
                additionalProperties: false,
            }
        );

        const result = `
        ${dataCode}
        ${metaCode}
        export type ${types.response} = CommonResponse<${types.responseData}, ${types.responseMeta}>;
        `;

        return result;
    }

    async renderCommonDependencies(operations: AugmentedOperation[]) {
        const dependencies = operations
            .flatMap(e => [...e.responses.map(r => r.refInfo), ...(e.request?.refInfo ? [e.request.refInfo] : [])])
            .filter(Boolean) as RefSchemaData[];

        const groupedByPath = new Map<string, RefSchemaData[]>();
        const seenObjects = new Set<RefSchemaData>();

        for (const dep of dependencies) {
            if (!groupedByPath.has(dep.savedPath)) {
                groupedByPath.set(dep.savedPath, []);
            }

            if (seenObjects.has(dep)) continue;
            seenObjects.add(dep);

            groupedByPath.get(dep.savedPath)!.push(dep);
        }

        const folder = 'output/';
        await mkdir(`${folder}commonTypes`, { recursive: true });

        await Promise.all(
            [...groupedByPath.keys()].map(async pathGroup => {
                const deps = groupedByPath.get(pathGroup)!;

                const project = new Project();
                const sourceFile = project.createSourceFile('types.ts', '', { overwrite: true });
                let allCodes = '';

                for (const dep of deps) {
                    const jsonSchema = this.convertToJsonSchema(dep.schema);

                    // eslint-disable-next-line no-await-in-loop
                    const ts = await compileTypescript(jsonSchema, dep.name, {
                        bannerComment: '',
                        additionalProperties: false,
                    });

                    allCodes += ts + '\n';
                }

                const content = sourceFile.getFullText() + '\n' + allCodes;
                await writeFile(`${folder}${pathGroup}`, content);
            })
        );
    }

    async render(group: string, operations: AugmentedOperation[]) {
        const folder = `output/${group}`;
        await mkdir(folder, { recursive: true });
        const filePath = `${folder}/types.ts`;

        const isExisting = existsSync(filePath);

        if (this.overridePolicy === 'skip' && isExisting) {
            console.log(kleur.italic(kleur.bgWhite(kleur.black(group))), 'типы пропущены как существующие');
            return;
        }

        const project = new Project();
        const sourceFile = project.createSourceFile('types.ts', '', { overwrite: true });

        const imports: ImportData[] = [
            {
                from: '@api/common/types',
                name: 'CommonResponse',
            },
        ];

        const contentWriter = new CodeBlockWriter();

        await Promise.all(
            operations.map(async operation => {
                const request = await this.generateRequestType(operation, imports);
                const response = await this.generateResponseType(operation, imports);

                contentWriter.write(request);
                contentWriter.blankLine();
                contentWriter.write(response);
            })
        );

        renderImports(sourceFile, imports);
        sourceFile.formatText();

        const content = sourceFile.getFullText() + '\n' + contentWriter.toString();

        await writeFile(filePath, content);
    }
}
