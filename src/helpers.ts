import { camel, kebab, pascal } from 'case';
import type { OpenAPIV3 } from 'openapi-types';
import { PathItemObject, RequestBodyObject } from 'openapi-typescript';
import { SourceFile } from 'ts-morph';

import { AugmentedOperation, ImportData } from './types';

enum HttpMethod {
    GET = 'get',
    PUT = 'put',
    POST = 'post',
    DELETE = 'delete',
    OPTIONS = 'options',
    HEAD = 'head',
    PATCH = 'patch',
    TRACE = 'trace',
}

export const parseOpcode = (operation: OpenAPIV3.OperationObject | AugmentedOperation) => {
    const operationIdPath = kebab(
        'original' in operation ? operation.original.operationId! : operation.operationId!
    ).split('-');
    return operationIdPath[0];
};

export const SUPPORTED_REQUEST_CONTENT = ['multipart/form-data', 'application/json'] as const;
export type RequestContentType = typeof SUPPORTED_REQUEST_CONTENT[number];

export const hasFileUpload = (op: OpenAPIV3.OperationObject) => {
    const reqBody = op.requestBody as RequestBodyObject;
    if (!reqBody) return false;

    const contentKey: RequestContentType = 'multipart/form-data';
    if (!(contentKey in reqBody.content)) return false;

    return true;
};

export const SEARCH_OPCODES = ['search', 'get'];
export const isOperationMutation = (method: HttpMethod, operation: OpenAPIV3.OperationObject | AugmentedOperation) => {
    // assuming no mutations for these methods
    if ([HttpMethod.GET, HttpMethod.HEAD, HttpMethod.OPTIONS, HttpMethod.TRACE].includes(method)) return false;

    const mainOperationCode = parseOpcode(operation);
    return !SEARCH_OPCODES.includes(mainOperationCode);
};

export const ucFirst = (str: string) => str.slice(0, 1).toUpperCase() + str.slice(1);

const generateHookName = (original: OpenAPIV3.OperationObject) => {
    let result = `use${ucFirst(original.operationId!)}`;

    if (result.endsWith('Meta')) result = result.replace('Get', '');
    result = result.replace('useGet', 'use');

    return result;
};

const extractQueryKey = (original: OpenAPIV3.OperationObject) => {
    return kebab(original.operationId!);
};

const replacePlaceholders = (str: string) => str.replace(/\{([^}]+)\}/g, `\${$1}`);

const operationGenerateTypeNames = (method: string, operation: OpenAPIV3.OperationObject) => {
    const isMutation = isOperationMutation(method as HttpMethod, operation);

    const response = pascal(operation.operationId + '_response');
    const responseData = pascal(operation.operationId + '_response_data');
    const responseMeta = pascal(operation.operationId + '_response_meta');
    let request: string | null = pascal(operation.operationId + '_request');

    if (isMutation) {
        return { request, response, responseData, responseMeta };
    }

    if (!operation.requestBody) {
        request = null;
    }

    return {
        request,
        response,
        responseData,
        responseMeta,
    };
};

const generateInvalidatees = (op: AugmentedOperation, allOperations: AugmentedOperation[]) => {
    if (!op.isMutation) return [];

    const path = op['path'];

    if (!path.includes('{id}')) return [];

    const subpath = path.split('/{id}')[0];

    return allOperations.filter(e => {
        if (!SEARCH_OPCODES.includes(parseOpcode(e))) return false;

        if (e['path'] === subpath) return true;
        if (e['path'] === `${subpath}/{id}`) return true;
        if (e['path'] === `${subpath}:search`) return true;
        if (e['path'] === `${subpath}:search-one`) return true;

        return false;
    });
};

export const isEmptyObject = (val: any): val is null => {
    if (!val) return true;
    if (typeof val !== 'object') return false;

    return Object.keys(val).length === 0;
};

const hasPathParams = (op: OpenAPIV3.OperationObject) => {
    return !!op.parameters?.find(e => {
        if ('in' in e) {
            return e.in === 'path';
        }

        return false;
    });
};

export const augmentPathsOperations = (paths: OpenAPIV3.PathsObject) => {
    const pathNames = Object.keys(paths);

    const allOperations = pathNames.flatMap(pathName => {
        const groupName = extractSegment(pathName)!;
        const e = paths[pathName] as PathItemObject;
        const httpMethods = Object.keys(e) as HttpMethod[];
        return httpMethods.map<AugmentedOperation>(httpMethod => ({
            original: e[httpMethod as any],
            hookName: generateHookName(e[httpMethod as any]),
            queryKey: extractQueryKey(e[httpMethod as any]),
            group: groupName,
            path: pathName,
            method: httpMethod,
            isMutation: isOperationMutation(httpMethod, e[httpMethod as any]),
            responses: [],
            request: null,
            pathWithVariables: replacePlaceholders(pathName),
            typeNames: operationGenerateTypeNames(httpMethod, e[httpMethod as any]),
            invalidatees: [],
            isFileUpload: hasFileUpload(e[httpMethod as any]),
            hasPathParams: hasPathParams(e[httpMethod as any]),
        }));
    });

    allOperations.forEach(operation => {
        const invalidatess = generateInvalidatees(operation, allOperations);
        operation.invalidatees = invalidatess;
    });

    return allOperations;
};

export const removeLeadingSlash = (path: string) => path.replace('/', '');

const extractSegment = (path: string) => {
    const segments = path.split('/');
    if (segments.length < 2) {
        return undefined;
    }
    return segments[1];
};

export const groupOperations = (flatOperation: AugmentedOperation[]) =>
    flatOperation.reduce((acc, cur) => {
        const groupName = extractSegment(cur['path']);
        if (!groupName) return acc;

        if (!(groupName in acc)) {
            acc[groupName] = [];
        }

        acc[groupName].push(cur);

        return acc;
    }, {} as Record<string, AugmentedOperation[]>);

export const renderImports = (sourceFile: SourceFile, imports: ImportData[]) => {
    const map = new Map<string, ImportData[]>();

    imports.forEach(el => {
        if (!map.has(el.from)) map.set(el.from, []);

        if (!map.get(el.from)!.find(e => e.name === el.name)) map.get(el.from)!.push(el);
    });

    const importFroms = [...map.keys()];

    importFroms.forEach(importFrom => {
        const els = map.get(importFrom)!;

        if (els.length === 1 && els[0].isDefault) {
            sourceFile.addImportDeclaration({
                namespaceImport: els[0].name,
                moduleSpecifier: els[0].from,
            });
        } else {
            sourceFile.addImportDeclaration({
                namedImports: els.map(e => e.name),
                moduleSpecifier: importFrom,
            });
        }
    });
};
