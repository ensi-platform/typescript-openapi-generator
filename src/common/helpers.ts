import { $Refs } from '@stoplight/json-schema-ref-parser';
import { camel, kebab } from 'case';
import { spawn } from 'node:child_process';
import { basename, join } from 'node:path';
import type { OpenAPIV3 } from 'openapi-types';
import { PathItemObject, RequestBodyObject } from 'openapi-typescript';
import { SourceFile } from 'ts-morph';

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

export const hasFileUpload = (op: OpenAPIV3.OperationObject, refs: $Refs) => {
    const unresolvedReqBody = op.requestBody;
    if (!unresolvedReqBody) return false;

    const reqBody =
        '$ref' in unresolvedReqBody
            ? (refs.get(
                  unresolvedReqBody.$ref.replace('../index.yaml#/', 'index.yaml#/')
              ) as never as RequestBodyObject)
            : (unresolvedReqBody as RequestBodyObject);

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

    return allOperations.filter(e => {
        if (e.group !== op.group) return false;
        if (!SEARCH_OPCODES.includes(parseOpcode(e))) return false;

        if (e.path.endsWith('id}')) return true;
        if (e.path.endsWith('Id}')) return true;
        if (e.path.endsWith(':search')) return true;
        if (e.path.endsWith(':search-one')) return true;

        return false;
    });
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

export const augmentPathsOperations = (paths: OpenAPIV3.PathsObject, refs: $Refs, debug = false) => {
    const pathNames = Object.keys(paths);

    const allOperations = pathNames.flatMap(pathName => {
        const groupName = extractSegment(pathName)!;
        const unresolvedOperationInfo = paths[pathName]!;

        const operationInfo = unresolvedOperationInfo.$ref
            ? (refs.get(unresolvedOperationInfo?.$ref) as PathItemObject)
            : (unresolvedOperationInfo as PathItemObject);

        const httpMethods = Object.keys(operationInfo) as HttpMethod[];

        if (debug) console.log('path:', pathName, 'group=', groupName);

        return httpMethods.map<AugmentedOperation>(httpMethod => {
            const reqInfo = operationInfo[httpMethod] as OpenAPIV3.OperationObject;

            if (debug) console.log('reqInfo=', reqInfo);

            return {
                original: reqInfo,
                hookName: generateHookName(reqInfo),
                queryKey: extractQueryKey(reqInfo),
                queryParams: extractQueryParams(reqInfo),
                group: groupName,
                path: pathName,
                method: httpMethod,
                isMutation: isOperationMutation(httpMethod, reqInfo),
                pathSubstituted: replacePathVariables(pathName),
                pathVariables: extractPathVariables(pathName),
                invalidationTargets: [],
                isFileUpload: hasFileUpload(reqInfo, refs),
                hasPathParams: hasPathParams(reqInfo),
            };
        });
    });

    for (const operation of allOperations) {
        operation.invalidationTargets = generateInvalidationTargets(operation, allOperations);
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

export const groupOperations = (flatOperation: AugmentedOperation[]) =>
    flatOperation.reduce((acc, cur) => {
        const groupName = extractSegment(cur.path);
        if (!groupName) return acc;

        if (!(groupName in acc)) {
            acc[groupName] = [];
        }

        acc[groupName].push(cur);

        return acc;
    }, {} as Record<string, AugmentedOperation[]>);

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
    const paths = p.filter(Boolean);

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

type Directory = string;
type FileName = string;

export const refToPath = (ref: string): [Directory, FileName] => {
    const refWithoutAnchor = ref.split('#/')[0];

    const fileName = basename(refWithoutAnchor);
    const fileNameNoExt = fileName.replaceAll('.yaml', '');
    const pathWithoutFile = refWithoutAnchor.replaceAll(fileName, '');

    const path = join(pathWithoutFile).replaceAll('\\', '/');

    const outDirectory =
        path
            .split('/')
            .filter(e => e.toLowerCase() !== 'schemas')
            .map(e => camel(e))[0] || 'common';

    const outFileName = camel(fileNameNoExt);

    return [`${outDirectory}/`, outFileName];
};

export const extractRefAnchor = (ref: string) => {
    return ref.split('#/')[1];
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
