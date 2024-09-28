import { Reference } from '../deref';

export function getSchemaType(schema: any): 'object' | 'literal' {
    if (schema.type === 'array') {
        return getSchemaType(schema.items);
    }

    if (schema.oneOf || schema.allOf || schema.anyOf) {
        for (const item of schema.oneOf || schema.allOf || schema.anyOf) {
            if (getSchemaType(item) === 'object') {
                return 'object';
            }
        }

        return 'literal';
    }

    if (schema.enum) {
        return 'object';
    }

    if (schema.type === 'object') {
        return 'object';
    }

    return schema.type === 'string' || schema.type === 'number' || schema.type === 'boolean' || schema.type === 'null'
        ? 'literal'
        : 'object';
}

export const isExtraKey = (schema: any, parentReference: Reference) => {
    if (!schema.$reference) return false;

    const ref = schema.$reference as Reference;

    return ref.absolutePath !== parentReference.absolutePath;
};
