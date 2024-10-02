import { SchemaObject } from 'openapi-typescript';

import { getInterfaceValue, getRequired, getValue, serializeTypeString } from '../../common/serializeType';
import { ArraySchemaObjectType, ObjectSchemaObjectType, SchemaObjectType, SimpleSchemaObjectType } from './types';

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
        operation: 'conjunction' | 'disjunction';
        schema: SchemaObjectType[];
    }): string => {
        const symbol = operation === 'conjunction' ? ' & ' : ' | ';
        const operationSchema = schema.reduce((acc, s) => {
            const logical = (s.oneOf || s.allOf || s.anyOf) as SchemaObjectType[];
            if (logical) {
                const childOperation = s.allOf ? 'conjunction' : 'disjunction';
                const childOperationSchemaType = this.getCombinationType({
                    schema: logical,
                    operation: childOperation,
                });
                return acc ? acc + symbol + childOperationSchemaType : childOperationSchemaType;
            }

            const isValidSchema = this.hasValidSchema(s);
            if (!isValidSchema) return acc;

            if (s.type === 'object') {
                const objectValueType = this.getObjectSchemaType({ name: '', schema: s, required: true });

                return acc ? acc + symbol + objectValueType : objectValueType;
            }

            if (s.type === 'array') {
                const arrayValueType = this.getArraySchemaType({
                    name: '',
                    schema: s as ArraySchemaObjectType,
                    required: true,
                });

                return acc ? acc + symbol + arrayValueType : arrayValueType;
            }

            if (s.type === 'string' || s.type === 'number' || s.type === 'integer' || s.type === 'boolean') {
                const arrayValueType = this.getSimpleSchemaType({
                    name: '',
                    schema: s as SimpleSchemaObjectType,
                    required: true,
                });

                return acc ? acc + symbol + arrayValueType : arrayValueType;
            }

            return acc;
        }, '');
        if (operationSchema) return `(${operationSchema})`;
        return 'any';
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

        const isValidSchema = this.hasValidSchema(schema);
        if (!isValidSchema) return defaultResult;

        const value = schema.items as ObjectSchemaObjectType | SimpleSchemaObjectType | ArraySchemaObjectType;

        const logical = (value.oneOf || value.allOf || value.anyOf) as SchemaObjectType[];
        if (logical) {
            const childOperation = value.allOf ? 'conjunction' : 'disjunction';
            const v = `Array<${this.getCombinationType({
                schema: logical,
                operation: childOperation,
            })}>`;

            return getInterfaceValue({
                name,
                value: `${getValue(v, value.nullable)}`,
                example: schema.example,
                description: schema.description,
                type: 'array',
                required,
            });
        }

        if (value.type === 'array') {
            const v = `Array<${this.getArraySchemaType({
                name: '',
                schema: value as ArraySchemaObjectType,
                required: true,
            })}>`;

            return getInterfaceValue({
                name,
                value: `${getValue(v, value.nullable)}`,
                example: schema.example,
                description: schema.description,
                type: 'array',
                required,
            });
        }

        if (value.type === 'object') {
            const v = `Array<${this.getObjectSchemaType({
                name: '',
                schema: value,
                required: true,
            })}>`;
            return getInterfaceValue({
                name,
                value: `${getValue(v, value.nullable)}`,
                example: schema.example,
                description: schema.description,
                type: 'array',
                required,
            });
        }

        if (
            value.type === 'string' ||
            value.type === 'number' ||
            value.type === 'integer' ||
            value.type === 'boolean' ||
            value.type === 'null'
        ) {
            const simpleValue = this.getSimpleSchemaType({
                name: '',
                schema: value as SimpleSchemaObjectType,
                required: true,
            });
            return getInterfaceValue({
                name,
                value: `Array<${simpleValue}>`,
                example: schema.example,
                description: schema.description,
                type: value.type,
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
            value: 'any',
            description: '',
            example: '',
            type: '',
            required,
        });

        const isValidSchema = this.hasValidSchema(schema);
        if (!isValidSchema) return defaultResult;

        if (!schema.properties) return defaultResult;

        const objectKeys = Object.keys(schema.properties);

        const content = objectKeys.reduce((acc, key) => {
            const fieldRequired = getRequired(schema.required || [], key);

            const value = schema.properties![key] as SchemaObject;

            const logical = (value.oneOf || value.allOf || value.anyOf) as SchemaObjectType[];
            if (logical) {
                const childOperation = value.allOf ? 'conjunction' : 'disjunction';
                const v = this.getCombinationType({
                    schema: logical,
                    operation: childOperation,
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

            if (!('type' in value)) return acc;

            this.normalizeSchema(value);
            if (value.type === 'object') {
                const objectValue = this.getObjectSchemaType({
                    name: key,
                    schema: value,
                    required: fieldRequired,
                });

                if (objectValue) return acc + `${getValue(objectValue, value.nullable)};\n`;
            }

            if (value.type === 'array') {
                return (
                    acc +
                    `${this.getArraySchemaType({
                        name: key,
                        schema: value,
                        required: fieldRequired,
                    })};\n`
                );
            }

            if (
                value.type === 'string' ||
                value.type === 'number' ||
                value.type === 'integer' ||
                value.type === 'boolean' ||
                value.type === 'null'
            ) {
                const simpleValue = this.getSimpleSchemaType({
                    name: key,
                    schema: value as SimpleSchemaObjectType,
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

        if (!schema || typeof schema !== 'object') {
            console.error('cant pass null schema. Root was' + JSON.stringify(schema));
            return defaultResult;
        }

        const logical = (schema.oneOf || schema.allOf || schema.anyOf) as SchemaObjectType[];
        if (logical) {
            const childOperation = schema.allOf ? 'conjunction' : 'disjunction';
            const value = this.getCombinationType({
                schema: logical,
                operation: childOperation,
            });

            return serializeTypeString({
                description,
                content: `export type ${typeName} = ${value};\n`,
                example: '',
                type: '',
            });
        }

        if (!('type' in schema)) {
            console.error('cant pass a schema with an empty type. The root was' + JSON.stringify(schema));
            return defaultResult;
        }

        this.normalizeSchema(schema);

        if (schema.type === 'object') {
            const value = this.getObjectSchemaType({
                name: '',
                schema: schema as ObjectSchemaObjectType,
                required: true,
            });

            return serializeTypeString({
                description,
                content:
                    value === 'any' ? `export type ${typeName} = ${value};\n` : `export interface ${typeName} ${value}`,
                example: '',
                type: 'object',
            });
        }

        if (schema.type === 'array') {
            const value = this.getArraySchemaType({
                name: '',
                schema: schema as ArraySchemaObjectType,
                required: true,
            });

            return serializeTypeString({
                description,
                content: `export type ${typeName} = ${value};\n`,
                example: '',
                type: 'array',
            });
        }

        if (
            (schema.type === 'string' ||
                schema.type === 'integer' ||
                schema.type === 'number' ||
                schema.type === 'null' ||
                schema.type === 'boolean') &&
            !Array.isArray(schema.type)
        ) {
            const value = this.getSimpleSchemaType({
                name: '',
                schema: schema as SimpleSchemaObjectType,
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
