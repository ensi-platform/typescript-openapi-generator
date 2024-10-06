import { SchemaObject } from 'openapi-typescript';

import {
    ArraySchemaObjectType,
    CombinationOpertaionEnum,
    ObjectSchemaObjectType,
    SchemaObjectType,
    SimpleSchemaObjectType,
} from '../types';

export enum SchemaTypeEnum {
    COMBINATION = 'Combination',
    SIMPLE = 'Simple',
    OBJECT = 'Object',
    ARRAY = 'Array',
    ANY = 'any',
}

interface IResultCombinationSchema {
    type: SchemaTypeEnum.COMBINATION;
    operation: CombinationOpertaionEnum.CONJUNCATION | CombinationOpertaionEnum.DISJUNCATION;
    schema: SchemaObjectType[];
}

interface IResultSimpleSchema {
    type: SchemaTypeEnum.SIMPLE;
    schema: SimpleSchemaObjectType;
}

interface IResultObjectSchema {
    type: SchemaTypeEnum.OBJECT;
    schema: ObjectSchemaObjectType;
}

interface IResultArraySchema {
    type: SchemaTypeEnum.ARRAY;
    schema: ArraySchemaObjectType;
}

interface IResultAnySchema {
    type: SchemaTypeEnum.ANY;
    schema: string;
}

type ResultSchemaType =
    | IResultCombinationSchema
    | IResultSimpleSchema
    | IResultObjectSchema
    | IResultArraySchema
    | IResultAnySchema;

export const getSchemaType = ({
    schema,
    defaultValue,
}: {
    schema: SchemaObject;
    defaultValue: string;
}): ResultSchemaType => {
    if (!schema || typeof schema !== 'object') {
        console.error('cant pass null schema. Root was' + JSON.stringify(schema));
        return {
            type: SchemaTypeEnum.ANY,
            schema: defaultValue,
        };
    }

    const combinationSchema = (schema.oneOf || schema.allOf || schema.anyOf) as SchemaObjectType[];

    if (combinationSchema) {
        return {
            type: SchemaTypeEnum.COMBINATION,
            schema: combinationSchema,
            operation: schema.allOf ? CombinationOpertaionEnum.CONJUNCATION : CombinationOpertaionEnum.DISJUNCATION,
        };
    }

    if ((schema as ObjectSchemaObjectType).properties)
        return {
            type: SchemaTypeEnum.OBJECT,
            schema: schema as ObjectSchemaObjectType,
        };

    if (!('type' in schema)) {
        console.error('cant pass a schema with an empty type. The root was' + JSON.stringify(schema));
        return {
            type: SchemaTypeEnum.ANY,
            schema: defaultValue,
        };
    }

    if (schema.type === 'array') {
        return {
            type: SchemaTypeEnum.ARRAY,
            schema,
        };
    }

    if (schema.type === 'object') {
        return {
            type: SchemaTypeEnum.OBJECT,
            schema: schema as ObjectSchemaObjectType,
        };
    }

    if (schema.type === 'string' || schema.type === 'number' || schema.type === 'integer' || schema.type === 'boolean')
        return {
            type: SchemaTypeEnum.SIMPLE,
            schema,
        };

    return {
        type: SchemaTypeEnum.ANY,
        schema: defaultValue,
    };
};
