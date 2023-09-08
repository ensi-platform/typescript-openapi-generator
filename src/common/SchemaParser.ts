import { pascal } from 'case';
import type { OpenAPIV3 } from 'openapi-types';

import { ConfigSchema } from '../config/Config';
import { augmentPathsOperations, groupOperations } from './helpers';
import { AugmentedOperation } from './types';

export type ParsedSchema = {
    document: OpenAPIV3.Document;
    operations: AugmentedOperation[];
    derefedPathGroupedOps: Record<string, AugmentedOperation[]>;
    groups: string[];
};

const transformPath = (path: string) => pascal(path.replace('.yaml', '').replaceAll('/', '_').toLowerCase());

function parsePath(p: string) {
    let preparedPath = p.replaceAll('../', '').replaceAll('./', '');

    if (preparedPath.startsWith('#/')) {
        preparedPath = `common/${preparedPath.slice(2)}`;
    }

    if (preparedPath.includes('#/')) {
        const [path, obj] = preparedPath.split('#/');

        return [transformPath(path), obj, p] as const;
    }

    if (preparedPath.endsWith('.yaml')) {
        const [objYaml, ...rest] = preparedPath.split('/').reverse();
        const obj = objYaml.replace('.yaml', '');
        const path = rest.join('/');

        return [transformPath(path), obj, p] as const;
    }

    if (preparedPath.startsWith('common/')) {
        const obj = preparedPath.split('common/')[1];

        return ['common', obj, p] as const;
    }

    return [];
}

export class SchemaParser {
    private schemaObject!: OpenAPIV3.Document;
    private readonly uniqueRefs = new Set<string>();
    private config: ConfigSchema;

    constructor(config: ConfigSchema, schemaObject: OpenAPIV3.Document) {
        this.config = config;
        this.schemaObject = schemaObject;
    }

    async parse(): Promise<ParsedSchema> {
        const grouped = new Map<string, { name: string; originalPath: string }[]>();
        const paths = Object.keys(this.schemaObject.paths);
        const parsedPaths = paths.map(element => parsePath(element));

        for (const [path, name, originalPath] of parsedPaths) {
            if (!path) continue;

            if (!grouped.get(path)) {
                grouped.set(path, []);
            }

            grouped.get(path)!.push({
                name: pascal(name),
                originalPath,
            });
        }

        if (!paths) throw new Error('[SchemaParser] No paths found in openapi schema.');

        const operations = augmentPathsOperations(this.schemaObject.paths, this.config);
        const derefedPathGroupedOps = groupOperations(operations);
        const groups = Object.keys(derefedPathGroupedOps);

        return {
            document: this.schemaObject,
            operations,
            derefedPathGroupedOps,
            groups,
        };
    }
}
