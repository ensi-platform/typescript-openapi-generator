import { OpenAPIV3 } from 'openapi-types';

export type ILoadedData = Record<string, any>;

export interface ISchemaLoader {
    /** Загрузка index файла */
    loadIndex: () => Promise<OpenAPIV3.Document | null>;
    /** Метод дозагрузки файлов по ссылкам из index */
    loadJson: (url: string) => Promise<ILoadedData>;
}
