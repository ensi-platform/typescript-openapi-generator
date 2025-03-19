import { spawn } from 'node:child_process';

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

export const cleanPathFromTheFile = (path: string) => path.replace(/\/[^/]+\.yaml$/, '/');

export const resolvePathSegments = (paths: string[]) => {
    if (paths.length === 0) return '';

    const lastPath = paths.at(-1) || '';

    const isLastPathWithFile = /\.[\dA-Za-z]+/.test(lastPath);
    const parsedPath = paths.map((p, i) => {
        if (i === paths.length - 1) return p;
        if (isLastPathWithFile) return p.replace(/\/[^/]+(\.yaml)?(#.*)?$/, '/');
        return p.split('#')[0];
    });

    const segmentsPathArray = parsedPath.join('/').split('/');

    const result = segmentsPathArray
        .reduce<string[]>((acc, segment) => {
            if (!segment) return acc;
            if (segment === '.') {
                const prevSegment = acc.at(-1);
                if (!prevSegment) acc.push(segment);
                return acc;
            }

            if (segment === '..') {
                acc.pop();
                return acc;
            }

            const prevSegment = acc.at(-1);
            if (segment === '#') {
                acc[acc.length - 1] = `${prevSegment}#`;
                return acc;
            }

            acc.push(segment);
            return acc;
        }, [])
        .join('/');

    if (isLastPathWithFile && lastPath.includes('PathId')) console.log(parsedPath, segmentsPathArray, result);

    return result;
};

export const serializeToCamelCase = (str: string) => {
    const words = str.split('_');
    const camelCaseName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');

    return camelCaseName;
};

export const getNestedValue = <T extends Record<string, any>>(obj: T, objPath: string[]) => {
    const target = objPath.reduce<T>((acc, key) => acc[key] || {}, obj);

    return target;
};

export const serializeNodeName = (filePath: string) => {
    const file = filePath.split('/').at(-1);
    if (!file) return;
    const fileName = file.replace('.yaml', '');
    return serializeToCamelCase(fileName);
};
