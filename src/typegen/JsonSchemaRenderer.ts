/* eslint-disable complexity */
import { removeTrailingLineBreak } from '../common/helpers';
import { Reference } from '../deref';

/* eslint-disable max-params */
export type InterfaceNameFunction = (reference: Reference) => string;

type SchemaProcessor = (schema: any, reference: Reference, demandedRefs: Set<string>) => RenderElement;

export type ImportStatement = {
    fromOutput: string;
    name: string;
};

export type RenderElement = {
    type: 'literal' | 'enum' | 'combination' | 'array' | 'object' | 'objectOfRequired';
    reference: Reference;
    name: string;
    extraData?: unknown;
    definition: { description: string; code: string };
    deps: RenderElement[];
    extraImports: ImportStatement[];
    needsParenthesis: boolean;
};

export default class JsonSchemaRenderer {
    private getInterfaceName: InterfaceNameFunction;
    private cache = new WeakMap<object, RenderElement>();

    constructor(getInterfaceName: InterfaceNameFunction) {
        this.getInterfaceName = getInterfaceName;
    }

    public getHelpersCode() {
        return `export interface CommonResponseMeta {
    pagination?: {
        limit: number;
        offset: number;
        total: number;
    };
}

export interface CommonResponse<T, M = CommonResponseMeta> {
    data: T;
    meta: M;
}

export type Prettify<T> = {
    [K in keyof T]: T[K];
};

export type RequireKeys<T extends object, K extends keyof T> = 
    Required<Pick<T, K>> & Omit<T, K>;`;
    }

    processEnumKey(value: string | number) {
        if (typeof value === 'number') throw new Error('Unsupported enum value: ' + value);

        const result = value.toUpperCase().split('.').join('_');

        return result;
    }

    renderCommonResponse(
        processSchema: SchemaProcessor,
        typeName: string,
        reference: Reference,
        currentSchema: any,
        description: string,
        demandedRefs: Set<string>
    ): RenderElement {
        const dataSchema = currentSchema.properties.data;
        const metaSchema = currentSchema.properties.meta;

        const isDataRefed = '$reference' in dataSchema;
        const isMetaRefed = '$reference' in metaSchema;

        const dataReference = {
            ...(isDataRefed ? dataSchema.$reference : reference),
            extraKey: isDataRefed ? undefined : 'Data',
        };
        const metaReference = {
            ...(isMetaRefed ? metaSchema.$reference : reference),
            extraKey: isMetaRefed ? undefined : 'Meta',
        };

        const dataType = processSchema(dataSchema, dataReference, demandedRefs);
        const metaType = processSchema(metaSchema, metaReference, demandedRefs);

        const deps: RenderElement[] = [dataType, metaType];

        return {
            definition: {
                description,
                code: `export type ${typeName} = CommonResponse<${dataType.name}, ${metaType.name}>;`,
            },
            deps,
            extraImports: [
                {
                    fromOutput: 'helpers',
                    name: 'CommonResponse',
                },
            ],
            name: typeName,
            needsParenthesis: false,
            reference,
            type: 'object',
        };
    }

    renderEnum(typeName: string, reference: Reference, currentSchema: any, description: string): RenderElement {
        const schemaEnum = currentSchema.enum as (string | number)[];
        const keyNames = currentSchema['x-enum-varnames'];
        const keyDescriptions = currentSchema['x-enum-descriptions'] || null;

        const enumDeclaration = schemaEnum.map((e, i) => {
            const value = currentSchema.type === 'string' ? `'${e}'` : e;
            const key = keyNames ? keyNames[i] : this.processEnumKey(e);
            const desc = keyDescriptions ? `    /** ${keyDescriptions[i]} */\n` : '';

            return `${desc}    ${key} = ${value},`;
        });

        const indent = description ? '' : '\n';

        const code = `${indent}export enum ${typeName} {\n${enumDeclaration.join('\n')}\n}`;

        return {
            type: 'enum',
            needsParenthesis: false,
            name: typeName,
            definition: { code, description },
            deps: [],
            reference,
            extraImports: [],
        };
    }

    renderCombination(
        combinationKey: '|' | '&',
        typeName: string,
        description: string,
        schema: any,
        currentSchema: any,
        reference: Reference,
        processSchema: SchemaProcessor,
        demandedRefs: Set<string>
    ): RenderElement {
        let renderAsInline = currentSchema !== schema;
        const arr = (currentSchema.allOf || currentSchema.anyOf || currentSchema.oneOf) as any[];

        if (arr.length > 2) {
            renderAsInline = false;
        }

        const keysToRequire = new Set<string>();

        const results = arr
            .map((subSchema: any) => {
                const isExtraKey = !subSchema.$reference || !subSchema.$reference.target;

                const subReference: Reference | undefined =
                    typeof subSchema === 'object' ? subSchema?.$reference : undefined;

                if (subReference) {
                    demandedRefs.add(`${subReference.absolutePath}#/${subReference.target}`);
                }

                const newReference: Reference = subReference || {
                    ...reference,
                    extraKey: isExtraKey ? 'Combination' : undefined,
                };

                const result = processSchema(subSchema, newReference, demandedRefs);

                if (result.type === 'objectOfRequired') {
                    if (result.extraData) {
                        const keys = result.extraData as string[];
                        for (const key of keys) keysToRequire.add(key);
                    }

                    return null;
                }

                return result;
            })
            .filter(e => e !== null) as RenderElement[];

        const name = results.map(e => e.name).join(` ${combinationKey} `);

        // Too long string is also bad
        if (name.length > 40) {
            renderAsInline = false;
        }

        const common = {
            type: results.length > 1 ? 'combination' : 'literal',
            deps: results.filter(e => e.type !== 'literal'),
            reference,
            needsParenthesis: renderAsInline,
        } as const;

        if (renderAsInline) {
            return {
                ...common,
                definition: {
                    code: '',
                    description: '',
                },
                name,
                extraImports: [],
            };
        }

        const keysToRequireArr = [...keysToRequire.values()];
        const extraImports: ImportStatement[] = [
            {
                fromOutput: 'helpers',
                name: 'Prettify',
            },
        ];

        let code: string;

        if (keysToRequireArr.length > 0) {
            code = `export type ${typeName} = Prettify<RequireKeys<${name}, ${keysToRequireArr
                .map(e => `'${e}'`)
                .join('|')}>>;`;

            extraImports.push({
                fromOutput: 'helpers',
                name: 'RequireKeys',
            });
        } else {
            code = `export type ${typeName} = Prettify<${name}>;`;
        }

        return {
            ...common,
            definition: {
                code,
                description,
            },
            name: typeName,
            extraImports,
        };
    }

    renderExample(schema: any) {
        if (!schema?.example) return '';

        let prefix = '';
        let suffix = '';

        switch (schema.type) {
            case 'integer':
            case 'null':
            case 'boolean':
            case 'number': {
                break;
            }

            case 'string': {
                prefix = '"';
                suffix = '"';
                break;
            }
        }

        return `${prefix}${schema.example}${suffix}`;
    }

    renderObjects = new WeakMap<object, RenderElement>();

    renderObject(
        typeName: string,
        description: string,
        currentSchema: any,
        reference: Reference,
        processSchema: SchemaProcessor,
        demandedRefs: Set<string>
    ): RenderElement {
        if (this.renderObjects.has(currentSchema)) {
            this.renderObjects.delete(currentSchema);

            return {
                definition: {
                    code: '',
                    description: '',
                },
                deps: [],
                extraImports: [],
                name: reference.inObjectNamed || typeName,
                type: 'object',
                needsParenthesis: false,
                reference,
            };
        }

        this.renderObjects.set(currentSchema, null as any);

        const deps: RenderElement[] = [];

        let code = `export interface ${typeName} {\n`;

        let isKeysWritten = false;

        const propKeys = Object.keys(currentSchema.properties || {});
        const endsWithResponse = typeName.endsWith('Response');

        if (endsWithResponse && propKeys.includes('data') && propKeys.includes('meta')) {
            const result = this.renderCommonResponse(
                processSchema,
                typeName,
                reference,
                currentSchema,
                description,
                demandedRefs
            );

            this.renderObjects.set(currentSchema, result);

            return result;
        }

        const required = Array.isArray(currentSchema.required) ? (currentSchema.required as any[]) : [];

        for (const key in currentSchema.properties) {
            if (key === '$reference') continue;

            isKeysWritten = true;

            const propertySchema = currentSchema.properties[key];
            const isOptional = propertySchema.nullable === true || !required.includes(key);

            const propertyReference = (typeof propertySchema === 'object' ? propertySchema?.$reference : undefined) as
                | Reference
                | undefined;

            let ref: string | undefined;

            if (propertyReference) {
                ref = `${propertyReference?.absolutePath}#/${propertyReference?.target}`;

                if (demandedRefs.has(ref)) {
                    console.log('Circular reference is found and fixed in ref:', ref);
                    continue;
                }

                demandedRefs.add(ref);
            }

            const currentReference = propertyReference || reference;

            const newReference: Reference = { ...currentReference, extraKey: key, inObjectNamed: typeName };

            const element = processSchema(propertySchema, newReference, demandedRefs);
            demandedRefs.delete(ref || '');

            const shouldEscapeKey = !/^[$A-Z_a-z][\w$]*$/.test(key);

            const keyPrefix = shouldEscapeKey ? '"' : '';
            const keySuffix = shouldEscapeKey ? '"' : '';

            const fullKey = keyPrefix + key + keySuffix;

            if (propertySchema.description) {
                code += '  /**\n';
                code += `   * ${removeTrailingLineBreak(propertySchema.description)}\n`;

                if (propertySchema.example) {
                    code += `   * @example ${this.renderExample(propertySchema)}\n`;
                }

                code += '   */\n';
            }

            code += `  ${fullKey}${isOptional ? '?' : ''}: ${element.name};\n`;

            if (element.type !== 'literal') deps.push(element);
        }

        code += '}\n';

        if (!isKeysWritten) {
            if (required.length > 0) {
                const element: RenderElement = {
                    type: 'objectOfRequired',
                    name: '',
                    definition: {
                        code: '',
                        description: '',
                    },
                    deps: [],
                    extraImports: [],
                    needsParenthesis: false,
                    reference,
                    extraData: required,
                };

                this.renderObjects.set(currentSchema, element);
                return element;
            }

            code = `export type ${typeName} = Record<string, any>;`;
        }

        const element: RenderElement = {
            type: 'object',
            name: typeName,
            definition: {
                description,
                code,
            },
            needsParenthesis: false,
            deps,
            reference: {
                ...reference,
                inObjectNamed: typeName,
            },
            extraImports: [],
        };

        this.renderObjects.set(currentSchema, element);
        return element;
    }

    normalizeSchema(schema: object) {
        if (typeof schema !== 'object') return schema;
        if (!('type' in schema)) return schema;

        if (schema.type === 'int') {
            schema.type = 'integer';
        }

        if (schema.type === 'float') {
            schema.type = 'number';
        }

        if (schema.type === 'bool') {
            schema.type = 'boolean';
        }

        if (Array.isArray(schema.type)) {
            if (schema.type.includes('null')) {
                schema.type = schema.type.find(e => e !== 'null');
                (schema as any).nullable = true;
                return;
            }

            throw new Error('Invalid type tuple: ' + JSON.stringify(schema));
        }
    }

    render(rootSchema: object, rootReference: Reference) {
        const processSchema: SchemaProcessor = (schema, reference, demandedRefs) => {
            if (!schema) {
                throw new Error('cant pass null schema. Root was' + JSON.stringify(schema));
            }

            this.normalizeSchema(schema);

            if (this.cache.has(schema)) {
                return this.cache.get(schema)!;
            }

            const typeName = this.getInterfaceName(reference);

            const description = schema.description
                ? `/**\n * ${removeTrailingLineBreak(schema.description)}\n */\n`
                : '';

            if (schema.enum) {
                const result = this.renderEnum(typeName, reference, schema, description);
                this.cache.set(schema, result);

                return result;
            }

            if (schema.allOf) {
                const result = this.renderCombination(
                    '&',
                    typeName,
                    description,
                    schema,
                    schema,
                    reference,
                    processSchema,
                    demandedRefs
                );

                this.cache.set(schema, result);

                return result;
            }

            if (schema.oneOf || schema.anyOf) {
                const result = this.renderCombination(
                    '|',
                    typeName,
                    description,
                    schema,
                    schema,
                    reference,
                    processSchema,
                    demandedRefs
                );

                this.cache.set(schema, result);

                return result;
            }

            switch (schema.type) {
                case undefined:
                case 'object': {
                    const result = this.renderObject(
                        typeName,
                        description,
                        schema,
                        reference,
                        processSchema,
                        demandedRefs
                    );

                    this.cache.set(schema, result);
                    return result;
                }

                case 'array': {
                    if (!schema.items) {
                        const result: RenderElement = {
                            needsParenthesis: false,
                            type: 'array',
                            definition: {
                                code: '',
                                description: '',
                            },
                            deps: [],
                            reference,
                            extraImports: [],
                            name: 'any[]',
                        };

                        this.cache.set(schema, result);
                        return result;
                    }

                    const element = processSchema(schema.items, reference, demandedRefs);

                    const { name, needsParenthesis } = element;

                    const namePrefix = needsParenthesis ? '(' : '';
                    const nameSuffix = needsParenthesis ? ')' : '';

                    const result: RenderElement = {
                        needsParenthesis: false,
                        type: 'array',
                        definition: { code: '', description: '' },
                        name: `${namePrefix}${name}${nameSuffix}[]`,
                        deps: [element],
                        reference,
                        extraImports: [],
                    };

                    this.cache.set(schema, result);
                    return result;
                }

                case 'integer': {
                    return {
                        needsParenthesis: false,
                        type: 'literal',
                        definition: { code: '', description: '' },
                        name: 'number',
                        deps: [],
                        reference,
                        extraImports: [],
                    };
                }

                case 'null':
                case 'boolean':
                case 'number':
                case 'string': {
                    return {
                        needsParenthesis: false,
                        type: 'literal',
                        definition: { code: '', description: '' },
                        name: schema.type,
                        deps: [],
                        reference,
                        extraImports: [],
                    };
                }

                default: {
                    throw new Error('Unsupported schema type: ' + schema.type);
                }
            }
        };

        return processSchema(rootSchema, rootReference, new Set<string>());
    }
}
