import { PathItemObject, ReferenceObject, SchemaObject } from 'openapi-typescript';

export type ICommonRefObjectItem = PathItemObject;

export type SchemaObjectValueType =
    | ReferenceObject
    | ReferenceObject[]
    | SchemaObject
    | SchemaObject[]
    | string
    | string[]
    | boolean
    | number
    | number[];

export type ValidSchemaObjectType =
    | string[]
    | ReferenceObject
    | ReferenceObject[]
    | SchemaObject
    | SchemaObject[]
    | number[];
