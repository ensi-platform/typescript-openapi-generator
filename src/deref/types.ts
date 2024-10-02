type ITarget = string; // #ModelName -> ModelName
type IAbsolutePath = string;

export interface IReference {
    /**
     * Название целевой структуры в yaml файле
     */
    target: ITarget;
    /**
     *  Оригинальное $ref значение
     **/
    refPath: string;
    /**
     * Абсолютный путь до .yaml файла
     * */
    absolutePath: IAbsolutePath;
}
