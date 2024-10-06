import { FileLoader } from './FileLoader';
import { UrlLoader } from './UrlLoader';
import { ISchemaLoader } from './types';

export * from './types';

export function getSchemaLoaderForOrigin(origin: string): ISchemaLoader {
    if (origin.startsWith('http://') || origin.startsWith('https://')) return new UrlLoader(origin);

    return new FileLoader(origin);
}
