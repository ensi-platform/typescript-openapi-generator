import path from 'node:path';
import { OpenAPI3 } from 'openapi-typescript';

import { DuplicateResolver } from '../../classes/DuplicateResolver';
import { ILoaderOptionsParam as ILoaderOptionsParameter, Loader } from '../../classes/Loader';
import { RefResolver as ReferenceResolver } from '../../classes/RefResolver';

export async function resolveSpecFromIndex(pathToIndex: string): Promise<OpenAPI3> {
    const duplicateMap = new DuplicateResolver(pathToIndex).resolve();
    const referenceResolver = new ReferenceResolver(pathToIndex, duplicateMap);

    return referenceResolver.resolve();
}

export async function resolveSpec(
    inputUrl: string,
    cacheDir: string,
    loaderOptions: ILoaderOptionsParameter = {}
): Promise<OpenAPI3> {
    const loader = new Loader(inputUrl, cacheDir, loaderOptions);
    await loader.download({});

    const pathToIndex = path.join(cacheDir, new URL(inputUrl).pathname);

    return resolveSpecFromIndex(pathToIndex);
}
