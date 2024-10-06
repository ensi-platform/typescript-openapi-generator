import { SchemaObject } from 'openapi-typescript';

import { getInterfaceValue, getRequired, getValue, serializeTypeString } from '../../common/serializeType';
import { ANY_CONST } from './constants';
import {
    ArraySchemaObjectType,
    CombinationOpertaionEnum,
    ObjectSchemaObjectType,
    SchemaObjectType,
    SimpleSchemaObjectType,
} from './types';
import { SchemaTypeEnum, getSchemaType } from './utils/getSchemaType';
import { hasAnyValue } from './utils/hasAnyValue';

export class SchemaObjectParser {
    // If the types are invalid, then we bring them to the base state
    normalizeSchema(schema: SchemaObject) {
        if (typeof schema !== 'object') return;
        if (!('type' in schema)) return;
        const type = schema.type as string;
        if (type === 'int' || type === 'float' || type === 'integer') {
            schema.type = 'number';
        }

        if (type === 'bool') {
            schema.type = 'boolean';
        }

        if (Array.isArray(type)) {
            if (type.includes('null')) {
                schema.type = type.find(e => e !== 'null');
                schema.nullable = true;
                return;
            }

            throw new Error('Invalid type tuple: ' + JSON.stringify(schema));
        }
    }

    hasValidSchema(schema: SchemaObject) {
        if (!schema || typeof schema !== 'object') {
            console.error('cant pass null schema. Root was' + JSON.stringify(schema));
            return false;
        }

        if (!('type' in schema)) {
            console.error('cant pass a schema with an empty type. The root was' + JSON.stringify(schema));
            return false;
        }

        return true;
    }

    getEnumValue(schema: SchemaObject) {
        const value = schema.enum as (string | number)[];
        const valueDescriptions: string[] = schema['x-enum-descriptions'] || [];

        const valueString = value
            .reduce<string[]>((acc, v, i) => {
                const description = valueDescriptions[i];
                return [
                    ...acc,
                    serializeTypeString({
                        description,
                        content: `${typeof v === 'number' ? v : `'${v}'`}`,
                        example: '',
                        type: 'enum',
                    }),
                ];
            }, [])
            .join(' | ');
        return getValue(valueString, schema.nullable);
    }

    getCombinationType = ({
        operation,
        schema,
    }: {
        operation: CombinationOpertaionEnum;
        schema: SchemaObjectType[];
    }): string => {
        const symbol = operation === CombinationOpertaionEnum.CONJUNCATION ? ' & ' : ' | ';
        const operationSchema = schema
            .reduce<string[]>((acc, s) => {
                const typedShema = getSchemaType({
                    schema: s,
                    defaultValue: '',
                });

                if (typedShema.type === SchemaTypeEnum.ANY) return acc;

                if (typedShema.type === SchemaTypeEnum.COMBINATION) {
                    const childOperationSchemaType = this.getCombinationType({
                        schema: typedShema.schema,
                        operation: typedShema.operation,
                    });

                    const isAny = hasAnyValue(childOperationSchemaType);

                    return isAny || !childOperationSchemaType ? acc : [...acc, childOperationSchemaType];
                }

                if (typedShema.type === SchemaTypeEnum.OBJECT) {
                    const objectValueType = this.getObjectSchemaType({
                        name: '',
                        schema: typedShema.schema,
                        required: true,
                    });
                    const isAny = hasAnyValue(objectValueType);

                    return !objectValueType || isAny ? acc : [...acc, objectValueType];
                }

                if (typedShema.type === SchemaTypeEnum.ARRAY) {
                    const arrayValueType = this.getArraySchemaType({
                        name: '',
                        schema: typedShema.schema,
                        required: true,
                    });

                    const isAny = hasAnyValue(arrayValueType);

                    return isAny || !arrayValueType ? acc : [...acc, arrayValueType];
                }

                if (typedShema.type === SchemaTypeEnum.SIMPLE) {
                    const simpleValueType = this.getSimpleSchemaType({
                        name: '',
                        schema: typedShema.schema,
                        required: true,
                    });

                    const isAny = hasAnyValue(simpleValueType);

                    return isAny || !simpleValueType ? acc : [...acc, simpleValueType];
                }

                return acc;
            }, [])
            .join(` ${symbol} `);

        if (operationSchema) return `(${operationSchema})`;
        return ANY_CONST;
    };

    getArraySchemaType = ({
        name,
        schema,
        required,
    }: {
        name: string;
        schema: ArraySchemaObjectType;
        required: boolean;
    }): string => {
        const defaultResult = getInterfaceValue({
            name,
            value: 'Array<any>',
            description: schema.description,
            example: '',
            type: '',
            required,
        });

        const value = schema.items as ObjectSchemaObjectType | SimpleSchemaObjectType | ArraySchemaObjectType;

        const typedShema = getSchemaType({
            schema: value,
            defaultValue: defaultResult,
        });

        if (typedShema.type === SchemaTypeEnum.ANY) return typedShema.schema;

        if (typedShema.type === SchemaTypeEnum.COMBINATION) {
            const v = `Array<${this.getCombinationType({
                schema: typedShema.schema,
                operation: typedShema.operation,
            })}>`;

            return getInterfaceValue({
                name,
                value: `${getValue(v, schema.nullable)}`,
                example: schema.example,
                description: schema.description,
                type: '',
                required,
            });
        }

        if (typedShema.type === SchemaTypeEnum.ARRAY) {
            const v = `Array<${this.getArraySchemaType({
                name: '',
                schema: typedShema.schema,
                required: true,
            })}>`;

            return getInterfaceValue({
                name,
                value: `${getValue(v, schema.nullable)}`,
                example: schema.example,
                description: schema.description,
                type: 'array',
                required,
            });
        }

        if (typedShema.type === SchemaTypeEnum.OBJECT) {
            const v = `Array<${this.getObjectSchemaType({
                name: '',
                schema: typedShema.schema,
                required: true,
            })}>`;
            return getInterfaceValue({
                name,
                value: `${getValue(v, schema.nullable)}`,
                example: schema.example,
                description: schema.description,
                type: 'object',
                required,
            });
        }

        if (typedShema.type === SchemaTypeEnum.SIMPLE) {
            const simpleValue = this.getSimpleSchemaType({
                name: '',
                schema: typedShema.schema,
                required: true,
            });
            return getInterfaceValue({
                name,
                value: `${getValue(`Array<${simpleValue}>`, schema.nullable)}`,
                example: schema.example,
                description: schema.description,
                type: typedShema.schema.type,
                required,
            });
        }

        return defaultResult;
    };

    getObjectSchemaType = ({
        name,
        schema,
        required,
    }: {
        name: string;
        schema: ObjectSchemaObjectType;
        required: boolean;
    }): string => {
        const defaultResult = getInterfaceValue({
            name,
            value: ANY_CONST,
            description: '',
            example: '',
            type: '',
            required,
        });

        if (typeof schema !== 'object' || !schema?.properties) return defaultResult;

        const objectKeys = Object.keys(schema.properties);

        const content = objectKeys.reduce((acc, key) => {
            const fieldRequired = getRequired(schema.required || [], key);

            const value = schema.properties![key] as SchemaObject;

            this.normalizeSchema(value);

            const typedShema = getSchemaType({
                schema: value,
                defaultValue: '',
            });

            if (typedShema.type === SchemaTypeEnum.ANY) return acc;

            if (typedShema.type === SchemaTypeEnum.COMBINATION) {
                const v = this.getCombinationType({
                    schema: typedShema.schema,
                    operation: typedShema.operation,
                });

                return (
                    acc +
                    `${getInterfaceValue({
                        name: key,
                        value: `${getValue(v, value.nullable)}`,
                        example: value.example,
                        description: value.description,
                        type: 'array',
                        required,
                    })};\n`
                );
            }

            if (typedShema.type === SchemaTypeEnum.OBJECT) {
                const objectValue = this.getObjectSchemaType({
                    name: key,
                    schema: typedShema.schema,
                    required: fieldRequired,
                });

                if (objectValue) return acc + `${getValue(objectValue, typedShema.schema.nullable)};\n`;
            }

            if (typedShema.type === SchemaTypeEnum.ARRAY) {
                return (
                    acc +
                    `${this.getArraySchemaType({
                        name: key,
                        schema: typedShema.schema,
                        required: fieldRequired,
                    })};\n`
                );
            }

            if (typedShema.type === SchemaTypeEnum.SIMPLE) {
                const simpleValue = this.getSimpleSchemaType({
                    name: key,
                    schema: typedShema.schema,
                    required: fieldRequired,
                });

                if (simpleValue) return acc + `${simpleValue};\n`;
            }

            return acc;
        }, '');

        if (content)
            return getInterfaceValue({
                name,
                value: `{\n${content}\n}\n`,
                example: '',
                type: 'object',
                description: schema.description,
                required,
            });

        return defaultResult;
    };

    getSimpleSchemaType = ({
        name,
        schema,
        required,
    }: {
        name: string;
        schema: SimpleSchemaObjectType;
        required: boolean;
    }) => {
        const defaultResult = getInterfaceValue({
            name,
            value: 'unknown',
            description: schema.description,
            example: '',
            type: '',
            required,
        });

        const isValidSchema = this.hasValidSchema(schema);
        if (!isValidSchema) return defaultResult;

        this.normalizeSchema(schema);

        if (schema.enum) {
            const value = getValue(this.getEnumValue(schema), schema.nullable);
            return getInterfaceValue({
                name,
                value,
                description: schema.description,
                example: schema.example,
                type: Array.isArray(schema.type) ? schema.type[0] : schema.type,
                required,
            });
        }

        if (
            schema.type === 'string' ||
            schema.type === 'number' ||
            schema.type === 'integer' ||
            schema.type === 'boolean'
        ) {
            return getInterfaceValue({
                name,
                value: getValue(schema.type, schema.nullable),
                description: schema.description,
                example: schema.example,
                type: schema.type,
                required,
            });
        }

        if (schema.type === 'null') {
            return getInterfaceValue({
                name,
                value: schema.type,
                description: schema.description,
                example: '',
                type: '',
                required,
            });
        }

        return defaultResult;
    };

    parse({
        name: typeName,
        description,
        schema,
    }: {
        name: string;
        description: string;
        schema: SchemaObjectType;
    }): string {
        const defaultResult = serializeTypeString({
            description,
            content: `export type ${typeName} = any;\n`,
            example: '',
            type: '',
        });

        this.normalizeSchema(schema);

        const typedShema = getSchemaType({
            schema,
            defaultValue: defaultResult,
        });

        if (typedShema.type === SchemaTypeEnum.ANY) {
            return typedShema.schema;
        }

        if (typedShema.type === SchemaTypeEnum.COMBINATION) {
            const value = this.getCombinationType({
                schema: typedShema.schema,
                operation: typedShema.operation,
            });

            return serializeTypeString({
                description,
                content: `export type ${typeName} = ${value};\n`,
                example: '',
                type: '',
            });
        }

        if (typedShema.type === SchemaTypeEnum.OBJECT) {
            const value = this.getObjectSchemaType({
                name: '',
                schema: typedShema.schema,
                required: true,
            });

            return serializeTypeString({
                description,
                content:
                    value === ANY_CONST
                        ? `export type ${typeName} = ${value};\n`
                        : `export interface ${typeName} ${value}`,
                example: '',
                type: 'object',
            });
        }

        if (typedShema.type === SchemaTypeEnum.ARRAY) {
            const value = this.getArraySchemaType({
                name: '',
                schema: typedShema.schema,
                required: true,
            });

            return serializeTypeString({
                description,
                content: `export type ${typeName} = ${value};\n`,
                example: '',
                type: 'array',
            });
        }

        if (typedShema.type === SchemaTypeEnum.SIMPLE && !Array.isArray(schema.type)) {
            const value = this.getSimpleSchemaType({
                name: '',
                schema: typedShema.schema,
                required: true,
            });

            return serializeTypeString({
                description,
                content: `export type ${typeName} = ${value};\n`,
                example: '',
                type: schema.type,
            });
        }

        return defaultResult;
    }
}
