import { resolveRefPath } from '../common/helpers';

/* eslint-disable guard-for-in */
type DerefFunction = (refPath: string[]) => object;
type ResolveHelperDependency = (path: string) => string;
export type InterfaceNameFunction = (refPath: string[], suffix?: string) => string;

type SchemaProcessor = (
    currentSchema: any,
    currentRefPath: string[],
    visitedRefs: Map<string, RenderElement>,
    suffix?: string
) => RenderElement;

export type ImportStatement = {
    from: string;
    name: string;
};

export type RenderElement = {
    type: 'literal' | 'enum' | 'combination' | 'array' | 'object' | 'circular';
    refPath: string[];
    name: string;
    definition: { description: string; code: string };
    deps: RenderElement[];
    extraImports: ImportStatement[];
};

export default class JsonSchemaRenderer {
    private deref: DerefFunction;
    private getInterfaceName: InterfaceNameFunction;
    private resolveHelperDependency: ResolveHelperDependency;

    constructor(
        deref: DerefFunction,
        getInterfaceName: InterfaceNameFunction,
        resolveHelperDependency: ResolveHelperDependency
    ) {
        this.deref = deref;
        this.getInterfaceName = getInterfaceName;
        this.resolveHelperDependency = resolveHelperDependency;
    }

    private namedCache = new Map<string, string>();

    public clearCache() {
        this.namedCache.clear();
    }

    public get(name: string) {
        return this.namedCache.get(name);
    }

    public getTotalText() {
        return JSON.stringify(Object.fromEntries(this.namedCache.entries()), null, 2);
    }

    public getHelpersCode() {
        return `export type Prettify<T> = {
            [K in keyof T]: T[K];
        }`;
    }

    processEnumKey(value: string | number) {
        if (typeof value === 'number') throw new Error('Unsupported enum value: ' + value);

        const result = value.toUpperCase().split('.').join('_');

        return result;
    }

    renderEnum(typeName: string, currentRefPath: string[], currentSchema: any, description: string): RenderElement {
        const schemaEnum = currentSchema.enum as (string | number)[];
        const enumVarNames = currentSchema['x-enum-varnames'];

        let enumDeclaration: string[] = [];

        if (enumVarNames) {
            enumDeclaration =
                currentSchema.type === 'string'
                    ? schemaEnum.map((e, i) => `    ${enumVarNames[i]} = '${e}',`)
                    : schemaEnum.map((e, i) => `    ${enumVarNames[i]} = ${e},`);
        } else {
            enumDeclaration =
                currentSchema.type === 'string'
                    ? schemaEnum.map(e => `    ${this.processEnumKey(e)} = '${e}',`)
                    : schemaEnum.map(e => `    ${e},`);
        }

        const code = `export enum ${typeName} {\n${enumDeclaration.join('\n')}\n}`;
        this.namedCache.set(typeName, code);

        return {
            type: 'enum',
            name: typeName,
            definition: { code, description },
            deps: [],
            refPath: currentRefPath,
            extraImports: [],
        };
    }

    // eslint-disable-next-line max-params
    renderCombination(
        combinationKey: '|' | '&',
        typeName: string,
        description: string,
        schema: any,
        currentSchema: any,
        currentRefPath: string[],
        visitedRefs: Map<string, RenderElement>,
        processSchema: SchemaProcessor
    ): RenderElement {
        let renderAsInline = currentSchema !== schema;
        const arr = (currentSchema.allOf || currentSchema.anyOf || currentSchema.oneOf) as any[];

        if (arr.length > 2) {
            renderAsInline = false;
        }

        const results = arr.map((subSchema: any) =>
            processSchema(subSchema, currentRefPath, visitedRefs, subSchema.$ref ? undefined : 'Combination')
        );

        const name = results.map(e => e.name).join(` ${combinationKey} `);

        // Too long string is also bad
        if (name.length > 40) {
            renderAsInline = false;
        }

        const helperPath = this.resolveHelperDependency('helpers');

        const common = {
            type: 'combination',
            deps: results.filter(e => e.type !== 'literal'),
            refPath: currentRefPath,
        } as const;

        if (renderAsInline) {
            return {
                ...common,
                definition: {
                    code: '',
                    description: '',
                },
                name: name,
                extraImports: [],
            };
        }

        return {
            ...common,
            definition: {
                code: `export type ${typeName} = Prettify<${name}>;`,
                description,
            },
            name: typeName,
            extraImports: [
                {
                    from: helperPath,
                    name: 'Prettify',
                },
            ],
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

    // eslint-disable-next-line max-params
    renderObject(
        typeName: string,
        description: string,
        currentSchema: any,
        currentRefPath: string[],
        visitedRefs: Map<string, RenderElement>,
        processSchema: SchemaProcessor
    ): RenderElement {
        if (currentSchema.type === undefined) {
            // console.warn('[!] warn: schema without type found at', currentRefPath);
        }

        const deps: RenderElement[] = [];

        let code = `export interface ${typeName} {\n`;

        let isKeysWritten = false;
        for (const key in currentSchema.properties) {
            isKeysWritten = true;

            const propertySchema = currentSchema.properties[key];
            // const propertyRefPath = [...currentRefPath, '[properties]', key];

            const isRefed = '$ref' in propertySchema;

            const element = processSchema(propertySchema, currentRefPath, visitedRefs, isRefed ? undefined : key);

            const shouldEscapeKey = !/^[$A-Z_a-z][\w$]*$/.test(key);

            const keyPrefix = shouldEscapeKey ? '"' : '';
            const keySuffix = shouldEscapeKey ? '"' : '';

            const fullKey = keyPrefix + key + keySuffix;

            if (propertySchema.description) {
                const exampleBlock = propertySchema.example
                    ? `   * @example ${this.renderExample(propertySchema)}\n`
                    : '';
                code += `  /**\n   * ${propertySchema.description}\n${exampleBlock}  */\n`;
            }

            const isOptional = propertySchema.nullable || false;

            code += `  ${fullKey}${isOptional ? '?' : ''}: ${element.name};\n`;

            if (element.type !== 'literal') deps.push(element);
        }

        code += '}\n';

        if (!isKeysWritten) {
            code = `export type ${typeName} = Record<string, any>;`;
        }

        this.namedCache.set(typeName, code);

        return {
            type: 'object',
            name: typeName,
            definition: {
                description,
                code,
            },
            deps,
            refPath: currentRefPath,
            extraImports: [],
        };
    }

    preTreatSchema(schema: object) {
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
            if (schema.type.includes('null'))
                return {
                    ...schema,
                    type: schema.type.find(e => e !== 'null'),
                    nullable: true,
                };

            throw new Error('Invalid type tuple: ' + JSON.stringify(schema));
        }

        return schema as any;
    }

    refPathToRef(refPath: string[]) {
        return resolveRefPath(refPath);
    }

    render(schema: object, rootRefPath: string[] = []) {
        // eslint-disable-next-line complexity
        const processSchema: SchemaProcessor = (origCurrentSchema, currentRefPath, visited, suffix) => {
            if (!origCurrentSchema) {
                throw new Error('cant pass null schema. Root was' + JSON.stringify(schema));
            }

            const refPathStr = this.refPathToRef(currentRefPath);

            if (visited.has(refPathStr)) {
                return visited.get(refPathStr)!;
            }

            const currentSchema = this.preTreatSchema(origCurrentSchema);

            const typeName = this.getInterfaceName(currentRefPath, suffix);

            const description = currentSchema.description ? `/**\n * ${currentSchema.description} */\n` : '';

            if (currentSchema.hasOwnProperty('$ref')) {
                const newRefPath = [...currentRefPath, currentSchema.$ref];
                const newSchema = this.deref(newRefPath);
                const result = processSchema(newSchema, newRefPath, visited, suffix);
                visited.set(refPathStr, result);
                return result;
            }

            if (currentSchema.enum) {
                const result = this.renderEnum(typeName, currentRefPath, currentSchema, description);
                visited.set(refPathStr, result);
                return result;
            }

            if (currentSchema.allOf) {
                const result = this.renderCombination(
                    '&',
                    typeName,
                    description,
                    schema,
                    currentSchema,
                    currentRefPath,
                    visited,
                    processSchema
                );
                visited.set(refPathStr, result);
                return result;
            }

            if (currentSchema.oneOf || currentSchema.anyOf) {
                const result = this.renderCombination(
                    '|',
                    typeName,
                    description,
                    schema,
                    currentSchema,
                    currentRefPath,
                    visited,
                    processSchema
                );
                visited.set(refPathStr, result);
                return result;
            }

            switch (currentSchema.type) {
                case undefined:
                case 'object': {
                    const result = this.renderObject(
                        typeName,
                        description,
                        currentSchema,
                        currentRefPath,
                        visited,
                        processSchema
                    );
                    visited.set(refPathStr, result);
                    return result;
                }

                case 'array': {
                    if (!currentSchema.items) {
                        const result: RenderElement = {
                            type: 'array',
                            definition: {
                                code: '',
                                description: '',
                            },
                            deps: [],
                            refPath: currentRefPath,
                            extraImports: [],
                            name: 'any[]',
                        };
                        visited.set(refPathStr, result);
                        return result;
                    }

                    const element = processSchema(currentSchema.items, currentRefPath, visited, suffix);

                    const { name, type } = element;

                    const isComplexType = type === 'combination';
                    const namePrefix = isComplexType ? '(' : '';
                    const nameSuffix = isComplexType ? ')' : '';

                    const result: RenderElement = {
                        type: 'array',
                        definition: { code: '', description: '' },
                        name: `${namePrefix}${name}${nameSuffix}[]`,
                        deps: type === 'literal' ? [] : [element],
                        refPath: currentRefPath,
                        extraImports: [],
                    };
                    visited.set(refPathStr, result);
                    return result;
                }

                case 'integer': {
                    return {
                        type: 'literal',
                        definition: { code: '', description: '' },
                        name: 'number',
                        deps: [],
                        refPath: currentRefPath,
                        extraImports: [],
                    };
                }

                case 'null':
                case 'boolean':
                case 'number':
                case 'string': {
                    return {
                        type: 'literal',
                        definition: { code: '', description: '' },
                        name: currentSchema.type,
                        deps: [],
                        refPath: currentRefPath,
                        extraImports: [],
                    };
                }

                default: {
                    throw new Error('Unsupported schema type: ' + currentSchema.type);
                }
            }
        };

        const set = new Map<string, RenderElement>();
        const element = processSchema(schema, rootRefPath, set);

        return element;
    }
}
