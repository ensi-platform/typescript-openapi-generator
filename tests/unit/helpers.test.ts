import { describe, expect, it } from 'vitest';

import {
    getNestedValue,
    resolvePathSegments,
    serializeNodeName,
    serializeToCamelCase,
} from '../../src/common/helpers';

describe('resolvePathSegments', () => {
    it('resolves relative path with hash ref', () => {
        expect(resolvePathSegments(['./schemas/pet.yaml', '#/Pet'])).toBe('./schemas/pet.yaml#/Pet');
    });

    it('resolves parent directory segments', () => {
        expect(resolvePathSegments(['api/v1/index.yaml', '../schemas/pet.yaml#/Pet'])).toBe(
            'api/schemas/pet.yaml#/Pet'
        );
    });

    it('returns empty string for empty input', () => {
        expect(resolvePathSegments([])).toBe('');
    });
});

describe('serializeToCamelCase', () => {
    it('converts snake_case to PascalCase', () => {
        expect(serializeToCamelCase('pet_schema')).toBe('PetSchema');
    });
});

describe('serializeNodeName', () => {
    it('derives schema name from yaml file path', () => {
        expect(serializeNodeName('/api/schemas/pet_schema.yaml')).toBe('PetSchema');
    });

    it('returns undefined for path without file', () => {
        expect(serializeNodeName('/api/schemas/')).toBeUndefined();
    });
});

describe('getNestedValue', () => {
    it('returns nested object by path keys', () => {
        const object = { a: { b: { c: 42 } } };
        expect(getNestedValue(object, ['a', 'b'])).toEqual({ c: 42 });
    });
});
