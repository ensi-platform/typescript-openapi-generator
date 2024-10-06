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
