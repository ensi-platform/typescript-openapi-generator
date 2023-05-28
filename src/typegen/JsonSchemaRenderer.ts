/* eslint-disable no-warning-comments */
/* eslint-disable guard-for-in */
type DerefFunction = (refPath: string[]) => object;
export type InterfaceNameFunction = (refPath: string[], suffix?: string) => string;

export type Dependency = {
    refPath: string[];
    definition: string;
    name: string;
    origin: any;
};

export type ImportStatement = {
    from: string;
    name: string;
};

type RenderElement = {
    type: 'literal' | 'enum' | 'combination' | 'array' | 'object';
    refPath: string[];
    name: string;
    definition: string;
    deps: Dependency[];
};

export default class JsonSchemaRenderer {
    private deref: DerefFunction;
    private getInterfaceName: InterfaceNameFunction;

    constructor(deref: DerefFunction, getInterfaceName: InterfaceNameFunction) {
        this.deref = deref;
        this.getInterfaceName = getInterfaceName;
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

        const code = `${description}export enum ${typeName} {\n${enumDeclaration.join('\n')}\n}`;
        this.namedCache.set(typeName, code);

        return {
            type: 'enum',
            name: typeName,
            definition: code,
            deps: [],
            refPath: currentRefPath,
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
        processSchema: (currentSchema: any, currentRefPath: string[], suffix?: string) => RenderElement,
        imports: ImportStatement[]
    ): RenderElement {
        const isRoot = currentSchema === schema;

        const arr = (currentSchema.allOf || currentSchema.anyOf || currentSchema.oneOf) as any[];

        const results = arr.map((subSchema: any) =>
            processSchema(subSchema, currentRefPath, subSchema.$ref ? undefined : 'Combination')
        );

        const name = results.map(e => e.name).join(` ${combinationKey} `);

        console.log('Combination has results:');
        console.log(results);

        const deps = results.flatMap(e => e.deps);

        for (const e of results) {
            const dep: Dependency = {
                definition: e.definition,
                name: e.name,
                refPath: e.refPath,
                origin: 'combination',
            };

            deps.push(dep);
        }

        // TODO: better code split for resolution
        if (!imports.some(e => e.name === 'Prettify' && e.from === '../../helpers')) {
            imports.push({
                from: '../../helpers',
                name: 'Prettify',
            });
        }

        return {
            type: 'combination',
            definition: isRoot ? `${description}export type ${typeName} = Prettify<${name}>;` : '',
            name: isRoot ? typeName : name,
            deps,
            refPath: currentRefPath,
        };
    }

    // eslint-disable-next-line max-params
    renderObject(
        typeName: string,
        description: string,
        currentSchema: any,
        currentRefPath: string[],
        processSchema: (currentSchema: any, currentRefPath: string[], suffix?: string) => RenderElement
    ): RenderElement {
        // if (currentSchema.type === undefined) {
        //     console.warn('[!] warn: schema without type found at', currentRefPath);
        // }

        const deps: Dependency[] = [];

        let code = `${description}export interface ` + typeName + ' {\n';

        let isKeysWritten = false;
        for (const key in currentSchema.properties) {
            isKeysWritten = true;

            const propertySchema = currentSchema.properties[key];
            // const propertyRefPath = [...currentRefPath, '[properties]', key];

            console.log('    in object! key=', key, 'schema=', propertySchema);

            const isRefed = '$ref' in propertySchema;

            const {
                definition,
                name,
                refPath,
                deps: otherDeps,
                type,
            } = processSchema(propertySchema, currentRefPath, isRefed ? undefined : key);

            const shouldEscapeKey = !/^[$A-Z_a-z][\w$]*$/.test(key);

            const keyPrefix = shouldEscapeKey ? '"' : '';
            const keySuffix = shouldEscapeKey ? '"' : '';

            const fullKey = keyPrefix + key + keySuffix;

            if (propertySchema.description) {
                const exampleBlock = propertySchema.example ? `   * @example ${propertySchema.example}\n` : '';
                code += `  /**\n   * ${propertySchema.description}\n${exampleBlock}  */\n`;
            }

            const isOptional = propertySchema.nullable || false;

            code += `  ${fullKey}${isOptional ? '?' : ''}: ${name};\n`;

            if (isRefed) {
                console.log('....$ref key, no add otherDeps');
                console.log('type=', type, 'name=', name);
                console.log('otherDeps=', otherDeps);
            }

            deps.push(...otherDeps.filter(e => e.definition));

            if (definition) {
                deps.push({
                    definition,
                    name: name,
                    refPath,
                    origin: 'object',
                });
            }
        }

        code += '}\n';

        if (!isKeysWritten) {
            code = `${description}export type ${typeName} = Record<string, any>;`;
        }

        this.namedCache.set(typeName, code);

        return {
            type: 'object',
            name: typeName,
            definition: code,
            deps,
            refPath: currentRefPath,
        };
    }

    render(refDependencies: Set<string[]>, imports: ImportStatement[], schema: object, rootRefPath: string[] = []) {
        console.log('render()', JSON.stringify(schema));

        const processSchema = (currentSchema: any, currentRefPath: string[], suffix?: string): RenderElement => {
            const typeName = this.getInterfaceName(currentRefPath, suffix);
            const description = currentSchema.description ? `/**\n * ${currentSchema.description} */\n` : '';

            console.log('processSchema', typeName);

            if (currentSchema.hasOwnProperty('$ref')) {
                const newRefPath = [...currentRefPath, currentSchema.$ref];

                refDependencies.add(newRefPath);
                const newSchema = this.deref(newRefPath);

                console.log('   it is $ref, processing derefed part!');

                return processSchema(newSchema, newRefPath, suffix);
            }

            if (currentSchema.enum) {
                console.log('   it is enum');
                return this.renderEnum(typeName, currentRefPath, currentSchema, description);
            }

            if (currentSchema.allOf) {
                console.log('   it is allOf');

                return this.renderCombination(
                    '&',
                    typeName,
                    description,
                    schema,
                    currentSchema,
                    currentRefPath,
                    processSchema,
                    imports
                );
            }

            if (currentSchema.oneOf || currentSchema.anyOf) {
                console.log('   it is oneOf/anyOf');

                return this.renderCombination(
                    '|',
                    typeName,
                    description,
                    schema,
                    currentSchema,
                    currentRefPath,
                    processSchema,
                    imports
                );
            }

            switch (currentSchema.type) {
                case undefined:
                case 'object': {
                    console.log('   it is object');

                    return this.renderObject(typeName, description, currentSchema, currentRefPath, processSchema);
                }

                case 'array': {
                    const { definition, name, refPath, deps } = processSchema(
                        currentSchema.items,
                        currentRefPath,
                        suffix
                    );

                    const isComplexType = name.includes('&') || name.includes('|');
                    const namePrefix = isComplexType ? '(' : '';
                    const nameSuffix = isComplexType ? ')' : '';

                    return {
                        type: 'array',
                        definition: '',
                        name: `${namePrefix}${name}${nameSuffix}[]`,
                        deps: [
                            ...deps,
                            {
                                definition,
                                name: name,
                                refPath,
                                origin: 'array',
                            },
                        ],
                        refPath: currentRefPath,
                    };
                }

                case 'integer': {
                    return {
                        type: 'literal',
                        definition: '',
                        name: 'number',
                        deps: [],
                        refPath: currentRefPath,
                    };
                }

                case 'null':
                case 'boolean':
                case 'number':
                case 'string': {
                    return {
                        type: 'literal',
                        definition: '',
                        name: currentSchema.type,
                        deps: [],
                        refPath: currentRefPath,
                    };
                }

                default: {
                    throw new Error('Unsupported schema type: ' + currentSchema.type);
                }
            }
        };

        const result = processSchema(schema, rootRefPath);

        // cleanup result
        result.deps = result.deps.filter(e => e.definition);

        return result;
    }
}
