export type SchemaFilters = {
    mode?: 'include' | 'exclude';
    schemas?: (string | RegExp)[];
};

/**
 * Orval валидирует spec до применения filters.schemas. Подменяем исключённые схемы на валидную
 * заглушку (не delete — иначе падают $ref на #/components/schemas/...).
 */
export function stubExcludedComponentSchemas(spec: Record<string, unknown>, filters: SchemaFilters | undefined): void {
    if (!filters || filters.mode !== 'exclude' || !filters.schemas?.length) {
        return;
    }
    const components = spec.components as Record<string, unknown> | undefined;
    const schemas = components?.schemas as Record<string, unknown> | undefined;
    if (!schemas) {
        return;
    }
    const { schemas: patterns } = filters;
    for (const key of Object.keys(schemas)) {
        const match = patterns.some(p => (typeof p === 'string' ? p === key : p.test(key)));
        if (match) {
            schemas[key] = { type: 'object', additionalProperties: true };
        }
    }
}
