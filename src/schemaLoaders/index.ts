import { ConfigSchema } from '../config/Config';
import { FileLoader } from './FileLoader';
import { UrlLoader } from './UrlLoader';
import { ISchemaLoader } from './types';

export * from './types';

export function getSchemaLoaderForOrigin(origin: string, config: ConfigSchema): ISchemaLoader {
    if (origin.startsWith('http://') || origin.startsWith('https://')) return new UrlLoader(origin, config);

    return new FileLoader(origin);
}
