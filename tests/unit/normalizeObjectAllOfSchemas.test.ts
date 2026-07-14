import { describe, expect, it } from 'vitest';

import { normalizeObjectAllOfSchemas } from '../../src/common/normalizeObjectAllOfSchemas';

describe('normalizeObjectAllOfSchemas', () => {
    it('collapses allOf [$ref, nullable, description] into allOf+nullable on node', () => {
        const deliveryAddress = {
            allOf: [
                { $ref: '#/components/schemas/Address' },
                { nullable: true },
                { description: 'Адрес доставки' },
            ],
        };
        const spec = {
            components: {
                schemas: {
                    Address: {
                        type: 'object',
                        description: 'Адрес',
                        properties: { street: { type: 'string' } },
                    },
                    OrderDelivery: {
                        type: 'object',
                        properties: {
                            delivery_address: deliveryAddress,
                        },
                    },
                },
            },
        };

        normalizeObjectAllOfSchemas(spec);

        expect(deliveryAddress).toEqual({
            allOf: [{ $ref: '#/components/schemas/Address' }],
            nullable: true,
            description: 'Адрес доставки',
        });
    });

    it('collapses allOf [$ref, {nullable+description}] into allOf+nullable on node', () => {
        const deliveryAddress = {
            allOf: [
                { $ref: '#/components/schemas/Address' },
                { nullable: true, description: 'Адрес доставки' },
            ],
        };
        const spec = {
            components: {
                schemas: {
                    Address: {
                        type: 'object',
                        description: 'Адрес',
                        properties: { street: { type: 'string' } },
                    },
                    Wrapper: {
                        type: 'object',
                        properties: {
                            delivery_address: deliveryAddress,
                        },
                    },
                },
            },
        };

        normalizeObjectAllOfSchemas(spec);

        expect(deliveryAddress).toEqual({
            allOf: [{ $ref: '#/components/schemas/Address' }],
            nullable: true,
            description: 'Адрес доставки',
        });
    });

    it('does not mark nullable when allOf is only $ref', () => {
        const field = {
            allOf: [{ $ref: '#/components/schemas/Address' }],
        };
        const spec = {
            components: {
                schemas: {
                    Address: {
                        type: 'object',
                        description: 'Адрес',
                        properties: { street: { type: 'string' } },
                    },
                    Wrapper: {
                        type: 'object',
                        properties: {
                            address: field,
                        },
                    },
                },
            },
        };

        normalizeObjectAllOfSchemas(spec);

        expect(field).toEqual({
            allOf: [{ $ref: '#/components/schemas/Address' }],
        });
        expect(field).not.toHaveProperty('nullable');
    });
});
