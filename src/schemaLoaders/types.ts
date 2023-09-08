import { OpenAPI3 } from 'openapi-typescript';

import { Reference } from '../deref';

export interface ISchemaLoader {
    loadIndex: () => Promise<OpenAPI3>;

    getType: () => 'file' | 'http';

    loadJson: (absolutePath: Reference['absolutePath']) => Promise<Record<string, any>>;
}
