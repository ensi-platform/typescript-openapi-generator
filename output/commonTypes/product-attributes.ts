
export interface ReplaceProductAttributesRequest {
  attributes?: ({
    /**
     * Идентификатор атрибута
     */
    property_id?: number;
    /**
     * Значение элемента справочника (string|number|integer|boolean)
     */
    value?: string | boolean | number;
    /**
     * Название значения (например, имя цвета)
     */
    name?: string | null;
    /**
     * Идентификатор значения справочника. Если установлен, то value и name задавать не нужно.
     */
    directory_value_id?: number;
  } & {
    /**
     * Идентификатор предварительно загруженного файла. Допустим только для атрибутов типа IMAGE. Если установлен, то поля value и directory_value_id должны отсутствовать. Поле name может быть задано, например, для описания картинки.
     *
     */
    preload_file_id?: number;
  } & {})[];
}

export interface PatchProductAttributesRequest {
  attributes?: ({
    /**
     * Идентификатор атрибута
     */
    property_id?: number;
    /**
     * Значение элемента справочника (string|number|integer|boolean)
     */
    value?: string | boolean | number;
    name?: string | null;
    /**
     * Идентификатор значения справочника. Если установлен, то value и name задавать не нужно.
     */
    directory_value_id?: number;
  } & {
    /**
     * Идентификатор предварительно загруженного файла. Допустим только для атрибутов типа IMAGE. Если установлен, то поля value и directory_value_id должны отсутствовать. Поле name может быть задано, например, для описания картинки.
     *
     */
    preload_file_id?: number;
  } & {})[];
}

