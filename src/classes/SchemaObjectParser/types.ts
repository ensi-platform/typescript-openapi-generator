import {
    ArraySubtype,
    BooleanSubtype,
    IntegerSubtype,
    NullSubtype,
    NumberSubtype,
    ObjectSubtype,
    SchemaObject,
    StringSubtype,
} from 'openapi-typescript';

export type SimpleSchemaObjectType = SchemaObject &
    (StringSubtype | NumberSubtype | IntegerSubtype | BooleanSubtype | NullSubtype);

export type ObjectSchemaObjectType = SchemaObject & ObjectSubtype;

export type ArraySchemaObjectType = SchemaObject & ArraySubtype;

export type SchemaObjectType = SimpleSchemaObjectType | ObjectSchemaObjectType | ArraySchemaObjectType;
