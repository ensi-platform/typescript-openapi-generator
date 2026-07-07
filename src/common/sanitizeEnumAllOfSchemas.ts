type SchemaNode = Record<string, unknown>;

const PRIMITIVE_TYPES = new Set(['integer', 'number', 'string']);

const PRESERVED_NODE_KEYS = ['description', 'nullable', 'readOnly', 'example', 'title', 'deprecated'] as const;

function getComponentsSchemas(spec: Record<string, unknown>): Record<string, unknown> | undefined {
    const components = spec.components as Record<string, unknown> | undefined;
    return components?.schemas as Record<string, unknown> | undefined;
}

function resolveReference(reference: string, schemas: Record<string, unknown> | undefined): SchemaNode | undefined {
    if (!schemas) {
        return undefined;
    }

    const match = /^#\/components\/schemas\/(.+)$/.exec(reference);
    if (!match) {
        return undefined;
    }

    const target = schemas[match[1]];
    return target !== null && typeof target === 'object' ? (target as SchemaNode) : undefined;
}

function hasEnum(node: SchemaNode, schemas: Record<string, unknown> | undefined): boolean {
    if (Array.isArray(node.enum) && node.enum.length > 0) {
        return true;
    }

    if (typeof node.$ref === 'string') {
        const resolved = resolveReference(node.$ref, schemas);
        return resolved ? hasEnum(resolved, schemas) : false;
    }

    return false;
}

function isTypeOnlySchema(node: SchemaNode): boolean {
    const { type } = node;
    if (typeof type !== 'string' || !PRIMITIVE_TYPES.has(type)) {
        return false;
    }

    if (node.enum || node.$ref || node.properties || node.allOf || node.oneOf || node.anyOf) {
        return false;
    }

    return true;
}

function isNullMarker(node: SchemaNode): boolean {
    if (node.type === 'null') {
        return true;
    }

    const keys = Object.keys(node);
    return node.nullable === true && keys.length === 1;
}

function isCollapsibleEnumAllOfFragment(node: SchemaNode, schemas: Record<string, unknown> | undefined): boolean {
    if (isNullMarker(node)) {
        return true;
    }

    if (node.properties && Object.keys(node.properties as Record<string, unknown>).length > 0) {
        return false;
    }

    if (node.allOf || node.oneOf || node.anyOf) {
        return false;
    }

    if (typeof node.$ref === 'string' || (Array.isArray(node.enum) && node.enum.length > 0)) {
        return true;
    }

    if (hasEnum(node, schemas)) {
        return true;
    }

    const meaningfulKeys = Object.keys(node).filter(
        key => !['type', 'nullable', 'description', 'title', 'deprecated', 'readOnly', 'example'].includes(key)
    );

    if (meaningfulKeys.length === 0) {
        return true;
    }

    return isTypeOnlySchema(node);
}

function collapseEnumAllOf(node: SchemaNode, schemas: Record<string, unknown> | undefined): boolean {
    const { allOf } = node;
    if (!Array.isArray(allOf) || allOf.length === 0) {
        return false;
    }

    const items = allOf.filter((item): item is SchemaNode => item !== null && typeof item === 'object');
    if (items.length !== allOf.length) {
        return false;
    }

    if (items.some(item => !isCollapsibleEnumAllOfFragment(item, schemas))) {
        return false;
    }

    const enumFragment = items.find(item => hasEnum(item, schemas));
    if (!enumFragment) {
        return false;
    }

    const hasNullMarker = items.some(isNullMarker);
    const typeOnly = items.find(isTypeOnlySchema);
    const preserved: SchemaNode = {};
    for (const key of PRESERVED_NODE_KEYS) {
        if (key in node) {
            preserved[key] = node[key];
        }
    }

    if (hasNullMarker || node.nullable === true) {
        preserved.nullable = true;
    }

    const collapsed: SchemaNode = { ...enumFragment };
    if (Array.isArray(collapsed.enum) && typeOnly?.type && !collapsed.type) {
        collapsed.type = typeOnly.type;
    }

    for (const key of Object.keys(node)) {
        delete node[key];
    }

    Object.assign(node, collapsed, preserved);
    return true;
}

function walk(node: unknown, schemas: Record<string, unknown> | undefined): void {
    if (node === null || typeof node !== 'object') {
        return;
    }

    if (Array.isArray(node)) {
        for (const item of node) {
            walk(item, schemas);
        }
        return;
    }

    const schemaNode = node as SchemaNode;
    collapseEnumAllOf(schemaNode, schemas);

    for (const value of Object.values(schemaNode)) {
        walk(value, schemas);
    }
}

/**
 * allOf [type: integer, $ref: Enum] даёт number & EnumDTO и ломает MSW-моки.
 * Схлопываем в enum-фрагмент до Orval.
 */
export function sanitizeEnumAllOfSchemas(spec: Record<string, unknown>): void {
    walk(spec, getComponentsSchemas(spec));
}
