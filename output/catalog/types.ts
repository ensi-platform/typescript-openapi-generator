import { CommonResponse } from "@api/common/types";
import { SearchEnumValuesBody, GetResourceMetaResponse } from "@api/commonTypes/resource-meta";
import { CreateDirectoryValueRequest } from "@api/commonTypes/common";
import { ReplaceProductAttributesRequest, PatchProductAttributesRequest } from "@api/commonTypes/product-attributes";
import { ReplaceProductImagesRequest, PatchProductImagesRequest } from "@api/commonTypes/product-images";
import { RequestBodyMassOperation, EmptyDataResponse, MassOperationResult } from "@api/commonTypes/index";
import { ErrorResponse } from "@api/commonTypes/errors";



export type GetBrandsMetaResponse = GetResourceMetaResponse | ErrorResponse;
export type SearchBrandEnumValuesRequest = SearchEnumValuesBody;

export type SearchBrandEnumValuesResponse = ErrorResponse;
export type PreloadBrandImageRequest = {
                        formData: FormData;
                        
                    }

export type PreloadBrandImageResponse = ErrorResponse;
export type DeleteBrandRequest = { id: number | string };

export type DeleteBrandResponse = EmptyDataResponse | ErrorResponse;

export type GetCategoriesMetaResponse = GetResourceMetaResponse | ErrorResponse;

export type GetCategoryPropertiesMetaResponse = GetResourceMetaResponse | ErrorResponse;
export type SearchCategoryEnumValuesRequest = SearchEnumValuesBody;

export type SearchCategoryEnumValuesResponse = ErrorResponse;
export type DeleteCategoryRequest = { id: number | string };

export type DeleteCategoryResponse = EmptyDataResponse | ErrorResponse;

export type GetPropertiesMetaResponse = GetResourceMetaResponse | ErrorResponse;
export type DeletePropertyRequest = { id: number | string };

export type DeletePropertyResponse = EmptyDataResponse | ErrorResponse;

export type GetPropertiesTypesResponse = ErrorResponse;
export type PreloadDirectoryValueImageRequest = {
                        formData: FormData;
                        
                    }

export type PreloadDirectoryValueImageResponse = ErrorResponse;
export type PreloadDirectoryValueFileRequest = {
                        formData: FormData;
                        
                    }

export type PreloadDirectoryValueFileResponse = ErrorResponse;
export type DeleteDirectoryValueRequest = { id: number | string };

export type DeleteDirectoryValueResponse = EmptyDataResponse | ErrorResponse;
export type PreloadImageRequest = {
                        formData: FormData;
                        
                    }

export type PreloadImageResponse = ErrorResponse;

export type GetProductsMetaResponse = GetResourceMetaResponse | ErrorResponse;
export type DeleteProductRequest = { id: number | string };

export type DeleteProductResponse = EmptyDataResponse | ErrorResponse;
export type SearchProductDraftEnumValuesRequest = SearchEnumValuesBody;

export type SearchProductDraftEnumValuesResponse = ErrorResponse;

export type GetProductTypesResponse = ErrorResponse;
export type DeleteOfferRequest = { id: number | string };

export type DeleteOfferResponse = EmptyDataResponse | ErrorResponse;
export type DeleteCatalogProductGroupRequest = { id: number | string };

export type DeleteCatalogProductGroupResponse = EmptyDataResponse | ErrorResponse;
export type DeleteCatalogProductGroupsRequest = RequestBodyMassOperation;

export type DeleteCatalogProductGroupsResponse = MassOperationResult | ErrorResponse;

export type GetCatalogProductGroupsMetaResponse = GetResourceMetaResponse | ErrorResponse;

export type GetBulkOperationsMetaResponse = GetResourceMetaResponse | ErrorResponse;
export interface MassCreateDirectoryValueRequest {
  items?: ({
    /**
     * Значение элемента справочника (string|number|integer|boolean) Обязателен для заполнения, если не задан preload_file_id.
     *
     */
    value?: string;
    /**
     * Название значения (например, имя цвета)
     */
    name?: string;
    /**
     * Символьный код значения
     */
    code?: string;
  } & {
    /**
     * Идентификатор предзагруженного ранее файла
     */
    preload_file_id?: number;
  })[];
}

export type MassCreateDirectoryValueResponse = ErrorResponse;
export type MassPatchProductsRequest = {
  /**
   * Идентификаторы целевых сущностей
   */
  ids: number[];
} & {
  fields?: {
    category_id?: number | null;
    brand_id?: number | null;
    /**
     * Название товара
     */
    name?: string;
    code?: string | null;
    description?: string | null;
    /**
     * Тип товара из CatalogProductTypeEnum
     */
    type?: number;
    /**
     * Публикация разрешена
     */
    allow_publish?: boolean;
    /**
     * Артикул
     */
    vendor_code?: string;
    weight?: number | null;
    weight_gross?: number | null;
    length?: number | null;
    width?: number | null;
    height?: number | null;
    is_adult?: boolean | null;
    base_price?: number | null;
  } & {
    /**
     * Идентификатор статуса товара из ProductStatus
     */
    status_id?: number;
    /**
     * Комментарий к статусу товара
     */
    status_comment?: string | null;
  };
} & {
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
};

export type MassPatchProductsResponse = ErrorResponse;
export type MassPatchProductsByQueryRequest = {
  filter?: {
    /**
     * Идентификатор(ы) товара
     */
    id?: number;
    /**
     * Название или часть названия товара
     */
    name?: string;
    /**
     * Код(ы) товаров
     */
    code?: string;
    /**
     * Идентификатор(ы) внешней системы
     */
    external_id?: string;
    /**
     * Идентификатор(ы) категорий
     */
    category_id?: number;
    /**
     * Статус выгрузки товара на торговые площадки из ProductStatusEnum
     */
    status_id?: number;
    /**
     * Активность товара для витрины
     */
    allow_publish?: boolean;
    /**
     * Артикул
     */
    vendor_code?: string;
    /**
     * Штрихкод (EAN)
     */
    barcode?: string;
    /**
     * Товар 18+
     */
    is_adult?: boolean;
    /**
     * Тип товара из CatalogProductTypeEnum
     */
    type?: number;
    brand_id?: number[];
    /**
     * Состоит ли товар хотя бы в одной склейке
     */
    has_product_groups?: boolean;
    /**
     * Есть ли у товара хотя бы один незаполненный обязательный атрибут
     */
    has_no_filled_required_attributes?: boolean;
    /**
     * Относится к категории с хотя бы одним атрибутом для склейки
     */
    category_has_is_gluing?: boolean;
    /**
     * Дата создания меньше или равна
     */
    created_at_lte?: string;
    /**
     * Дата создания больше или равна
     */
    created_at_gte?: string;
    /**
     * Дата обновления меньше или равна
     */
    updated_at_lte?: string;
    /**
     * Дата обновления больше или равна
     */
    updated_at_gte?: string;
  };
  fields?: {
    category_id?: number | null;
    brand_id?: number | null;
    /**
     * Название товара
     */
    name?: string;
    code?: string | null;
    description?: string | null;
    /**
     * Тип товара из CatalogProductTypeEnum
     */
    type?: number;
    /**
     * Публикация разрешена
     */
    allow_publish?: boolean;
    /**
     * Артикул
     */
    vendor_code?: string;
    weight?: number | null;
    weight_gross?: number | null;
    length?: number | null;
    width?: number | null;
    height?: number | null;
    is_adult?: boolean | null;
    base_price?: number | null;
  } & {
    /**
     * Идентификатор статуса товара из ProductStatus
     */
    status_id?: number;
    status_comment?: string | null;
  };
} & {
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
};

export type MassPatchProductsByQueryResponse = EmptyDataResponse | ErrorResponse;
export interface GetProductsCommonAttributesRequest {
  filter?: {
    /**
     * Идентификатор(ы) товара
     */
    id?: number;
    /**
     * Название или часть названия товара
     */
    name?: string;
    /**
     * Код(ы) товаров
     */
    code?: string;
    /**
     * Идентификатор(ы) внешней системы
     */
    external_id?: string;
    /**
     * Идентификатор(ы) категорий
     */
    category_id?: number;
    /**
     * Статус выгрузки товара на торговые площадки из ProductStatusEnum
     */
    status_id?: number;
    /**
     * Активность товара для витрины
     */
    allow_publish?: boolean;
    /**
     * Артикул
     */
    vendor_code?: string;
    /**
     * Штрихкод (EAN)
     */
    barcode?: string;
    /**
     * Товар 18+
     */
    is_adult?: boolean;
    /**
     * Тип товара из CatalogProductTypeEnum
     */
    type?: number;
    brand_id?: number[];
    /**
     * Состоит ли товар хотя бы в одной склейке
     */
    has_product_groups?: boolean;
    /**
     * Есть ли у товара хотя бы один незаполненный обязательный атрибут
     */
    has_no_filled_required_attributes?: boolean;
    /**
     * Относится к категории с хотя бы одним атрибутом для склейки
     */
    category_has_is_gluing?: boolean;
    /**
     * Дата создания меньше или равна
     */
    created_at_lte?: string;
    /**
     * Дата создания больше или равна
     */
    created_at_gte?: string;
    /**
     * Дата обновления меньше или равна
     */
    updated_at_lte?: string;
    /**
     * Дата обновления больше или равна
     */
    updated_at_gte?: string;
  };
}

export type GetProductsCommonAttributesResponse = ErrorResponse;
export interface DeleteProductImageRequest {
  /**
   * Идентификатор удаляемого файла
   */
  file_id: number;
}

export type DeleteProductImageResponse = EmptyDataResponse | ErrorResponse;


        export type GetBrandResponseData = {
  /**
   * Идентификатор бренда
   */
  id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
  image_url?: string | null;
  logo_url?: string | null;
} & {
  /**
   * Название бренда
   */
  name?: string;
  /**
   * Активность бренда
   */
  is_active?: boolean;
  code?: string | null;
  description?: string | null;
} & {};

        export type GetBrandResponseMeta = {};

        export type GetBrandResponse = CommonResponse<GetBrandResponseData, GetBrandResponseMeta>;
        export type UploadBrandImageRequest = {
                        formData: FormData;
                        id: number | string;
                    }


        export type UploadBrandImageResponseData = {
  /**
   * Идентификатор бренда
   */
  id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
  image_url?: string | null;
  logo_url?: string | null;
} & {
  /**
   * Название бренда
   */
  name?: string;
  /**
   * Активность бренда
   */
  is_active?: boolean;
  code?: string | null;
  description?: string | null;
} & {};

        export type UploadBrandImageResponseMeta = {};

        export type UploadBrandImageResponse = CommonResponse<UploadBrandImageResponseData, UploadBrandImageResponseMeta>;
        export type DeleteBrandImageRequest = { id: number | string };


        export type DeleteBrandImageResponseData = {
  /**
   * Идентификатор бренда
   */
  id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
  image_url?: string | null;
  logo_url?: string | null;
} & {
  /**
   * Название бренда
   */
  name?: string;
  /**
   * Активность бренда
   */
  is_active?: boolean;
  code?: string | null;
  description?: string | null;
} & {};

        export type DeleteBrandImageResponseMeta = {};

        export type DeleteBrandImageResponse = CommonResponse<DeleteBrandImageResponseData, DeleteBrandImageResponseMeta>;
        


        export type GetCategoryResponseData = {
  /**
   * Идентификатор категории
   */
  id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
  /**
   * Признак активности с учетом иерархии
   */
  is_real_active?: boolean;
} & {
  /**
   * Название категории
   */
  name?: string;
  /**
   * Код категории
   */
  code?: string;
  parent_id?: number | null;
  /**
   * Категория наследует атрибуты родительской
   */
  is_inherits_properties?: boolean;
  /**
   * Признак активности данной категории
   */
  is_active?: boolean;
} & {
  properties?: {
    /**
     * Название свойства
     */
    name?: string;
    /**
     * Публичное наименование
     */
    display_name?: string;
    /**
     * Код свойства
     */
    code?: string;
    /**
     * Тип свойства из PropertyTypeEnum
     */
    type?: string;
    /**
     * Подсказка при заполнении для значения
     */
    hint_value?: string;
    /**
     * Подсказка при заполнении для названия значения
     */
    hint_value_name?: string;
    /**
     * Поддерживает множественные значения
     */
    is_multiple?: boolean;
    /**
     * Выводится в фильтрах на витрине
     */
    is_filterable?: boolean;
    /**
     * Выводить на витрине
     */
    is_public?: boolean;
    /**
     * Активность атрибут
     */
    is_active?: boolean;
    /**
     * Атрибут имеет справочник значений
     */
    has_directory?: boolean;
    /**
     * Наследуемой от родительской категории атрибут
     */
    is_inherited?: boolean;
    /**
     * Атрибут обязателен для заполнения
     */
    is_required?: boolean;
    /**
     * Признак системного атрибута
     */
    is_system?: boolean;
    /**
     * Атрибут модерируется
     */
    is_moderated?: boolean;
    /**
     * Свойство используется для склейки товаров
     */
    is_gluing?: boolean;
    /**
     * Признак общего для всех категорий атрибута
     */
    is_common?: boolean;
    /**
     * Идентификатор атрибута, которому принадлежит значение
     */
    property_id?: number;
  }[];
  hidden_properties?: {
    /**
     * Название свойства
     */
    name?: string;
    /**
     * Публичное наименование
     */
    display_name?: string;
    /**
     * Код свойства
     */
    code?: string;
    /**
     * Тип свойства из PropertyTypeEnum
     */
    type?: string;
    /**
     * Подсказка при заполнении для значения
     */
    hint_value?: string;
    /**
     * Подсказка при заполнении для названия значения
     */
    hint_value_name?: string;
    /**
     * Поддерживает множественные значения
     */
    is_multiple?: boolean;
    /**
     * Выводится в фильтрах на витрине
     */
    is_filterable?: boolean;
    /**
     * Выводить на витрине
     */
    is_public?: boolean;
    /**
     * Активность атрибут
     */
    is_active?: boolean;
    /**
     * Атрибут имеет справочник значений
     */
    has_directory?: boolean;
    /**
     * Наследуемой от родительской категории атрибут
     */
    is_inherited?: boolean;
    /**
     * Атрибут обязателен для заполнения
     */
    is_required?: boolean;
    /**
     * Признак системного атрибута
     */
    is_system?: boolean;
    /**
     * Атрибут модерируется
     */
    is_moderated?: boolean;
    /**
     * Свойство используется для склейки товаров
     */
    is_gluing?: boolean;
    /**
     * Признак общего для всех категорий атрибута
     */
    is_common?: boolean;
    /**
     * Идентификатор атрибута, которому принадлежит значение
     */
    property_id?: number;
  }[];
};

        export type GetCategoryResponseMeta = {};

        export type GetCategoryResponse = CommonResponse<GetCategoryResponseData, GetCategoryResponseMeta>;
        


        export type GetCategoriesTreeResponseData = {
  /**
   * Идентификатор категории
   */
  id?: number;
  /**
   * Название категории
   */
  name?: string;
  /**
   * Код категории
   */
  code?: string;
  /**
   * Дочерние категории, если есть
   */
  children?: {}[];
}[];

        export type GetCategoriesTreeResponseMeta = {};

        export type GetCategoriesTreeResponse = CommonResponse<GetCategoriesTreeResponseData, GetCategoriesTreeResponseMeta>;
        


        export type GetPropertyResponseData = {
  /**
   * Идентификатор атрибута
   */
  id?: number;
  /**
   * Признак системного неизменяемого атрибута
   */
  is_system?: boolean;
  /**
   * Признак общего для всех категорий атрибута
   */
  is_common?: boolean;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Название свойства
   */
  name?: string;
  /**
   * Публичное наименование
   */
  display_name?: string;
  /**
   * Код свойства
   */
  code?: string;
  /**
   * Тип свойства из PropertyTypeEnum
   */
  type?: string;
  hint_value?: string | null;
  hint_value_name?: string | null;
  /**
   * Поддерживает множественные значения
   */
  is_multiple?: boolean;
  /**
   * Выводится в фильтрах на витрине
   */
  is_filterable?: boolean;
  /**
   * Выводить на витрине
   */
  is_public?: boolean;
  /**
   * Активность атрибута
   */
  is_active?: boolean;
  /**
   * Обязательность заполнения для общего (is_common=true) атрибута
   */
  is_required?: boolean;
  /**
   * Атрибут имеет справочник значений
   */
  has_directory?: boolean;
  /**
   * Атрибут модерируется
   */
  is_moderated?: boolean;
} & {
  directory?: ({
    /**
     * Идентификатор значения
     */
    id?: number;
    /**
     * URL файла
     */
    url?: string | null;
    /**
     * Тип значения из перечисления CatalogPropertyTypeEnum
     */
    type?: string;
    /**
     * Идентификатор атрибута, которому принадлежит значение
     */
    property_id?: number;
  } & {
    /**
     * Значение элемента справочника (string|number|integer|boolean) Обязателен для заполнения, если не задан preload_file_id.
     *
     */
    value?: string;
    /**
     * Название значения (например, имя цвета)
     */
    name?: string;
    /**
     * Символьный код значения
     */
    code?: string;
  })[];
};

        export type GetPropertyResponseMeta = {};

        export type GetPropertyResponse = CommonResponse<GetPropertyResponseData, GetPropertyResponseMeta>;
        export type CreateDirectoryValueRequest = CreateDirectoryValueRequest;


        export type CreateDirectoryValueResponseData = {
  /**
   * Идентификатор значения
   */
  id?: number;
  url?: string | null;
  /**
   * Тип значения из перечисления CatalogPropertyTypeEnum
   */
  type?: string;
  /**
   * Идентификатор атрибута, которому принадлежит значение
   */
  property_id?: number;
} & {
  /**
   * Значение элемента справочника (string|number|integer|boolean) Обязателен для заполнения, если не задан preload_file_id.
   *
   */
  value?: string;
  /**
   * Название значения (например, имя цвета)
   */
  name?: string;
  /**
   * Символьный код значения
   */
  code?: string;
} & {
  /**
   * Идентификатор атрибута, которому принадлежит значение
   */
  property_id?: number;
};

        export type CreateDirectoryValueResponseMeta = {};

        export type CreateDirectoryValueResponse = CommonResponse<CreateDirectoryValueResponseData, CreateDirectoryValueResponseMeta>;
        


        export type GetDirectoryValueResponseData = {
  /**
   * Идентификатор значения
   */
  id?: number;
  url?: string | null;
  /**
   * Тип значения из перечисления CatalogPropertyTypeEnum
   */
  type?: string;
  /**
   * Идентификатор атрибута, которому принадлежит значение
   */
  property_id?: number;
} & {
  /**
   * Значение элемента справочника (string|number|integer|boolean) Обязателен для заполнения, если не задан preload_file_id.
   *
   */
  value?: string;
  /**
   * Название значения (например, имя цвета)
   */
  name?: string;
  /**
   * Символьный код значения
   */
  code?: string;
} & {
  /**
   * Идентификатор атрибута, которому принадлежит значение
   */
  property_id?: number;
};

        export type GetDirectoryValueResponseMeta = {};

        export type GetDirectoryValueResponse = CommonResponse<GetDirectoryValueResponseData, GetDirectoryValueResponseMeta>;
        


        export type GetProductResponseData = {
  /**
   * Идентификатор товара
   */
  id: number;
  /**
   * Дата создания
   */
  created_at: string;
  /**
   * Дата обновления
   */
  updated_at: string;
} & {
  main_image_url: string | null;
  main_image_file: string | null;
} & ({
    external_id?: string | null;
    barcode?: string | null;
  } & {
    category_id?: number | null;
    brand_id?: number | null;
    /**
     * Название товара
     */
    name?: string;
    code?: string | null;
    description?: string | null;
    /**
     * Тип товара из CatalogProductTypeEnum
     */
    type?: number;
    /**
     * Публикация разрешена
     */
    allow_publish?: boolean;
    /**
     * Артикул
     */
    vendor_code?: string;
    weight?: number | null;
    weight_gross?: number | null;
    length?: number | null;
    width?: number | null;
    height?: number | null;
    is_adult?: boolean | null;
    base_price?: number | null;
  }) & {
    brand?: {
      /**
       * Идентификатор бренда
       */
      id?: number;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
      image_url?: string | null;
      logo_url?: string | null;
    } & {
      /**
       * Название бренда
       */
      name?: string;
      /**
       * Активность бренда
       */
      is_active?: boolean;
      code?: string | null;
      description?: string | null;
    } & {};
    category?: {
      /**
       * Идентификатор категории
       */
      id?: number;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
      /**
       * Признак активности с учетом иерархии
       */
      is_real_active?: boolean;
    } & {
      /**
       * Название категории
       */
      name?: string;
      /**
       * Код категории
       */
      code?: string;
      parent_id?: number | null;
      /**
       * Категория наследует атрибуты родительской
       */
      is_inherits_properties?: boolean;
      /**
       * Признак активности данной категории
       */
      is_active?: boolean;
    } & {
      properties?: {
        /**
         * Название свойства
         */
        name?: string;
        /**
         * Публичное наименование
         */
        display_name?: string;
        /**
         * Код свойства
         */
        code?: string;
        /**
         * Тип свойства из PropertyTypeEnum
         */
        type?: string;
        /**
         * Подсказка при заполнении для значения
         */
        hint_value?: string;
        /**
         * Подсказка при заполнении для названия значения
         */
        hint_value_name?: string;
        /**
         * Поддерживает множественные значения
         */
        is_multiple?: boolean;
        /**
         * Выводится в фильтрах на витрине
         */
        is_filterable?: boolean;
        /**
         * Выводить на витрине
         */
        is_public?: boolean;
        /**
         * Активность атрибут
         */
        is_active?: boolean;
        /**
         * Атрибут имеет справочник значений
         */
        has_directory?: boolean;
        /**
         * Наследуемой от родительской категории атрибут
         */
        is_inherited?: boolean;
        /**
         * Атрибут обязателен для заполнения
         */
        is_required?: boolean;
        /**
         * Признак системного атрибута
         */
        is_system?: boolean;
        /**
         * Атрибут модерируется
         */
        is_moderated?: boolean;
        /**
         * Свойство используется для склейки товаров
         */
        is_gluing?: boolean;
        /**
         * Признак общего для всех категорий атрибута
         */
        is_common?: boolean;
        /**
         * Идентификатор атрибута, которому принадлежит значение
         */
        property_id?: number;
      }[];
      hidden_properties?: {
        /**
         * Название свойства
         */
        name?: string;
        /**
         * Публичное наименование
         */
        display_name?: string;
        /**
         * Код свойства
         */
        code?: string;
        /**
         * Тип свойства из PropertyTypeEnum
         */
        type?: string;
        /**
         * Подсказка при заполнении для значения
         */
        hint_value?: string;
        /**
         * Подсказка при заполнении для названия значения
         */
        hint_value_name?: string;
        /**
         * Поддерживает множественные значения
         */
        is_multiple?: boolean;
        /**
         * Выводится в фильтрах на витрине
         */
        is_filterable?: boolean;
        /**
         * Выводить на витрине
         */
        is_public?: boolean;
        /**
         * Активность атрибут
         */
        is_active?: boolean;
        /**
         * Атрибут имеет справочник значений
         */
        has_directory?: boolean;
        /**
         * Наследуемой от родительской категории атрибут
         */
        is_inherited?: boolean;
        /**
         * Атрибут обязателен для заполнения
         */
        is_required?: boolean;
        /**
         * Признак системного атрибута
         */
        is_system?: boolean;
        /**
         * Атрибут модерируется
         */
        is_moderated?: boolean;
        /**
         * Свойство используется для склейки товаров
         */
        is_gluing?: boolean;
        /**
         * Признак общего для всех категорий атрибута
         */
        is_common?: boolean;
        /**
         * Идентификатор атрибута, которому принадлежит значение
         */
        property_id?: number;
      }[];
    };
    images?: ({
      /**
       * Идентификатор картинки
       */
      id?: number;
      /**
       * true означает, что картинка хранится во внешнем источнике, false - в хранилище PIM
       */
      is_external?: boolean;
      /**
       * URL картинки
       */
      url?: string;
    } & {
      name?: string | null;
      /**
       * Порядок сортирковки в коллекции картинок
       */
      sort?: number;
    })[];
    attributes?: ({
      /**
       * Тип значения из PropertyTypeEnum
       */
      type?: string;
      /**
       * Ссылка на файл
       */
      url?: string;
    } & {
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
    })[];
    product_groups?: ({
      /**
       * Идентификатор склейки
       */
      id?: number;
      /**
       * Кол-во товаров в склейке
       */
      products_count?: number;
      main_product_image?: string | null;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * Идентификатор категории
       */
      category_id?: number;
      main_product_id?: number | null;
      /**
       * Название
       */
      name?: string;
      /**
       * Активность
       */
      is_active?: boolean;
    } & {
      category?: {
        /**
         * Идентификатор категории
         */
        id?: number;
        /**
         * Дата создания
         */
        created_at?: string;
        /**
         * Дата обновления
         */
        updated_at?: string;
        /**
         * Признак активности с учетом иерархии
         */
        is_real_active?: boolean;
      } & {
        /**
         * Название категории
         */
        name?: string;
        /**
         * Код категории
         */
        code?: string;
        parent_id?: number | null;
        /**
         * Категория наследует атрибуты родительской
         */
        is_inherits_properties?: boolean;
        /**
         * Признак активности данной категории
         */
        is_active?: boolean;
      } & {
        properties?: {
          /**
           * Название свойства
           */
          name?: string;
          /**
           * Публичное наименование
           */
          display_name?: string;
          /**
           * Код свойства
           */
          code?: string;
          /**
           * Тип свойства из PropertyTypeEnum
           */
          type?: string;
          /**
           * Подсказка при заполнении для значения
           */
          hint_value?: string;
          /**
           * Подсказка при заполнении для названия значения
           */
          hint_value_name?: string;
          /**
           * Поддерживает множественные значения
           */
          is_multiple?: boolean;
          /**
           * Выводится в фильтрах на витрине
           */
          is_filterable?: boolean;
          /**
           * Выводить на витрине
           */
          is_public?: boolean;
          /**
           * Активность атрибут
           */
          is_active?: boolean;
          /**
           * Атрибут имеет справочник значений
           */
          has_directory?: boolean;
          /**
           * Наследуемой от родительской категории атрибут
           */
          is_inherited?: boolean;
          /**
           * Атрибут обязателен для заполнения
           */
          is_required?: boolean;
          /**
           * Признак системного атрибута
           */
          is_system?: boolean;
          /**
           * Атрибут модерируется
           */
          is_moderated?: boolean;
          /**
           * Свойство используется для склейки товаров
           */
          is_gluing?: boolean;
          /**
           * Признак общего для всех категорий атрибута
           */
          is_common?: boolean;
          /**
           * Идентификатор атрибута, которому принадлежит значение
           */
          property_id?: number;
        }[];
        hidden_properties?: {
          /**
           * Название свойства
           */
          name?: string;
          /**
           * Публичное наименование
           */
          display_name?: string;
          /**
           * Код свойства
           */
          code?: string;
          /**
           * Тип свойства из PropertyTypeEnum
           */
          type?: string;
          /**
           * Подсказка при заполнении для значения
           */
          hint_value?: string;
          /**
           * Подсказка при заполнении для названия значения
           */
          hint_value_name?: string;
          /**
           * Поддерживает множественные значения
           */
          is_multiple?: boolean;
          /**
           * Выводится в фильтрах на витрине
           */
          is_filterable?: boolean;
          /**
           * Выводить на витрине
           */
          is_public?: boolean;
          /**
           * Активность атрибут
           */
          is_active?: boolean;
          /**
           * Атрибут имеет справочник значений
           */
          has_directory?: boolean;
          /**
           * Наследуемой от родительской категории атрибут
           */
          is_inherited?: boolean;
          /**
           * Атрибут обязателен для заполнения
           */
          is_required?: boolean;
          /**
           * Признак системного атрибута
           */
          is_system?: boolean;
          /**
           * Атрибут модерируется
           */
          is_moderated?: boolean;
          /**
           * Свойство используется для склейки товаров
           */
          is_gluing?: boolean;
          /**
           * Признак общего для всех категорий атрибута
           */
          is_common?: boolean;
          /**
           * Идентификатор атрибута, которому принадлежит значение
           */
          property_id?: number;
        }[];
      };
      main_product?: {
        /**
         * Идентификатор товара
         */
        id: number;
        /**
         * Дата создания
         */
        created_at: string;
        /**
         * Дата обновления
         */
        updated_at: string;
      } & ({
        external_id?: string | null;
        barcode?: string | null;
      } & {
        category_id?: number | null;
        brand_id?: number | null;
        /**
         * Название товара
         */
        name?: string;
        code?: string | null;
        description?: string | null;
        /**
         * Тип товара из CatalogProductTypeEnum
         */
        type?: number;
        /**
         * Публикация разрешена
         */
        allow_publish?: boolean;
        /**
         * Артикул
         */
        vendor_code?: string;
        weight?: number | null;
        weight_gross?: number | null;
        length?: number | null;
        width?: number | null;
        height?: number | null;
        is_adult?: boolean | null;
        base_price?: number | null;
      }) & {};
      products?: ({
        /**
         * Идентификатор товара
         */
        id: number;
        /**
         * Дата создания
         */
        created_at: string;
        /**
         * Дата обновления
         */
        updated_at: string;
      } & ({
        external_id?: string | null;
        barcode?: string | null;
      } & {
        category_id?: number | null;
        brand_id?: number | null;
        /**
         * Название товара
         */
        name?: string;
        code?: string | null;
        description?: string | null;
        /**
         * Тип товара из CatalogProductTypeEnum
         */
        type?: number;
        /**
         * Публикация разрешена
         */
        allow_publish?: boolean;
        /**
         * Артикул
         */
        vendor_code?: string;
        weight?: number | null;
        weight_gross?: number | null;
        length?: number | null;
        width?: number | null;
        height?: number | null;
        is_adult?: boolean | null;
        base_price?: number | null;
      }) & {})[];
    } & {})[];
    /**
     * Есть ли незаполненные обязательные атрибуты
     */
    no_filled_required_attributes?: boolean;
  } & {};

        export type GetProductResponseMeta = {};

        export type GetProductResponse = CommonResponse<GetProductResponseData, GetProductResponseMeta>;
        


        export type GetProductDraftResponseData = {
  /**
   * Идентификатор товара
   */
  id: number;
  /**
   * Дата создания
   */
  created_at: string;
  /**
   * Дата обновления
   */
  updated_at: string;
} & ({
  external_id?: string | null;
  barcode?: string | null;
} & {
  category_id?: number | null;
  brand_id?: number | null;
  /**
   * Название товара
   */
  name?: string;
  code?: string | null;
  description?: string | null;
  /**
   * Тип товара из CatalogProductTypeEnum
   */
  type?: number;
  /**
   * Публикация разрешена
   */
  allow_publish?: boolean;
  /**
   * Артикул
   */
  vendor_code?: string;
  weight?: number | null;
  weight_gross?: number | null;
  length?: number | null;
  width?: number | null;
  height?: number | null;
  is_adult?: boolean | null;
  base_price?: number | null;
}) & {
    brand?: {
      /**
       * Идентификатор бренда
       */
      id?: number;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
      image_url?: string | null;
      logo_url?: string | null;
    } & {
      /**
       * Название бренда
       */
      name?: string;
      /**
       * Активность бренда
       */
      is_active?: boolean;
      code?: string | null;
      description?: string | null;
    } & {};
    category?: {
      /**
       * Идентификатор категории
       */
      id?: number;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
      /**
       * Признак активности с учетом иерархии
       */
      is_real_active?: boolean;
    } & {
      /**
       * Название категории
       */
      name?: string;
      /**
       * Код категории
       */
      code?: string;
      parent_id?: number | null;
      /**
       * Категория наследует атрибуты родительской
       */
      is_inherits_properties?: boolean;
      /**
       * Признак активности данной категории
       */
      is_active?: boolean;
    } & {
      properties?: {
        /**
         * Название свойства
         */
        name?: string;
        /**
         * Публичное наименование
         */
        display_name?: string;
        /**
         * Код свойства
         */
        code?: string;
        /**
         * Тип свойства из PropertyTypeEnum
         */
        type?: string;
        /**
         * Подсказка при заполнении для значения
         */
        hint_value?: string;
        /**
         * Подсказка при заполнении для названия значения
         */
        hint_value_name?: string;
        /**
         * Поддерживает множественные значения
         */
        is_multiple?: boolean;
        /**
         * Выводится в фильтрах на витрине
         */
        is_filterable?: boolean;
        /**
         * Выводить на витрине
         */
        is_public?: boolean;
        /**
         * Активность атрибут
         */
        is_active?: boolean;
        /**
         * Атрибут имеет справочник значений
         */
        has_directory?: boolean;
        /**
         * Наследуемой от родительской категории атрибут
         */
        is_inherited?: boolean;
        /**
         * Атрибут обязателен для заполнения
         */
        is_required?: boolean;
        /**
         * Признак системного атрибута
         */
        is_system?: boolean;
        /**
         * Атрибут модерируется
         */
        is_moderated?: boolean;
        /**
         * Свойство используется для склейки товаров
         */
        is_gluing?: boolean;
        /**
         * Признак общего для всех категорий атрибута
         */
        is_common?: boolean;
        /**
         * Идентификатор атрибута, которому принадлежит значение
         */
        property_id?: number;
      }[];
      hidden_properties?: {
        /**
         * Название свойства
         */
        name?: string;
        /**
         * Публичное наименование
         */
        display_name?: string;
        /**
         * Код свойства
         */
        code?: string;
        /**
         * Тип свойства из PropertyTypeEnum
         */
        type?: string;
        /**
         * Подсказка при заполнении для значения
         */
        hint_value?: string;
        /**
         * Подсказка при заполнении для названия значения
         */
        hint_value_name?: string;
        /**
         * Поддерживает множественные значения
         */
        is_multiple?: boolean;
        /**
         * Выводится в фильтрах на витрине
         */
        is_filterable?: boolean;
        /**
         * Выводить на витрине
         */
        is_public?: boolean;
        /**
         * Активность атрибут
         */
        is_active?: boolean;
        /**
         * Атрибут имеет справочник значений
         */
        has_directory?: boolean;
        /**
         * Наследуемой от родительской категории атрибут
         */
        is_inherited?: boolean;
        /**
         * Атрибут обязателен для заполнения
         */
        is_required?: boolean;
        /**
         * Признак системного атрибута
         */
        is_system?: boolean;
        /**
         * Атрибут модерируется
         */
        is_moderated?: boolean;
        /**
         * Свойство используется для склейки товаров
         */
        is_gluing?: boolean;
        /**
         * Признак общего для всех категорий атрибута
         */
        is_common?: boolean;
        /**
         * Идентификатор атрибута, которому принадлежит значение
         */
        property_id?: number;
      }[];
    };
    images?: ({
      /**
       * Идентификатор картинки
       */
      id?: number;
      /**
       * true означает, что картинка хранится во внешнем источнике, false - в хранилище PIM
       */
      is_external?: boolean;
      /**
       * URL картинки
       */
      url?: string;
    } & {
      name?: string | null;
      /**
       * Порядок сортирковки в коллекции картинок
       */
      sort?: number;
    })[];
    attributes?: ({
      /**
       * Тип значения из PropertyTypeEnum
       */
      type?: string;
      /**
       * Ссылка на файл
       */
      url?: string;
    } & {
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
    })[];
    product_groups?: ({
      /**
       * Идентификатор склейки
       */
      id?: number;
      /**
       * Кол-во товаров в склейке
       */
      products_count?: number;
      main_product_image?: string | null;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * Идентификатор категории
       */
      category_id?: number;
      main_product_id?: number | null;
      /**
       * Название
       */
      name?: string;
      /**
       * Активность
       */
      is_active?: boolean;
    } & {
      category?: {
        /**
         * Идентификатор категории
         */
        id?: number;
        /**
         * Дата создания
         */
        created_at?: string;
        /**
         * Дата обновления
         */
        updated_at?: string;
        /**
         * Признак активности с учетом иерархии
         */
        is_real_active?: boolean;
      } & {
        /**
         * Название категории
         */
        name?: string;
        /**
         * Код категории
         */
        code?: string;
        parent_id?: number | null;
        /**
         * Категория наследует атрибуты родительской
         */
        is_inherits_properties?: boolean;
        /**
         * Признак активности данной категории
         */
        is_active?: boolean;
      } & {
        properties?: {
          /**
           * Название свойства
           */
          name?: string;
          /**
           * Публичное наименование
           */
          display_name?: string;
          /**
           * Код свойства
           */
          code?: string;
          /**
           * Тип свойства из PropertyTypeEnum
           */
          type?: string;
          /**
           * Подсказка при заполнении для значения
           */
          hint_value?: string;
          /**
           * Подсказка при заполнении для названия значения
           */
          hint_value_name?: string;
          /**
           * Поддерживает множественные значения
           */
          is_multiple?: boolean;
          /**
           * Выводится в фильтрах на витрине
           */
          is_filterable?: boolean;
          /**
           * Выводить на витрине
           */
          is_public?: boolean;
          /**
           * Активность атрибут
           */
          is_active?: boolean;
          /**
           * Атрибут имеет справочник значений
           */
          has_directory?: boolean;
          /**
           * Наследуемой от родительской категории атрибут
           */
          is_inherited?: boolean;
          /**
           * Атрибут обязателен для заполнения
           */
          is_required?: boolean;
          /**
           * Признак системного атрибута
           */
          is_system?: boolean;
          /**
           * Атрибут модерируется
           */
          is_moderated?: boolean;
          /**
           * Свойство используется для склейки товаров
           */
          is_gluing?: boolean;
          /**
           * Признак общего для всех категорий атрибута
           */
          is_common?: boolean;
          /**
           * Идентификатор атрибута, которому принадлежит значение
           */
          property_id?: number;
        }[];
        hidden_properties?: {
          /**
           * Название свойства
           */
          name?: string;
          /**
           * Публичное наименование
           */
          display_name?: string;
          /**
           * Код свойства
           */
          code?: string;
          /**
           * Тип свойства из PropertyTypeEnum
           */
          type?: string;
          /**
           * Подсказка при заполнении для значения
           */
          hint_value?: string;
          /**
           * Подсказка при заполнении для названия значения
           */
          hint_value_name?: string;
          /**
           * Поддерживает множественные значения
           */
          is_multiple?: boolean;
          /**
           * Выводится в фильтрах на витрине
           */
          is_filterable?: boolean;
          /**
           * Выводить на витрине
           */
          is_public?: boolean;
          /**
           * Активность атрибут
           */
          is_active?: boolean;
          /**
           * Атрибут имеет справочник значений
           */
          has_directory?: boolean;
          /**
           * Наследуемой от родительской категории атрибут
           */
          is_inherited?: boolean;
          /**
           * Атрибут обязателен для заполнения
           */
          is_required?: boolean;
          /**
           * Признак системного атрибута
           */
          is_system?: boolean;
          /**
           * Атрибут модерируется
           */
          is_moderated?: boolean;
          /**
           * Свойство используется для склейки товаров
           */
          is_gluing?: boolean;
          /**
           * Признак общего для всех категорий атрибута
           */
          is_common?: boolean;
          /**
           * Идентификатор атрибута, которому принадлежит значение
           */
          property_id?: number;
        }[];
      };
      main_product?: {
        /**
         * Идентификатор товара
         */
        id: number;
        /**
         * Дата создания
         */
        created_at: string;
        /**
         * Дата обновления
         */
        updated_at: string;
      } & ({
        external_id?: string | null;
        barcode?: string | null;
      } & {
        category_id?: number | null;
        brand_id?: number | null;
        /**
         * Название товара
         */
        name?: string;
        code?: string | null;
        description?: string | null;
        /**
         * Тип товара из CatalogProductTypeEnum
         */
        type?: number;
        /**
         * Публикация разрешена
         */
        allow_publish?: boolean;
        /**
         * Артикул
         */
        vendor_code?: string;
        weight?: number | null;
        weight_gross?: number | null;
        length?: number | null;
        width?: number | null;
        height?: number | null;
        is_adult?: boolean | null;
        base_price?: number | null;
      }) & {};
      products?: ({
        /**
         * Идентификатор товара
         */
        id: number;
        /**
         * Дата создания
         */
        created_at: string;
        /**
         * Дата обновления
         */
        updated_at: string;
      } & ({
        external_id?: string | null;
        barcode?: string | null;
      } & {
        category_id?: number | null;
        brand_id?: number | null;
        /**
         * Название товара
         */
        name?: string;
        code?: string | null;
        description?: string | null;
        /**
         * Тип товара из CatalogProductTypeEnum
         */
        type?: number;
        /**
         * Публикация разрешена
         */
        allow_publish?: boolean;
        /**
         * Артикул
         */
        vendor_code?: string;
        weight?: number | null;
        weight_gross?: number | null;
        length?: number | null;
        width?: number | null;
        height?: number | null;
        is_adult?: boolean | null;
        base_price?: number | null;
      }) & {})[];
    } & {})[];
    /**
     * Есть ли незаполненные обязательные атрибуты
     */
    no_filled_required_attributes?: boolean;
  } & {};

        export type GetProductDraftResponseMeta = {};

        export type GetProductDraftResponse = CommonResponse<GetProductDraftResponseData, GetProductDraftResponseMeta>;
        export type ReplaceProductAttributesRequest = ReplaceProductAttributesRequest;


        export type ReplaceProductAttributesResponseData = ({
  /**
   * Тип значения из PropertyTypeEnum
   */
  type?: string;
  /**
   * Ссылка на файл
   */
  url?: string;
} & {
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
})[];

        export type ReplaceProductAttributesResponseMeta = {};

        export type ReplaceProductAttributesResponse = CommonResponse<ReplaceProductAttributesResponseData, ReplaceProductAttributesResponseMeta>;
        export type PatchProductAttributesRequest = PatchProductAttributesRequest;


        export type PatchProductAttributesResponseData = ({
  /**
   * Тип значения из PropertyTypeEnum
   */
  type?: string;
  /**
   * Ссылка на файл
   */
  url?: string;
} & {
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
})[];

        export type PatchProductAttributesResponseMeta = {};

        export type PatchProductAttributesResponse = CommonResponse<PatchProductAttributesResponseData, PatchProductAttributesResponseMeta>;
        export type ReplaceImagesRequest = ReplaceProductImagesRequest;


        export type ReplaceImagesResponseData = ({
  /**
   * Идентификатор картинки
   */
  id?: number;
  /**
   * true означает, что картинка хранится во внешнем источнике, false - в хранилище PIM
   */
  is_external?: boolean;
  /**
   * URL картинки
   */
  url?: string;
} & {
  name?: string | null;
  /**
   * Порядок сортирковки в коллекции картинок
   */
  sort?: number;
})[];

        export type ReplaceImagesResponseMeta = {};

        export type ReplaceImagesResponse = CommonResponse<ReplaceImagesResponseData, ReplaceImagesResponseMeta>;
        export type PatchImagesRequest = PatchProductImagesRequest;


        export type PatchImagesResponseData = ({
  /**
   * Идентификатор картинки
   */
  id?: number;
  /**
   * true означает, что картинка хранится во внешнем источнике, false - в хранилище PIM
   */
  is_external?: boolean;
  /**
   * URL картинки
   */
  url?: string;
} & {
  name?: string | null;
  /**
   * Порядок сортирковки в коллекции картинок
   */
  sort?: number;
})[];

        export type PatchImagesResponseMeta = {};

        export type PatchImagesResponse = CommonResponse<PatchImagesResponseData, PatchImagesResponseMeta>;
        


        export type GetProductFieldResponseData = {
  /**
   * Идентификатор поля
   */
  id?: number;
  /**
   * Символьный код поля
   */
  code?: string;
  /**
   * Значения из FieldSettingsMaskEnum, соответствующие доступным для редактирования свойствам
   */
  edit_mask?: number[];
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Наименование поля товара
   */
  name?: string;
  /**
   * Признак обязательности заполнения
   */
  is_required?: boolean;
  /**
   * Признак модерируемого поля
   */
  is_moderated?: boolean;
  metric_category?: string | null;
};

        export type GetProductFieldResponseMeta = {};

        export type GetProductFieldResponse = CommonResponse<GetProductFieldResponseData, GetProductFieldResponseMeta>;
        


        export type GetOfferResponseData = {
  /**
   * Идентификатор оффера
   */
  id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
} & {
  /**
   * Идентификатор товара
   */
  product_id?: number;
  /**
   * Идентификатор продавца
   */
  seller_id?: number;
  /**
   * Идентификатор товара у мерчанта
   */
  external_id?: string;
  /**
   * Статус оффера
   */
  sale_status?: number;
  /**
   * Цена оффера
   */
  base_price?: number;
  /**
   * адрес хранения товара в магазине
   */
  storage_address?: string;
};

        export type GetOfferResponseMeta = {};

        export type GetOfferResponse = CommonResponse<GetOfferResponseData, GetOfferResponseMeta>;
        


        export type GetCatalogProductGroupResponseData = {
  /**
   * Идентификатор склейки
   */
  id?: number;
  /**
   * Кол-во товаров в склейке
   */
  products_count?: number;
  main_product_image?: string | null;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Идентификатор категории
   */
  category_id?: number;
  main_product_id?: number | null;
  /**
   * Название
   */
  name?: string;
  /**
   * Активность
   */
  is_active?: boolean;
} & {
  category?: {
    /**
     * Идентификатор категории
     */
    id?: number;
    /**
     * Дата создания
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
    /**
     * Признак активности с учетом иерархии
     */
    is_real_active?: boolean;
  } & {
    /**
     * Название категории
     */
    name?: string;
    /**
     * Код категории
     */
    code?: string;
    parent_id?: number | null;
    /**
     * Категория наследует атрибуты родительской
     */
    is_inherits_properties?: boolean;
    /**
     * Признак активности данной категории
     */
    is_active?: boolean;
  } & {
    properties?: {
      /**
       * Название свойства
       */
      name?: string;
      /**
       * Публичное наименование
       */
      display_name?: string;
      /**
       * Код свойства
       */
      code?: string;
      /**
       * Тип свойства из PropertyTypeEnum
       */
      type?: string;
      /**
       * Подсказка при заполнении для значения
       */
      hint_value?: string;
      /**
       * Подсказка при заполнении для названия значения
       */
      hint_value_name?: string;
      /**
       * Поддерживает множественные значения
       */
      is_multiple?: boolean;
      /**
       * Выводится в фильтрах на витрине
       */
      is_filterable?: boolean;
      /**
       * Выводить на витрине
       */
      is_public?: boolean;
      /**
       * Активность атрибут
       */
      is_active?: boolean;
      /**
       * Атрибут имеет справочник значений
       */
      has_directory?: boolean;
      /**
       * Наследуемой от родительской категории атрибут
       */
      is_inherited?: boolean;
      /**
       * Атрибут обязателен для заполнения
       */
      is_required?: boolean;
      /**
       * Признак системного атрибута
       */
      is_system?: boolean;
      /**
       * Атрибут модерируется
       */
      is_moderated?: boolean;
      /**
       * Свойство используется для склейки товаров
       */
      is_gluing?: boolean;
      /**
       * Признак общего для всех категорий атрибута
       */
      is_common?: boolean;
      /**
       * Идентификатор атрибута, которому принадлежит значение
       */
      property_id?: number;
    }[];
    hidden_properties?: {
      /**
       * Название свойства
       */
      name?: string;
      /**
       * Публичное наименование
       */
      display_name?: string;
      /**
       * Код свойства
       */
      code?: string;
      /**
       * Тип свойства из PropertyTypeEnum
       */
      type?: string;
      /**
       * Подсказка при заполнении для значения
       */
      hint_value?: string;
      /**
       * Подсказка при заполнении для названия значения
       */
      hint_value_name?: string;
      /**
       * Поддерживает множественные значения
       */
      is_multiple?: boolean;
      /**
       * Выводится в фильтрах на витрине
       */
      is_filterable?: boolean;
      /**
       * Выводить на витрине
       */
      is_public?: boolean;
      /**
       * Активность атрибут
       */
      is_active?: boolean;
      /**
       * Атрибут имеет справочник значений
       */
      has_directory?: boolean;
      /**
       * Наследуемой от родительской категории атрибут
       */
      is_inherited?: boolean;
      /**
       * Атрибут обязателен для заполнения
       */
      is_required?: boolean;
      /**
       * Признак системного атрибута
       */
      is_system?: boolean;
      /**
       * Атрибут модерируется
       */
      is_moderated?: boolean;
      /**
       * Свойство используется для склейки товаров
       */
      is_gluing?: boolean;
      /**
       * Признак общего для всех категорий атрибута
       */
      is_common?: boolean;
      /**
       * Идентификатор атрибута, которому принадлежит значение
       */
      property_id?: number;
    }[];
  };
  main_product?: {
    /**
     * Идентификатор товара
     */
    id: number;
    /**
     * Дата создания
     */
    created_at: string;
    /**
     * Дата обновления
     */
    updated_at: string;
  } & ({
    external_id?: string | null;
    barcode?: string | null;
  } & {
    category_id?: number | null;
    brand_id?: number | null;
    /**
     * Название товара
     */
    name?: string;
    code?: string | null;
    description?: string | null;
    /**
     * Тип товара из CatalogProductTypeEnum
     */
    type?: number;
    /**
     * Публикация разрешена
     */
    allow_publish?: boolean;
    /**
     * Артикул
     */
    vendor_code?: string;
    weight?: number | null;
    weight_gross?: number | null;
    length?: number | null;
    width?: number | null;
    height?: number | null;
    is_adult?: boolean | null;
    base_price?: number | null;
  }) & {};
  products?: ({
    /**
     * Идентификатор товара
     */
    id: number;
    /**
     * Дата создания
     */
    created_at: string;
    /**
     * Дата обновления
     */
    updated_at: string;
  } & ({
    external_id?: string | null;
    barcode?: string | null;
  } & {
    category_id?: number | null;
    brand_id?: number | null;
    /**
     * Название товара
     */
    name?: string;
    code?: string | null;
    description?: string | null;
    /**
     * Тип товара из CatalogProductTypeEnum
     */
    type?: number;
    /**
     * Публикация разрешена
     */
    allow_publish?: boolean;
    /**
     * Артикул
     */
    vendor_code?: string;
    weight?: number | null;
    weight_gross?: number | null;
    length?: number | null;
    width?: number | null;
    height?: number | null;
    is_adult?: boolean | null;
    base_price?: number | null;
  }) & {})[];
} & {};

        export type GetCatalogProductGroupResponseMeta = {};

        export type GetCatalogProductGroupResponse = CommonResponse<GetCatalogProductGroupResponseData, GetCatalogProductGroupResponseMeta>;
        export interface SearchBrandsRequest {
  sort?: string[];
  include?: string[];
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
  filter?: {
    /**
     * Идентификатор(ы) бренда
     */
    id?: number;
    /**
     * Название или часть названия бренда
     */
    name_like?: string;
    /**
     * Код или часть кода бренда
     */
    code_like?: string;
    /**
     * Описание или часть описания бренда
     */
    description_like?: string;
    is_active?: boolean[];
    /**
     * Дата создания от
     */
    created_at_from?: string;
    /**
     * Дата создания до
     */
    created_at_to?: string;
    /**
     * Дата обновления от
     */
    updated_at_from?: string;
    /**
     * Дата обновления до
     */
    updated_at_to?: string;
  };
}


        export type SearchBrandsResponseData = ({
  /**
   * Идентификатор бренда
   */
  id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
  image_url?: string | null;
  logo_url?: string | null;
} & {
  /**
   * Название бренда
   */
  name?: string;
  /**
   * Активность бренда
   */
  is_active?: boolean;
  code?: string | null;
  description?: string | null;
} & {})[];

        export type SearchBrandsResponseMeta = {
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        next_cursor?: string | null;
        previous_cursor?: string | null;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        total?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
};

        export type SearchBrandsResponse = CommonResponse<SearchBrandsResponseData, SearchBrandsResponseMeta>;
        export type CreateBrandRequest = {
  /**
   * Название бренда
   */
  name?: string;
  /**
   * Активность бренда
   */
  is_active?: boolean;
  code?: string | null;
  description?: string | null;
} & {
  /**
   * Идентификатор изображения бренда, загруженного ранее
   */
  preload_file_id?: number;
} & {};


        export type CreateBrandResponseData = {
  /**
   * Идентификатор бренда
   */
  id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
  image_url?: string | null;
  logo_url?: string | null;
} & {
  /**
   * Название бренда
   */
  name?: string;
  /**
   * Активность бренда
   */
  is_active?: boolean;
  code?: string | null;
  description?: string | null;
} & {};

        export type CreateBrandResponseMeta = {};

        export type CreateBrandResponse = CommonResponse<CreateBrandResponseData, CreateBrandResponseMeta>;
        export type ReplaceBrandRequest = {
  /**
   * Название бренда
   */
  name?: string;
  /**
   * Активность бренда
   */
  is_active?: boolean;
  code?: string | null;
  description?: string | null;
} & {
  /**
   * Идентификатор изображения бренда, загруженного ранее
   */
  preload_file_id?: number;
} & {};


        export type ReplaceBrandResponseData = {
  /**
   * Идентификатор бренда
   */
  id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
  image_url?: string | null;
  logo_url?: string | null;
} & {
  /**
   * Название бренда
   */
  name?: string;
  /**
   * Активность бренда
   */
  is_active?: boolean;
  code?: string | null;
  description?: string | null;
} & {};

        export type ReplaceBrandResponseMeta = {};

        export type ReplaceBrandResponse = CommonResponse<ReplaceBrandResponseData, ReplaceBrandResponseMeta>;
        export type PatchBrandRequest = {
  /**
   * Название бренда
   */
  name?: string;
  /**
   * Активность бренда
   */
  is_active?: boolean;
  code?: string | null;
  description?: string | null;
} & {
  /**
   * Идентификатор изображения бренда, загруженного ранее
   */
  preload_file_id?: number;
};


        export type PatchBrandResponseData = {
  /**
   * Идентификатор бренда
   */
  id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
  image_url?: string | null;
  logo_url?: string | null;
} & {
  /**
   * Название бренда
   */
  name?: string;
  /**
   * Активность бренда
   */
  is_active?: boolean;
  code?: string | null;
  description?: string | null;
} & {};

        export type PatchBrandResponseMeta = {};

        export type PatchBrandResponse = CommonResponse<PatchBrandResponseData, PatchBrandResponseMeta>;
        export interface SearchCategoriesRequest {
  sort?: string[];
  include?: string[];
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
  filter?: {
    /**
     * Идентификатор(ы) категории
     */
    id?: number;
    /**
     * Название категории
     */
    name?: string;
    /**
     * Название или часть названия категории
     */
    name_like?: string;
    /**
     * Код категории
     */
    code?: string;
    /**
     * Код или часть кода категории
     */
    code_like?: string;
    /**
     * Идентификатор(ы) родительской категории
     */
    parent_id?: number;
    /**
     * Активность атрибут
     */
    is_active?: boolean;
    /**
     * Отбирать только категории верхнего уровня или наоборот только вложенные
     */
    is_root?: boolean;
    /**
     * Идентификатор(ы) исключаемой категории
     */
    exclude_id?: number;
    /**
     * Есть ли в категории хотя бы одно свойство для склейки
     */
    has_is_gluing?: boolean;
  };
}


        export type SearchCategoriesResponseData = ({
  /**
   * Идентификатор категории
   */
  id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
  /**
   * Признак активности с учетом иерархии
   */
  is_real_active?: boolean;
} & {
  /**
   * Название категории
   */
  name?: string;
  /**
   * Код категории
   */
  code?: string;
  parent_id?: number | null;
  /**
   * Категория наследует атрибуты родительской
   */
  is_inherits_properties?: boolean;
  /**
   * Признак активности данной категории
   */
  is_active?: boolean;
} & {
  properties?: {
    /**
     * Название свойства
     */
    name?: string;
    /**
     * Публичное наименование
     */
    display_name?: string;
    /**
     * Код свойства
     */
    code?: string;
    /**
     * Тип свойства из PropertyTypeEnum
     */
    type?: string;
    /**
     * Подсказка при заполнении для значения
     */
    hint_value?: string;
    /**
     * Подсказка при заполнении для названия значения
     */
    hint_value_name?: string;
    /**
     * Поддерживает множественные значения
     */
    is_multiple?: boolean;
    /**
     * Выводится в фильтрах на витрине
     */
    is_filterable?: boolean;
    /**
     * Выводить на витрине
     */
    is_public?: boolean;
    /**
     * Активность атрибут
     */
    is_active?: boolean;
    /**
     * Атрибут имеет справочник значений
     */
    has_directory?: boolean;
    /**
     * Наследуемой от родительской категории атрибут
     */
    is_inherited?: boolean;
    /**
     * Атрибут обязателен для заполнения
     */
    is_required?: boolean;
    /**
     * Признак системного атрибута
     */
    is_system?: boolean;
    /**
     * Атрибут модерируется
     */
    is_moderated?: boolean;
    /**
     * Свойство используется для склейки товаров
     */
    is_gluing?: boolean;
    /**
     * Признак общего для всех категорий атрибута
     */
    is_common?: boolean;
    /**
     * Идентификатор атрибута, которому принадлежит значение
     */
    property_id?: number;
  }[];
  hidden_properties?: {
    /**
     * Название свойства
     */
    name?: string;
    /**
     * Публичное наименование
     */
    display_name?: string;
    /**
     * Код свойства
     */
    code?: string;
    /**
     * Тип свойства из PropertyTypeEnum
     */
    type?: string;
    /**
     * Подсказка при заполнении для значения
     */
    hint_value?: string;
    /**
     * Подсказка при заполнении для названия значения
     */
    hint_value_name?: string;
    /**
     * Поддерживает множественные значения
     */
    is_multiple?: boolean;
    /**
     * Выводится в фильтрах на витрине
     */
    is_filterable?: boolean;
    /**
     * Выводить на витрине
     */
    is_public?: boolean;
    /**
     * Активность атрибут
     */
    is_active?: boolean;
    /**
     * Атрибут имеет справочник значений
     */
    has_directory?: boolean;
    /**
     * Наследуемой от родительской категории атрибут
     */
    is_inherited?: boolean;
    /**
     * Атрибут обязателен для заполнения
     */
    is_required?: boolean;
    /**
     * Признак системного атрибута
     */
    is_system?: boolean;
    /**
     * Атрибут модерируется
     */
    is_moderated?: boolean;
    /**
     * Свойство используется для склейки товаров
     */
    is_gluing?: boolean;
    /**
     * Признак общего для всех категорий атрибута
     */
    is_common?: boolean;
    /**
     * Идентификатор атрибута, которому принадлежит значение
     */
    property_id?: number;
  }[];
})[];

        export type SearchCategoriesResponseMeta = {
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        next_cursor?: string | null;
        previous_cursor?: string | null;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        total?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
};

        export type SearchCategoriesResponse = CommonResponse<SearchCategoriesResponseData, SearchCategoriesResponseMeta>;
        export type CreateCategoryRequest = {
  /**
   * Название категории
   */
  name?: string;
  /**
   * Код категории
   */
  code?: string;
  parent_id?: number | null;
  /**
   * Категория наследует атрибуты родительской
   */
  is_inherits_properties?: boolean;
  /**
   * Признак активности данной категории
   */
  is_active?: boolean;
} & {};


        export type CreateCategoryResponseData = {
  /**
   * Идентификатор категории
   */
  id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
  /**
   * Признак активности с учетом иерархии
   */
  is_real_active?: boolean;
} & {
  /**
   * Название категории
   */
  name?: string;
  /**
   * Код категории
   */
  code?: string;
  parent_id?: number | null;
  /**
   * Категория наследует атрибуты родительской
   */
  is_inherits_properties?: boolean;
  /**
   * Признак активности данной категории
   */
  is_active?: boolean;
} & {
  properties?: {
    /**
     * Название свойства
     */
    name?: string;
    /**
     * Публичное наименование
     */
    display_name?: string;
    /**
     * Код свойства
     */
    code?: string;
    /**
     * Тип свойства из PropertyTypeEnum
     */
    type?: string;
    /**
     * Подсказка при заполнении для значения
     */
    hint_value?: string;
    /**
     * Подсказка при заполнении для названия значения
     */
    hint_value_name?: string;
    /**
     * Поддерживает множественные значения
     */
    is_multiple?: boolean;
    /**
     * Выводится в фильтрах на витрине
     */
    is_filterable?: boolean;
    /**
     * Выводить на витрине
     */
    is_public?: boolean;
    /**
     * Активность атрибут
     */
    is_active?: boolean;
    /**
     * Атрибут имеет справочник значений
     */
    has_directory?: boolean;
    /**
     * Наследуемой от родительской категории атрибут
     */
    is_inherited?: boolean;
    /**
     * Атрибут обязателен для заполнения
     */
    is_required?: boolean;
    /**
     * Признак системного атрибута
     */
    is_system?: boolean;
    /**
     * Атрибут модерируется
     */
    is_moderated?: boolean;
    /**
     * Свойство используется для склейки товаров
     */
    is_gluing?: boolean;
    /**
     * Признак общего для всех категорий атрибута
     */
    is_common?: boolean;
    /**
     * Идентификатор атрибута, которому принадлежит значение
     */
    property_id?: number;
  }[];
  hidden_properties?: {
    /**
     * Название свойства
     */
    name?: string;
    /**
     * Публичное наименование
     */
    display_name?: string;
    /**
     * Код свойства
     */
    code?: string;
    /**
     * Тип свойства из PropertyTypeEnum
     */
    type?: string;
    /**
     * Подсказка при заполнении для значения
     */
    hint_value?: string;
    /**
     * Подсказка при заполнении для названия значения
     */
    hint_value_name?: string;
    /**
     * Поддерживает множественные значения
     */
    is_multiple?: boolean;
    /**
     * Выводится в фильтрах на витрине
     */
    is_filterable?: boolean;
    /**
     * Выводить на витрине
     */
    is_public?: boolean;
    /**
     * Активность атрибут
     */
    is_active?: boolean;
    /**
     * Атрибут имеет справочник значений
     */
    has_directory?: boolean;
    /**
     * Наследуемой от родительской категории атрибут
     */
    is_inherited?: boolean;
    /**
     * Атрибут обязателен для заполнения
     */
    is_required?: boolean;
    /**
     * Признак системного атрибута
     */
    is_system?: boolean;
    /**
     * Атрибут модерируется
     */
    is_moderated?: boolean;
    /**
     * Свойство используется для склейки товаров
     */
    is_gluing?: boolean;
    /**
     * Признак общего для всех категорий атрибута
     */
    is_common?: boolean;
    /**
     * Идентификатор атрибута, которому принадлежит значение
     */
    property_id?: number;
  }[];
};

        export type CreateCategoryResponseMeta = {};

        export type CreateCategoryResponse = CommonResponse<CreateCategoryResponseData, CreateCategoryResponseMeta>;
        export interface BindCategoryPropertiesRequest {
  /**
   * Если true, все отсутствующие в запросе привязки будут удалены
   */
  replace?: boolean;
  properties?: {
    /**
     * Идентификатор атрибута товара
     */
    id: number;
    /**
     * Является обязательным для заполнения внутри категории
     */
    is_required: boolean;
    /**
     * Свойство используется для склейки товаров
     */
    is_gluing: boolean;
  }[];
}


        export type BindCategoryPropertiesResponseData = {
  /**
   * Идентификатор категории
   */
  id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
  /**
   * Признак активности с учетом иерархии
   */
  is_real_active?: boolean;
} & {
  /**
   * Название категории
   */
  name?: string;
  /**
   * Код категории
   */
  code?: string;
  parent_id?: number | null;
  /**
   * Категория наследует атрибуты родительской
   */
  is_inherits_properties?: boolean;
  /**
   * Признак активности данной категории
   */
  is_active?: boolean;
} & {
  properties?: {
    /**
     * Название свойства
     */
    name?: string;
    /**
     * Публичное наименование
     */
    display_name?: string;
    /**
     * Код свойства
     */
    code?: string;
    /**
     * Тип свойства из PropertyTypeEnum
     */
    type?: string;
    /**
     * Подсказка при заполнении для значения
     */
    hint_value?: string;
    /**
     * Подсказка при заполнении для названия значения
     */
    hint_value_name?: string;
    /**
     * Поддерживает множественные значения
     */
    is_multiple?: boolean;
    /**
     * Выводится в фильтрах на витрине
     */
    is_filterable?: boolean;
    /**
     * Выводить на витрине
     */
    is_public?: boolean;
    /**
     * Активность атрибут
     */
    is_active?: boolean;
    /**
     * Атрибут имеет справочник значений
     */
    has_directory?: boolean;
    /**
     * Наследуемой от родительской категории атрибут
     */
    is_inherited?: boolean;
    /**
     * Атрибут обязателен для заполнения
     */
    is_required?: boolean;
    /**
     * Признак системного атрибута
     */
    is_system?: boolean;
    /**
     * Атрибут модерируется
     */
    is_moderated?: boolean;
    /**
     * Свойство используется для склейки товаров
     */
    is_gluing?: boolean;
    /**
     * Признак общего для всех категорий атрибута
     */
    is_common?: boolean;
    /**
     * Идентификатор атрибута, которому принадлежит значение
     */
    property_id?: number;
  }[];
  hidden_properties?: {
    /**
     * Название свойства
     */
    name?: string;
    /**
     * Публичное наименование
     */
    display_name?: string;
    /**
     * Код свойства
     */
    code?: string;
    /**
     * Тип свойства из PropertyTypeEnum
     */
    type?: string;
    /**
     * Подсказка при заполнении для значения
     */
    hint_value?: string;
    /**
     * Подсказка при заполнении для названия значения
     */
    hint_value_name?: string;
    /**
     * Поддерживает множественные значения
     */
    is_multiple?: boolean;
    /**
     * Выводится в фильтрах на витрине
     */
    is_filterable?: boolean;
    /**
     * Выводить на витрине
     */
    is_public?: boolean;
    /**
     * Активность атрибут
     */
    is_active?: boolean;
    /**
     * Атрибут имеет справочник значений
     */
    has_directory?: boolean;
    /**
     * Наследуемой от родительской категории атрибут
     */
    is_inherited?: boolean;
    /**
     * Атрибут обязателен для заполнения
     */
    is_required?: boolean;
    /**
     * Признак системного атрибута
     */
    is_system?: boolean;
    /**
     * Атрибут модерируется
     */
    is_moderated?: boolean;
    /**
     * Свойство используется для склейки товаров
     */
    is_gluing?: boolean;
    /**
     * Признак общего для всех категорий атрибута
     */
    is_common?: boolean;
    /**
     * Идентификатор атрибута, которому принадлежит значение
     */
    property_id?: number;
  }[];
};

        export type BindCategoryPropertiesResponseMeta = {};

        export type BindCategoryPropertiesResponse = CommonResponse<BindCategoryPropertiesResponseData, BindCategoryPropertiesResponseMeta>;
        export type ReplaceCategoryRequest = {
  /**
   * Название категории
   */
  name?: string;
  /**
   * Код категории
   */
  code?: string;
  parent_id?: number | null;
  /**
   * Категория наследует атрибуты родительской
   */
  is_inherits_properties?: boolean;
  /**
   * Признак активности данной категории
   */
  is_active?: boolean;
} & {};


        export type ReplaceCategoryResponseData = {
  /**
   * Идентификатор категории
   */
  id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
  /**
   * Признак активности с учетом иерархии
   */
  is_real_active?: boolean;
} & {
  /**
   * Название категории
   */
  name?: string;
  /**
   * Код категории
   */
  code?: string;
  parent_id?: number | null;
  /**
   * Категория наследует атрибуты родительской
   */
  is_inherits_properties?: boolean;
  /**
   * Признак активности данной категории
   */
  is_active?: boolean;
} & {
  properties?: {
    /**
     * Название свойства
     */
    name?: string;
    /**
     * Публичное наименование
     */
    display_name?: string;
    /**
     * Код свойства
     */
    code?: string;
    /**
     * Тип свойства из PropertyTypeEnum
     */
    type?: string;
    /**
     * Подсказка при заполнении для значения
     */
    hint_value?: string;
    /**
     * Подсказка при заполнении для названия значения
     */
    hint_value_name?: string;
    /**
     * Поддерживает множественные значения
     */
    is_multiple?: boolean;
    /**
     * Выводится в фильтрах на витрине
     */
    is_filterable?: boolean;
    /**
     * Выводить на витрине
     */
    is_public?: boolean;
    /**
     * Активность атрибут
     */
    is_active?: boolean;
    /**
     * Атрибут имеет справочник значений
     */
    has_directory?: boolean;
    /**
     * Наследуемой от родительской категории атрибут
     */
    is_inherited?: boolean;
    /**
     * Атрибут обязателен для заполнения
     */
    is_required?: boolean;
    /**
     * Признак системного атрибута
     */
    is_system?: boolean;
    /**
     * Атрибут модерируется
     */
    is_moderated?: boolean;
    /**
     * Свойство используется для склейки товаров
     */
    is_gluing?: boolean;
    /**
     * Признак общего для всех категорий атрибута
     */
    is_common?: boolean;
    /**
     * Идентификатор атрибута, которому принадлежит значение
     */
    property_id?: number;
  }[];
  hidden_properties?: {
    /**
     * Название свойства
     */
    name?: string;
    /**
     * Публичное наименование
     */
    display_name?: string;
    /**
     * Код свойства
     */
    code?: string;
    /**
     * Тип свойства из PropertyTypeEnum
     */
    type?: string;
    /**
     * Подсказка при заполнении для значения
     */
    hint_value?: string;
    /**
     * Подсказка при заполнении для названия значения
     */
    hint_value_name?: string;
    /**
     * Поддерживает множественные значения
     */
    is_multiple?: boolean;
    /**
     * Выводится в фильтрах на витрине
     */
    is_filterable?: boolean;
    /**
     * Выводить на витрине
     */
    is_public?: boolean;
    /**
     * Активность атрибут
     */
    is_active?: boolean;
    /**
     * Атрибут имеет справочник значений
     */
    has_directory?: boolean;
    /**
     * Наследуемой от родительской категории атрибут
     */
    is_inherited?: boolean;
    /**
     * Атрибут обязателен для заполнения
     */
    is_required?: boolean;
    /**
     * Признак системного атрибута
     */
    is_system?: boolean;
    /**
     * Атрибут модерируется
     */
    is_moderated?: boolean;
    /**
     * Свойство используется для склейки товаров
     */
    is_gluing?: boolean;
    /**
     * Признак общего для всех категорий атрибута
     */
    is_common?: boolean;
    /**
     * Идентификатор атрибута, которому принадлежит значение
     */
    property_id?: number;
  }[];
};

        export type ReplaceCategoryResponseMeta = {};

        export type ReplaceCategoryResponse = CommonResponse<ReplaceCategoryResponseData, ReplaceCategoryResponseMeta>;
        export interface SearchPropertiesRequest {
  sort?: string[];
  include?: string[];
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
  filter?: {
    /**
     * Идентификатор(ы) атрибутов
     */
    id?: number;
    /**
     * Название или часть названия атрибута
     */
    name_like?: string;
    /**
     * Код(ы) атрибутов
     */
    code?: string;
    /**
     * Атрибут доступен для фильтрации на витрине
     */
    is_filterable?: boolean;
    /**
     * Атрибут активен и доступен для товаров
     */
    is_active?: boolean;
  };
}


        export type SearchPropertiesResponseData = ({
  /**
   * Идентификатор атрибута
   */
  id?: number;
  /**
   * Признак системного неизменяемого атрибута
   */
  is_system?: boolean;
  /**
   * Признак общего для всех категорий атрибута
   */
  is_common?: boolean;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Название свойства
   */
  name?: string;
  /**
   * Публичное наименование
   */
  display_name?: string;
  /**
   * Код свойства
   */
  code?: string;
  /**
   * Тип свойства из PropertyTypeEnum
   */
  type?: string;
  hint_value?: string | null;
  hint_value_name?: string | null;
  /**
   * Поддерживает множественные значения
   */
  is_multiple?: boolean;
  /**
   * Выводится в фильтрах на витрине
   */
  is_filterable?: boolean;
  /**
   * Выводить на витрине
   */
  is_public?: boolean;
  /**
   * Активность атрибута
   */
  is_active?: boolean;
  /**
   * Обязательность заполнения для общего (is_common=true) атрибута
   */
  is_required?: boolean;
  /**
   * Атрибут имеет справочник значений
   */
  has_directory?: boolean;
  /**
   * Атрибут модерируется
   */
  is_moderated?: boolean;
} & {
  directory?: ({
    /**
     * Идентификатор значения
     */
    id?: number;
    url?: string | null;
    /**
     * Тип значения из перечисления CatalogPropertyTypeEnum
     */
    type?: string;
    /**
     * Идентификатор атрибута, которому принадлежит значение
     */
    property_id?: number;
  } & {
    /**
     * Значение элемента справочника (string|number|integer|boolean) Обязателен для заполнения, если не задан preload_file_id.
     *
     */
    value?: string;
    /**
     * Название значения (например, имя цвета)
     */
    name?: string;
    /**
     * Символьный код значения
     */
    code?: string;
  })[];
})[];

        export type SearchPropertiesResponseMeta = {
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        next_cursor?: string | null;
        previous_cursor?: string | null;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        total?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
};

        export type SearchPropertiesResponse = CommonResponse<SearchPropertiesResponseData, SearchPropertiesResponseMeta>;
        export type CreatePropertyRequest = {
  /**
   * Название свойства
   */
  name?: string;
  /**
   * Публичное наименование
   */
  display_name?: string;
  /**
   * Код свойства
   */
  code?: string;
  /**
   * Тип свойства из PropertyTypeEnum
   */
  type?: string;
  /**
   * Подсказка при заполнении для значения
   */
  hint_value?: string | null;
  /**
   * Подсказка при заполнении для названия значения
   */
  hint_value_name?: string | null;
  /**
   * Поддерживает множественные значения
   */
  is_multiple?: boolean;
  /**
   * Выводится в фильтрах на витрине
   */
  is_filterable?: boolean;
  /**
   * Выводить на витрине
   */
  is_public?: boolean;
  /**
   * Активность атрибута
   */
  is_active?: boolean;
  /**
   * Обязательность заполнения для общего (is_common=true) атрибута
   */
  is_required?: boolean;
  /**
   * Атрибут имеет справочник значений
   */
  has_directory?: boolean;
  /**
   * Атрибут модерируется
   */
  is_moderated?: boolean;
} & {};


        export type CreatePropertyResponseData = {
  /**
   * Идентификатор атрибута
   */
  id?: number;
  /**
   * Признак системного неизменяемого атрибута
   */
  is_system?: boolean;
  /**
   * Признак общего для всех категорий атрибута
   */
  is_common?: boolean;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Название свойства
   */
  name?: string;
  /**
   * Публичное наименование
   */
  display_name?: string;
  /**
   * Код свойства
   */
  code?: string;
  /**
   * Тип свойства из PropertyTypeEnum
   */
  type?: string;
  hint_value?: string | null;
  hint_value_name?: string | null;
  /**
   * Поддерживает множественные значения
   */
  is_multiple?: boolean;
  /**
   * Выводится в фильтрах на витрине
   */
  is_filterable?: boolean;
  /**
   * Выводить на витрине
   */
  is_public?: boolean;
  /**
   * Активность атрибута
   */
  is_active?: boolean;
  /**
   * Обязательность заполнения для общего (is_common=true) атрибута
   */
  is_required?: boolean;
  /**
   * Атрибут имеет справочник значений
   */
  has_directory?: boolean;
  /**
   * Атрибут модерируется
   */
  is_moderated?: boolean;
} & {
  directory?: ({
    /**
     * Идентификатор значения
     */
    id?: number;
    url?: string | null;
    /**
     * Тип значения из перечисления CatalogPropertyTypeEnum
     */
    type?: string;
    /**
     * Идентификатор атрибута, которому принадлежит значение
     */
    property_id?: number;
  } & {
    /**
     * Значение элемента справочника (string|number|integer|boolean) Обязателен для заполнения, если не задан preload_file_id.
     *
     */
    value?: string;
    /**
     * Название значения (например, имя цвета)
     */
    name?: string;
    /**
     * Символьный код значения
     */
    code?: string;
  })[];
};

        export type CreatePropertyResponseMeta = {};

        export type CreatePropertyResponse = CommonResponse<CreatePropertyResponseData, CreatePropertyResponseMeta>;
        export type ReplacePropertyRequest = {
  /**
   * Название свойства
   */
  name?: string;
  /**
   * Публичное наименование
   */
  display_name?: string;
  /**
   * Код свойства
   */
  code?: string;
  /**
   * Тип свойства из PropertyTypeEnum
   */
  type?: string;
  hint_value?: string | null;
  hint_value_name?: string | null;
  /**
   * Поддерживает множественные значения
   */
  is_multiple?: boolean;
  /**
   * Выводится в фильтрах на витрине
   */
  is_filterable?: boolean;
  /**
   * Выводить на витрине
   */
  is_public?: boolean;
  /**
   * Активность атрибута
   */
  is_active?: boolean;
  /**
   * Обязательность заполнения для общего (is_common=true) атрибута
   */
  is_required?: boolean;
  /**
   * Атрибут имеет справочник значений
   */
  has_directory?: boolean;
  /**
   * Атрибут модерируется
   */
  is_moderated?: boolean;
} & {};


        export type ReplacePropertyResponseData = {
  /**
   * Идентификатор атрибута
   */
  id?: number;
  /**
   * Признак системного неизменяемого атрибута
   */
  is_system?: boolean;
  /**
   * Признак общего для всех категорий атрибута
   */
  is_common?: boolean;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Название свойства
   */
  name?: string;
  /**
   * Публичное наименование
   */
  display_name?: string;
  /**
   * Код свойства
   */
  code?: string;
  /**
   * Тип свойства из PropertyTypeEnum
   */
  type?: string;
  hint_value?: string | null;
  hint_value_name?: string | null;
  /**
   * Поддерживает множественные значения
   */
  is_multiple?: boolean;
  /**
   * Выводится в фильтрах на витрине
   */
  is_filterable?: boolean;
  /**
   * Выводить на витрине
   */
  is_public?: boolean;
  /**
   * Активность атрибута
   */
  is_active?: boolean;
  /**
   * Обязательность заполнения для общего (is_common=true) атрибута
   */
  is_required?: boolean;
  /**
   * Атрибут имеет справочник значений
   */
  has_directory?: boolean;
  /**
   * Атрибут модерируется
   */
  is_moderated?: boolean;
} & {
  directory?: ({
    /**
     * Идентификатор значения
     */
    id?: number;
    url?: string | null;
    /**
     * Тип значения из перечисления CatalogPropertyTypeEnum
     */
    type?: string;
    /**
     * Идентификатор атрибута, которому принадлежит значение
     */
    property_id?: number;
  } & {
    /**
     * Значение элемента справочника (string|number|integer|boolean) Обязателен для заполнения, если не задан preload_file_id.
     *
     */
    value?: string;
    /**
     * Название значения (например, имя цвета)
     */
    name?: string;
    /**
     * Символьный код значения
     */
    code?: string;
  })[];
};

        export type ReplacePropertyResponseMeta = {};

        export type ReplacePropertyResponse = CommonResponse<ReplacePropertyResponseData, ReplacePropertyResponseMeta>;
        export type PatchPropertyRequest = {
  /**
   * Название свойства
   */
  name?: string;
  /**
   * Публичное наименование
   */
  display_name?: string;
  /**
   * Код свойства
   */
  code?: string;
  /**
   * Тип свойства из PropertyTypeEnum
   */
  type?: string;
  hint_value?: string | null;
  hint_value_name?: string | null;
  /**
   * Поддерживает множественные значения
   */
  is_multiple?: boolean;
  /**
   * Выводится в фильтрах на витрине
   */
  is_filterable?: boolean;
  /**
   * Выводить на витрине
   */
  is_public?: boolean;
  /**
   * Активность атрибута
   */
  is_active?: boolean;
  /**
   * Обязательность заполнения для общего (is_common=true) атрибута
   */
  is_required?: boolean;
  /**
   * Атрибут имеет справочник значений
   */
  has_directory?: boolean;
  /**
   * Атрибут модерируется
   */
  is_moderated?: boolean;
};


        export type PatchPropertyResponseData = {
  /**
   * Идентификатор атрибута
   */
  id?: number;
  /**
   * Признак системного неизменяемого атрибута
   */
  is_system?: boolean;
  /**
   * Признак общего для всех категорий атрибута
   */
  is_common?: boolean;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Название свойства
   */
  name?: string;
  /**
   * Публичное наименование
   */
  display_name?: string;
  /**
   * Код свойства
   */
  code?: string;
  /**
   * Тип свойства из PropertyTypeEnum
   */
  type?: string;
  hint_value?: string | null;
  hint_value_name?: string | null;
  /**
   * Поддерживает множественные значения
   */
  is_multiple?: boolean;
  /**
   * Выводится в фильтрах на витрине
   */
  is_filterable?: boolean;
  /**
   * Выводить на витрине
   */
  is_public?: boolean;
  /**
   * Активность атрибута
   */
  is_active?: boolean;
  /**
   * Обязательность заполнения для общего (is_common=true) атрибута
   */
  is_required?: boolean;
  /**
   * Атрибут имеет справочник значений
   */
  has_directory?: boolean;
  /**
   * Атрибут модерируется
   */
  is_moderated?: boolean;
} & {
  directory?: ({
    /**
     * Идентификатор значения
     */
    id?: number;
    url?: string | null;
    /**
     * Тип значения из перечисления CatalogPropertyTypeEnum
     */
    type?: string;
    /**
     * Идентификатор атрибута, которому принадлежит значение
     */
    property_id?: number;
  } & {
    /**
     * Значение элемента справочника (string|number|integer|boolean) Обязателен для заполнения, если не задан preload_file_id.
     *
     */
    value?: string;
    /**
     * Название значения (например, имя цвета)
     */
    name?: string;
    /**
     * Символьный код значения
     */
    code?: string;
  })[];
};

        export type PatchPropertyResponseMeta = {};

        export type PatchPropertyResponse = CommonResponse<PatchPropertyResponseData, PatchPropertyResponseMeta>;
        export interface SearchDirectoryValuesRequest {
  sort?: string[];
  include?: string[];
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
  filter?: {
    /**
     * Идентификатор(ы) значений
     */
    id?: number;
    /**
     * Название или часть названия значения
     */
    name?: string;
    /**
     * Код(ы) значений
     */
    code?: string;
    /**
     * Идентификатор(ы) атрибута, которому принадлежит значение
     */
    property_id?: number;
    /**
     * Значение элемента справочника (string|number|integer|boolean)
     */
    value?: string;
  };
}


        export type SearchDirectoryValuesResponseData = ({
  /**
   * Идентификатор значения
   */
  id?: number;
  url?: string | null;
  /**
   * Тип значения из перечисления CatalogPropertyTypeEnum
   */
  type?: string;
  /**
   * Идентификатор атрибута, которому принадлежит значение
   */
  property_id?: number;
} & {
  /**
   * Значение элемента справочника (string|number|integer|boolean) Обязателен для заполнения, если не задан preload_file_id.
   *
   */
  value?: string;
  /**
   * Название значения (например, имя цвета)
   */
  name?: string;
  /**
   * Символьный код значения
   */
  code?: string;
} & {
  /**
   * Идентификатор атрибута, которому принадлежит значение
   */
  property_id?: number;
})[];

        export type SearchDirectoryValuesResponseMeta = {
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        next_cursor?: string | null;
        previous_cursor?: string | null;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        total?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
};

        export type SearchDirectoryValuesResponse = CommonResponse<SearchDirectoryValuesResponseData, SearchDirectoryValuesResponseMeta>;
        export type ReplaceDirectoryValueRequest = {
  /**
   * Значение элемента справочника (string|number|integer|boolean) Обязателен для заполнения, если не задан preload_file_id.
   *
   */
  value?: string;
  /**
   * Название значения (например, имя цвета)
   */
  name?: string;
  /**
   * Символьный код значения
   */
  code?: string;
} & {
  /**
   * Идентификатор предзагруженного ранее файла
   */
  preload_file_id?: number;
};


        export type ReplaceDirectoryValueResponseData = {
  /**
   * Идентификатор значения
   */
  id?: number;
  url?: string | null;
  /**
   * Тип значения из перечисления CatalogPropertyTypeEnum
   */
  type?: string;
  /**
   * Идентификатор атрибута, которому принадлежит значение
   */
  property_id?: number;
} & {
  /**
   * Значение элемента справочника (string|number|integer|boolean) Обязателен для заполнения, если не задан preload_file_id.
   *
   */
  value?: string;
  /**
   * Название значения (например, имя цвета)
   */
  name?: string;
  /**
   * Символьный код значения
   */
  code?: string;
} & {
  /**
   * Идентификатор атрибута, которому принадлежит значение
   */
  property_id?: number;
};

        export type ReplaceDirectoryValueResponseMeta = {};

        export type ReplaceDirectoryValueResponse = CommonResponse<ReplaceDirectoryValueResponseData, ReplaceDirectoryValueResponseMeta>;
        /**
 * Доступные для сортировки поля: `id, name, code, created_at, updated_at`. Загружаемые через include связанные сущности: `images, attributes, brand, category`.
 *
 */
export interface SearchProductsRequest {
  sort?: string[];
  include?: string[];
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
  filter?: {
    /**
     * Идентификатор(ы) товара
     */
    id?: number;
    /**
     * Название или часть названия товара
     */
    name?: string;
    /**
     * Код(ы) товаров
     */
    code?: string;
    /**
     * Идентификатор(ы) внешней системы
     */
    external_id?: string;
    /**
     * Идентификатор(ы) категорий
     */
    category_id?: number;
    /**
     * Статус выгрузки товара на торговые площадки из ProductStatusEnum
     */
    status_id?: number;
    /**
     * Активность товара для витрины
     */
    allow_publish?: boolean;
    /**
     * Артикул
     */
    vendor_code?: string;
    /**
     * Штрихкод (EAN)
     */
    barcode?: string;
    /**
     * Товар 18+
     */
    is_adult?: boolean;
    /**
     * Тип товара из CatalogProductTypeEnum
     */
    type?: number;
    brand_id?: number[];
    /**
     * Состоит ли товар хотя бы в одной склейке
     */
    has_product_groups?: boolean;
    /**
     * Есть ли у товара хотя бы один незаполненный обязательный атрибут
     */
    has_no_filled_required_attributes?: boolean;
    /**
     * Относится к категории с хотя бы одним атрибутом для склейки
     */
    category_has_is_gluing?: boolean;
    /**
     * Дата создания меньше или равна
     */
    created_at_lte?: string;
    /**
     * Дата создания больше или равна
     */
    created_at_gte?: string;
    /**
     * Дата обновления меньше или равна
     */
    updated_at_lte?: string;
    /**
     * Дата обновления больше или равна
     */
    updated_at_gte?: string;
  };
}


        export type SearchProductsResponseData = ({
  /**
   * Идентификатор товара
   */
  id: number;
  /**
   * Дата создания
   */
  created_at: string;
  /**
   * Дата обновления
   */
  updated_at: string;
} & {
  main_image_url: string | null;
  main_image_file: string | null;
} & ({
    external_id?: string | null;
    barcode?: string | null;
  } & {
    category_id?: number | null;
    brand_id?: number | null;
    /**
     * Название товара
     */
    name?: string;
    code?: string | null;
    description?: string | null;
    /**
     * Тип товара из CatalogProductTypeEnum
     */
    type?: number;
    /**
     * Публикация разрешена
     */
    allow_publish?: boolean;
    /**
     * Артикул
     */
    vendor_code?: string;
    weight?: number | null;
    weight_gross?: number | null;
    length?: number | null;
    width?: number | null;
    height?: number | null;
    is_adult?: boolean | null;
    base_price?: number | null;
  }) & {
    brand?: {
      /**
       * Идентификатор бренда
       */
      id?: number;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
      image_url?: string | null;
      logo_url?: string | null;
    } & {
      /**
       * Название бренда
       */
      name?: string;
      /**
       * Активность бренда
       */
      is_active?: boolean;
      code?: string | null;
      description?: string | null;
    } & {};
    category?: {
      /**
       * Идентификатор категории
       */
      id?: number;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
      /**
       * Признак активности с учетом иерархии
       */
      is_real_active?: boolean;
    } & {
      /**
       * Название категории
       */
      name?: string;
      /**
       * Код категории
       */
      code?: string;
      parent_id?: number | null;
      /**
       * Категория наследует атрибуты родительской
       */
      is_inherits_properties?: boolean;
      /**
       * Признак активности данной категории
       */
      is_active?: boolean;
    } & {
      properties?: {
        /**
         * Название свойства
         */
        name?: string;
        /**
         * Публичное наименование
         */
        display_name?: string;
        /**
         * Код свойства
         */
        code?: string;
        /**
         * Тип свойства из PropertyTypeEnum
         */
        type?: string;
        /**
         * Подсказка при заполнении для значения
         */
        hint_value?: string;
        /**
         * Подсказка при заполнении для названия значения
         */
        hint_value_name?: string;
        /**
         * Поддерживает множественные значения
         */
        is_multiple?: boolean;
        /**
         * Выводится в фильтрах на витрине
         */
        is_filterable?: boolean;
        /**
         * Выводить на витрине
         */
        is_public?: boolean;
        /**
         * Активность атрибут
         */
        is_active?: boolean;
        /**
         * Атрибут имеет справочник значений
         */
        has_directory?: boolean;
        /**
         * Наследуемой от родительской категории атрибут
         */
        is_inherited?: boolean;
        /**
         * Атрибут обязателен для заполнения
         */
        is_required?: boolean;
        /**
         * Признак системного атрибута
         */
        is_system?: boolean;
        /**
         * Атрибут модерируется
         */
        is_moderated?: boolean;
        /**
         * Свойство используется для склейки товаров
         */
        is_gluing?: boolean;
        /**
         * Признак общего для всех категорий атрибута
         */
        is_common?: boolean;
        /**
         * Идентификатор атрибута, которому принадлежит значение
         */
        property_id?: number;
      }[];
      hidden_properties?: {
        /**
         * Название свойства
         */
        name?: string;
        /**
         * Публичное наименование
         */
        display_name?: string;
        /**
         * Код свойства
         */
        code?: string;
        /**
         * Тип свойства из PropertyTypeEnum
         */
        type?: string;
        /**
         * Подсказка при заполнении для значения
         */
        hint_value?: string;
        /**
         * Подсказка при заполнении для названия значения
         */
        hint_value_name?: string;
        /**
         * Поддерживает множественные значения
         */
        is_multiple?: boolean;
        /**
         * Выводится в фильтрах на витрине
         */
        is_filterable?: boolean;
        /**
         * Выводить на витрине
         */
        is_public?: boolean;
        /**
         * Активность атрибут
         */
        is_active?: boolean;
        /**
         * Атрибут имеет справочник значений
         */
        has_directory?: boolean;
        /**
         * Наследуемой от родительской категории атрибут
         */
        is_inherited?: boolean;
        /**
         * Атрибут обязателен для заполнения
         */
        is_required?: boolean;
        /**
         * Признак системного атрибута
         */
        is_system?: boolean;
        /**
         * Атрибут модерируется
         */
        is_moderated?: boolean;
        /**
         * Свойство используется для склейки товаров
         */
        is_gluing?: boolean;
        /**
         * Признак общего для всех категорий атрибута
         */
        is_common?: boolean;
        /**
         * Идентификатор атрибута, которому принадлежит значение
         */
        property_id?: number;
      }[];
    };
    images?: ({
      /**
       * Идентификатор картинки
       */
      id?: number;
      /**
       * true означает, что картинка хранится во внешнем источнике, false - в хранилище PIM
       */
      is_external?: boolean;
      /**
       * URL картинки
       */
      url?: string;
    } & {
      name?: string | null;
      /**
       * Порядок сортирковки в коллекции картинок
       */
      sort?: number;
    })[];
    attributes?: ({
      /**
       * Тип значения из PropertyTypeEnum
       */
      type?: string;
      /**
       * Ссылка на файл
       */
      url?: string;
    } & {
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
    })[];
    product_groups?: ({
      /**
       * Идентификатор склейки
       */
      id?: number;
      /**
       * Кол-во товаров в склейке
       */
      products_count?: number;
      main_product_image?: string | null;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * Идентификатор категории
       */
      category_id?: number;
      main_product_id?: number | null;
      /**
       * Название
       */
      name?: string;
      /**
       * Активность
       */
      is_active?: boolean;
    } & {
      category?: {
        /**
         * Идентификатор категории
         */
        id?: number;
        /**
         * Дата создания
         */
        created_at?: string;
        /**
         * Дата обновления
         */
        updated_at?: string;
        /**
         * Признак активности с учетом иерархии
         */
        is_real_active?: boolean;
      } & {
        /**
         * Название категории
         */
        name?: string;
        /**
         * Код категории
         */
        code?: string;
        parent_id?: number | null;
        /**
         * Категория наследует атрибуты родительской
         */
        is_inherits_properties?: boolean;
        /**
         * Признак активности данной категории
         */
        is_active?: boolean;
      } & {
        properties?: {
          /**
           * Название свойства
           */
          name?: string;
          /**
           * Публичное наименование
           */
          display_name?: string;
          /**
           * Код свойства
           */
          code?: string;
          /**
           * Тип свойства из PropertyTypeEnum
           */
          type?: string;
          /**
           * Подсказка при заполнении для значения
           */
          hint_value?: string;
          /**
           * Подсказка при заполнении для названия значения
           */
          hint_value_name?: string;
          /**
           * Поддерживает множественные значения
           */
          is_multiple?: boolean;
          /**
           * Выводится в фильтрах на витрине
           */
          is_filterable?: boolean;
          /**
           * Выводить на витрине
           */
          is_public?: boolean;
          /**
           * Активность атрибут
           */
          is_active?: boolean;
          /**
           * Атрибут имеет справочник значений
           */
          has_directory?: boolean;
          /**
           * Наследуемой от родительской категории атрибут
           */
          is_inherited?: boolean;
          /**
           * Атрибут обязателен для заполнения
           */
          is_required?: boolean;
          /**
           * Признак системного атрибута
           */
          is_system?: boolean;
          /**
           * Атрибут модерируется
           */
          is_moderated?: boolean;
          /**
           * Свойство используется для склейки товаров
           */
          is_gluing?: boolean;
          /**
           * Признак общего для всех категорий атрибута
           */
          is_common?: boolean;
          /**
           * Идентификатор атрибута, которому принадлежит значение
           */
          property_id?: number;
        }[];
        hidden_properties?: {
          /**
           * Название свойства
           */
          name?: string;
          /**
           * Публичное наименование
           */
          display_name?: string;
          /**
           * Код свойства
           */
          code?: string;
          /**
           * Тип свойства из PropertyTypeEnum
           */
          type?: string;
          /**
           * Подсказка при заполнении для значения
           */
          hint_value?: string;
          /**
           * Подсказка при заполнении для названия значения
           */
          hint_value_name?: string;
          /**
           * Поддерживает множественные значения
           */
          is_multiple?: boolean;
          /**
           * Выводится в фильтрах на витрине
           */
          is_filterable?: boolean;
          /**
           * Выводить на витрине
           */
          is_public?: boolean;
          /**
           * Активность атрибут
           */
          is_active?: boolean;
          /**
           * Атрибут имеет справочник значений
           */
          has_directory?: boolean;
          /**
           * Наследуемой от родительской категории атрибут
           */
          is_inherited?: boolean;
          /**
           * Атрибут обязателен для заполнения
           */
          is_required?: boolean;
          /**
           * Признак системного атрибута
           */
          is_system?: boolean;
          /**
           * Атрибут модерируется
           */
          is_moderated?: boolean;
          /**
           * Свойство используется для склейки товаров
           */
          is_gluing?: boolean;
          /**
           * Признак общего для всех категорий атрибута
           */
          is_common?: boolean;
          /**
           * Идентификатор атрибута, которому принадлежит значение
           */
          property_id?: number;
        }[];
      };
      main_product?: {
        /**
         * Идентификатор товара
         */
        id: number;
        /**
         * Дата создания
         */
        created_at: string;
        /**
         * Дата обновления
         */
        updated_at: string;
      } & ({
        external_id?: string | null;
        barcode?: string | null;
      } & {
        category_id?: number | null;
        brand_id?: number | null;
        /**
         * Название товара
         */
        name?: string;
        code?: string | null;
        description?: string | null;
        /**
         * Тип товара из CatalogProductTypeEnum
         */
        type?: number;
        /**
         * Публикация разрешена
         */
        allow_publish?: boolean;
        /**
         * Артикул
         */
        vendor_code?: string;
        weight?: number | null;
        weight_gross?: number | null;
        length?: number | null;
        width?: number | null;
        height?: number | null;
        is_adult?: boolean | null;
        base_price?: number | null;
      }) & {};
      products?: ({
        /**
         * Идентификатор товара
         */
        id: number;
        /**
         * Дата создания
         */
        created_at: string;
        /**
         * Дата обновления
         */
        updated_at: string;
      } & ({
        external_id?: string | null;
        barcode?: string | null;
      } & {
        category_id?: number | null;
        brand_id?: number | null;
        /**
         * Название товара
         */
        name?: string;
        code?: string | null;
        description?: string | null;
        /**
         * Тип товара из CatalogProductTypeEnum
         */
        type?: number;
        /**
         * Публикация разрешена
         */
        allow_publish?: boolean;
        /**
         * Артикул
         */
        vendor_code?: string;
        weight?: number | null;
        weight_gross?: number | null;
        length?: number | null;
        width?: number | null;
        height?: number | null;
        is_adult?: boolean | null;
        base_price?: number | null;
      }) & {})[];
    } & {})[];
    /**
     * Есть ли незаполненные обязательные атрибуты
     */
    no_filled_required_attributes?: boolean;
  } & {})[];

        export type SearchProductsResponseMeta = {
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        next_cursor?: string | null;
        previous_cursor?: string | null;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        total?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
};

        export type SearchProductsResponse = CommonResponse<SearchProductsResponseData, SearchProductsResponseMeta>;
        /**
 * Картинки не обязательны. Если их не требуется добавлять, то соответствующее поле должно отсутствовать в запросе, значение null использоваться не может.
 *
 */
export type CreateProductRequest = ({
  external_id?: string | null;
  barcode?: string | null;
} & {
  category_id?: number | null;
  brand_id?: number | null;
  /**
   * Название товара
   */
  name?: string;
  code?: string | null;
  description?: string | null;
  /**
   * Тип товара из CatalogProductTypeEnum
   */
  type?: number;
  /**
   * Публикация разрешена
   */
  allow_publish?: boolean;
  /**
   * Артикул
   */
  vendor_code?: string;
  weight?: number | null;
  weight_gross?: number | null;
  length?: number | null;
  width?: number | null;
  height?: number | null;
  is_adult?: boolean | null;
  base_price?: number | null;
}) & {} & {
  /**
   * Замещение всех имеющихся картинок на заданные
   */
  images?: ({
    /**
     * Идентификатор имеющейся картинки. Если задан, то url и preload_file_id игнорируются.
     */
    id?: number;
    /**
     * URL картинки. Если задан, будет добавлена новая внешняя картинка.
     */
    url?: string;
    /**
     * Идентификатор предзагруженного ранее файла. Если задан, будет создана новая картинка из файла.
     */
    preload_file_id?: number;
  } & {
    name?: string | null;
    /**
     * Порядок сортирковки в коллекции картинок
     */
    sort?: number;
  })[];
} & {
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
};


        export type CreateProductResponseData = {
  /**
   * Идентификатор товара
   */
  id: number;
  /**
   * Дата создания
   */
  created_at: string;
  /**
   * Дата обновления
   */
  updated_at: string;
} & ({
  external_id?: string | null;
  barcode?: string | null;
} & {
  category_id?: number | null;
  brand_id?: number | null;
  /**
   * Название товара
   */
  name?: string;
  code?: string | null;
  description?: string | null;
  /**
   * Тип товара из CatalogProductTypeEnum
   */
  type?: number;
  /**
   * Публикация разрешена
   */
  allow_publish?: boolean;
  /**
   * Артикул
   */
  vendor_code?: string;
  weight?: number | null;
  weight_gross?: number | null;
  length?: number | null;
  width?: number | null;
  height?: number | null;
  is_adult?: boolean | null;
  base_price?: number | null;
}) & {
    brand?: {
      /**
       * Идентификатор бренда
       */
      id?: number;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
      image_url?: string | null;
      logo_url?: string | null;
    } & {
      /**
       * Название бренда
       */
      name?: string;
      /**
       * Активность бренда
       */
      is_active?: boolean;
      code?: string | null;
      description?: string | null;
    } & {};
    category?: {
      /**
       * Идентификатор категории
       */
      id?: number;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
      /**
       * Признак активности с учетом иерархии
       */
      is_real_active?: boolean;
    } & {
      /**
       * Название категории
       */
      name?: string;
      /**
       * Код категории
       */
      code?: string;
      parent_id?: number | null;
      /**
       * Категория наследует атрибуты родительской
       */
      is_inherits_properties?: boolean;
      /**
       * Признак активности данной категории
       */
      is_active?: boolean;
    } & {
      properties?: {
        /**
         * Название свойства
         */
        name?: string;
        /**
         * Публичное наименование
         */
        display_name?: string;
        /**
         * Код свойства
         */
        code?: string;
        /**
         * Тип свойства из PropertyTypeEnum
         */
        type?: string;
        /**
         * Подсказка при заполнении для значения
         */
        hint_value?: string;
        /**
         * Подсказка при заполнении для названия значения
         */
        hint_value_name?: string;
        /**
         * Поддерживает множественные значения
         */
        is_multiple?: boolean;
        /**
         * Выводится в фильтрах на витрине
         */
        is_filterable?: boolean;
        /**
         * Выводить на витрине
         */
        is_public?: boolean;
        /**
         * Активность атрибут
         */
        is_active?: boolean;
        /**
         * Атрибут имеет справочник значений
         */
        has_directory?: boolean;
        /**
         * Наследуемой от родительской категории атрибут
         */
        is_inherited?: boolean;
        /**
         * Атрибут обязателен для заполнения
         */
        is_required?: boolean;
        /**
         * Признак системного атрибута
         */
        is_system?: boolean;
        /**
         * Атрибут модерируется
         */
        is_moderated?: boolean;
        /**
         * Свойство используется для склейки товаров
         */
        is_gluing?: boolean;
        /**
         * Признак общего для всех категорий атрибута
         */
        is_common?: boolean;
        /**
         * Идентификатор атрибута, которому принадлежит значение
         */
        property_id?: number;
      }[];
      hidden_properties?: {
        /**
         * Название свойства
         */
        name?: string;
        /**
         * Публичное наименование
         */
        display_name?: string;
        /**
         * Код свойства
         */
        code?: string;
        /**
         * Тип свойства из PropertyTypeEnum
         */
        type?: string;
        /**
         * Подсказка при заполнении для значения
         */
        hint_value?: string;
        /**
         * Подсказка при заполнении для названия значения
         */
        hint_value_name?: string;
        /**
         * Поддерживает множественные значения
         */
        is_multiple?: boolean;
        /**
         * Выводится в фильтрах на витрине
         */
        is_filterable?: boolean;
        /**
         * Выводить на витрине
         */
        is_public?: boolean;
        /**
         * Активность атрибут
         */
        is_active?: boolean;
        /**
         * Атрибут имеет справочник значений
         */
        has_directory?: boolean;
        /**
         * Наследуемой от родительской категории атрибут
         */
        is_inherited?: boolean;
        /**
         * Атрибут обязателен для заполнения
         */
        is_required?: boolean;
        /**
         * Признак системного атрибута
         */
        is_system?: boolean;
        /**
         * Атрибут модерируется
         */
        is_moderated?: boolean;
        /**
         * Свойство используется для склейки товаров
         */
        is_gluing?: boolean;
        /**
         * Признак общего для всех категорий атрибута
         */
        is_common?: boolean;
        /**
         * Идентификатор атрибута, которому принадлежит значение
         */
        property_id?: number;
      }[];
    };
    images?: ({
      /**
       * Идентификатор картинки
       */
      id?: number;
      /**
       * true означает, что картинка хранится во внешнем источнике, false - в хранилище PIM
       */
      is_external?: boolean;
      /**
       * URL картинки
       */
      url?: string;
    } & {
      name?: string | null;
      /**
       * Порядок сортирковки в коллекции картинок
       */
      sort?: number;
    })[];
    attributes?: ({
      /**
       * Тип значения из PropertyTypeEnum
       */
      type?: string;
      /**
       * Ссылка на файл
       */
      url?: string;
    } & {
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
    })[];
    product_groups?: ({
      /**
       * Идентификатор склейки
       */
      id?: number;
      /**
       * Кол-во товаров в склейке
       */
      products_count?: number;
      main_product_image?: string | null;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * Идентификатор категории
       */
      category_id?: number;
      main_product_id?: number | null;
      /**
       * Название
       */
      name?: string;
      /**
       * Активность
       */
      is_active?: boolean;
    } & {
      category?: {
        /**
         * Идентификатор категории
         */
        id?: number;
        /**
         * Дата создания
         */
        created_at?: string;
        /**
         * Дата обновления
         */
        updated_at?: string;
        /**
         * Признак активности с учетом иерархии
         */
        is_real_active?: boolean;
      } & {
        /**
         * Название категории
         */
        name?: string;
        /**
         * Код категории
         */
        code?: string;
        parent_id?: number | null;
        /**
         * Категория наследует атрибуты родительской
         */
        is_inherits_properties?: boolean;
        /**
         * Признак активности данной категории
         */
        is_active?: boolean;
      } & {
        properties?: {
          /**
           * Название свойства
           */
          name?: string;
          /**
           * Публичное наименование
           */
          display_name?: string;
          /**
           * Код свойства
           */
          code?: string;
          /**
           * Тип свойства из PropertyTypeEnum
           */
          type?: string;
          /**
           * Подсказка при заполнении для значения
           */
          hint_value?: string;
          /**
           * Подсказка при заполнении для названия значения
           */
          hint_value_name?: string;
          /**
           * Поддерживает множественные значения
           */
          is_multiple?: boolean;
          /**
           * Выводится в фильтрах на витрине
           */
          is_filterable?: boolean;
          /**
           * Выводить на витрине
           */
          is_public?: boolean;
          /**
           * Активность атрибут
           */
          is_active?: boolean;
          /**
           * Атрибут имеет справочник значений
           */
          has_directory?: boolean;
          /**
           * Наследуемой от родительской категории атрибут
           */
          is_inherited?: boolean;
          /**
           * Атрибут обязателен для заполнения
           */
          is_required?: boolean;
          /**
           * Признак системного атрибута
           */
          is_system?: boolean;
          /**
           * Атрибут модерируется
           */
          is_moderated?: boolean;
          /**
           * Свойство используется для склейки товаров
           */
          is_gluing?: boolean;
          /**
           * Признак общего для всех категорий атрибута
           */
          is_common?: boolean;
          /**
           * Идентификатор атрибута, которому принадлежит значение
           */
          property_id?: number;
        }[];
        hidden_properties?: {
          /**
           * Название свойства
           */
          name?: string;
          /**
           * Публичное наименование
           */
          display_name?: string;
          /**
           * Код свойства
           */
          code?: string;
          /**
           * Тип свойства из PropertyTypeEnum
           */
          type?: string;
          /**
           * Подсказка при заполнении для значения
           */
          hint_value?: string;
          /**
           * Подсказка при заполнении для названия значения
           */
          hint_value_name?: string;
          /**
           * Поддерживает множественные значения
           */
          is_multiple?: boolean;
          /**
           * Выводится в фильтрах на витрине
           */
          is_filterable?: boolean;
          /**
           * Выводить на витрине
           */
          is_public?: boolean;
          /**
           * Активность атрибут
           */
          is_active?: boolean;
          /**
           * Атрибут имеет справочник значений
           */
          has_directory?: boolean;
          /**
           * Наследуемой от родительской категории атрибут
           */
          is_inherited?: boolean;
          /**
           * Атрибут обязателен для заполнения
           */
          is_required?: boolean;
          /**
           * Признак системного атрибута
           */
          is_system?: boolean;
          /**
           * Атрибут модерируется
           */
          is_moderated?: boolean;
          /**
           * Свойство используется для склейки товаров
           */
          is_gluing?: boolean;
          /**
           * Признак общего для всех категорий атрибута
           */
          is_common?: boolean;
          /**
           * Идентификатор атрибута, которому принадлежит значение
           */
          property_id?: number;
        }[];
      };
      main_product?: {
        /**
         * Идентификатор товара
         */
        id: number;
        /**
         * Дата создания
         */
        created_at: string;
        /**
         * Дата обновления
         */
        updated_at: string;
      } & ({
        external_id?: string | null;
        barcode?: string | null;
      } & {
        category_id?: number | null;
        brand_id?: number | null;
        /**
         * Название товара
         */
        name?: string;
        code?: string | null;
        description?: string | null;
        /**
         * Тип товара из CatalogProductTypeEnum
         */
        type?: number;
        /**
         * Публикация разрешена
         */
        allow_publish?: boolean;
        /**
         * Артикул
         */
        vendor_code?: string;
        weight?: number | null;
        weight_gross?: number | null;
        length?: number | null;
        width?: number | null;
        height?: number | null;
        is_adult?: boolean | null;
        base_price?: number | null;
      }) & {};
      products?: ({
        /**
         * Идентификатор товара
         */
        id: number;
        /**
         * Дата создания
         */
        created_at: string;
        /**
         * Дата обновления
         */
        updated_at: string;
      } & ({
        external_id?: string | null;
        barcode?: string | null;
      } & {
        category_id?: number | null;
        brand_id?: number | null;
        /**
         * Название товара
         */
        name?: string;
        code?: string | null;
        description?: string | null;
        /**
         * Тип товара из CatalogProductTypeEnum
         */
        type?: number;
        /**
         * Публикация разрешена
         */
        allow_publish?: boolean;
        /**
         * Артикул
         */
        vendor_code?: string;
        weight?: number | null;
        weight_gross?: number | null;
        length?: number | null;
        width?: number | null;
        height?: number | null;
        is_adult?: boolean | null;
        base_price?: number | null;
      }) & {})[];
    } & {})[];
    /**
     * Есть ли незаполненные обязательные атрибуты
     */
    no_filled_required_attributes?: boolean;
  } & {};

        export type CreateProductResponseMeta = {};

        export type CreateProductResponse = CommonResponse<CreateProductResponseData, CreateProductResponseMeta>;
        /**
 * Атрибуты и картинки не обязательны. Если их не требуется изменять, то соответствующие поля должны отсутствовать в запросе, значение null использоваться не может. Процедура обновления такая же как в запросе PUT .../products/{id}/attributes и PUT .../products/{id}/images.
 *
 */
export type ReplaceProductRequest = ({
  external_id?: string | null;
  barcode?: string | null;
} & {
  category_id?: number | null;
  brand_id?: number | null;
  /**
   * Название товара
   */
  name?: string;
  code?: string | null;
  description?: string | null;
  /**
   * Тип товара из CatalogProductTypeEnum
   */
  type?: number;
  /**
   * Публикация разрешена
   */
  allow_publish?: boolean;
  /**
   * Артикул
   */
  vendor_code?: string;
  weight?: number | null;
  weight_gross?: number | null;
  length?: number | null;
  width?: number | null;
  height?: number | null;
  is_adult?: boolean | null;
  base_price?: number | null;
}) & {
  /**
   * Идентификатор статуса товара из ProductStatus
   */
  status_id?: number;
  status_comment?: string | null;
} & {} & {
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
} & {
  /**
   * Замещение всех имеющихся картинок на заданные
   */
  images?: ({
    /**
     * Идентификатор имеющейся картинки. Если задан, то url и preload_file_id игнорируются.
     */
    id?: number;
    /**
     * URL картинки. Если задан, будет добавлена новая внешняя картинка.
     */
    url?: string;
    /**
     * Идентификатор предзагруженного ранее файла. Если задан, будет создана новая картинка из файла.
     */
    preload_file_id?: number;
  } & {
    name?: string | null;
    /**
     * Порядок сортирковки в коллекции картинок
     */
    sort?: number;
  })[];
};


        export type ReplaceProductResponseData = {
  /**
   * Идентификатор товара
   */
  id: number;
  /**
   * Дата создания
   */
  created_at: string;
  /**
   * Дата обновления
   */
  updated_at: string;
} & ({
  external_id?: string | null;
  barcode?: string | null;
} & {
  category_id?: number | null;
  brand_id?: number | null;
  /**
   * Название товара
   */
  name?: string;
  code?: string | null;
  description?: string | null;
  /**
   * Тип товара из CatalogProductTypeEnum
   */
  type?: number;
  /**
   * Публикация разрешена
   */
  allow_publish?: boolean;
  /**
   * Артикул
   */
  vendor_code?: string;
  weight?: number | null;
  weight_gross?: number | null;
  length?: number | null;
  width?: number | null;
  height?: number | null;
  is_adult?: boolean | null;
  base_price?: number | null;
}) & {
    brand?: {
      /**
       * Идентификатор бренда
       */
      id?: number;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
      image_url?: string | null;
      logo_url?: string | null;
    } & {
      /**
       * Название бренда
       */
      name?: string;
      /**
       * Активность бренда
       */
      is_active?: boolean;
      code?: string | null;
      description?: string | null;
    } & {};
    category?: {
      /**
       * Идентификатор категории
       */
      id?: number;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
      /**
       * Признак активности с учетом иерархии
       */
      is_real_active?: boolean;
    } & {
      /**
       * Название категории
       */
      name?: string;
      /**
       * Код категории
       */
      code?: string;
      parent_id?: number | null;
      /**
       * Категория наследует атрибуты родительской
       */
      is_inherits_properties?: boolean;
      /**
       * Признак активности данной категории
       */
      is_active?: boolean;
    } & {
      properties?: {
        /**
         * Название свойства
         */
        name?: string;
        /**
         * Публичное наименование
         */
        display_name?: string;
        /**
         * Код свойства
         */
        code?: string;
        /**
         * Тип свойства из PropertyTypeEnum
         */
        type?: string;
        /**
         * Подсказка при заполнении для значения
         */
        hint_value?: string;
        /**
         * Подсказка при заполнении для названия значения
         */
        hint_value_name?: string;
        /**
         * Поддерживает множественные значения
         */
        is_multiple?: boolean;
        /**
         * Выводится в фильтрах на витрине
         */
        is_filterable?: boolean;
        /**
         * Выводить на витрине
         */
        is_public?: boolean;
        /**
         * Активность атрибут
         */
        is_active?: boolean;
        /**
         * Атрибут имеет справочник значений
         */
        has_directory?: boolean;
        /**
         * Наследуемой от родительской категории атрибут
         */
        is_inherited?: boolean;
        /**
         * Атрибут обязателен для заполнения
         */
        is_required?: boolean;
        /**
         * Признак системного атрибута
         */
        is_system?: boolean;
        /**
         * Атрибут модерируется
         */
        is_moderated?: boolean;
        /**
         * Свойство используется для склейки товаров
         */
        is_gluing?: boolean;
        /**
         * Признак общего для всех категорий атрибута
         */
        is_common?: boolean;
        /**
         * Идентификатор атрибута, которому принадлежит значение
         */
        property_id?: number;
      }[];
      hidden_properties?: {
        /**
         * Название свойства
         */
        name?: string;
        /**
         * Публичное наименование
         */
        display_name?: string;
        /**
         * Код свойства
         */
        code?: string;
        /**
         * Тип свойства из PropertyTypeEnum
         */
        type?: string;
        /**
         * Подсказка при заполнении для значения
         */
        hint_value?: string;
        /**
         * Подсказка при заполнении для названия значения
         */
        hint_value_name?: string;
        /**
         * Поддерживает множественные значения
         */
        is_multiple?: boolean;
        /**
         * Выводится в фильтрах на витрине
         */
        is_filterable?: boolean;
        /**
         * Выводить на витрине
         */
        is_public?: boolean;
        /**
         * Активность атрибут
         */
        is_active?: boolean;
        /**
         * Атрибут имеет справочник значений
         */
        has_directory?: boolean;
        /**
         * Наследуемой от родительской категории атрибут
         */
        is_inherited?: boolean;
        /**
         * Атрибут обязателен для заполнения
         */
        is_required?: boolean;
        /**
         * Признак системного атрибута
         */
        is_system?: boolean;
        /**
         * Атрибут модерируется
         */
        is_moderated?: boolean;
        /**
         * Свойство используется для склейки товаров
         */
        is_gluing?: boolean;
        /**
         * Признак общего для всех категорий атрибута
         */
        is_common?: boolean;
        /**
         * Идентификатор атрибута, которому принадлежит значение
         */
        property_id?: number;
      }[];
    };
    images?: ({
      /**
       * Идентификатор картинки
       */
      id?: number;
      /**
       * true означает, что картинка хранится во внешнем источнике, false - в хранилище PIM
       */
      is_external?: boolean;
      /**
       * URL картинки
       */
      url?: string;
    } & {
      name?: string | null;
      /**
       * Порядок сортирковки в коллекции картинок
       */
      sort?: number;
    })[];
    attributes?: ({
      /**
       * Тип значения из PropertyTypeEnum
       */
      type?: string;
      /**
       * Ссылка на файл
       */
      url?: string;
    } & {
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
    })[];
    product_groups?: ({
      /**
       * Идентификатор склейки
       */
      id?: number;
      /**
       * Кол-во товаров в склейке
       */
      products_count?: number;
      main_product_image?: string | null;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * Идентификатор категории
       */
      category_id?: number;
      main_product_id?: number | null;
      /**
       * Название
       */
      name?: string;
      /**
       * Активность
       */
      is_active?: boolean;
    } & {
      category?: {
        /**
         * Идентификатор категории
         */
        id?: number;
        /**
         * Дата создания
         */
        created_at?: string;
        /**
         * Дата обновления
         */
        updated_at?: string;
        /**
         * Признак активности с учетом иерархии
         */
        is_real_active?: boolean;
      } & {
        /**
         * Название категории
         */
        name?: string;
        /**
         * Код категории
         */
        code?: string;
        parent_id?: number | null;
        /**
         * Категория наследует атрибуты родительской
         */
        is_inherits_properties?: boolean;
        /**
         * Признак активности данной категории
         */
        is_active?: boolean;
      } & {
        properties?: {
          /**
           * Название свойства
           */
          name?: string;
          /**
           * Публичное наименование
           */
          display_name?: string;
          /**
           * Код свойства
           */
          code?: string;
          /**
           * Тип свойства из PropertyTypeEnum
           */
          type?: string;
          /**
           * Подсказка при заполнении для значения
           */
          hint_value?: string;
          /**
           * Подсказка при заполнении для названия значения
           */
          hint_value_name?: string;
          /**
           * Поддерживает множественные значения
           */
          is_multiple?: boolean;
          /**
           * Выводится в фильтрах на витрине
           */
          is_filterable?: boolean;
          /**
           * Выводить на витрине
           */
          is_public?: boolean;
          /**
           * Активность атрибут
           */
          is_active?: boolean;
          /**
           * Атрибут имеет справочник значений
           */
          has_directory?: boolean;
          /**
           * Наследуемой от родительской категории атрибут
           */
          is_inherited?: boolean;
          /**
           * Атрибут обязателен для заполнения
           */
          is_required?: boolean;
          /**
           * Признак системного атрибута
           */
          is_system?: boolean;
          /**
           * Атрибут модерируется
           */
          is_moderated?: boolean;
          /**
           * Свойство используется для склейки товаров
           */
          is_gluing?: boolean;
          /**
           * Признак общего для всех категорий атрибута
           */
          is_common?: boolean;
          /**
           * Идентификатор атрибута, которому принадлежит значение
           */
          property_id?: number;
        }[];
        hidden_properties?: {
          /**
           * Название свойства
           */
          name?: string;
          /**
           * Публичное наименование
           */
          display_name?: string;
          /**
           * Код свойства
           */
          code?: string;
          /**
           * Тип свойства из PropertyTypeEnum
           */
          type?: string;
          /**
           * Подсказка при заполнении для значения
           */
          hint_value?: string;
          /**
           * Подсказка при заполнении для названия значения
           */
          hint_value_name?: string;
          /**
           * Поддерживает множественные значения
           */
          is_multiple?: boolean;
          /**
           * Выводится в фильтрах на витрине
           */
          is_filterable?: boolean;
          /**
           * Выводить на витрине
           */
          is_public?: boolean;
          /**
           * Активность атрибут
           */
          is_active?: boolean;
          /**
           * Атрибут имеет справочник значений
           */
          has_directory?: boolean;
          /**
           * Наследуемой от родительской категории атрибут
           */
          is_inherited?: boolean;
          /**
           * Атрибут обязателен для заполнения
           */
          is_required?: boolean;
          /**
           * Признак системного атрибута
           */
          is_system?: boolean;
          /**
           * Атрибут модерируется
           */
          is_moderated?: boolean;
          /**
           * Свойство используется для склейки товаров
           */
          is_gluing?: boolean;
          /**
           * Признак общего для всех категорий атрибута
           */
          is_common?: boolean;
          /**
           * Идентификатор атрибута, которому принадлежит значение
           */
          property_id?: number;
        }[];
      };
      main_product?: {
        /**
         * Идентификатор товара
         */
        id: number;
        /**
         * Дата создания
         */
        created_at: string;
        /**
         * Дата обновления
         */
        updated_at: string;
      } & ({
        external_id?: string | null;
        barcode?: string | null;
      } & {
        category_id?: number | null;
        brand_id?: number | null;
        /**
         * Название товара
         */
        name?: string;
        code?: string | null;
        description?: string | null;
        /**
         * Тип товара из CatalogProductTypeEnum
         */
        type?: number;
        /**
         * Публикация разрешена
         */
        allow_publish?: boolean;
        /**
         * Артикул
         */
        vendor_code?: string;
        weight?: number | null;
        weight_gross?: number | null;
        length?: number | null;
        width?: number | null;
        height?: number | null;
        is_adult?: boolean | null;
        base_price?: number | null;
      }) & {};
      products?: ({
        /**
         * Идентификатор товара
         */
        id: number;
        /**
         * Дата создания
         */
        created_at: string;
        /**
         * Дата обновления
         */
        updated_at: string;
      } & ({
        external_id?: string | null;
        barcode?: string | null;
      } & {
        category_id?: number | null;
        brand_id?: number | null;
        /**
         * Название товара
         */
        name?: string;
        code?: string | null;
        description?: string | null;
        /**
         * Тип товара из CatalogProductTypeEnum
         */
        type?: number;
        /**
         * Публикация разрешена
         */
        allow_publish?: boolean;
        /**
         * Артикул
         */
        vendor_code?: string;
        weight?: number | null;
        weight_gross?: number | null;
        length?: number | null;
        width?: number | null;
        height?: number | null;
        is_adult?: boolean | null;
        base_price?: number | null;
      }) & {})[];
    } & {})[];
    /**
     * Есть ли незаполненные обязательные атрибуты
     */
    no_filled_required_attributes?: boolean;
  } & {};

        export type ReplaceProductResponseMeta = {};

        export type ReplaceProductResponse = CommonResponse<ReplaceProductResponseData, ReplaceProductResponseMeta>;
        /**
 * Атрибуты и картинки не обязательны. Если их не требуется изменять, то соответствующие поля должны отсутствовать в запросе, значение null использоваться не может. Процедура обновления такая же как в запросе PATCH .../products/{id}/attributes и PATCH .../products/{id}/images.
 *
 */
export type PatchProductRequest = ({
  external_id?: string | null;
  barcode?: string | null;
} & {
  category_id?: number | null;
  brand_id?: number | null;
  /**
   * Название товара
   */
  name?: string;
  code?: string | null;
  description?: string | null;
  /**
   * Тип товара из CatalogProductTypeEnum
   */
  type?: number;
  /**
   * Публикация разрешена
   */
  allow_publish?: boolean;
  /**
   * Артикул
   */
  vendor_code?: string;
  weight?: number | null;
  weight_gross?: number | null;
  length?: number | null;
  width?: number | null;
  height?: number | null;
  is_adult?: boolean | null;
  base_price?: number | null;
}) & {
  /**
   * Идентификатор статуса товара из ProductStatus
   */
  status_id?: number;
  status_comment?: string | null;
} & {
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
} & {
  /**
   * Обновление только заданных в запросе картинок
   */
  images?: ({
    /**
     * Идентификатор имеющейся картинки. Если задан, то url и preload_file_id игнорируются.
     */
    id?: number;
    /**
     * URL картинки. Если задан, будет добавлена новая внешняя картинка.
     */
    url?: string;
    /**
     * Идентификатор предзагруженного ранее файла. Если задан, будет создана новая картинка из файла.
     */
    preload_file_id?: number;
  } & {
    name?: string | null;
    /**
     * Порядок сортирковки в коллекции картинок
     */
    sort?: number;
  })[];
};


        export type PatchProductResponseData = {
  /**
   * Идентификатор товара
   */
  id: number;
  /**
   * Дата создания
   */
  created_at: string;
  /**
   * Дата обновления
   */
  updated_at: string;
} & ({
  external_id?: string | null;
  barcode?: string | null;
} & {
  category_id?: number | null;
  brand_id?: number | null;
  /**
   * Название товара
   */
  name?: string;
  code?: string | null;
  description?: string | null;
  /**
   * Тип товара из CatalogProductTypeEnum
   */
  type?: number;
  /**
   * Публикация разрешена
   */
  allow_publish?: boolean;
  /**
   * Артикул
   */
  vendor_code?: string;
  weight?: number | null;
  weight_gross?: number | null;
  length?: number | null;
  width?: number | null;
  height?: number | null;
  is_adult?: boolean | null;
  base_price?: number | null;
}) & {
    brand?: {
      /**
       * Идентификатор бренда
       */
      id?: number;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
      image_url?: string | null;
      logo_url?: string | null;
    } & {
      /**
       * Название бренда
       */
      name?: string;
      /**
       * Активность бренда
       */
      is_active?: boolean;
      code?: string | null;
      description?: string | null;
    } & {};
    category?: {
      /**
       * Идентификатор категории
       */
      id?: number;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
      /**
       * Признак активности с учетом иерархии
       */
      is_real_active?: boolean;
    } & {
      /**
       * Название категории
       */
      name?: string;
      /**
       * Код категории
       */
      code?: string;
      parent_id?: number | null;
      /**
       * Категория наследует атрибуты родительской
       */
      is_inherits_properties?: boolean;
      /**
       * Признак активности данной категории
       */
      is_active?: boolean;
    } & {
      properties?: {
        /**
         * Название свойства
         */
        name?: string;
        /**
         * Публичное наименование
         */
        display_name?: string;
        /**
         * Код свойства
         */
        code?: string;
        /**
         * Тип свойства из PropertyTypeEnum
         */
        type?: string;
        /**
         * Подсказка при заполнении для значения
         */
        hint_value?: string;
        /**
         * Подсказка при заполнении для названия значения
         */
        hint_value_name?: string;
        /**
         * Поддерживает множественные значения
         */
        is_multiple?: boolean;
        /**
         * Выводится в фильтрах на витрине
         */
        is_filterable?: boolean;
        /**
         * Выводить на витрине
         */
        is_public?: boolean;
        /**
         * Активность атрибут
         */
        is_active?: boolean;
        /**
         * Атрибут имеет справочник значений
         */
        has_directory?: boolean;
        /**
         * Наследуемой от родительской категории атрибут
         */
        is_inherited?: boolean;
        /**
         * Атрибут обязателен для заполнения
         */
        is_required?: boolean;
        /**
         * Признак системного атрибута
         */
        is_system?: boolean;
        /**
         * Атрибут модерируется
         */
        is_moderated?: boolean;
        /**
         * Свойство используется для склейки товаров
         */
        is_gluing?: boolean;
        /**
         * Признак общего для всех категорий атрибута
         */
        is_common?: boolean;
        /**
         * Идентификатор атрибута, которому принадлежит значение
         */
        property_id?: number;
      }[];
      hidden_properties?: {
        /**
         * Название свойства
         */
        name?: string;
        /**
         * Публичное наименование
         */
        display_name?: string;
        /**
         * Код свойства
         */
        code?: string;
        /**
         * Тип свойства из PropertyTypeEnum
         */
        type?: string;
        /**
         * Подсказка при заполнении для значения
         */
        hint_value?: string;
        /**
         * Подсказка при заполнении для названия значения
         */
        hint_value_name?: string;
        /**
         * Поддерживает множественные значения
         */
        is_multiple?: boolean;
        /**
         * Выводится в фильтрах на витрине
         */
        is_filterable?: boolean;
        /**
         * Выводить на витрине
         */
        is_public?: boolean;
        /**
         * Активность атрибут
         */
        is_active?: boolean;
        /**
         * Атрибут имеет справочник значений
         */
        has_directory?: boolean;
        /**
         * Наследуемой от родительской категории атрибут
         */
        is_inherited?: boolean;
        /**
         * Атрибут обязателен для заполнения
         */
        is_required?: boolean;
        /**
         * Признак системного атрибута
         */
        is_system?: boolean;
        /**
         * Атрибут модерируется
         */
        is_moderated?: boolean;
        /**
         * Свойство используется для склейки товаров
         */
        is_gluing?: boolean;
        /**
         * Признак общего для всех категорий атрибута
         */
        is_common?: boolean;
        /**
         * Идентификатор атрибута, которому принадлежит значение
         */
        property_id?: number;
      }[];
    };
    images?: ({
      /**
       * Идентификатор картинки
       */
      id?: number;
      /**
       * true означает, что картинка хранится во внешнем источнике, false - в хранилище PIM
       */
      is_external?: boolean;
      /**
       * URL картинки
       */
      url?: string;
    } & {
      name?: string | null;
      /**
       * Порядок сортирковки в коллекции картинок
       */
      sort?: number;
    })[];
    attributes?: ({
      /**
       * Тип значения из PropertyTypeEnum
       */
      type?: string;
      /**
       * Ссылка на файл
       */
      url?: string;
    } & {
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
    })[];
    product_groups?: ({
      /**
       * Идентификатор склейки
       */
      id?: number;
      /**
       * Кол-во товаров в склейке
       */
      products_count?: number;
      main_product_image?: string | null;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * Идентификатор категории
       */
      category_id?: number;
      main_product_id?: number | null;
      /**
       * Название
       */
      name?: string;
      /**
       * Активность
       */
      is_active?: boolean;
    } & {
      category?: {
        /**
         * Идентификатор категории
         */
        id?: number;
        /**
         * Дата создания
         */
        created_at?: string;
        /**
         * Дата обновления
         */
        updated_at?: string;
        /**
         * Признак активности с учетом иерархии
         */
        is_real_active?: boolean;
      } & {
        /**
         * Название категории
         */
        name?: string;
        /**
         * Код категории
         */
        code?: string;
        parent_id?: number | null;
        /**
         * Категория наследует атрибуты родительской
         */
        is_inherits_properties?: boolean;
        /**
         * Признак активности данной категории
         */
        is_active?: boolean;
      } & {
        properties?: {
          /**
           * Название свойства
           */
          name?: string;
          /**
           * Публичное наименование
           */
          display_name?: string;
          /**
           * Код свойства
           */
          code?: string;
          /**
           * Тип свойства из PropertyTypeEnum
           */
          type?: string;
          /**
           * Подсказка при заполнении для значения
           */
          hint_value?: string;
          /**
           * Подсказка при заполнении для названия значения
           */
          hint_value_name?: string;
          /**
           * Поддерживает множественные значения
           */
          is_multiple?: boolean;
          /**
           * Выводится в фильтрах на витрине
           */
          is_filterable?: boolean;
          /**
           * Выводить на витрине
           */
          is_public?: boolean;
          /**
           * Активность атрибут
           */
          is_active?: boolean;
          /**
           * Атрибут имеет справочник значений
           */
          has_directory?: boolean;
          /**
           * Наследуемой от родительской категории атрибут
           */
          is_inherited?: boolean;
          /**
           * Атрибут обязателен для заполнения
           */
          is_required?: boolean;
          /**
           * Признак системного атрибута
           */
          is_system?: boolean;
          /**
           * Атрибут модерируется
           */
          is_moderated?: boolean;
          /**
           * Свойство используется для склейки товаров
           */
          is_gluing?: boolean;
          /**
           * Признак общего для всех категорий атрибута
           */
          is_common?: boolean;
          /**
           * Идентификатор атрибута, которому принадлежит значение
           */
          property_id?: number;
        }[];
        hidden_properties?: {
          /**
           * Название свойства
           */
          name?: string;
          /**
           * Публичное наименование
           */
          display_name?: string;
          /**
           * Код свойства
           */
          code?: string;
          /**
           * Тип свойства из PropertyTypeEnum
           */
          type?: string;
          /**
           * Подсказка при заполнении для значения
           */
          hint_value?: string;
          /**
           * Подсказка при заполнении для названия значения
           */
          hint_value_name?: string;
          /**
           * Поддерживает множественные значения
           */
          is_multiple?: boolean;
          /**
           * Выводится в фильтрах на витрине
           */
          is_filterable?: boolean;
          /**
           * Выводить на витрине
           */
          is_public?: boolean;
          /**
           * Активность атрибут
           */
          is_active?: boolean;
          /**
           * Атрибут имеет справочник значений
           */
          has_directory?: boolean;
          /**
           * Наследуемой от родительской категории атрибут
           */
          is_inherited?: boolean;
          /**
           * Атрибут обязателен для заполнения
           */
          is_required?: boolean;
          /**
           * Признак системного атрибута
           */
          is_system?: boolean;
          /**
           * Атрибут модерируется
           */
          is_moderated?: boolean;
          /**
           * Свойство используется для склейки товаров
           */
          is_gluing?: boolean;
          /**
           * Признак общего для всех категорий атрибута
           */
          is_common?: boolean;
          /**
           * Идентификатор атрибута, которому принадлежит значение
           */
          property_id?: number;
        }[];
      };
      main_product?: {
        /**
         * Идентификатор товара
         */
        id: number;
        /**
         * Дата создания
         */
        created_at: string;
        /**
         * Дата обновления
         */
        updated_at: string;
      } & ({
        external_id?: string | null;
        barcode?: string | null;
      } & {
        category_id?: number | null;
        brand_id?: number | null;
        /**
         * Название товара
         */
        name?: string;
        code?: string | null;
        description?: string | null;
        /**
         * Тип товара из CatalogProductTypeEnum
         */
        type?: number;
        /**
         * Публикация разрешена
         */
        allow_publish?: boolean;
        /**
         * Артикул
         */
        vendor_code?: string;
        weight?: number | null;
        weight_gross?: number | null;
        length?: number | null;
        width?: number | null;
        height?: number | null;
        is_adult?: boolean | null;
        base_price?: number | null;
      }) & {};
      products?: ({
        /**
         * Идентификатор товара
         */
        id: number;
        /**
         * Дата создания
         */
        created_at: string;
        /**
         * Дата обновления
         */
        updated_at: string;
      } & ({
        external_id?: string | null;
        barcode?: string | null;
      } & {
        category_id?: number | null;
        brand_id?: number | null;
        /**
         * Название товара
         */
        name?: string;
        code?: string | null;
        description?: string | null;
        /**
         * Тип товара из CatalogProductTypeEnum
         */
        type?: number;
        /**
         * Публикация разрешена
         */
        allow_publish?: boolean;
        /**
         * Артикул
         */
        vendor_code?: string;
        weight?: number | null;
        weight_gross?: number | null;
        length?: number | null;
        width?: number | null;
        height?: number | null;
        is_adult?: boolean | null;
        base_price?: number | null;
      }) & {})[];
    } & {})[];
    /**
     * Есть ли незаполненные обязательные атрибуты
     */
    no_filled_required_attributes?: boolean;
  } & {};

        export type PatchProductResponseMeta = {};

        export type PatchProductResponse = CommonResponse<PatchProductResponseData, PatchProductResponseMeta>;
        export interface SearchProductDraftsRequest {
  sort?: string[];
  include?: string[];
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
  filter?: {
    /**
     * Идентификатор(ы) товара
     */
    id?: number;
    /**
     * Название или часть названия товара
     */
    name?: string;
    /**
     * Код(ы) товаров
     */
    code?: string;
    /**
     * Идентификатор(ы) внешней системы
     */
    external_id?: string;
    /**
     * Идентификатор(ы) категорий
     */
    category_id?: number;
    /**
     * Статус выгрузки товара на торговые площадки из ProductStatusEnum
     */
    status_id?: number;
    /**
     * Активность товара для витрины
     */
    allow_publish?: boolean;
    /**
     * Артикул
     */
    vendor_code?: string;
    /**
     * Штрихкод (EAN)
     */
    barcode?: string;
    /**
     * Товар 18+
     */
    is_adult?: boolean;
    /**
     * Тип товара из CatalogProductTypeEnum
     */
    type?: number;
    brand_id?: number[];
    /**
     * Состоит ли товар хотя бы в одной склейке
     */
    has_product_groups?: boolean;
    /**
     * Есть ли у товара хотя бы один незаполненный обязательный атрибут
     */
    has_no_filled_required_attributes?: boolean;
    /**
     * Относится к категории с хотя бы одним атрибутом для склейки
     */
    category_has_is_gluing?: boolean;
    /**
     * Дата создания меньше или равна
     */
    created_at_lte?: string;
    /**
     * Дата создания больше или равна
     */
    created_at_gte?: string;
    /**
     * Дата обновления меньше или равна
     */
    updated_at_lte?: string;
    /**
     * Дата обновления больше или равна
     */
    updated_at_gte?: string;
  };
}


        export type SearchProductDraftsResponseData = ({
  /**
   * Идентификатор товара
   */
  id: number;
  /**
   * Дата создания
   */
  created_at: string;
  /**
   * Дата обновления
   */
  updated_at: string;
} & ({
  external_id?: string | null;
  barcode?: string | null;
} & {
  category_id?: number | null;
  brand_id?: number | null;
  /**
   * Название товара
   */
  name?: string;
  code?: string | null;
  description?: string | null;
  /**
   * Тип товара из CatalogProductTypeEnum
   */
  type?: number;
  /**
   * Публикация разрешена
   */
  allow_publish?: boolean;
  /**
   * Артикул
   */
  vendor_code?: string;
  weight?: number | null;
  weight_gross?: number | null;
  length?: number | null;
  width?: number | null;
  height?: number | null;
  is_adult?: boolean | null;
  base_price?: number | null;
}) & {
    brand?: {
      /**
       * Идентификатор бренда
       */
      id?: number;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
      image_url?: string | null;
      logo_url?: string | null;
    } & {
      /**
       * Название бренда
       */
      name?: string;
      /**
       * Активность бренда
       */
      is_active?: boolean;
      code?: string | null;
      description?: string | null;
    } & {};
    category?: {
      /**
       * Идентификатор категории
       */
      id?: number;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
      /**
       * Признак активности с учетом иерархии
       */
      is_real_active?: boolean;
    } & {
      /**
       * Название категории
       */
      name?: string;
      /**
       * Код категории
       */
      code?: string;
      parent_id?: number | null;
      /**
       * Категория наследует атрибуты родительской
       */
      is_inherits_properties?: boolean;
      /**
       * Признак активности данной категории
       */
      is_active?: boolean;
    } & {
      properties?: {
        /**
         * Название свойства
         */
        name?: string;
        /**
         * Публичное наименование
         */
        display_name?: string;
        /**
         * Код свойства
         */
        code?: string;
        /**
         * Тип свойства из PropertyTypeEnum
         */
        type?: string;
        /**
         * Подсказка при заполнении для значения
         */
        hint_value?: string;
        /**
         * Подсказка при заполнении для названия значения
         */
        hint_value_name?: string;
        /**
         * Поддерживает множественные значения
         */
        is_multiple?: boolean;
        /**
         * Выводится в фильтрах на витрине
         */
        is_filterable?: boolean;
        /**
         * Выводить на витрине
         */
        is_public?: boolean;
        /**
         * Активность атрибут
         */
        is_active?: boolean;
        /**
         * Атрибут имеет справочник значений
         */
        has_directory?: boolean;
        /**
         * Наследуемой от родительской категории атрибут
         */
        is_inherited?: boolean;
        /**
         * Атрибут обязателен для заполнения
         */
        is_required?: boolean;
        /**
         * Признак системного атрибута
         */
        is_system?: boolean;
        /**
         * Атрибут модерируется
         */
        is_moderated?: boolean;
        /**
         * Свойство используется для склейки товаров
         */
        is_gluing?: boolean;
        /**
         * Признак общего для всех категорий атрибута
         */
        is_common?: boolean;
        /**
         * Идентификатор атрибута, которому принадлежит значение
         */
        property_id?: number;
      }[];
      hidden_properties?: {
        /**
         * Название свойства
         */
        name?: string;
        /**
         * Публичное наименование
         */
        display_name?: string;
        /**
         * Код свойства
         */
        code?: string;
        /**
         * Тип свойства из PropertyTypeEnum
         */
        type?: string;
        /**
         * Подсказка при заполнении для значения
         */
        hint_value?: string;
        /**
         * Подсказка при заполнении для названия значения
         */
        hint_value_name?: string;
        /**
         * Поддерживает множественные значения
         */
        is_multiple?: boolean;
        /**
         * Выводится в фильтрах на витрине
         */
        is_filterable?: boolean;
        /**
         * Выводить на витрине
         */
        is_public?: boolean;
        /**
         * Активность атрибут
         */
        is_active?: boolean;
        /**
         * Атрибут имеет справочник значений
         */
        has_directory?: boolean;
        /**
         * Наследуемой от родительской категории атрибут
         */
        is_inherited?: boolean;
        /**
         * Атрибут обязателен для заполнения
         */
        is_required?: boolean;
        /**
         * Признак системного атрибута
         */
        is_system?: boolean;
        /**
         * Атрибут модерируется
         */
        is_moderated?: boolean;
        /**
         * Свойство используется для склейки товаров
         */
        is_gluing?: boolean;
        /**
         * Признак общего для всех категорий атрибута
         */
        is_common?: boolean;
        /**
         * Идентификатор атрибута, которому принадлежит значение
         */
        property_id?: number;
      }[];
    };
    images?: ({
      /**
       * Идентификатор картинки
       */
      id?: number;
      /**
       * true означает, что картинка хранится во внешнем источнике, false - в хранилище PIM
       */
      is_external?: boolean;
      /**
       * URL картинки
       */
      url?: string;
    } & {
      name?: string | null;
      /**
       * Порядок сортирковки в коллекции картинок
       */
      sort?: number;
    })[];
    attributes?: ({
      /**
       * Тип значения из PropertyTypeEnum
       */
      type?: string;
      /**
       * Ссылка на файл
       */
      url?: string;
    } & {
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
    })[];
    product_groups?: ({
      /**
       * Идентификатор склейки
       */
      id?: number;
      /**
       * Кол-во товаров в склейке
       */
      products_count?: number;
      main_product_image?: string | null;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * Идентификатор категории
       */
      category_id?: number;
      main_product_id?: number | null;
      /**
       * Название
       */
      name?: string;
      /**
       * Активность
       */
      is_active?: boolean;
    } & {
      category?: {
        /**
         * Идентификатор категории
         */
        id?: number;
        /**
         * Дата создания
         */
        created_at?: string;
        /**
         * Дата обновления
         */
        updated_at?: string;
        /**
         * Признак активности с учетом иерархии
         */
        is_real_active?: boolean;
      } & {
        /**
         * Название категории
         */
        name?: string;
        /**
         * Код категории
         */
        code?: string;
        parent_id?: number | null;
        /**
         * Категория наследует атрибуты родительской
         */
        is_inherits_properties?: boolean;
        /**
         * Признак активности данной категории
         */
        is_active?: boolean;
      } & {
        properties?: {
          /**
           * Название свойства
           */
          name?: string;
          /**
           * Публичное наименование
           */
          display_name?: string;
          /**
           * Код свойства
           */
          code?: string;
          /**
           * Тип свойства из PropertyTypeEnum
           */
          type?: string;
          /**
           * Подсказка при заполнении для значения
           */
          hint_value?: string;
          /**
           * Подсказка при заполнении для названия значения
           */
          hint_value_name?: string;
          /**
           * Поддерживает множественные значения
           */
          is_multiple?: boolean;
          /**
           * Выводится в фильтрах на витрине
           */
          is_filterable?: boolean;
          /**
           * Выводить на витрине
           */
          is_public?: boolean;
          /**
           * Активность атрибут
           */
          is_active?: boolean;
          /**
           * Атрибут имеет справочник значений
           */
          has_directory?: boolean;
          /**
           * Наследуемой от родительской категории атрибут
           */
          is_inherited?: boolean;
          /**
           * Атрибут обязателен для заполнения
           */
          is_required?: boolean;
          /**
           * Признак системного атрибута
           */
          is_system?: boolean;
          /**
           * Атрибут модерируется
           */
          is_moderated?: boolean;
          /**
           * Свойство используется для склейки товаров
           */
          is_gluing?: boolean;
          /**
           * Признак общего для всех категорий атрибута
           */
          is_common?: boolean;
          /**
           * Идентификатор атрибута, которому принадлежит значение
           */
          property_id?: number;
        }[];
        hidden_properties?: {
          /**
           * Название свойства
           */
          name?: string;
          /**
           * Публичное наименование
           */
          display_name?: string;
          /**
           * Код свойства
           */
          code?: string;
          /**
           * Тип свойства из PropertyTypeEnum
           */
          type?: string;
          /**
           * Подсказка при заполнении для значения
           */
          hint_value?: string;
          /**
           * Подсказка при заполнении для названия значения
           */
          hint_value_name?: string;
          /**
           * Поддерживает множественные значения
           */
          is_multiple?: boolean;
          /**
           * Выводится в фильтрах на витрине
           */
          is_filterable?: boolean;
          /**
           * Выводить на витрине
           */
          is_public?: boolean;
          /**
           * Активность атрибут
           */
          is_active?: boolean;
          /**
           * Атрибут имеет справочник значений
           */
          has_directory?: boolean;
          /**
           * Наследуемой от родительской категории атрибут
           */
          is_inherited?: boolean;
          /**
           * Атрибут обязателен для заполнения
           */
          is_required?: boolean;
          /**
           * Признак системного атрибута
           */
          is_system?: boolean;
          /**
           * Атрибут модерируется
           */
          is_moderated?: boolean;
          /**
           * Свойство используется для склейки товаров
           */
          is_gluing?: boolean;
          /**
           * Признак общего для всех категорий атрибута
           */
          is_common?: boolean;
          /**
           * Идентификатор атрибута, которому принадлежит значение
           */
          property_id?: number;
        }[];
      };
      main_product?: {
        /**
         * Идентификатор товара
         */
        id: number;
        /**
         * Дата создания
         */
        created_at: string;
        /**
         * Дата обновления
         */
        updated_at: string;
      } & ({
        external_id?: string | null;
        barcode?: string | null;
      } & {
        category_id?: number | null;
        brand_id?: number | null;
        /**
         * Название товара
         */
        name?: string;
        code?: string | null;
        description?: string | null;
        /**
         * Тип товара из CatalogProductTypeEnum
         */
        type?: number;
        /**
         * Публикация разрешена
         */
        allow_publish?: boolean;
        /**
         * Артикул
         */
        vendor_code?: string;
        weight?: number | null;
        weight_gross?: number | null;
        length?: number | null;
        width?: number | null;
        height?: number | null;
        is_adult?: boolean | null;
        base_price?: number | null;
      }) & {};
      products?: ({
        /**
         * Идентификатор товара
         */
        id: number;
        /**
         * Дата создания
         */
        created_at: string;
        /**
         * Дата обновления
         */
        updated_at: string;
      } & ({
        external_id?: string | null;
        barcode?: string | null;
      } & {
        category_id?: number | null;
        brand_id?: number | null;
        /**
         * Название товара
         */
        name?: string;
        code?: string | null;
        description?: string | null;
        /**
         * Тип товара из CatalogProductTypeEnum
         */
        type?: number;
        /**
         * Публикация разрешена
         */
        allow_publish?: boolean;
        /**
         * Артикул
         */
        vendor_code?: string;
        weight?: number | null;
        weight_gross?: number | null;
        length?: number | null;
        width?: number | null;
        height?: number | null;
        is_adult?: boolean | null;
        base_price?: number | null;
      }) & {})[];
    } & {})[];
    /**
     * Есть ли незаполненные обязательные атрибуты
     */
    no_filled_required_attributes?: boolean;
  } & {})[];

        export type SearchProductDraftsResponseMeta = {
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        next_cursor?: string | null;
        previous_cursor?: string | null;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        total?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
};

        export type SearchProductDraftsResponse = CommonResponse<SearchProductDraftsResponseData, SearchProductDraftsResponseMeta>;
        export type UploadProductImageRequest = {
  /**
   * URL картинки. Если задан, будет добавлена новая внешняя картинка.
   */
  url?: string;
  /**
   * Идентификатор предзагруженного ранее файла. Если задан, будет создана новая картинка из файла.
   */
  preload_file_id?: number;
} & {
  name?: string | null;
  /**
   * Порядок сортирковки в коллекции картинок
   */
  sort?: number;
};


        export type UploadProductImageResponseData = {
  /**
   * Идентификатор картинки
   */
  id?: number;
  /**
   * true означает, что картинка хранится во внешнем источнике, false - в хранилище PIM
   */
  is_external?: boolean;
  /**
   * URL картинки
   */
  url?: string;
} & {
  name?: string | null;
  /**
   * Порядок сортирковки в коллекции картинок
   */
  sort?: number;
};

        export type UploadProductImageResponseMeta = {};

        export type UploadProductImageResponse = CommonResponse<UploadProductImageResponseData, UploadProductImageResponseMeta>;
        export interface SearchProductFieldsRequest {
  sort?: string[];
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
  filter?: {
    /**
     * Идентификатор(ы) полей
     */
    id?: number;
    /**
     * Наименование(я) поля
     */
    name?: string;
    /**
     * Признак обязательности заполнения
     */
    is_required?: boolean;
    /**
     * Признак модерируемого поля
     */
    is_moderated?: boolean;
    /**
     * Категория метрики товара из перечисления MetricsCategoryEnum
     */
    metrics_category?: string | null;
  };
}


        export type SearchProductFieldsResponseData = ({
  /**
   * Идентификатор поля
   */
  id?: number;
  /**
   * Символьный код поля
   */
  code?: string;
  /**
   * Значения из FieldSettingsMaskEnum, соответствующие доступным для редактирования свойствам
   */
  edit_mask?: number[];
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Наименование поля товара
   */
  name?: string;
  /**
   * Признак обязательности заполнения
   */
  is_required?: boolean;
  /**
   * Признак модерируемого поля
   */
  is_moderated?: boolean;
  metric_category?: string | null;
})[];

        export type SearchProductFieldsResponseMeta = {
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        next_cursor?: string | null;
        previous_cursor?: string | null;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        total?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
};

        export type SearchProductFieldsResponse = CommonResponse<SearchProductFieldsResponseData, SearchProductFieldsResponseMeta>;
        export type PatchProductFieldRequest = {
  /**
   * Наименование поля товара
   */
  name?: string;
  /**
   * Признак обязательности заполнения
   */
  is_required?: boolean;
  /**
   * Признак модерируемого поля
   */
  is_moderated?: boolean;
  /**
   * Категория метрики товара - значение перечисления MetricsCategoryEnum или null
   */
  metric_category?: string | null;
};


        export type PatchProductFieldResponseData = {
  /**
   * Идентификатор поля
   */
  id?: number;
  /**
   * Символьный код поля
   */
  code?: string;
  /**
   * Значения из FieldSettingsMaskEnum, соответствующие доступным для редактирования свойствам
   */
  edit_mask?: number[];
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Наименование поля товара
   */
  name?: string;
  /**
   * Признак обязательности заполнения
   */
  is_required?: boolean;
  /**
   * Признак модерируемого поля
   */
  is_moderated?: boolean;
  metric_category?: string | null;
};

        export type PatchProductFieldResponseMeta = {};

        export type PatchProductFieldResponse = CommonResponse<PatchProductFieldResponseData, PatchProductFieldResponseMeta>;
        export interface SearchOffersRequest {
  sort?: string[];
  include?: string[];
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
  filter?: {
    /**
     * Идентификаторы оффера
     */
    id?: number[];
    /**
     * Название или часть названия оффера
     */
    name?: string;
    /**
     * Идентификаторы продавцов
     */
    seller_id?: string[];
    /**
     * Идентификаторы статусов
     */
    sale_status?: number[];
    /**
     * Цена от, руб.
     */
    price_from?: number;
    /**
     * Цена до, руб.
     */
    price_to?: number;
    /**
     * остаток от
     */
    qty_from?: number;
    /**
     * остаток до
     */
    qty_to?: number;
  };
}


        export type SearchOffersResponseData = ({
  /**
   * Идентификатор оффера
   */
  id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
} & {
  /**
   * Идентификатор товара
   */
  product_id?: number;
  /**
   * Идентификатор продавца
   */
  seller_id?: number;
  /**
   * Идентификатор товара у мерчанта
   */
  external_id?: string;
  /**
   * Статус оффера
   */
  sale_status?: number;
  /**
   * Цена оффера
   */
  base_price?: number;
  /**
   * адрес хранения товара в магазине
   */
  storage_address?: string;
})[];

        export type SearchOffersResponseMeta = {
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        next_cursor?: string | null;
        previous_cursor?: string | null;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        total?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
};

        export type SearchOffersResponse = CommonResponse<SearchOffersResponseData, SearchOffersResponseMeta>;
        export type CreateOfferRequest = {
  /**
   * Идентификатор товара
   */
  product_id?: number;
  /**
   * Идентификатор продавца
   */
  seller_id?: number;
  /**
   * Идентификатор товара у мерчанта
   */
  external_id?: string;
  /**
   * Статус оффера
   */
  sale_status?: number;
  /**
   * Цена оффера
   */
  base_price?: number;
  /**
   * адрес хранения товара в магазине
   */
  storage_address?: string;
} & {};


        export type CreateOfferResponseData = {
  /**
   * Идентификатор оффера
   */
  id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
} & {
  /**
   * Идентификатор товара
   */
  product_id?: number;
  /**
   * Идентификатор продавца
   */
  seller_id?: number;
  /**
   * Идентификатор товара у мерчанта
   */
  external_id?: string;
  /**
   * Статус оффера
   */
  sale_status?: number;
  /**
   * Цена оффера
   */
  base_price?: number;
  /**
   * адрес хранения товара в магазине
   */
  storage_address?: string;
};

        export type CreateOfferResponseMeta = {};

        export type CreateOfferResponse = CommonResponse<CreateOfferResponseData, CreateOfferResponseMeta>;
        export type ReplaceOfferRequest = {
  /**
   * Идентификатор товара
   */
  product_id?: number;
  /**
   * Идентификатор продавца
   */
  seller_id?: number;
  /**
   * Идентификатор товара у мерчанта
   */
  external_id?: string;
  /**
   * Статус оффера
   */
  sale_status?: number;
  /**
   * Цена оффера
   */
  base_price?: number;
  /**
   * адрес хранения товара в магазине
   */
  storage_address?: string;
} & {};


        export type ReplaceOfferResponseData = {
  /**
   * Идентификатор оффера
   */
  id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
} & {
  /**
   * Идентификатор товара
   */
  product_id?: number;
  /**
   * Идентификатор продавца
   */
  seller_id?: number;
  /**
   * Идентификатор товара у мерчанта
   */
  external_id?: string;
  /**
   * Статус оффера
   */
  sale_status?: number;
  /**
   * Цена оффера
   */
  base_price?: number;
  /**
   * адрес хранения товара в магазине
   */
  storage_address?: string;
};

        export type ReplaceOfferResponseMeta = {};

        export type ReplaceOfferResponse = CommonResponse<ReplaceOfferResponseData, ReplaceOfferResponseMeta>;
        export type CreateCatalogProductGroupRequest = {
  /**
   * Идентификатор категории
   */
  category_id?: number;
  main_product_id?: number | null;
  /**
   * Название
   */
  name?: string;
  /**
   * Активность
   */
  is_active?: boolean;
} & {};


        export type CreateCatalogProductGroupResponseData = {
  /**
   * Идентификатор склейки
   */
  id?: number;
  /**
   * Кол-во товаров в склейке
   */
  products_count?: number;
  main_product_image?: string | null;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Идентификатор категории
   */
  category_id?: number;
  main_product_id?: number | null;
  /**
   * Название
   */
  name?: string;
  /**
   * Активность
   */
  is_active?: boolean;
} & {
  category?: {
    /**
     * Идентификатор категории
     */
    id?: number;
    /**
     * Дата создания
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
    /**
     * Признак активности с учетом иерархии
     */
    is_real_active?: boolean;
  } & {
    /**
     * Название категории
     */
    name?: string;
    /**
     * Код категории
     */
    code?: string;
    parent_id?: number | null;
    /**
     * Категория наследует атрибуты родительской
     */
    is_inherits_properties?: boolean;
    /**
     * Признак активности данной категории
     */
    is_active?: boolean;
  } & {
    properties?: {
      /**
       * Название свойства
       */
      name?: string;
      /**
       * Публичное наименование
       */
      display_name?: string;
      /**
       * Код свойства
       */
      code?: string;
      /**
       * Тип свойства из PropertyTypeEnum
       */
      type?: string;
      /**
       * Подсказка при заполнении для значения
       */
      hint_value?: string;
      /**
       * Подсказка при заполнении для названия значения
       */
      hint_value_name?: string;
      /**
       * Поддерживает множественные значения
       */
      is_multiple?: boolean;
      /**
       * Выводится в фильтрах на витрине
       */
      is_filterable?: boolean;
      /**
       * Выводить на витрине
       */
      is_public?: boolean;
      /**
       * Активность атрибут
       */
      is_active?: boolean;
      /**
       * Атрибут имеет справочник значений
       */
      has_directory?: boolean;
      /**
       * Наследуемой от родительской категории атрибут
       */
      is_inherited?: boolean;
      /**
       * Атрибут обязателен для заполнения
       */
      is_required?: boolean;
      /**
       * Признак системного атрибута
       */
      is_system?: boolean;
      /**
       * Атрибут модерируется
       */
      is_moderated?: boolean;
      /**
       * Свойство используется для склейки товаров
       */
      is_gluing?: boolean;
      /**
       * Признак общего для всех категорий атрибута
       */
      is_common?: boolean;
      /**
       * Идентификатор атрибута, которому принадлежит значение
       */
      property_id?: number;
    }[];
    hidden_properties?: {
      /**
       * Название свойства
       */
      name?: string;
      /**
       * Публичное наименование
       */
      display_name?: string;
      /**
       * Код свойства
       */
      code?: string;
      /**
       * Тип свойства из PropertyTypeEnum
       */
      type?: string;
      /**
       * Подсказка при заполнении для значения
       */
      hint_value?: string;
      /**
       * Подсказка при заполнении для названия значения
       */
      hint_value_name?: string;
      /**
       * Поддерживает множественные значения
       */
      is_multiple?: boolean;
      /**
       * Выводится в фильтрах на витрине
       */
      is_filterable?: boolean;
      /**
       * Выводить на витрине
       */
      is_public?: boolean;
      /**
       * Активность атрибут
       */
      is_active?: boolean;
      /**
       * Атрибут имеет справочник значений
       */
      has_directory?: boolean;
      /**
       * Наследуемой от родительской категории атрибут
       */
      is_inherited?: boolean;
      /**
       * Атрибут обязателен для заполнения
       */
      is_required?: boolean;
      /**
       * Признак системного атрибута
       */
      is_system?: boolean;
      /**
       * Атрибут модерируется
       */
      is_moderated?: boolean;
      /**
       * Свойство используется для склейки товаров
       */
      is_gluing?: boolean;
      /**
       * Признак общего для всех категорий атрибута
       */
      is_common?: boolean;
      /**
       * Идентификатор атрибута, которому принадлежит значение
       */
      property_id?: number;
    }[];
  };
  main_product?: {
    /**
     * Идентификатор товара
     */
    id: number;
    /**
     * Дата создания
     */
    created_at: string;
    /**
     * Дата обновления
     */
    updated_at: string;
  } & ({
    external_id?: string | null;
    barcode?: string | null;
  } & {
    category_id?: number | null;
    brand_id?: number | null;
    /**
     * Название товара
     */
    name?: string;
    code?: string | null;
    description?: string | null;
    /**
     * Тип товара из CatalogProductTypeEnum
     */
    type?: number;
    /**
     * Публикация разрешена
     */
    allow_publish?: boolean;
    /**
     * Артикул
     */
    vendor_code?: string;
    weight?: number | null;
    weight_gross?: number | null;
    length?: number | null;
    width?: number | null;
    height?: number | null;
    is_adult?: boolean | null;
    base_price?: number | null;
  }) & {};
  products?: ({
    /**
     * Идентификатор товара
     */
    id: number;
    /**
     * Дата создания
     */
    created_at: string;
    /**
     * Дата обновления
     */
    updated_at: string;
  } & ({
    external_id?: string | null;
    barcode?: string | null;
  } & {
    category_id?: number | null;
    brand_id?: number | null;
    /**
     * Название товара
     */
    name?: string;
    code?: string | null;
    description?: string | null;
    /**
     * Тип товара из CatalogProductTypeEnum
     */
    type?: number;
    /**
     * Публикация разрешена
     */
    allow_publish?: boolean;
    /**
     * Артикул
     */
    vendor_code?: string;
    weight?: number | null;
    weight_gross?: number | null;
    length?: number | null;
    width?: number | null;
    height?: number | null;
    is_adult?: boolean | null;
    base_price?: number | null;
  }) & {})[];
} & {};

        export type CreateCatalogProductGroupResponseMeta = {};

        export type CreateCatalogProductGroupResponse = CommonResponse<CreateCatalogProductGroupResponseData, CreateCatalogProductGroupResponseMeta>;
        export type ReplaceCatalogProductGroupRequest = {
  /**
   * Идентификатор категории
   */
  category_id?: number;
  main_product_id?: number | null;
  /**
   * Название
   */
  name?: string;
  /**
   * Активность
   */
  is_active?: boolean;
} & {};


        export type ReplaceCatalogProductGroupResponseData = {
  /**
   * Идентификатор склейки
   */
  id?: number;
  /**
   * Кол-во товаров в склейке
   */
  products_count?: number;
  main_product_image?: string | null;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Идентификатор категории
   */
  category_id?: number;
  main_product_id?: number | null;
  /**
   * Название
   */
  name?: string;
  /**
   * Активность
   */
  is_active?: boolean;
} & {
  category?: {
    /**
     * Идентификатор категории
     */
    id?: number;
    /**
     * Дата создания
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
    /**
     * Признак активности с учетом иерархии
     */
    is_real_active?: boolean;
  } & {
    /**
     * Название категории
     */
    name?: string;
    /**
     * Код категории
     */
    code?: string;
    parent_id?: number | null;
    /**
     * Категория наследует атрибуты родительской
     */
    is_inherits_properties?: boolean;
    /**
     * Признак активности данной категории
     */
    is_active?: boolean;
  } & {
    properties?: {
      /**
       * Название свойства
       */
      name?: string;
      /**
       * Публичное наименование
       */
      display_name?: string;
      /**
       * Код свойства
       */
      code?: string;
      /**
       * Тип свойства из PropertyTypeEnum
       */
      type?: string;
      /**
       * Подсказка при заполнении для значения
       */
      hint_value?: string;
      /**
       * Подсказка при заполнении для названия значения
       */
      hint_value_name?: string;
      /**
       * Поддерживает множественные значения
       */
      is_multiple?: boolean;
      /**
       * Выводится в фильтрах на витрине
       */
      is_filterable?: boolean;
      /**
       * Выводить на витрине
       */
      is_public?: boolean;
      /**
       * Активность атрибут
       */
      is_active?: boolean;
      /**
       * Атрибут имеет справочник значений
       */
      has_directory?: boolean;
      /**
       * Наследуемой от родительской категории атрибут
       */
      is_inherited?: boolean;
      /**
       * Атрибут обязателен для заполнения
       */
      is_required?: boolean;
      /**
       * Признак системного атрибута
       */
      is_system?: boolean;
      /**
       * Атрибут модерируется
       */
      is_moderated?: boolean;
      /**
       * Свойство используется для склейки товаров
       */
      is_gluing?: boolean;
      /**
       * Признак общего для всех категорий атрибута
       */
      is_common?: boolean;
      /**
       * Идентификатор атрибута, которому принадлежит значение
       */
      property_id?: number;
    }[];
    hidden_properties?: {
      /**
       * Название свойства
       */
      name?: string;
      /**
       * Публичное наименование
       */
      display_name?: string;
      /**
       * Код свойства
       */
      code?: string;
      /**
       * Тип свойства из PropertyTypeEnum
       */
      type?: string;
      /**
       * Подсказка при заполнении для значения
       */
      hint_value?: string;
      /**
       * Подсказка при заполнении для названия значения
       */
      hint_value_name?: string;
      /**
       * Поддерживает множественные значения
       */
      is_multiple?: boolean;
      /**
       * Выводится в фильтрах на витрине
       */
      is_filterable?: boolean;
      /**
       * Выводить на витрине
       */
      is_public?: boolean;
      /**
       * Активность атрибут
       */
      is_active?: boolean;
      /**
       * Атрибут имеет справочник значений
       */
      has_directory?: boolean;
      /**
       * Наследуемой от родительской категории атрибут
       */
      is_inherited?: boolean;
      /**
       * Атрибут обязателен для заполнения
       */
      is_required?: boolean;
      /**
       * Признак системного атрибута
       */
      is_system?: boolean;
      /**
       * Атрибут модерируется
       */
      is_moderated?: boolean;
      /**
       * Свойство используется для склейки товаров
       */
      is_gluing?: boolean;
      /**
       * Признак общего для всех категорий атрибута
       */
      is_common?: boolean;
      /**
       * Идентификатор атрибута, которому принадлежит значение
       */
      property_id?: number;
    }[];
  };
  main_product?: {
    /**
     * Идентификатор товара
     */
    id: number;
    /**
     * Дата создания
     */
    created_at: string;
    /**
     * Дата обновления
     */
    updated_at: string;
  } & ({
    external_id?: string | null;
    barcode?: string | null;
  } & {
    category_id?: number | null;
    brand_id?: number | null;
    /**
     * Название товара
     */
    name?: string;
    code?: string | null;
    description?: string | null;
    /**
     * Тип товара из CatalogProductTypeEnum
     */
    type?: number;
    /**
     * Публикация разрешена
     */
    allow_publish?: boolean;
    /**
     * Артикул
     */
    vendor_code?: string;
    weight?: number | null;
    weight_gross?: number | null;
    length?: number | null;
    width?: number | null;
    height?: number | null;
    is_adult?: boolean | null;
    base_price?: number | null;
  }) & {};
  products?: ({
    /**
     * Идентификатор товара
     */
    id: number;
    /**
     * Дата создания
     */
    created_at: string;
    /**
     * Дата обновления
     */
    updated_at: string;
  } & ({
    external_id?: string | null;
    barcode?: string | null;
  } & {
    category_id?: number | null;
    brand_id?: number | null;
    /**
     * Название товара
     */
    name?: string;
    code?: string | null;
    description?: string | null;
    /**
     * Тип товара из CatalogProductTypeEnum
     */
    type?: number;
    /**
     * Публикация разрешена
     */
    allow_publish?: boolean;
    /**
     * Артикул
     */
    vendor_code?: string;
    weight?: number | null;
    weight_gross?: number | null;
    length?: number | null;
    width?: number | null;
    height?: number | null;
    is_adult?: boolean | null;
    base_price?: number | null;
  }) & {})[];
} & {};

        export type ReplaceCatalogProductGroupResponseMeta = {};

        export type ReplaceCatalogProductGroupResponse = CommonResponse<ReplaceCatalogProductGroupResponseData, ReplaceCatalogProductGroupResponseMeta>;
        export type PatchCatalogProductGroupRequest = {
  /**
   * Идентификатор категории
   */
  category_id?: number;
  main_product_id?: number | null;
  /**
   * Название
   */
  name?: string;
  /**
   * Активность
   */
  is_active?: boolean;
};


        export type PatchCatalogProductGroupResponseData = {
  /**
   * Идентификатор склейки
   */
  id?: number;
  /**
   * Кол-во товаров в склейке
   */
  products_count?: number;
  main_product_image?: string | null;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Идентификатор категории
   */
  category_id?: number;
  main_product_id?: number | null;
  /**
   * Название
   */
  name?: string;
  /**
   * Активность
   */
  is_active?: boolean;
} & {
  category?: {
    /**
     * Идентификатор категории
     */
    id?: number;
    /**
     * Дата создания
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
    /**
     * Признак активности с учетом иерархии
     */
    is_real_active?: boolean;
  } & {
    /**
     * Название категории
     */
    name?: string;
    /**
     * Код категории
     */
    code?: string;
    parent_id?: number | null;
    /**
     * Категория наследует атрибуты родительской
     */
    is_inherits_properties?: boolean;
    /**
     * Признак активности данной категории
     */
    is_active?: boolean;
  } & {
    properties?: {
      /**
       * Название свойства
       */
      name?: string;
      /**
       * Публичное наименование
       */
      display_name?: string;
      /**
       * Код свойства
       */
      code?: string;
      /**
       * Тип свойства из PropertyTypeEnum
       */
      type?: string;
      /**
       * Подсказка при заполнении для значения
       */
      hint_value?: string;
      /**
       * Подсказка при заполнении для названия значения
       */
      hint_value_name?: string;
      /**
       * Поддерживает множественные значения
       */
      is_multiple?: boolean;
      /**
       * Выводится в фильтрах на витрине
       */
      is_filterable?: boolean;
      /**
       * Выводить на витрине
       */
      is_public?: boolean;
      /**
       * Активность атрибут
       */
      is_active?: boolean;
      /**
       * Атрибут имеет справочник значений
       */
      has_directory?: boolean;
      /**
       * Наследуемой от родительской категории атрибут
       */
      is_inherited?: boolean;
      /**
       * Атрибут обязателен для заполнения
       */
      is_required?: boolean;
      /**
       * Признак системного атрибута
       */
      is_system?: boolean;
      /**
       * Атрибут модерируется
       */
      is_moderated?: boolean;
      /**
       * Свойство используется для склейки товаров
       */
      is_gluing?: boolean;
      /**
       * Признак общего для всех категорий атрибута
       */
      is_common?: boolean;
      /**
       * Идентификатор атрибута, которому принадлежит значение
       */
      property_id?: number;
    }[];
    hidden_properties?: {
      /**
       * Название свойства
       */
      name?: string;
      /**
       * Публичное наименование
       */
      display_name?: string;
      /**
       * Код свойства
       */
      code?: string;
      /**
       * Тип свойства из PropertyTypeEnum
       */
      type?: string;
      /**
       * Подсказка при заполнении для значения
       */
      hint_value?: string;
      /**
       * Подсказка при заполнении для названия значения
       */
      hint_value_name?: string;
      /**
       * Поддерживает множественные значения
       */
      is_multiple?: boolean;
      /**
       * Выводится в фильтрах на витрине
       */
      is_filterable?: boolean;
      /**
       * Выводить на витрине
       */
      is_public?: boolean;
      /**
       * Активность атрибут
       */
      is_active?: boolean;
      /**
       * Атрибут имеет справочник значений
       */
      has_directory?: boolean;
      /**
       * Наследуемой от родительской категории атрибут
       */
      is_inherited?: boolean;
      /**
       * Атрибут обязателен для заполнения
       */
      is_required?: boolean;
      /**
       * Признак системного атрибута
       */
      is_system?: boolean;
      /**
       * Атрибут модерируется
       */
      is_moderated?: boolean;
      /**
       * Свойство используется для склейки товаров
       */
      is_gluing?: boolean;
      /**
       * Признак общего для всех категорий атрибута
       */
      is_common?: boolean;
      /**
       * Идентификатор атрибута, которому принадлежит значение
       */
      property_id?: number;
    }[];
  };
  main_product?: {
    /**
     * Идентификатор товара
     */
    id: number;
    /**
     * Дата создания
     */
    created_at: string;
    /**
     * Дата обновления
     */
    updated_at: string;
  } & ({
    external_id?: string | null;
    barcode?: string | null;
  } & {
    category_id?: number | null;
    brand_id?: number | null;
    /**
     * Название товара
     */
    name?: string;
    code?: string | null;
    description?: string | null;
    /**
     * Тип товара из CatalogProductTypeEnum
     */
    type?: number;
    /**
     * Публикация разрешена
     */
    allow_publish?: boolean;
    /**
     * Артикул
     */
    vendor_code?: string;
    weight?: number | null;
    weight_gross?: number | null;
    length?: number | null;
    width?: number | null;
    height?: number | null;
    is_adult?: boolean | null;
    base_price?: number | null;
  }) & {};
  products?: ({
    /**
     * Идентификатор товара
     */
    id: number;
    /**
     * Дата создания
     */
    created_at: string;
    /**
     * Дата обновления
     */
    updated_at: string;
  } & ({
    external_id?: string | null;
    barcode?: string | null;
  } & {
    category_id?: number | null;
    brand_id?: number | null;
    /**
     * Название товара
     */
    name?: string;
    code?: string | null;
    description?: string | null;
    /**
     * Тип товара из CatalogProductTypeEnum
     */
    type?: number;
    /**
     * Публикация разрешена
     */
    allow_publish?: boolean;
    /**
     * Артикул
     */
    vendor_code?: string;
    weight?: number | null;
    weight_gross?: number | null;
    length?: number | null;
    width?: number | null;
    height?: number | null;
    is_adult?: boolean | null;
    base_price?: number | null;
  }) & {})[];
} & {};

        export type PatchCatalogProductGroupResponseMeta = {};

        export type PatchCatalogProductGroupResponse = CommonResponse<PatchCatalogProductGroupResponseData, PatchCatalogProductGroupResponseMeta>;
        export interface BindCatalogProductGroupProductsRequest {
  /**
   * Если true, все отсутствующие в запросе привязки будут удалены
   */
  replace?: boolean;
  products?: {
    /**
     * Идентификатор атрибута
     */
    id?: number;
    /**
     * Артикул
     */
    vendor_code?: string;
    /**
     * Штрихкод (EAN)
     */
    barcode?: string;
  }[];
}


        export type BindCatalogProductGroupProductsResponseData = {
  product_group: {
    /**
     * Идентификатор склейки
     */
    id?: number;
    /**
     * Кол-во товаров в склейке
     */
    products_count?: number;
    main_product_image?: string | null;
    /**
     * Дата создания
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
  } & {
    /**
     * Идентификатор категории
     */
    category_id?: number;
    main_product_id?: number | null;
    /**
     * Название
     */
    name?: string;
    /**
     * Активность
     */
    is_active?: boolean;
  } & {
    category?: {
      /**
       * Идентификатор категории
       */
      id?: number;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
      /**
       * Признак активности с учетом иерархии
       */
      is_real_active?: boolean;
    } & {
      /**
       * Название категории
       */
      name?: string;
      /**
       * Код категории
       */
      code?: string;
      parent_id?: number | null;
      /**
       * Категория наследует атрибуты родительской
       */
      is_inherits_properties?: boolean;
      /**
       * Признак активности данной категории
       */
      is_active?: boolean;
    } & {
      properties?: {
        /**
         * Название свойства
         */
        name?: string;
        /**
         * Публичное наименование
         */
        display_name?: string;
        /**
         * Код свойства
         */
        code?: string;
        /**
         * Тип свойства из PropertyTypeEnum
         */
        type?: string;
        /**
         * Подсказка при заполнении для значения
         */
        hint_value?: string;
        /**
         * Подсказка при заполнении для названия значения
         */
        hint_value_name?: string;
        /**
         * Поддерживает множественные значения
         */
        is_multiple?: boolean;
        /**
         * Выводится в фильтрах на витрине
         */
        is_filterable?: boolean;
        /**
         * Выводить на витрине
         */
        is_public?: boolean;
        /**
         * Активность атрибут
         */
        is_active?: boolean;
        /**
         * Атрибут имеет справочник значений
         */
        has_directory?: boolean;
        /**
         * Наследуемой от родительской категории атрибут
         */
        is_inherited?: boolean;
        /**
         * Атрибут обязателен для заполнения
         */
        is_required?: boolean;
        /**
         * Признак системного атрибута
         */
        is_system?: boolean;
        /**
         * Атрибут модерируется
         */
        is_moderated?: boolean;
        /**
         * Свойство используется для склейки товаров
         */
        is_gluing?: boolean;
        /**
         * Признак общего для всех категорий атрибута
         */
        is_common?: boolean;
        /**
         * Идентификатор атрибута, которому принадлежит значение
         */
        property_id?: number;
      }[];
      hidden_properties?: {
        /**
         * Название свойства
         */
        name?: string;
        /**
         * Публичное наименование
         */
        display_name?: string;
        /**
         * Код свойства
         */
        code?: string;
        /**
         * Тип свойства из PropertyTypeEnum
         */
        type?: string;
        /**
         * Подсказка при заполнении для значения
         */
        hint_value?: string;
        /**
         * Подсказка при заполнении для названия значения
         */
        hint_value_name?: string;
        /**
         * Поддерживает множественные значения
         */
        is_multiple?: boolean;
        /**
         * Выводится в фильтрах на витрине
         */
        is_filterable?: boolean;
        /**
         * Выводить на витрине
         */
        is_public?: boolean;
        /**
         * Активность атрибут
         */
        is_active?: boolean;
        /**
         * Атрибут имеет справочник значений
         */
        has_directory?: boolean;
        /**
         * Наследуемой от родительской категории атрибут
         */
        is_inherited?: boolean;
        /**
         * Атрибут обязателен для заполнения
         */
        is_required?: boolean;
        /**
         * Признак системного атрибута
         */
        is_system?: boolean;
        /**
         * Атрибут модерируется
         */
        is_moderated?: boolean;
        /**
         * Свойство используется для склейки товаров
         */
        is_gluing?: boolean;
        /**
         * Признак общего для всех категорий атрибута
         */
        is_common?: boolean;
        /**
         * Идентификатор атрибута, которому принадлежит значение
         */
        property_id?: number;
      }[];
    };
    main_product?: {
      /**
       * Идентификатор товара
       */
      id: number;
      /**
       * Дата создания
       */
      created_at: string;
      /**
       * Дата обновления
       */
      updated_at: string;
    } & ({
      external_id?: string | null;
      barcode?: string | null;
    } & {
      category_id?: number | null;
      brand_id?: number | null;
      /**
       * Название товара
       */
      name?: string;
      code?: string | null;
      description?: string | null;
      /**
       * Тип товара из CatalogProductTypeEnum
       */
      type?: number;
      /**
       * Публикация разрешена
       */
      allow_publish?: boolean;
      /**
       * Артикул
       */
      vendor_code?: string;
      weight?: number | null;
      weight_gross?: number | null;
      length?: number | null;
      width?: number | null;
      height?: number | null;
      is_adult?: boolean | null;
      base_price?: number | null;
    }) & {};
    products?: ({
      /**
       * Идентификатор товара
       */
      id: number;
      /**
       * Дата создания
       */
      created_at: string;
      /**
       * Дата обновления
       */
      updated_at: string;
    } & ({
      external_id?: string | null;
      barcode?: string | null;
    } & {
      category_id?: number | null;
      brand_id?: number | null;
      /**
       * Название товара
       */
      name?: string;
      code?: string | null;
      description?: string | null;
      /**
       * Тип товара из CatalogProductTypeEnum
       */
      type?: number;
      /**
       * Публикация разрешена
       */
      allow_publish?: boolean;
      /**
       * Артикул
       */
      vendor_code?: string;
      weight?: number | null;
      weight_gross?: number | null;
      length?: number | null;
      width?: number | null;
      height?: number | null;
      is_adult?: boolean | null;
      base_price?: number | null;
    }) & {})[];
  } & {};
  product_errors: number[];
};

        export type BindCatalogProductGroupProductsResponseMeta = {};

        export type BindCatalogProductGroupProductsResponse = CommonResponse<BindCatalogProductGroupProductsResponseData, BindCatalogProductGroupProductsResponseMeta>;
        export interface SearchCatalogProductGroupsRequest {
  sort?: string[];
  include?: ("category" | "main_product" | "products")[];
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
  filter?: {
    /**
     * Идентификатор склейки
     */
    id?: number;
    /**
     * Идентификатор категории
     */
    category_id?: number;
    /**
     * Название склейки (поиск по подстроке)
     */
    name_like?: string;
    /**
     * Название товара, входящего в склейку (поиск по подстроке)
     */
    product_name_like?: string;
    /**
     * Штрихкод товара, входящего в склейку (поиск по подстроке)
     */
    product_barcode_like?: string;
    /**
     * Артикул товара, входящего в склейку (поиск по подстроке)
     */
    product_vendor_code_like?: string;
  };
}


        export type SearchCatalogProductGroupsResponseData = ({
  /**
   * Идентификатор склейки
   */
  id?: number;
  /**
   * Кол-во товаров в склейке
   */
  products_count?: number;
  main_product_image?: string | null;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Идентификатор категории
   */
  category_id?: number;
  main_product_id?: number | null;
  /**
   * Название
   */
  name?: string;
  /**
   * Активность
   */
  is_active?: boolean;
} & {
  category?: {
    /**
     * Идентификатор категории
     */
    id?: number;
    /**
     * Дата создания
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
    /**
     * Признак активности с учетом иерархии
     */
    is_real_active?: boolean;
  } & {
    /**
     * Название категории
     */
    name?: string;
    /**
     * Код категории
     */
    code?: string;
    parent_id?: number | null;
    /**
     * Категория наследует атрибуты родительской
     */
    is_inherits_properties?: boolean;
    /**
     * Признак активности данной категории
     */
    is_active?: boolean;
  } & {
    properties?: {
      /**
       * Название свойства
       */
      name?: string;
      /**
       * Публичное наименование
       */
      display_name?: string;
      /**
       * Код свойства
       */
      code?: string;
      /**
       * Тип свойства из PropertyTypeEnum
       */
      type?: string;
      /**
       * Подсказка при заполнении для значения
       */
      hint_value?: string;
      /**
       * Подсказка при заполнении для названия значения
       */
      hint_value_name?: string;
      /**
       * Поддерживает множественные значения
       */
      is_multiple?: boolean;
      /**
       * Выводится в фильтрах на витрине
       */
      is_filterable?: boolean;
      /**
       * Выводить на витрине
       */
      is_public?: boolean;
      /**
       * Активность атрибут
       */
      is_active?: boolean;
      /**
       * Атрибут имеет справочник значений
       */
      has_directory?: boolean;
      /**
       * Наследуемой от родительской категории атрибут
       */
      is_inherited?: boolean;
      /**
       * Атрибут обязателен для заполнения
       */
      is_required?: boolean;
      /**
       * Признак системного атрибута
       */
      is_system?: boolean;
      /**
       * Атрибут модерируется
       */
      is_moderated?: boolean;
      /**
       * Свойство используется для склейки товаров
       */
      is_gluing?: boolean;
      /**
       * Признак общего для всех категорий атрибута
       */
      is_common?: boolean;
      /**
       * Идентификатор атрибута, которому принадлежит значение
       */
      property_id?: number;
    }[];
    hidden_properties?: {
      /**
       * Название свойства
       */
      name?: string;
      /**
       * Публичное наименование
       */
      display_name?: string;
      /**
       * Код свойства
       */
      code?: string;
      /**
       * Тип свойства из PropertyTypeEnum
       */
      type?: string;
      /**
       * Подсказка при заполнении для значения
       */
      hint_value?: string;
      /**
       * Подсказка при заполнении для названия значения
       */
      hint_value_name?: string;
      /**
       * Поддерживает множественные значения
       */
      is_multiple?: boolean;
      /**
       * Выводится в фильтрах на витрине
       */
      is_filterable?: boolean;
      /**
       * Выводить на витрине
       */
      is_public?: boolean;
      /**
       * Активность атрибут
       */
      is_active?: boolean;
      /**
       * Атрибут имеет справочник значений
       */
      has_directory?: boolean;
      /**
       * Наследуемой от родительской категории атрибут
       */
      is_inherited?: boolean;
      /**
       * Атрибут обязателен для заполнения
       */
      is_required?: boolean;
      /**
       * Признак системного атрибута
       */
      is_system?: boolean;
      /**
       * Атрибут модерируется
       */
      is_moderated?: boolean;
      /**
       * Свойство используется для склейки товаров
       */
      is_gluing?: boolean;
      /**
       * Признак общего для всех категорий атрибута
       */
      is_common?: boolean;
      /**
       * Идентификатор атрибута, которому принадлежит значение
       */
      property_id?: number;
    }[];
  };
  main_product?: {
    /**
     * Идентификатор товара
     */
    id: number;
    /**
     * Дата создания
     */
    created_at: string;
    /**
     * Дата обновления
     */
    updated_at: string;
  } & ({
    external_id?: string | null;
    barcode?: string | null;
  } & {
    category_id?: number | null;
    brand_id?: number | null;
    /**
     * Название товара
     */
    name?: string;
    code?: string | null;
    description?: string | null;
    /**
     * Тип товара из CatalogProductTypeEnum
     */
    type?: number;
    /**
     * Публикация разрешена
     */
    allow_publish?: boolean;
    /**
     * Артикул
     */
    vendor_code?: string;
    weight?: number | null;
    weight_gross?: number | null;
    length?: number | null;
    width?: number | null;
    height?: number | null;
    is_adult?: boolean | null;
    base_price?: number | null;
  }) & {};
  products?: ({
    /**
     * Идентификатор товара
     */
    id: number;
    /**
     * Дата создания
     */
    created_at: string;
    /**
     * Дата обновления
     */
    updated_at: string;
  } & ({
    external_id?: string | null;
    barcode?: string | null;
  } & {
    category_id?: number | null;
    brand_id?: number | null;
    /**
     * Название товара
     */
    name?: string;
    code?: string | null;
    description?: string | null;
    /**
     * Тип товара из CatalogProductTypeEnum
     */
    type?: number;
    /**
     * Публикация разрешена
     */
    allow_publish?: boolean;
    /**
     * Артикул
     */
    vendor_code?: string;
    weight?: number | null;
    weight_gross?: number | null;
    length?: number | null;
    width?: number | null;
    height?: number | null;
    is_adult?: boolean | null;
    base_price?: number | null;
  }) & {})[];
} & {})[];

        export type SearchCatalogProductGroupsResponseMeta = {
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        next_cursor?: string | null;
        previous_cursor?: string | null;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        total?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
};

        export type SearchCatalogProductGroupsResponse = CommonResponse<SearchCatalogProductGroupsResponseData, SearchCatalogProductGroupsResponseMeta>;
        export interface SearchOneCatalogProductGroupRequest {
  sort?: string[];
  include?: ("category" | "main_product" | "products")[];
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
  filter?: {
    /**
     * Идентификатор склейки
     */
    id?: number;
    /**
     * Идентификатор категории
     */
    category_id?: number;
    /**
     * Название склейки (поиск по подстроке)
     */
    name_like?: string;
    /**
     * Название товара, входящего в склейку (поиск по подстроке)
     */
    product_name_like?: string;
    /**
     * Штрихкод товара, входящего в склейку (поиск по подстроке)
     */
    product_barcode_like?: string;
    /**
     * Артикул товара, входящего в склейку (поиск по подстроке)
     */
    product_vendor_code_like?: string;
  };
}


        export type SearchOneCatalogProductGroupResponseData = {
  /**
   * Идентификатор склейки
   */
  id?: number;
  /**
   * Кол-во товаров в склейке
   */
  products_count?: number;
  main_product_image?: string | null;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Идентификатор категории
   */
  category_id?: number;
  main_product_id?: number | null;
  /**
   * Название
   */
  name?: string;
  /**
   * Активность
   */
  is_active?: boolean;
} & {
  category?: {
    /**
     * Идентификатор категории
     */
    id?: number;
    /**
     * Дата создания
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
    /**
     * Признак активности с учетом иерархии
     */
    is_real_active?: boolean;
  } & {
    /**
     * Название категории
     */
    name?: string;
    /**
     * Код категории
     */
    code?: string;
    parent_id?: number | null;
    /**
     * Категория наследует атрибуты родительской
     */
    is_inherits_properties?: boolean;
    /**
     * Признак активности данной категории
     */
    is_active?: boolean;
  } & {
    properties?: {
      /**
       * Название свойства
       */
      name?: string;
      /**
       * Публичное наименование
       */
      display_name?: string;
      /**
       * Код свойства
       */
      code?: string;
      /**
       * Тип свойства из PropertyTypeEnum
       */
      type?: string;
      /**
       * Подсказка при заполнении для значения
       */
      hint_value?: string;
      /**
       * Подсказка при заполнении для названия значения
       */
      hint_value_name?: string;
      /**
       * Поддерживает множественные значения
       */
      is_multiple?: boolean;
      /**
       * Выводится в фильтрах на витрине
       */
      is_filterable?: boolean;
      /**
       * Выводить на витрине
       */
      is_public?: boolean;
      /**
       * Активность атрибут
       */
      is_active?: boolean;
      /**
       * Атрибут имеет справочник значений
       */
      has_directory?: boolean;
      /**
       * Наследуемой от родительской категории атрибут
       */
      is_inherited?: boolean;
      /**
       * Атрибут обязателен для заполнения
       */
      is_required?: boolean;
      /**
       * Признак системного атрибута
       */
      is_system?: boolean;
      /**
       * Атрибут модерируется
       */
      is_moderated?: boolean;
      /**
       * Свойство используется для склейки товаров
       */
      is_gluing?: boolean;
      /**
       * Признак общего для всех категорий атрибута
       */
      is_common?: boolean;
      /**
       * Идентификатор атрибута, которому принадлежит значение
       */
      property_id?: number;
    }[];
    hidden_properties?: {
      /**
       * Название свойства
       */
      name?: string;
      /**
       * Публичное наименование
       */
      display_name?: string;
      /**
       * Код свойства
       */
      code?: string;
      /**
       * Тип свойства из PropertyTypeEnum
       */
      type?: string;
      /**
       * Подсказка при заполнении для значения
       */
      hint_value?: string;
      /**
       * Подсказка при заполнении для названия значения
       */
      hint_value_name?: string;
      /**
       * Поддерживает множественные значения
       */
      is_multiple?: boolean;
      /**
       * Выводится в фильтрах на витрине
       */
      is_filterable?: boolean;
      /**
       * Выводить на витрине
       */
      is_public?: boolean;
      /**
       * Активность атрибут
       */
      is_active?: boolean;
      /**
       * Атрибут имеет справочник значений
       */
      has_directory?: boolean;
      /**
       * Наследуемой от родительской категории атрибут
       */
      is_inherited?: boolean;
      /**
       * Атрибут обязателен для заполнения
       */
      is_required?: boolean;
      /**
       * Признак системного атрибута
       */
      is_system?: boolean;
      /**
       * Атрибут модерируется
       */
      is_moderated?: boolean;
      /**
       * Свойство используется для склейки товаров
       */
      is_gluing?: boolean;
      /**
       * Признак общего для всех категорий атрибута
       */
      is_common?: boolean;
      /**
       * Идентификатор атрибута, которому принадлежит значение
       */
      property_id?: number;
    }[];
  };
  main_product?: {
    /**
     * Идентификатор товара
     */
    id: number;
    /**
     * Дата создания
     */
    created_at: string;
    /**
     * Дата обновления
     */
    updated_at: string;
  } & ({
    external_id?: string | null;
    barcode?: string | null;
  } & {
    category_id?: number | null;
    brand_id?: number | null;
    /**
     * Название товара
     */
    name?: string;
    code?: string | null;
    description?: string | null;
    /**
     * Тип товара из CatalogProductTypeEnum
     */
    type?: number;
    /**
     * Публикация разрешена
     */
    allow_publish?: boolean;
    /**
     * Артикул
     */
    vendor_code?: string;
    weight?: number | null;
    weight_gross?: number | null;
    length?: number | null;
    width?: number | null;
    height?: number | null;
    is_adult?: boolean | null;
    base_price?: number | null;
  }) & {};
  products?: ({
    /**
     * Идентификатор товара
     */
    id: number;
    /**
     * Дата создания
     */
    created_at: string;
    /**
     * Дата обновления
     */
    updated_at: string;
  } & ({
    external_id?: string | null;
    barcode?: string | null;
  } & {
    category_id?: number | null;
    brand_id?: number | null;
    /**
     * Название товара
     */
    name?: string;
    code?: string | null;
    description?: string | null;
    /**
     * Тип товара из CatalogProductTypeEnum
     */
    type?: number;
    /**
     * Публикация разрешена
     */
    allow_publish?: boolean;
    /**
     * Артикул
     */
    vendor_code?: string;
    weight?: number | null;
    weight_gross?: number | null;
    length?: number | null;
    width?: number | null;
    height?: number | null;
    is_adult?: boolean | null;
    base_price?: number | null;
  }) & {})[];
} & {};

        export type SearchOneCatalogProductGroupResponseMeta = {};

        export type SearchOneCatalogProductGroupResponse = CommonResponse<SearchOneCatalogProductGroupResponseData, SearchOneCatalogProductGroupResponseMeta>;
        export interface SearchBulkOperationsRequest {
  sort?: string[];
  include?: string[];
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
  filter?: {
    /**
     * Идентификатор(ы) массовой операции
     */
    id?: number;
    /**
     * Идентификатор(ы) статусов из CatalogBulkOperationStatusEnum
     */
    status?: number;
    /**
     * Идентификатор(ы) действий из CatalogBulkOperationActionEnum
     */
    action?: string;
    /**
     * Идентификатор(ы) сущностей из CatalogBulkOperationEntityEnum
     */
    entity?: string;
    /**
     * Дата создания от
     */
    created_at_from?: string;
    /**
     * Дата создания до
     */
    created_at_to?: string;
    /**
     * Дата обновления от
     */
    updated_at_from?: string;
    /**
     * Дата обновления до
     */
    updated_at_to?: string;
  };
}


        export type SearchBulkOperationsResponseData = ({
  /**
   * Идентификатор массовой операции
   */
  id?: number;
  /**
   * Пользователь, инициировавший операцию
   */
  created_by?: string | null;
  /**
   * Действие массовой операции:
   *  * `patch` - Изменение атрибутов
   *
   */
  action?: "patch";
  /**
   * Сущность, над которой производится массовая операция:
   *  * `product` - Товар
   *
   */
  entity?: "product";
  /**
   * Статус массовой операции:
   * * 1 - Новая
   * * 2 - В процессе
   * * 3 - Завершена
   * * 4 - Ошибка
   *
   */
  status?: 1 | 2 | 3 | 4;
  /**
   * Идентификаторы для обработки
   */
  ids?: number[];
  /**
   * Идентификаторы для обработки (для вывода в таблицу)
   */
  ids_string?: string;
  /**
   * Сообщение об ошибке
   */
  error_message?: string | null;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  errors?: {
    /**
     * Идентификатор массовой операции
     */
    operation_id: number;
    /**
     * Идентификатор сущности
     */
    entity_id: number;
    /**
     * Ошибка
     */
    message: string;
  }[];
} & {})[];

        export type SearchBulkOperationsResponseMeta = {
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        next_cursor?: string | null;
        previous_cursor?: string | null;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        total?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
};

        export type SearchBulkOperationsResponse = CommonResponse<SearchBulkOperationsResponseData, SearchBulkOperationsResponseMeta>;
        