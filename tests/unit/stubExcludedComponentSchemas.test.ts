import { describe, expect, it } from 'vitest';

import { stubExcludedComponentSchemas } from '../../src/common/stubExcludedComponentSchemas';

describe('stubExcludedComponentSchemas', () => {
    it('does nothing without exclude filters', () => {
        const spec = {
            components: {
                schemas: {
                    SecretSchema: { type: 'object', properties: { token: { type: 'string' } } },
                },
            },
        };

        stubExcludedComponentSchemas(spec, undefined);
        expect(spec.components.schemas.SecretSchema).toEqual({
            type: 'object',
            properties: { token: { type: 'string' } },
        });
    });

    it('replaces excluded schemas with stub object', () => {
        const spec = {
            components: {
                schemas: {
                    SecretSchema: { type: 'object', properties: { token: { type: 'string' } } },
                    Pet: { type: 'object' },
                },
            },
        };

        stubExcludedComponentSchemas(spec, {
            mode: 'exclude',
            schemas: ['SecretSchema', /^Internal/],
        });

        expect(spec.components.schemas.SecretSchema).toEqual({
            type: 'object',
            additionalProperties: true,
        });
        expect(spec.components.schemas.Pet).toEqual({ type: 'object' });
    });
});
