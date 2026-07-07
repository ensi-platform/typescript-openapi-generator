function isRequiredOnlyFragment(node: Record<string, unknown>): boolean {
    if (typeof node.$ref === 'string') {
        return false;
    }

    const { required } = node;
    if (!Array.isArray(required) || required.length === 0) {
        return false;
    }

    return node.properties === undefined;
}

function sanitizeNode(node: Record<string, unknown>): void {
    if (isRequiredOnlyFragment(node)) {
        delete node.additionalProperties;
        delete node.type;
    }

    for (const value of Object.values(node)) {
        if (value !== null && typeof value === 'object') {
            walk(value);
        }
    }
}

function walk(node: unknown): void {
    if (node === null || typeof node !== 'object') {
        return;
    }

    if (Array.isArray(node)) {
        for (const item of node) {
            walk(item);
        }
        return;
    }

    sanitizeNode(node as Record<string, unknown>);
}

/**
 * allOf-фрагменты с required + additionalProperties без properties дают {[key: string]: string}
 * и схлопывают intersection. Оставляем только required — Orval генерирует unknown.
 */
export function sanitizeRequiredOnlySchemas(spec: Record<string, unknown>): void {
    walk(spec);
}
