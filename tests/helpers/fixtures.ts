import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

function getFixtureRoot(fixtureName: string, apiPath: string) {
    const fixtureBase = fileURLToPath(new URL(`../fixtures/${fixtureName}`, import.meta.url));
    const nestedRoot = path.join(fixtureBase, apiPath);

    return fs.access(nestedRoot).then(
        () => nestedRoot,
        () => fixtureBase
    );
}

export async function createRelativeCacheDir(prefix: string): Promise<string> {
    const cacheDir = path.join('tests', '.tmp', `${prefix}${Date.now()}`);
    await fs.mkdir(cacheDir, { recursive: true });
    return cacheDir;
}

export async function copyFixtureToCache(
    fixtureName: string,
    cacheDir: string,
    apiPath: string
): Promise<string> {
    const source = await getFixtureRoot(fixtureName, apiPath);
    const target = path.join(cacheDir, apiPath);
    await fs.cp(source, target, { recursive: true });

    return path.join(target, 'index.yaml');
}

export function installFetchMock(fixtureName: string, apiPath: string) {
    const fixtureBase = fileURLToPath(new URL(`../fixtures/${fixtureName}`, import.meta.url));
    const prefix = `/${apiPath}/`;

    return async (input: string | URL | Request): Promise<Response> => {
        const fixtureRoot = await getFixtureRoot(fixtureName, apiPath);
        const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
        const {pathname} = new URL(url);
        const relativePath = pathname.startsWith(prefix) ? pathname.slice(prefix.length) : pathname.slice(1);
        const filePath = path.join(fixtureRoot, relativePath || 'index.yaml');

        try {
            const body = await fs.readFile(filePath, 'utf8');
            return new Response(body, { status: 200 });
        } catch {
            const fallbackPath = path.join(fixtureBase, relativePath || 'index.yaml');
            const body = await fs.readFile(fallbackPath, 'utf8');
            return new Response(body, { status: 200 });
        }
    };
}

export async function removeCacheDir(cacheDir: string) {
    await fs.rm(cacheDir, { recursive: true, force: true });
}
