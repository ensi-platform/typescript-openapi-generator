import { ISchemaLoader } from '../common/types';
import { FileLoader } from './FileLoader';
import { UrlLoader } from './UrlLoader';

export function getSchemaLoaderForOrigin(origin: string): ISchemaLoader {
    if (origin.startsWith('http://') || origin.startsWith('https://')) return new UrlLoader(origin);

    return new FileLoader(origin);
}
