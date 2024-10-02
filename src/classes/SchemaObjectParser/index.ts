import { SchemaObject } from 'openapi-typescript';

import { getInterfaceValue, getValue, serializeTypeString } from '../../common/serializeType';

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

    getEnumValue(schema: SchemaObject) {
        const value = schema.enum as (string | number)[];
        const valueDescriptions: string[] = schema['x-enum-descriptions'] || [];

        const valueString = value.reduce((acc, v, i) => {
            const description = valueDescriptions[i];
            return acc + serializeTypeString({ description, content: `${v},`, example: '', type: 'enum' });
        }, '');
        return getValue(`[\n${valueString}\n]`, schema.nullable);
    }

    getObjectSchemaType = ({
        name,
        schema,
        description,
        required,
    }: {
        name: string;
        schema: SchemaObject;
        description: string;
        required: boolean;
    }) => {
        if (!schema || typeof schema !== 'object') {
            throw new Error('cant pass null schema. Root was' + JSON.stringify(schema));
        }

        if (!('type' in schema)) {
            throw new Error('cant pass a schema with an empty type. The root was' + JSON.stringify(schema));
        }

        if (schema.type !== 'object' || !schema.properties)
            return getInterfaceValue({
                name,
                value: 'any',
                description,
                example: '',
                type: '',
                required,
            });

        const objectKeys = Object.keys(schema.properties);
        const requiredList = schema.required;

        const content = objectKeys.reduce((acc, key) => {
            const value = schema.properties![key] as SchemaObject;
            if (value.oneOf || value.allOf || value.anyOf) {
                return acc;
            }

            if (!('type' in value)) return acc;

            if (value.type === 'array') {
                return acc;
            }

            return acc;
        }, '');

        getInterfaceValue({
            name,
            value: `{\n${content}\n}`,
            description,
            example: '',
            type: '',
            required,
        });
    };

    getSimpleSchemaType = ({
        name,
        description,
        schema,
        example,
        required,
    }: {
        name: string;
        description: string;
        example: string;
        schema: SchemaObject;
        required: boolean;
    }) => {
        if (!schema || typeof schema !== 'object') {
            throw new Error('cant pass null schema. Root was' + JSON.stringify(schema));
        }

        if (!('type' in schema)) {
            throw new Error('cant pass a schema with an empty type. The root was' + JSON.stringify(schema));
        }

        this.normalizeSchema(schema);

        if (schema.enum) {
            const value = this.getEnumValue(schema);
            return getInterfaceValue({
                name,
                value,
                description,
                example,
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
            getInterfaceValue({
                name,
                value: schema.type,
                description,
                example,
                type: Array.isArray(schema.type) ? schema.type[0] : schema.type,
                required,
            });
        }

        if (schema.type === 'null') {
            getInterfaceValue({
                name,
                value: schema.type,
                description,
                example: '',
                type: '',
                required,
            });
        }

        return getInterfaceValue({
            name,
            value: 'any',
            description,
            example: '',
            type: '',
            required,
        });
    };

    parse(schemaObject: SchemaObject) {
        //
    }
}
