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

    if (lastPath.startsWith('/') || lastPath.startsWith('#/')) {
        return lastPath;
    }

    const isLastPathWithFile = /\.[\dA-Za-z]+/.test(lastPath);
    const parsedPath = paths.map((p, i) => {
        if (i === paths.length - 1) return p;
        if (isLastPathWithFile) return p.replace(/\/[^/]+(\.yaml)?(#.*)?$/, '/');
        return p.split('#')[0];
    });

    if (lastPath === '#/PathId') {
        console.log('resolvePathSegments', paths, isLastPathWithFile, parsedPath);
    }

    const segmentsPathArray = parsedPath.join('/').split('/');

    const result = segmentsPathArray
        .reduce<string[]>((acc, segment, i) => {
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
                acc[i - 1] = `${prevSegment}#`;
                return acc;
            }

            acc.push(segment);
            return acc;
        }, [])
        .join('/');

    if (isLastPathWithFile && lastPath.includes('PathId')) console.log(parsedPath, segmentsPathArray, result);

    return result;
};
