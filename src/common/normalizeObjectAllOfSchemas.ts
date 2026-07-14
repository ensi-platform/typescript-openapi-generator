type SchemaNode = Record<string, unknown>;

const MERGEABLE_OBJECT_KEYS = new Set(['type', 'properties', 'required']);
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

function resolveFragment(item: SchemaNode, schemas: Record<string, unknown> | undefined): SchemaNode {
    if (typeof item.$ref === 'string') {
        return resolveReference(item.$ref, schemas) ?? item;
    }

    return item;
}

function isMergeableAllOfObject(node: SchemaNode): boolean {
    if (!node.properties || typeof node.properties !== 'object') {
        return false;
    }

    if (node.allOf || node.oneOf || node.anyOf) {
        return false;
    }

    if (node.type !== undefined && node.type !== 'object') {
        return false;
    }

    return Object.keys(node).every(key => MERGEABLE_OBJECT_KEYS.has(key));
}

const PRESERVED_NODE_KEY_SET = new Set<string>(PRESERVED_NODE_KEYS);

function isNullType(node: SchemaNode): boolean {
    return node.type === 'null';
}

function isPreservedOnlyFragment(node: SchemaNode): boolean {
    const keys = Object.keys(node);
    return keys.length > 0 && keys.every(key => PRESERVED_NODE_KEY_SET.has(key) || key === 'type');
}

/**
 * allOf-фрагмент только про nullability (+ metadata).
 * `{ nullable: true }`, `{ type: null }`, `{ nullable: true, description: '...' }`.
 */
function isNullMarker(node: SchemaNode): boolean {
    if (isNullType(node)) {
        return isPreservedOnlyFragment(node);
    }

    if (node.nullable !== true) {
        return false;
    }

    return Object.keys(node).every(key => PRESERVED_NODE_KEY_SET.has(key));
}

function hoistPreservedKeys(target: SchemaNode, source: SchemaNode): void {
    for (const key of PRESERVED_NODE_KEYS) {
        if (key === 'nullable') {
            continue;
        }

        if (key in source && !(key in target)) {
            target[key] = source[key];
        }
    }
}

function getNullableObjectBranch(node: SchemaNode): SchemaNode | undefined {
    const { oneOf } = node;
    if (!Array.isArray(oneOf)) {
        return undefined;
    }

    const hasNull = oneOf.some(
        item => item !== null && typeof item === 'object' && (item as SchemaNode).type === 'null'
    );
    if (!hasNull) {
        return undefined;
    }

    return oneOf.find(
        item =>
            item !== null &&
            typeof item === 'object' &&
            (item as SchemaNode).type === 'object' &&
            (item as SchemaNode).properties
    ) as SchemaNode | undefined;
}

function isNullableWholeObject(node: SchemaNode): boolean {
    return node.nullable === true && Boolean(node.properties) && !node.allOf && !node.oneOf && !node.anyOf;
}

function hoistProperties(properties: Record<string, unknown>, nullable: boolean): Record<string, unknown> {
    const result: Record<string, unknown> = {};

    for (const [key, property] of Object.entries(properties)) {
        result[key] =
            nullable && property !== null && typeof property === 'object' && !Array.isArray(property)
                ? { ...(property as SchemaNode), nullable: true }
                : property;
    }

    return result;
}

function mergeProperties(target: Record<string, unknown>, source: Record<string, unknown> | undefined): void {
    if (!source) {
        return;
    }

    Object.assign(target, source);
}

function mergeRequired(target: Set<string>, source: unknown): void {
    if (!Array.isArray(source)) {
        return;
    }

    for (const key of source) {
        if (typeof key === 'string') {
            target.add(key);
        }
    }
}

function isSkippableEmptyFragment(node: SchemaNode): boolean {
    if (node.$ref || node.enum || node.oneOf || node.anyOf || node.allOf) {
        return false;
    }

    if (node.properties && Object.keys(node.properties as Record<string, unknown>).length > 0) {
        return false;
    }

    const meaningfulKeys = Object.keys(node).filter(
        key => !['type', 'nullable', 'description', 'title', 'deprecated', 'readOnly', 'example'].includes(key)
    );

    return meaningfulKeys.length === 0;
}

function normalizeNodeAllOf(node: SchemaNode, schemas: Record<string, unknown> | undefined): boolean {
    const { allOf } = node;
    if (!Array.isArray(allOf) || allOf.length === 0) {
        return false;
    }

    const mergedProperties: Record<string, unknown> = {
        ...(node.properties as Record<string, unknown> | undefined),
    };
    const mergedRequired = new Set<string>(Array.isArray(node.required) ? (node.required as string[]) : []);
    const remaining: SchemaNode[] = [];
    const hoistedPreserved: SchemaNode = {};
    let isChanged = false;
    let isNullable = node.nullable === true;

    for (const rawItem of allOf) {
        if (rawItem === null || typeof rawItem !== 'object') {
            continue;
        }

        const item = rawItem as SchemaNode;

        if (isNullMarker(item)) {
            isNullable = true;
            hoistPreservedKeys(hoistedPreserved, item);
            isChanged = true;
            continue;
        }

        const resolved = resolveFragment(item, schemas);

        if (isSkippableEmptyFragment(resolved) || isSkippableEmptyFragment(item)) {
            hoistPreservedKeys(hoistedPreserved, item);
            if (isSkippableEmptyFragment(resolved) && resolved !== item) {
                hoistPreservedKeys(hoistedPreserved, resolved);
            }
            isChanged = true;
            continue;
        }

        if (isMergeableAllOfObject(resolved)) {
            mergeProperties(mergedProperties, resolved.properties as Record<string, unknown>);
            mergeRequired(mergedRequired, resolved.required);
            isChanged = true;
            continue;
        }

        const nullableObjectBranch = getNullableObjectBranch(resolved) ?? getNullableObjectBranch(item);
        if (nullableObjectBranch?.properties) {
            mergeProperties(
                mergedProperties,
                hoistProperties(nullableObjectBranch.properties as Record<string, unknown>, true)
            );
            mergeRequired(mergedRequired, nullableObjectBranch.required);
            isChanged = true;
            continue;
        }

        if (isNullableWholeObject(resolved)) {
            mergeProperties(mergedProperties, hoistProperties(resolved.properties as Record<string, unknown>, true));
            mergeRequired(mergedRequired, resolved.required);
            isChanged = true;
            continue;
        }

        remaining.push(item);
    }

    if (remaining.length === 1) {
        const last = remaining[0];
        const nullableBranch = getNullableObjectBranch(last);
        if (nullableBranch?.properties) {
            mergeProperties(
                mergedProperties,
                hoistProperties(nullableBranch.properties as Record<string, unknown>, true)
            );
            mergeRequired(mergedRequired, nullableBranch.required);
            remaining.length = 0;
            isChanged = true;
        }
    }

    if (!isChanged) {
        return false;
    }

    const preserved: SchemaNode = { ...hoistedPreserved };
    for (const key of PRESERVED_NODE_KEYS) {
        if (key in node) {
            preserved[key] = node[key];
        }
    }

    if (isNullable) {
        preserved.nullable = true;
    }

    // OAS 3.0: allOf + nullable на узле стабильнее для orval, чем sibling у $ref
    if (remaining.length === 1 && typeof remaining[0].$ref === 'string' && Object.keys(mergedProperties).length === 0) {
        const referenceOnly: SchemaNode = {
            allOf: [{ $ref: remaining[0].$ref }],
            ...preserved,
        };
        for (const key of Object.keys(node)) {
            delete node[key];
        }
        Object.assign(node, referenceOnly);
        return true;
    }

    const normalized: SchemaNode = { ...preserved };

    if (Object.keys(mergedProperties).length > 0) {
        normalized.type = 'object';
        normalized.properties = mergedProperties;
    }

    if (mergedRequired.size > 0) {
        normalized.required = [...mergedRequired];
    }

    if (remaining.length > 0) {
        normalized.allOf = remaining;
    }

    for (const key of Object.keys(node)) {
        delete node[key];
    }

    Object.assign(node, normalized);
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
    normalizeNodeAllOf(schemaNode, schemas);

    for (const value of Object.values(schemaNode)) {
        walk(value, schemas);
    }
}

/**
 * allOf с nullable oneOf / mergeable object-фрагментами ломает MSW-моки.
 * Схлопываем в плоский object до Orval.
 */
export function normalizeObjectAllOfSchemas(spec: Record<string, unknown>): void {
    const schemas = getComponentsSchemas(spec);

    for (let pass = 0; pass < 3; pass += 1) {
        walk(spec, schemas);
    }
}
