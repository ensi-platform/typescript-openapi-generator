/* eslint-disable unicorn/no-for-loop */
import { kebab } from 'case';
import { spawn } from 'node:child_process';
import { basename, join } from 'node:path';
import type { OpenAPIV3 } from 'openapi-types';
import { RequestBodyObject } from 'openapi-typescript';
import { SourceFile } from 'ts-morph';

import { ConfigSchema } from '../config/Config';
import { extractPathVariables, replacePathVariables } from './pathVariables';
import { AugmentedOperation, ImportData } from './types';

export enum HttpMethod {
    GET = 'get',
    PUT = 'put',
    POST = 'post',
    DELETE = 'delete',
    OPTIONS = 'options',
    HEAD = 'head',
    PATCH = 'patch',
    TRACE = 'trace',
}

export const sanitizeRefPath = (refPath: string) => {
    if (refPath.includes('json-schema-ref-parser/dist/')) {
        return refPath.split('json-schema-ref-parser/dist/')[1];
    }

    if (refPath.includes('@apidevtools/json-schema-ref-parser/')) {
        return refPath.split('@apidevtools/json-schema-ref-parser/')[1];
    }

    return refPath;
};

export const parseOpcode = (operation: OpenAPIV3.OperationObject | AugmentedOperation) => {
    const operationIdPath = kebab(
        'original' in operation ? operation.original.operationId! : operation.operationId!
    ).split('-');
    return operationIdPath[0];
};

export const SUPPORTED_REQUEST_CONTENT = ['multipart/form-data', 'application/json'] as const;
export type RequestContentType = (typeof SUPPORTED_REQUEST_CONTENT)[number];

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

const generateInvalidationTargets = (op: AugmentedOperation, allOperations: AugmentedOperation[]) => {
    if (!op.isMutation) return [];

    const file = op.storePath;

    const results = allOperations.filter(e => {
        if (e.storePath !== file) return false;
        if (!SEARCH_OPCODES.includes(parseOpcode(e))) return false;

        if (e.originalPath.endsWith('id}')) return true;
        if (e.originalPath.endsWith('Id}')) return true;
        if (e.originalPath.endsWith(':search')) return true;
        if (e.originalPath.endsWith(':search-one')) return true;

        return false;
    });

    return results;
};

export const isEmptyObject = (val: any): val is null => {
    if (!val) return true;
    if (typeof val !== 'object') return false;

    return Object.keys(val).length === 0;
};

const hasPathParams = (op: OpenAPIV3.OperationObject) => {
    return Boolean(
        op.parameters?.find(e => {
            if ('in' in e) {
                return e.in === 'path';
            }

            return false;
        })
    );
};

const extractQueryParams = (req: OpenAPIV3.OperationObject) =>
    (req.parameters?.filter(e => {
        if (!('in' in e)) return false;
        return e.in === 'query';
    }) as OpenAPIV3.ParameterObject[] | undefined) || [];

export const removeTrailingLineBreak = (str: string) => {
    if (str.endsWith('\n')) return str.slice(0, -1);
    return str;
};

export const defaultGetDirectory = (routePath: string) => {
    let directory = '';
    let lastSlashIndex = 0;

    // eslint-disable-next-line unicorn/no-for-loop
    for (let i = 0; i < routePath.length; i++) {
        const char = routePath[i];

        if (char === '{') return directory.slice(0, lastSlashIndex);
        if (char === ':') return directory;

        if (char === '/') lastSlashIndex = i;

        directory += char;
    }

    return directory;
};

type DirectoryGetter = (routePath: string) => string;

const isRewrite = (from: string, path: string) => {
    const isWildcard = from.endsWith('*');

    if (isWildcard) {
        for (let i = 0; i < from.length; i++) {
            const fromChar = from[i];
            const toChar = path[i];

            if (fromChar === '*' && i <= path.length) return true;

            if (fromChar !== toChar) return false;
        }
    }

    return from === path;
};

const applyFirstRewrite = (rewrites: Record<string, string>, path: string) => {
    for (const from in rewrites) {
        if (isRewrite(from, path)) return rewrites[from];
    }

    return path;
};

export const augmentPathsOperations = (
    paths: OpenAPIV3.PathsObject,
    config: ConfigSchema,
    directoryGetter: DirectoryGetter = defaultGetDirectory,
    rewrites: Record<string, string> = {}
) => {
    const originalPaths = Object.keys(paths);

    const allOperations = originalPaths.flatMap(originalPath => {
        const group = extractSegment(originalPath)!;
        const operationInfo = paths[originalPath]!;

        const httpMethods = (Object.keys(operationInfo) as HttpMethod[]).filter(e => (e as any) !== '$reference');

        return httpMethods.map<AugmentedOperation>(method => {
            const original = operationInfo[method] as OpenAPIV3.OperationObject;

            const pathWithoutLeadingSlash = originalPath.startsWith('/') ? originalPath.slice(1) : originalPath;
            const storePath = applyFirstRewrite(rewrites, directoryGetter(originalPath));

            return {
                original,
                storePath,
                group,
                originalPath,
                method,
                invalidationTargets: [],
                parentDescription: operationInfo.summary || operationInfo.description || null,
                hookName: generateHookName(original),
                queryKey: extractQueryKey(original),
                queryParams: extractQueryParams(original),
                isMutation: isOperationMutation(method, original),
                pathSubstituted: replacePathVariables(pathWithoutLeadingSlash),
                pathVariables: extractPathVariables(originalPath),
                isFileUpload: hasFileUpload(original),
                hasPathParams: hasPathParams(original),
            };
        });
    });

    if (config['react-query'].generate_invalidations) {
        for (const operation of allOperations) {
            operation.invalidationTargets = generateInvalidationTargets(operation, allOperations);
        }
    }

    return allOperations;
};

export const removeLeadingSlash = (path: string) => path.replace('/', '');

export const extractSegment = (path: string) => {
    const segments = path.split('/');
    if (segments.length < 2) {
        return;
    }

    return segments[1];
};

export const renderImports = (sourceFile: SourceFile, imports: ImportData[]) => {
    const map = new Map<string, ImportData[]>();

    for (const el of imports) {
        if (!map.has(el.from)) map.set(el.from, []);

        if (!map.get(el.from)!.some(e => e.name === el.name)) map.get(el.from)!.push(el);
    }

    const importFroms = [...map.keys()];

    for (const importFrom of importFroms) {
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
    }
};

const hasYamlFileRegExp = /(\/[_a-z-]+\.yaml)/gi;

export const resolveRefPath = (p: string[]) => {
    if (p.length === 0) return '';
    const repeatingPaths = p.filter(Boolean);
    const paths = [...new Set(repeatingPaths).values()];

    if (paths.length > 21)
        throw new Error(`Possible circular dependency: more than 21 paths in ref resolver\n${paths.join(', ')}`);

    let lastAnchor = '';
    let prevHasFileIndex = -1;

    const result = [] as string[];

    // eslint-disable-next-line unicorn/no-for-loop
    for (let i = 0; i < paths.length; ++i) {
        const path = paths[i];

        const [cleanPath, newLastAnchor] = path.split('#/');
        lastAnchor = newLastAnchor?.split('/').at(-1) || '';

        const base = basename(cleanPath);
        const hasFile = base.endsWith('.yaml');

        if (hasFile) {
            if (prevHasFileIndex !== -1) {
                // eslint-disable-next-line unicorn/prefer-string-replace-all
                result[prevHasFileIndex] = result[prevHasFileIndex].replace(hasYamlFileRegExp, '');
            }

            prevHasFileIndex = i;
        }

        result.push(cleanPath);
    }

    const anchorString = lastAnchor ? `#/${lastAnchor}` : '';

    return join(...result).replaceAll('\\', '/') + anchorString;
};

export const extractRefAnchor = (ref: string) => {
    return ref.split('#/')[1];
};

export const getStackTrace = () => {
    try {
        throw new Error('bla');
    } catch (error: any) {
        const lines = error.stack.split('\n') as string[];
        return lines.map(e => e.trimStart().replace('at ', '')).slice(2);
    }
};

export const runEslintAutoFix = async (directoryPath: string) => {
    return new Promise((resolve, reject) => {
        const eslintProcess = spawn('yarn', ['eslint', '--fix', '--config', '.eslintrc.js', directoryPath, '--quiet'], {
            stdio: ['inherit', 'pipe', 'inherit'],
            shell: true,
            windowsHide: true,
        });

        eslintProcess.on('close', (code: number) => {
            if (code === 0) {
                resolve('');
            } else {
                reject(new Error(`Eslint process exited with code ${code}`));
            }
        });

        eslintProcess.on('error', (err: Error) => {
            reject(err);
        });
    });
};

export const resolvePath = (path: string[]) => {
    const totalPath = path.join('/');
    try {
        const url = new URL(totalPath, 'http://localhost:3000');
        return url.pathname;
    } catch {
        console.error('Invalid path, cant process URL:', path);
        return '';
    }
};
