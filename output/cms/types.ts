import { CommonResponse } from "@api/common/types";
import { ProductPimCategoryForCreate } from "@api/commonTypes/product-pim-category";
import { IdsObject, EmptyDataResponse } from "@api/commonTypes/index";
import { ErrorResponse } from "@api/commonTypes/errors";
import { GetResourceMetaResponse } from "@api/commonTypes/resource-meta";

export type DeleteProductGroupRequest = { id: number | string };

export type DeleteProductGroupResponse = EmptyDataResponse | ErrorResponse;
export type DeleteProductGroupFileRequest = { id: number | string };

export type DeleteProductGroupFileResponse = EmptyDataResponse | ErrorResponse;
export type DeleteBannerRequest = { id: number | string };

export type DeleteBannerResponse = EmptyDataResponse | ErrorResponse;
export type DeletePageRequest = { id: number | string };

export type DeletePageResponse = EmptyDataResponse | ErrorResponse;

export type GetPagesMetaResponse = GetResourceMetaResponse | ErrorResponse;
export type DeleteProductCategoryRequest = { id: number | string };

export type DeleteProductCategoryResponse = EmptyDataResponse | ErrorResponse;
export type DeleteProductPimCategoryRequest = { id: number | string };

export type DeleteProductPimCategoryResponse = EmptyDataResponse | ErrorResponse;
export type AddProductNameplatesRequest = IdsObject;

export type AddProductNameplatesResponse = EmptyDataResponse | ErrorResponse;
export type DeleteProductNameplatesRequest = IdsObject;

export type DeleteProductNameplatesResponse = EmptyDataResponse | ErrorResponse;
export type DeleteNameplateRequest = { id: number | string };

export type DeleteNameplateResponse = EmptyDataResponse | ErrorResponse;
export type AddNameplateProductsRequest = IdsObject;

export type AddNameplateProductsResponse = EmptyDataResponse | ErrorResponse;
export type DeleteNameplateProductsRequest = IdsObject;

export type DeleteNameplateProductsResponse = EmptyDataResponse | ErrorResponse;

export type GetNameplatesMetaResponse = GetResourceMetaResponse | ErrorResponse;

export type GetNameplateProductsMetaResponse = GetResourceMetaResponse | ErrorResponse;
export interface ReplaceMenuTreesRequest {
  items?: {
    /**
     * Название пункта
     */
    name?: string;
    /**
     * Ссылка
     */
    url?: string | null;
    /**
     * Видимость пункта меню
     */
    active?: boolean;
    /**
     * Родительские пункты в виде MenuTree
     */
    children?: {}[];
  }[];
}

export type ReplaceMenuTreesResponse = ErrorResponse;
export interface DeleteBannerFileRequest {
  /**
   * Тип изображения (значение из CmsBannerImageTypeEnum)
   */
  type?: "desktop" | "tablet" | "mobile";
}

export type DeleteBannerFileResponse = EmptyDataResponse | ErrorResponse;
export interface MassDeleteProductCategoryRequest {
  /**
   * Идентификаторы удаляемых сущностей
   */
  ids: number[];
}

export type MassDeleteProductCategoryResponse = EmptyDataResponse | ErrorResponse;
export type UploadProductGroupFileRequest = {
                        formData: FormData;
                        id: number | string;
                    }


        export type UploadProductGroupFileResponseData = {
  /**
   * Ссылка
   */
  url?: string;
};

        export type UploadProductGroupFileResponseMeta = {};

        export type UploadProductGroupFileResponse = CommonResponse<UploadProductGroupFileResponseData, UploadProductGroupFileResponseMeta>;
        export type UploadBannerFileRequest = {
                        formData: FormData;
                        id: number | string;
                    }


        export type UploadBannerFileResponseData = {
  /**
   * Ссылка
   */
  url?: string;
};

        export type UploadBannerFileResponseMeta = {};

        export type UploadBannerFileResponse = CommonResponse<UploadBannerFileResponseData, UploadBannerFileResponseMeta>;
        


        export type GetPageResponseData = {
  /**
   * Идентификатор
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
} & {
  /**
   * Наименование страницы
   */
  name?: string;
  /**
   * Человекопонятный идентификатор для url
   */
  slug?: string;
  /**
   * Html блок-контент
   */
  content?: string;
  /**
   * Активность страницы
   */
  is_active?: boolean;
  /**
   * Дата и время начала публикации страницы
   */
  active_from?: string;
  /**
   * Дата и время окончания публикации страницы
   */
  active_to?: string;
};

        export type GetPageResponseMeta = {};

        export type GetPageResponse = CommonResponse<GetPageResponseData, GetPageResponseMeta>;
        


        export type GetProductCategoryResponseData = {
  /**
   * Идентификатор
   */
  id?: number;
} & {} & {
  /**
   * Наименование
   */
  name?: string;
  /**
   * Url категории
   */
  url?: string;
  /**
   * Активность
   */
  active?: boolean;
  order?: number | null;
  parent_id?: number | null;
  /**
   * У категорий ПИМа product_category_id выставится автоматически
   */
  pim_categories?: ({} & {
    product_category_id?: number | null;
    /**
     * Код категории в ПИМе
     */
    code?: string;
    filters?: ({} & {
      /**
       * Код
       */
      code?: string;
      /**
       * Значение
       */
      value?: string;
    })[];
  })[];
} & {
  pim_categories?: ({
    /**
     * Идентификатор
     */
    id?: number;
  } & {} & {
    product_category_id?: number | null;
    /**
     * Код категории в ПИМе
     */
    code?: string;
    filters?: ({} & {
      /**
       * Код
       */
      code?: string;
      /**
       * Значение
       */
      value?: string;
    })[];
  } & {
    filters?: ({
      /**
       * Идентификатор
       */
      id?: number;
    } & {
      /**
       * Код
       */
      code?: string;
      /**
       * Значение
       */
      value?: string;
    })[];
  })[];
};

        export type GetProductCategoryResponseMeta = {};

        export type GetProductCategoryResponse = CommonResponse<GetProductCategoryResponseData, GetProductCategoryResponseMeta>;
        export type CreateProductPimCategoryRequest = ProductPimCategoryForCreate;


        export type CreateProductPimCategoryResponseData = {
  /**
   * Идентификатор
   */
  id?: number;
} & {} & {
  product_category_id?: number | null;
  /**
   * Код категории в ПИМе
   */
  code?: string;
  filters?: ({} & {
    /**
     * Код
     */
    code?: string;
    /**
     * Значение
     */
    value?: string;
  })[];
} & {
  filters?: ({
    /**
     * Идентификатор
     */
    id?: number;
  } & {
    /**
     * Код
     */
    code?: string;
    /**
     * Значение
     */
    value?: string;
  })[];
};

        export type CreateProductPimCategoryResponseMeta = {};

        export type CreateProductPimCategoryResponse = CommonResponse<CreateProductPimCategoryResponseData, CreateProductPimCategoryResponseMeta>;
        


        export type GetProductPimCategoryResponseData = {
  /**
   * Идентификатор
   */
  id?: number;
} & {} & {
  product_category_id?: number | null;
  /**
   * Код категории в ПИМе
   */
  code?: string;
  filters?: ({} & {
    /**
     * Код
     */
    code?: string;
    /**
     * Значение
     */
    value?: string;
  })[];
} & {
  filters?: ({
    /**
     * Идентификатор
     */
    id?: number;
  } & {
    /**
     * Код
     */
    code?: string;
    /**
     * Значение
     */
    value?: string;
  })[];
};

        export type GetProductPimCategoryResponseMeta = {};

        export type GetProductPimCategoryResponse = CommonResponse<GetProductPimCategoryResponseData, GetProductPimCategoryResponseMeta>;
        


        export type GetNameplateResponseData = {
  /**
   * Идентификатор
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
  /**
   * Наименование шильдика
   */
  name?: string;
  /**
   * Код шильдика
   */
  code?: string;
  /**
   * Цвет фона
   */
  background_color?: string;
  /**
   * Цвет текста
   */
  text_color?: string;
  /**
   * Активность
   */
  is_active?: boolean;
} & {
  [k: string]: unknown;
};

        export type GetNameplateResponseMeta = {};

        export type GetNameplateResponse = CommonResponse<GetNameplateResponseData, GetNameplateResponseMeta>;
        


        export type GetNameplateProductResponseData = {
  /**
   * Идентификатор
   */
  id: number;
  /**
   * Идентификатор шильдика
   */
  nameplate_id: number;
  /**
   * Идентификатор товара
   */
  product_id: number;
  /**
   * Дата создания
   */
  created_at: string;
  /**
   * Дата обновления
   */
  updated_at: string;
} & {
  product?: {
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
    /**
     * URL внешней картинки
     */
    main_image_url: string | null;
    /**
     * URL основной картинки
     */
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
        /**
         * ### URL логотипа.
         *
         * Для картинки на внешнем ресурсе совпадает с logo_url.
         * Если картинка загружена на сервер приложения, то в этом поле возвращает URL для публичного доступа к ней, а в
         * logo_url будет null.
         *
         */
        image_url?: string | null;
        /**
         * ### URL логотипа на внешнем сервере.
         *
         * Если для бренда была загружена картинка, то при передаче в запросе на обновление данных непустого значения
         * в этом поле, картинка будет удалена.
         *
         */
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
        /**
         * Код бренда
         */
        code?: string | null;
        /**
         * Описание бренда
         */
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
        /**
         * URL картинки главного товара
         */
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
        /**
         * Идентификатор товара для обложки
         */
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
};

        export type GetNameplateProductResponseMeta = {};

        export type GetNameplateProductResponse = CommonResponse<GetNameplateProductResponseData, GetNameplateProductResponseMeta>;
        export interface SearchMenusRequest {
  sort?: ("id" | "code")[];
  filter?: {
    id?: number;
    code?: string;
  };
  include?: "items"[];
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
}


        export type SearchMenusResponseData = ({
  /**
   * Идентификатор
   */
  id?: number;
} & {
  /**
   * Название
   */
  name?: string;
  /**
   * Код (значение из CmsMenuEnum)
   */
  code?: "header_main" | "header_help" | "footer_main";
} & {
  /**
   * Пункты меню
   */
  items?: {
    /**
     * Идентификатор
     */
    id?: number;
    /**
     * Ссылка
     */
    url?: string;
    /**
     * Название
     */
    name?: string;
    /**
     * Идентификатор меню
     */
    menu_id?: number;
    /**
     * Идентификатор элемента слева
     */
    _lft?: number;
    /**
     * Идентификатор элемента справа
     */
    _rgt?: number;
    /**
     * Идентификатор родительского элемента
     */
    parent_id?: number;
    /**
     * Видимость пункта меню
     */
    active?: boolean;
  }[];
  /**
   * Представление пунктов меню (items) в виде дерева
   */
  items_tree?: {
    /**
     * Название пункта
     */
    name?: string;
    url?: string | null;
    /**
     * Видимость пункта меню
     */
    active?: boolean;
    /**
     * Родительские пункты в виде MenuTree
     */
    children?: {}[];
  }[];
})[];

        export type SearchMenusResponseMeta = {
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

        export type SearchMenusResponse = CommonResponse<SearchMenusResponseData, SearchMenusResponseMeta>;
        export interface SearchOneMenusRequest {
  sort?: ("id" | "code")[];
  filter?: {
    id?: number;
    code?: string;
  };
  include?: "items"[];
}


        export type SearchOneMenusResponseData = {
  /**
   * Идентификатор
   */
  id?: number;
} & {
  /**
   * Название
   */
  name?: string;
  /**
   * Код (значение из CmsMenuEnum)
   */
  code?: "header_main" | "header_help" | "footer_main";
} & {
  /**
   * Пункты меню
   */
  items?: {
    /**
     * Идентификатор
     */
    id?: number;
    /**
     * Ссылка
     */
    url?: string;
    /**
     * Название
     */
    name?: string;
    /**
     * Идентификатор меню
     */
    menu_id?: number;
    /**
     * Идентификатор элемента слева
     */
    _lft?: number;
    /**
     * Идентификатор элемента справа
     */
    _rgt?: number;
    /**
     * Идентификатор родительского элемента
     */
    parent_id?: number;
    /**
     * Видимость пункта меню
     */
    active?: boolean;
  }[];
  /**
   * Представление пунктов меню (items) в виде дерева
   */
  items_tree?: {
    /**
     * Название пункта
     */
    name?: string;
    url?: string | null;
    /**
     * Видимость пункта меню
     */
    active?: boolean;
    /**
     * Родительские пункты в виде MenuTree
     */
    children?: {}[];
  }[];
};

        export type SearchOneMenusResponseMeta = {};

        export type SearchOneMenusResponse = CommonResponse<SearchOneMenusResponseData, SearchOneMenusResponseMeta>;
        export interface SearchProductGroupsRequest {
  sort?: ("id" | "name" | "code" | "active" | "is_shown")[];
  filter?: {
    id?: number;
    name?: string;
    code?: string;
    active?: boolean;
    is_shown?: boolean;
    type_id?: number;
    banner_id?: number;
    category_code?: string;
    "products.product_id"?: number;
  };
  include?: ("filters" | "products" | "type" | "banner")[];
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
}


        export type SearchProductGroupsResponseData = ({
  /**
   * Идентификатор
   */
  id?: number;
  /**
   * Ссылка на превью изображение
   */
  preview_photo?: string | null;
} & {
  /**
   * Наименование
   */
  name?: string;
  /**
   * Символьный код
   */
  code?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Доступность для показа
   */
  is_shown?: boolean;
  /**
   * Идентификатор типа
   */
  type_id?: number;
  banner_id?: number | null;
  category_code?: string | null;
  filters?: ({
    /**
     * Код
     */
    code?: string;
    /**
     * Значение
     */
    value?: string;
  } & {})[];
  products?: ({
    /**
     * Значение
     */
    sort?: number;
    /**
     * Идентификатор товара
     */
    product_id?: number;
  } & {})[];
} & {
  filters?: ({
    /**
     * Идентификатор
     */
    id?: number;
    /**
     * Идентификатор продуктовой группы
     */
    product_group_id?: number;
  } & {
    /**
     * Код
     */
    code?: string;
    /**
     * Значение
     */
    value?: string;
  })[];
  products?: ({
    /**
     * Идентификатор
     */
    id?: number;
    /**
     * Идентификатор продуктовой группы
     */
    product_group_id?: number;
  } & {
    /**
     * Значение
     */
    sort?: number;
    /**
     * Идентификатор товара
     */
    product_id?: number;
  } & {})[];
  type?: {
    /**
     * Идентификатор
     */
    id?: number;
  } & {
    /**
     * Код (значение из CmsProductGroupTypeEnum)
     */
    code?: "promo" | "sets" | "brands";
    /**
     * Значение
     */
    name?: string;
  };
  banner?: {
    /**
     * Идентификатор
     */
    id?: number;
    /**
     * Ссылка на декстоп изображение
     */
    desktop_image?: string | null;
    /**
     * Ссылка на планшет изображение
     */
    tablet_image?: string | null;
    /**
     * Ссылка на мобильное изображение
     */
    mobile_image?: string | null;
    /**
     * Идентификатор кнопки
     */
    button_id?: number | null;
  } & {
    /**
     * Название
     */
    name?: string;
    /**
     * Активность
     */
    active?: boolean;
    /**
     * Ссылка
     */
    url?: string;
    /**
     * Идентификатор типа
     */
    type_id?: number;
    button?: {
      /**
       * Ссылка
       */
      url?: string;
      /**
       * Текст
       */
      text?: string;
      /**
       * Размещение (значение из CmsBannerButtonLocationEnum)
       */
      location?: "top_left" | "top" | "top_right" | "right" | "bottom_right" | "bottom" | "bottom_left" | "left";
      /**
       * Тип (значение из CmsBannerButtonTypeEnum)
       */
      type?: "outline_black" | "outline_white" | "black" | "white";
    } & {};
  } & {
    type?: {
      /**
       * Идентификатор
       */
      id?: number;
    } & {
      /**
       * Код (значение из CmsBannerTypeEnum)
       */
      code?: "main";
      /**
       * Активность
       */
      active?: boolean;
      /**
       * Значение
       */
      name?: string;
    };
    button?: {
      /**
       * Идентификатор
       */
      id?: number;
    } & {
      /**
       * Ссылка
       */
      url?: string;
      /**
       * Текст
       */
      text?: string;
      /**
       * Размещение (значение из CmsBannerButtonLocationEnum)
       */
      location?: "top_left" | "top" | "top_right" | "right" | "bottom_right" | "bottom" | "bottom_left" | "left";
      /**
       * Тип (значение из CmsBannerButtonTypeEnum)
       */
      type?: "outline_black" | "outline_white" | "black" | "white";
    };
  };
})[];

        export type SearchProductGroupsResponseMeta = {
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

        export type SearchProductGroupsResponse = CommonResponse<SearchProductGroupsResponseData, SearchProductGroupsResponseMeta>;
        export interface SearchOneProductGroupsRequest {
  sort?: ("id" | "name" | "code" | "active" | "is_shown")[];
  filter?: {
    id?: number;
    name?: string;
    code?: string;
    active?: boolean;
    is_shown?: boolean;
    type_id?: number;
    banner_id?: number;
    category_code?: string;
    "products.product_id"?: number;
  };
  include?: ("filters" | "products" | "type" | "banner")[];
}


        export type SearchOneProductGroupsResponseData = {
  /**
   * Идентификатор
   */
  id?: number;
  preview_photo?: string | null;
} & {
  /**
   * Наименование
   */
  name?: string;
  /**
   * Символьный код
   */
  code?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Доступность для показа
   */
  is_shown?: boolean;
  /**
   * Идентификатор типа
   */
  type_id?: number;
  banner_id?: number | null;
  category_code?: string | null;
  filters?: ({
    /**
     * Код
     */
    code?: string;
    /**
     * Значение
     */
    value?: string;
  } & {})[];
  products?: ({
    /**
     * Значение
     */
    sort?: number;
    /**
     * Идентификатор товара
     */
    product_id?: number;
  } & {})[];
} & {
  filters?: ({
    /**
     * Идентификатор
     */
    id?: number;
    /**
     * Идентификатор продуктовой группы
     */
    product_group_id?: number;
  } & {
    /**
     * Код
     */
    code?: string;
    /**
     * Значение
     */
    value?: string;
  })[];
  products?: ({
    /**
     * Идентификатор
     */
    id?: number;
    /**
     * Идентификатор продуктовой группы
     */
    product_group_id?: number;
  } & {
    /**
     * Значение
     */
    sort?: number;
    /**
     * Идентификатор товара
     */
    product_id?: number;
  } & {})[];
  type?: {
    /**
     * Идентификатор
     */
    id?: number;
  } & {
    /**
     * Код (значение из CmsProductGroupTypeEnum)
     */
    code?: "promo" | "sets" | "brands";
    /**
     * Значение
     */
    name?: string;
  };
  banner?: {
    /**
     * Идентификатор
     */
    id?: number;
    desktop_image?: string | null;
    tablet_image?: string | null;
    mobile_image?: string | null;
    button_id?: number | null;
  } & {
    /**
     * Название
     */
    name?: string;
    /**
     * Активность
     */
    active?: boolean;
    /**
     * Ссылка
     */
    url?: string;
    /**
     * Идентификатор типа
     */
    type_id?: number;
    button?: {
      /**
       * Ссылка
       */
      url?: string;
      /**
       * Текст
       */
      text?: string;
      /**
       * Размещение (значение из CmsBannerButtonLocationEnum)
       */
      location?: "top_left" | "top" | "top_right" | "right" | "bottom_right" | "bottom" | "bottom_left" | "left";
      /**
       * Тип (значение из CmsBannerButtonTypeEnum)
       */
      type?: "outline_black" | "outline_white" | "black" | "white";
    } & {};
  } & {
    type?: {
      /**
       * Идентификатор
       */
      id?: number;
    } & {
      /**
       * Код (значение из CmsBannerTypeEnum)
       */
      code?: "main";
      /**
       * Активность
       */
      active?: boolean;
      /**
       * Значение
       */
      name?: string;
    };
    button?: {
      /**
       * Идентификатор
       */
      id?: number;
    } & {
      /**
       * Ссылка
       */
      url?: string;
      /**
       * Текст
       */
      text?: string;
      /**
       * Размещение (значение из CmsBannerButtonLocationEnum)
       */
      location?: "top_left" | "top" | "top_right" | "right" | "bottom_right" | "bottom" | "bottom_left" | "left";
      /**
       * Тип (значение из CmsBannerButtonTypeEnum)
       */
      type?: "outline_black" | "outline_white" | "black" | "white";
    };
  };
};

        export type SearchOneProductGroupsResponseMeta = {};

        export type SearchOneProductGroupsResponse = CommonResponse<SearchOneProductGroupsResponseData, SearchOneProductGroupsResponseMeta>;
        export type CreateProductGroupRequest = {
  /**
   * Наименование
   */
  name?: string;
  /**
   * Символьный код
   */
  code?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Доступность для показа
   */
  is_shown?: boolean;
  /**
   * Идентификатор типа
   */
  type_id?: number;
  /**
   * Идентификатор баннера
   */
  banner_id?: number | null;
  /**
   * Код категории
   */
  category_code?: string | null;
  filters?: ({
    /**
     * Код
     */
    code?: string;
    /**
     * Значение
     */
    value?: string;
  } & {})[];
  products?: ({
    /**
     * Значение
     */
    sort?: number;
    /**
     * Идентификатор товара
     */
    product_id?: number;
  } & {})[];
} & {};


        export type CreateProductGroupResponseData = {
  /**
   * Идентификатор
   */
  id?: number;
  preview_photo?: string | null;
} & {
  /**
   * Наименование
   */
  name?: string;
  /**
   * Символьный код
   */
  code?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Доступность для показа
   */
  is_shown?: boolean;
  /**
   * Идентификатор типа
   */
  type_id?: number;
  banner_id?: number | null;
  category_code?: string | null;
  filters?: ({
    /**
     * Код
     */
    code?: string;
    /**
     * Значение
     */
    value?: string;
  } & {})[];
  products?: ({
    /**
     * Значение
     */
    sort?: number;
    /**
     * Идентификатор товара
     */
    product_id?: number;
  } & {})[];
} & {
  filters?: ({
    /**
     * Идентификатор
     */
    id?: number;
    /**
     * Идентификатор продуктовой группы
     */
    product_group_id?: number;
  } & {
    /**
     * Код
     */
    code?: string;
    /**
     * Значение
     */
    value?: string;
  })[];
  products?: ({
    /**
     * Идентификатор
     */
    id?: number;
    /**
     * Идентификатор продуктовой группы
     */
    product_group_id?: number;
  } & {
    /**
     * Значение
     */
    sort?: number;
    /**
     * Идентификатор товара
     */
    product_id?: number;
  } & {})[];
  type?: {
    /**
     * Идентификатор
     */
    id?: number;
  } & {
    /**
     * Код (значение из CmsProductGroupTypeEnum)
     */
    code?: "promo" | "sets" | "brands";
    /**
     * Значение
     */
    name?: string;
  };
  banner?: {
    /**
     * Идентификатор
     */
    id?: number;
    desktop_image?: string | null;
    tablet_image?: string | null;
    mobile_image?: string | null;
    button_id?: number | null;
  } & {
    /**
     * Название
     */
    name?: string;
    /**
     * Активность
     */
    active?: boolean;
    /**
     * Ссылка
     */
    url?: string;
    /**
     * Идентификатор типа
     */
    type_id?: number;
    button?: {
      /**
       * Ссылка
       */
      url?: string;
      /**
       * Текст
       */
      text?: string;
      /**
       * Размещение (значение из CmsBannerButtonLocationEnum)
       */
      location?: "top_left" | "top" | "top_right" | "right" | "bottom_right" | "bottom" | "bottom_left" | "left";
      /**
       * Тип (значение из CmsBannerButtonTypeEnum)
       */
      type?: "outline_black" | "outline_white" | "black" | "white";
    } & {};
  } & {
    type?: {
      /**
       * Идентификатор
       */
      id?: number;
    } & {
      /**
       * Код (значение из CmsBannerTypeEnum)
       */
      code?: "main";
      /**
       * Активность
       */
      active?: boolean;
      /**
       * Значение
       */
      name?: string;
    };
    button?: {
      /**
       * Идентификатор
       */
      id?: number;
    } & {
      /**
       * Ссылка
       */
      url?: string;
      /**
       * Текст
       */
      text?: string;
      /**
       * Размещение (значение из CmsBannerButtonLocationEnum)
       */
      location?: "top_left" | "top" | "top_right" | "right" | "bottom_right" | "bottom" | "bottom_left" | "left";
      /**
       * Тип (значение из CmsBannerButtonTypeEnum)
       */
      type?: "outline_black" | "outline_white" | "black" | "white";
    };
  };
};

        export type CreateProductGroupResponseMeta = {};

        export type CreateProductGroupResponse = CommonResponse<CreateProductGroupResponseData, CreateProductGroupResponseMeta>;
        export type ReplaceProductGroupRequest = {
  /**
   * Наименование
   */
  name?: string;
  /**
   * Символьный код
   */
  code?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Доступность для показа
   */
  is_shown?: boolean;
  /**
   * Идентификатор типа
   */
  type_id?: number;
  banner_id?: number | null;
  category_code?: string | null;
  filters?: ({
    /**
     * Код
     */
    code?: string;
    /**
     * Значение
     */
    value?: string;
  } & {})[];
  products?: ({
    /**
     * Значение
     */
    sort?: number;
    /**
     * Идентификатор товара
     */
    product_id?: number;
  } & {})[];
} & {};


        export type ReplaceProductGroupResponseData = {
  /**
   * Идентификатор
   */
  id?: number;
  preview_photo?: string | null;
} & {
  /**
   * Наименование
   */
  name?: string;
  /**
   * Символьный код
   */
  code?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Доступность для показа
   */
  is_shown?: boolean;
  /**
   * Идентификатор типа
   */
  type_id?: number;
  banner_id?: number | null;
  category_code?: string | null;
  filters?: ({
    /**
     * Код
     */
    code?: string;
    /**
     * Значение
     */
    value?: string;
  } & {})[];
  products?: ({
    /**
     * Значение
     */
    sort?: number;
    /**
     * Идентификатор товара
     */
    product_id?: number;
  } & {})[];
} & {
  filters?: ({
    /**
     * Идентификатор
     */
    id?: number;
    /**
     * Идентификатор продуктовой группы
     */
    product_group_id?: number;
  } & {
    /**
     * Код
     */
    code?: string;
    /**
     * Значение
     */
    value?: string;
  })[];
  products?: ({
    /**
     * Идентификатор
     */
    id?: number;
    /**
     * Идентификатор продуктовой группы
     */
    product_group_id?: number;
  } & {
    /**
     * Значение
     */
    sort?: number;
    /**
     * Идентификатор товара
     */
    product_id?: number;
  } & {})[];
  type?: {
    /**
     * Идентификатор
     */
    id?: number;
  } & {
    /**
     * Код (значение из CmsProductGroupTypeEnum)
     */
    code?: "promo" | "sets" | "brands";
    /**
     * Значение
     */
    name?: string;
  };
  banner?: {
    /**
     * Идентификатор
     */
    id?: number;
    desktop_image?: string | null;
    tablet_image?: string | null;
    mobile_image?: string | null;
    button_id?: number | null;
  } & {
    /**
     * Название
     */
    name?: string;
    /**
     * Активность
     */
    active?: boolean;
    /**
     * Ссылка
     */
    url?: string;
    /**
     * Идентификатор типа
     */
    type_id?: number;
    button?: {
      /**
       * Ссылка
       */
      url?: string;
      /**
       * Текст
       */
      text?: string;
      /**
       * Размещение (значение из CmsBannerButtonLocationEnum)
       */
      location?: "top_left" | "top" | "top_right" | "right" | "bottom_right" | "bottom" | "bottom_left" | "left";
      /**
       * Тип (значение из CmsBannerButtonTypeEnum)
       */
      type?: "outline_black" | "outline_white" | "black" | "white";
    } & {};
  } & {
    type?: {
      /**
       * Идентификатор
       */
      id?: number;
    } & {
      /**
       * Код (значение из CmsBannerTypeEnum)
       */
      code?: "main";
      /**
       * Активность
       */
      active?: boolean;
      /**
       * Значение
       */
      name?: string;
    };
    button?: {
      /**
       * Идентификатор
       */
      id?: number;
    } & {
      /**
       * Ссылка
       */
      url?: string;
      /**
       * Текст
       */
      text?: string;
      /**
       * Размещение (значение из CmsBannerButtonLocationEnum)
       */
      location?: "top_left" | "top" | "top_right" | "right" | "bottom_right" | "bottom" | "bottom_left" | "left";
      /**
       * Тип (значение из CmsBannerButtonTypeEnum)
       */
      type?: "outline_black" | "outline_white" | "black" | "white";
    };
  };
};

        export type ReplaceProductGroupResponseMeta = {};

        export type ReplaceProductGroupResponse = CommonResponse<ReplaceProductGroupResponseData, ReplaceProductGroupResponseMeta>;
        export interface SearchProductGroupTypesRequest {
  sort?: ("id" | "name" | "code")[];
  filter?: {
    id?: number;
    name?: string;
    code?: string;
  };
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
}


        export type SearchProductGroupTypesResponseData = ({
  /**
   * Идентификатор
   */
  id?: number;
} & {
  /**
   * Код (значение из CmsProductGroupTypeEnum)
   */
  code?: "promo" | "sets" | "brands";
  /**
   * Значение
   */
  name?: string;
})[];

        export type SearchProductGroupTypesResponseMeta = {
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

        export type SearchProductGroupTypesResponse = CommonResponse<SearchProductGroupTypesResponseData, SearchProductGroupTypesResponseMeta>;
        export interface SearchProductGroupFiltersRequest {
  filter?: {
    /**
     * Тип данных свойства из CatalogPropertyTypeEnum
     */
    type?: string;
    /**
     * Выводится в фильтрах на витрине
     */
    is_filterable?: boolean;
    /**
     * Идентификатор категории, если нужна выдача только действующих для категории атрибуты товаров
     */
    category_id?: number | null;
  };
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
}


        export type SearchProductGroupFiltersResponseData = ({
  /**
   * Идентификатор свойства
   */
  id?: number;
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
   * Тип данных свойства из CatalogPropertyTypeEnum
   */
  type?: string;
  /**
   * Поддерживает множественные значения
   */
  is_multiple?: boolean;
  /**
   * Выводится в фильтрах на витрине
   */
  is_filterable?: boolean;
} & {
  directory?: {
    /**
     * Идентификатор значения
     */
    id?: number;
    /**
     * Значение
     */
    name?: string;
    /**
     * Код значения
     */
    code?: string;
  }[];
})[];

        export type SearchProductGroupFiltersResponseMeta = {
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

        export type SearchProductGroupFiltersResponse = CommonResponse<SearchProductGroupFiltersResponseData, SearchProductGroupFiltersResponseMeta>;
        export interface SearchBannersRequest {
  sort?: ("id" | "name" | "active")[];
  filter?: {
    id?: number;
    name?: string;
    active?: boolean;
    type_id?: number;
    button_id?: number;
  };
  include?: ("type" | "button")[];
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
}


        export type SearchBannersResponseData = ({
  /**
   * Идентификатор
   */
  id?: number;
  desktop_image?: string | null;
  tablet_image?: string | null;
  mobile_image?: string | null;
  button_id?: number | null;
} & {
  /**
   * Название
   */
  name?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Ссылка
   */
  url?: string;
  /**
   * Идентификатор типа
   */
  type_id?: number;
  button?: {
    /**
     * Ссылка
     */
    url?: string;
    /**
     * Текст
     */
    text?: string;
    /**
     * Размещение (значение из CmsBannerButtonLocationEnum)
     */
    location?: "top_left" | "top" | "top_right" | "right" | "bottom_right" | "bottom" | "bottom_left" | "left";
    /**
     * Тип (значение из CmsBannerButtonTypeEnum)
     */
    type?: "outline_black" | "outline_white" | "black" | "white";
  } & {};
} & {
  type?: {
    /**
     * Идентификатор
     */
    id?: number;
  } & {
    /**
     * Код (значение из CmsBannerTypeEnum)
     */
    code?: "main";
    /**
     * Активность
     */
    active?: boolean;
    /**
     * Значение
     */
    name?: string;
  };
  button?: {
    /**
     * Идентификатор
     */
    id?: number;
  } & {
    /**
     * Ссылка
     */
    url?: string;
    /**
     * Текст
     */
    text?: string;
    /**
     * Размещение (значение из CmsBannerButtonLocationEnum)
     */
    location?: "top_left" | "top" | "top_right" | "right" | "bottom_right" | "bottom" | "bottom_left" | "left";
    /**
     * Тип (значение из CmsBannerButtonTypeEnum)
     */
    type?: "outline_black" | "outline_white" | "black" | "white";
  };
})[];

        export type SearchBannersResponseMeta = {
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

        export type SearchBannersResponse = CommonResponse<SearchBannersResponseData, SearchBannersResponseMeta>;
        export interface SearchOneBannersRequest {
  sort?: ("id" | "name" | "active")[];
  filter?: {
    id?: number;
    name?: string;
    active?: boolean;
    type_id?: number;
    button_id?: number;
  };
  include?: ("type" | "button")[];
}


        export type SearchOneBannersResponseData = {
  /**
   * Идентификатор
   */
  id?: number;
  desktop_image?: string | null;
  tablet_image?: string | null;
  mobile_image?: string | null;
  button_id?: number | null;
} & {
  /**
   * Название
   */
  name?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Ссылка
   */
  url?: string;
  /**
   * Идентификатор типа
   */
  type_id?: number;
  button?: {
    /**
     * Ссылка
     */
    url?: string;
    /**
     * Текст
     */
    text?: string;
    /**
     * Размещение (значение из CmsBannerButtonLocationEnum)
     */
    location?: "top_left" | "top" | "top_right" | "right" | "bottom_right" | "bottom" | "bottom_left" | "left";
    /**
     * Тип (значение из CmsBannerButtonTypeEnum)
     */
    type?: "outline_black" | "outline_white" | "black" | "white";
  } & {};
} & {
  type?: {
    /**
     * Идентификатор
     */
    id?: number;
  } & {
    /**
     * Код (значение из CmsBannerTypeEnum)
     */
    code?: "main";
    /**
     * Активность
     */
    active?: boolean;
    /**
     * Значение
     */
    name?: string;
  };
  button?: {
    /**
     * Идентификатор
     */
    id?: number;
  } & {
    /**
     * Ссылка
     */
    url?: string;
    /**
     * Текст
     */
    text?: string;
    /**
     * Размещение (значение из CmsBannerButtonLocationEnum)
     */
    location?: "top_left" | "top" | "top_right" | "right" | "bottom_right" | "bottom" | "bottom_left" | "left";
    /**
     * Тип (значение из CmsBannerButtonTypeEnum)
     */
    type?: "outline_black" | "outline_white" | "black" | "white";
  };
};

        export type SearchOneBannersResponseMeta = {};

        export type SearchOneBannersResponse = CommonResponse<SearchOneBannersResponseData, SearchOneBannersResponseMeta>;
        export type CreateBannerRequest = {
  /**
   * Название
   */
  name?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Ссылка
   */
  url?: string;
  /**
   * Идентификатор типа
   */
  type_id?: number;
  button?: {
    /**
     * Ссылка
     */
    url?: string;
    /**
     * Текст
     */
    text?: string;
    /**
     * Размещение (значение из CmsBannerButtonLocationEnum)
     */
    location?: "top_left" | "top" | "top_right" | "right" | "bottom_right" | "bottom" | "bottom_left" | "left";
    /**
     * Тип (значение из CmsBannerButtonTypeEnum)
     */
    type?: "outline_black" | "outline_white" | "black" | "white";
  } & {};
} & {};


        export type CreateBannerResponseData = {
  /**
   * Идентификатор
   */
  id?: number;
  desktop_image?: string | null;
  tablet_image?: string | null;
  mobile_image?: string | null;
  button_id?: number | null;
} & {
  /**
   * Название
   */
  name?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Ссылка
   */
  url?: string;
  /**
   * Идентификатор типа
   */
  type_id?: number;
  button?: {
    /**
     * Ссылка
     */
    url?: string;
    /**
     * Текст
     */
    text?: string;
    /**
     * Размещение (значение из CmsBannerButtonLocationEnum)
     */
    location?: "top_left" | "top" | "top_right" | "right" | "bottom_right" | "bottom" | "bottom_left" | "left";
    /**
     * Тип (значение из CmsBannerButtonTypeEnum)
     */
    type?: "outline_black" | "outline_white" | "black" | "white";
  } & {};
} & {
  type?: {
    /**
     * Идентификатор
     */
    id?: number;
  } & {
    /**
     * Код (значение из CmsBannerTypeEnum)
     */
    code?: "main";
    /**
     * Активность
     */
    active?: boolean;
    /**
     * Значение
     */
    name?: string;
  };
  button?: {
    /**
     * Идентификатор
     */
    id?: number;
  } & {
    /**
     * Ссылка
     */
    url?: string;
    /**
     * Текст
     */
    text?: string;
    /**
     * Размещение (значение из CmsBannerButtonLocationEnum)
     */
    location?: "top_left" | "top" | "top_right" | "right" | "bottom_right" | "bottom" | "bottom_left" | "left";
    /**
     * Тип (значение из CmsBannerButtonTypeEnum)
     */
    type?: "outline_black" | "outline_white" | "black" | "white";
  };
};

        export type CreateBannerResponseMeta = {};

        export type CreateBannerResponse = CommonResponse<CreateBannerResponseData, CreateBannerResponseMeta>;
        export type ReplaceBannerRequest = {
  /**
   * Название
   */
  name?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Ссылка
   */
  url?: string;
  /**
   * Идентификатор типа
   */
  type_id?: number;
  button?: {
    /**
     * Ссылка
     */
    url?: string;
    /**
     * Текст
     */
    text?: string;
    /**
     * Размещение (значение из CmsBannerButtonLocationEnum)
     */
    location?: "top_left" | "top" | "top_right" | "right" | "bottom_right" | "bottom" | "bottom_left" | "left";
    /**
     * Тип (значение из CmsBannerButtonTypeEnum)
     */
    type?: "outline_black" | "outline_white" | "black" | "white";
  } & {};
} & {};


        export type ReplaceBannerResponseData = {
  /**
   * Идентификатор
   */
  id?: number;
  desktop_image?: string | null;
  tablet_image?: string | null;
  mobile_image?: string | null;
  button_id?: number | null;
} & {
  /**
   * Название
   */
  name?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Ссылка
   */
  url?: string;
  /**
   * Идентификатор типа
   */
  type_id?: number;
  button?: {
    /**
     * Ссылка
     */
    url?: string;
    /**
     * Текст
     */
    text?: string;
    /**
     * Размещение (значение из CmsBannerButtonLocationEnum)
     */
    location?: "top_left" | "top" | "top_right" | "right" | "bottom_right" | "bottom" | "bottom_left" | "left";
    /**
     * Тип (значение из CmsBannerButtonTypeEnum)
     */
    type?: "outline_black" | "outline_white" | "black" | "white";
  } & {};
} & {
  type?: {
    /**
     * Идентификатор
     */
    id?: number;
  } & {
    /**
     * Код (значение из CmsBannerTypeEnum)
     */
    code?: "main";
    /**
     * Активность
     */
    active?: boolean;
    /**
     * Значение
     */
    name?: string;
  };
  button?: {
    /**
     * Идентификатор
     */
    id?: number;
  } & {
    /**
     * Ссылка
     */
    url?: string;
    /**
     * Текст
     */
    text?: string;
    /**
     * Размещение (значение из CmsBannerButtonLocationEnum)
     */
    location?: "top_left" | "top" | "top_right" | "right" | "bottom_right" | "bottom" | "bottom_left" | "left";
    /**
     * Тип (значение из CmsBannerButtonTypeEnum)
     */
    type?: "outline_black" | "outline_white" | "black" | "white";
  };
};

        export type ReplaceBannerResponseMeta = {};

        export type ReplaceBannerResponse = CommonResponse<ReplaceBannerResponseData, ReplaceBannerResponseMeta>;
        export interface SearchBannerTypesRequest {
  sort?: ("id" | "name" | "active" | "code")[];
  filter?: {
    id?: number;
    name?: string;
    active?: boolean;
  };
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
}


        export type SearchBannerTypesResponseData = ({
  /**
   * Идентификатор
   */
  id?: number;
} & {
  /**
   * Код (значение из CmsBannerTypeEnum)
   */
  code?: "main";
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Значение
   */
  name?: string;
})[];

        export type SearchBannerTypesResponseMeta = {
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

        export type SearchBannerTypesResponse = CommonResponse<SearchBannerTypesResponseData, SearchBannerTypesResponseMeta>;
        export interface SearchPagesRequest {
  sort?: string[];
  filter?: {
    /**
     * Идентификатор
     */
    id?: number;
    /**
     * Наименование страницы
     */
    name?: string;
    /**
     * Человекопонятный идентификатор для url
     */
    slug?: string;
    /**
     * Полное или частичное наименование
     */
    name_like?: string;
    /**
     * Полный или частичный Html блок-контент
     */
    content_like?: string;
    /**
     * Активность страницы
     */
    is_active?: boolean;
    /**
     * Только активные записи (имеют флаг активности и попадают в ее промежуток времени)
     */
    is_visible?: boolean;
  };
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
}


        export type SearchPagesResponseData = ({
  /**
   * Идентификатор
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
} & {
  /**
   * Наименование страницы
   */
  name?: string;
  /**
   * Человекопонятный идентификатор для url
   */
  slug?: string;
  /**
   * Html блок-контент
   */
  content?: string;
  /**
   * Активность страницы
   */
  is_active?: boolean;
  /**
   * Дата и время начала публикации страницы
   */
  active_from?: string;
  /**
   * Дата и время окончания публикации страницы
   */
  active_to?: string;
})[];

        export type SearchPagesResponseMeta = {
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

        export type SearchPagesResponse = CommonResponse<SearchPagesResponseData, SearchPagesResponseMeta>;
        export interface SearchOnePageRequest {
  sort?: string[];
  filter?: {
    /**
     * Идентификатор
     */
    id?: number;
    /**
     * Наименование страницы
     */
    name?: string;
    /**
     * Человекопонятный идентификатор для url
     */
    slug?: string;
    /**
     * Полное или частичное наименование
     */
    name_like?: string;
    /**
     * Полный или частичный Html блок-контент
     */
    content_like?: string;
    /**
     * Активность страницы
     */
    is_active?: boolean;
    /**
     * Только активные записи (имеют флаг активности и попадают в ее промежуток времени)
     */
    is_visible?: boolean;
  };
}


        export type SearchOnePageResponseData = {
  /**
   * Идентификатор
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
} & {
  /**
   * Наименование страницы
   */
  name?: string;
  /**
   * Человекопонятный идентификатор для url
   */
  slug?: string;
  /**
   * Html блок-контент
   */
  content?: string;
  /**
   * Активность страницы
   */
  is_active?: boolean;
  /**
   * Дата и время начала публикации страницы
   */
  active_from?: string;
  /**
   * Дата и время окончания публикации страницы
   */
  active_to?: string;
};

        export type SearchOnePageResponseMeta = {};

        export type SearchOnePageResponse = CommonResponse<SearchOnePageResponseData, SearchOnePageResponseMeta>;
        export type CreatePageRequest = {
  /**
   * Наименование страницы
   */
  name?: string;
  /**
   * Человекопонятный идентификатор для url
   */
  slug?: string;
  /**
   * Html блок-контент
   */
  content?: string;
  /**
   * Активность страницы
   */
  is_active?: boolean;
  /**
   * Дата и время начала публикации страницы
   */
  active_from?: string;
  /**
   * Дата и время окончания публикации страницы
   */
  active_to?: string;
} & {};


        export type CreatePageResponseData = {
  /**
   * Идентификатор
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
} & {
  /**
   * Наименование страницы
   */
  name?: string;
  /**
   * Человекопонятный идентификатор для url
   */
  slug?: string;
  /**
   * Html блок-контент
   */
  content?: string;
  /**
   * Активность страницы
   */
  is_active?: boolean;
  /**
   * Дата и время начала публикации страницы
   */
  active_from?: string;
  /**
   * Дата и время окончания публикации страницы
   */
  active_to?: string;
};

        export type CreatePageResponseMeta = {};

        export type CreatePageResponse = CommonResponse<CreatePageResponseData, CreatePageResponseMeta>;
        export type PatchPageRequest = {
  /**
   * Наименование страницы
   */
  name?: string;
  /**
   * Человекопонятный идентификатор для url
   */
  slug?: string;
  /**
   * Html блок-контент
   */
  content?: string;
  /**
   * Активность страницы
   */
  is_active?: boolean;
  /**
   * Дата и время начала публикации страницы
   */
  active_from?: string;
  /**
   * Дата и время окончания публикации страницы
   */
  active_to?: string;
};


        export type PatchPageResponseData = {
  /**
   * Идентификатор
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
} & {
  /**
   * Наименование страницы
   */
  name?: string;
  /**
   * Человекопонятный идентификатор для url
   */
  slug?: string;
  /**
   * Html блок-контент
   */
  content?: string;
  /**
   * Активность страницы
   */
  is_active?: boolean;
  /**
   * Дата и время начала публикации страницы
   */
  active_from?: string;
  /**
   * Дата и время окончания публикации страницы
   */
  active_to?: string;
};

        export type PatchPageResponseMeta = {};

        export type PatchPageResponse = CommonResponse<PatchPageResponseData, PatchPageResponseMeta>;
        export type CreateProductCategoryRequest = {
  /**
   * Наименование
   */
  name?: string;
  /**
   * Url категории
   */
  url?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Порядок категорий одного уровня. По умолчанию 0
   */
  order?: number | null;
  /**
   * Идентификатор родительской категории
   */
  parent_id?: number | null;
  /**
   * У категорий ПИМа product_category_id выставится автоматически
   */
  pim_categories?: ({} & {
    product_category_id?: number | null;
    /**
     * Код категории в ПИМе
     */
    code?: string;
    filters?: ({} & {
      /**
       * Код
       */
      code?: string;
      /**
       * Значение
       */
      value?: string;
    })[];
  })[];
} & {};


        export type CreateProductCategoryResponseData = {
  /**
   * Идентификатор
   */
  id?: number;
} & {
  /**
   * Наименование
   */
  name?: string;
  /**
   * Url категории
   */
  url?: string;
  /**
   * Активность
   */
  active?: boolean;
  order?: number | null;
  parent_id?: number | null;
  /**
   * У категорий ПИМа product_category_id выставится автоматически
   */
  pim_categories?: ({} & {
    product_category_id?: number | null;
    /**
     * Код категории в ПИМе
     */
    code?: string;
    filters?: ({} & {
      /**
       * Код
       */
      code?: string;
      /**
       * Значение
       */
      value?: string;
    })[];
  })[];
} & {};

        export type CreateProductCategoryResponseMeta = {};

        export type CreateProductCategoryResponse = CommonResponse<CreateProductCategoryResponseData, CreateProductCategoryResponseMeta>;
        export type ReplaceProductCategoryRequest = {
  /**
   * Наименование
   */
  name?: string;
  /**
   * Url категории
   */
  url?: string;
  /**
   * Активность
   */
  active?: boolean;
  order?: number | null;
  parent_id?: number | null;
  /**
   * У категорий ПИМа product_category_id выставится автоматически
   */
  pim_categories?: ({} & {
    product_category_id?: number | null;
    /**
     * Код категории в ПИМе
     */
    code?: string;
    filters?: ({} & {
      /**
       * Код
       */
      code?: string;
      /**
       * Значение
       */
      value?: string;
    })[];
  })[];
} & {};


        export type ReplaceProductCategoryResponseData = {
  /**
   * Идентификатор
   */
  id?: number;
} & {
  /**
   * Наименование
   */
  name?: string;
  /**
   * Url категории
   */
  url?: string;
  /**
   * Активность
   */
  active?: boolean;
  order?: number | null;
  parent_id?: number | null;
  /**
   * У категорий ПИМа product_category_id выставится автоматически
   */
  pim_categories?: ({} & {
    product_category_id?: number | null;
    /**
     * Код категории в ПИМе
     */
    code?: string;
    filters?: ({} & {
      /**
       * Код
       */
      code?: string;
      /**
       * Значение
       */
      value?: string;
    })[];
  })[];
} & {};

        export type ReplaceProductCategoryResponseMeta = {};

        export type ReplaceProductCategoryResponse = CommonResponse<ReplaceProductCategoryResponseData, ReplaceProductCategoryResponseMeta>;
        export interface SearchProductCategoriesRequest {
  sort?: string[];
  filter?: {
    name?: string;
  };
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
}


        export type SearchProductCategoriesResponseData = ({
  /**
   * Идентификатор
   */
  id?: number;
} & {} & {
  /**
   * Наименование
   */
  name?: string;
  /**
   * Url категории
   */
  url?: string;
  /**
   * Активность
   */
  active?: boolean;
  order?: number | null;
  parent_id?: number | null;
  /**
   * У категорий ПИМа product_category_id выставится автоматически
   */
  pim_categories?: ({} & {
    product_category_id?: number | null;
    /**
     * Код категории в ПИМе
     */
    code?: string;
    filters?: ({} & {
      /**
       * Код
       */
      code?: string;
      /**
       * Значение
       */
      value?: string;
    })[];
  })[];
} & {
  pim_categories?: ({
    /**
     * Идентификатор
     */
    id?: number;
  } & {} & {
    product_category_id?: number | null;
    /**
     * Код категории в ПИМе
     */
    code?: string;
    filters?: ({} & {
      /**
       * Код
       */
      code?: string;
      /**
       * Значение
       */
      value?: string;
    })[];
  } & {
    filters?: ({
      /**
       * Идентификатор
       */
      id?: number;
    } & {
      /**
       * Код
       */
      code?: string;
      /**
       * Значение
       */
      value?: string;
    })[];
  })[];
})[];

        export type SearchProductCategoriesResponseMeta = {
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

        export type SearchProductCategoriesResponse = CommonResponse<SearchProductCategoriesResponseData, SearchProductCategoriesResponseMeta>;
        export interface GetProductCategoriesTreeRequest {
  sort?: string[];
  filter?: {
    /**
     * Идентификатор категории с которой начинать загрузку
     */
    root_id?: number | null;
    /**
     * Выбирать только активные категории
     */
    active?: boolean | null;
  };
}


        export type GetProductCategoriesTreeResponseData = {
  /**
   * Идентификатор категории
   */
  id?: number;
  /**
   * Название категории
   */
  name?: string;
  /**
   * Url категории
   */
  url?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Порядок категорий одного уровня. По умолчанию 0
   */
  order?: number | null;
  pim_categories?: ({
    /**
     * Идентификатор
     */
    id?: number;
  } & {} & {
    product_category_id?: number | null;
    /**
     * Код категории в ПИМе
     */
    code?: string;
    filters?: ({} & {
      /**
       * Код
       */
      code?: string;
      /**
       * Значение
       */
      value?: string;
    })[];
  } & {
    filters?: ({
      /**
       * Идентификатор
       */
      id?: number;
    } & {
      /**
       * Код
       */
      code?: string;
      /**
       * Значение
       */
      value?: string;
    })[];
  })[];
  /**
   * Дочерние категории, если есть
   */
  children?: {}[];
}[];

        export type GetProductCategoriesTreeResponseMeta = {};

        export type GetProductCategoriesTreeResponse = CommonResponse<GetProductCategoriesTreeResponseData, GetProductCategoriesTreeResponseMeta>;
        export type ReplaceProductPimCategoryRequest = {} & {
  product_category_id?: number | null;
  /**
   * Код категории в ПИМе
   */
  code?: string;
  filters?: ({} & {
    /**
     * Код
     */
    code?: string;
    /**
     * Значение
     */
    value?: string;
  })[];
};


        export type ReplaceProductPimCategoryResponseData = {
  /**
   * Идентификатор
   */
  id?: number;
} & {} & {
  product_category_id?: number | null;
  /**
   * Код категории в ПИМе
   */
  code?: string;
  filters?: ({} & {
    /**
     * Код
     */
    code?: string;
    /**
     * Значение
     */
    value?: string;
  })[];
} & {
  filters?: ({
    /**
     * Идентификатор
     */
    id?: number;
  } & {
    /**
     * Код
     */
    code?: string;
    /**
     * Значение
     */
    value?: string;
  })[];
};

        export type ReplaceProductPimCategoryResponseMeta = {};

        export type ReplaceProductPimCategoryResponse = CommonResponse<ReplaceProductPimCategoryResponseData, ReplaceProductPimCategoryResponseMeta>;
        export interface SearchProductPimCategoryRequest {
  sort?: string[];
  filter?: {
    id?: number;
    code?: string;
    product_category_id?: number;
  };
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
}


        export type SearchProductPimCategoryResponseData = ({
  /**
   * Идентификатор
   */
  id?: number;
} & {} & {
  product_category_id?: number | null;
  /**
   * Код категории в ПИМе
   */
  code?: string;
  filters?: ({} & {
    /**
     * Код
     */
    code?: string;
    /**
     * Значение
     */
    value?: string;
  })[];
} & {
  filters?: ({
    /**
     * Идентификатор
     */
    id?: number;
  } & {
    /**
     * Код
     */
    code?: string;
    /**
     * Значение
     */
    value?: string;
  })[];
})[];

        export type SearchProductPimCategoryResponseMeta = {
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

        export type SearchProductPimCategoryResponse = CommonResponse<SearchProductPimCategoryResponseData, SearchProductPimCategoryResponseMeta>;
        export type CreateNameplateRequest = {
  /**
   * Наименование шильдика
   */
  name?: string;
  /**
   * Код шильдика
   */
  code?: string;
  /**
   * Цвет фона
   */
  background_color?: string;
  /**
   * Цвет текста
   */
  text_color?: string;
  /**
   * Активность
   */
  is_active?: boolean;
} & {
  [k: string]: unknown;
};


        export type CreateNameplateResponseData = {
  /**
   * Идентификатор
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
  /**
   * Наименование шильдика
   */
  name?: string;
  /**
   * Код шильдика
   */
  code?: string;
  /**
   * Цвет фона
   */
  background_color?: string;
  /**
   * Цвет текста
   */
  text_color?: string;
  /**
   * Активность
   */
  is_active?: boolean;
} & {
  [k: string]: unknown;
};

        export type CreateNameplateResponseMeta = {};

        export type CreateNameplateResponse = CommonResponse<CreateNameplateResponseData, CreateNameplateResponseMeta>;
        export type PatchNameplateRequest = {
  /**
   * Наименование шильдика
   */
  name?: string;
  /**
   * Код шильдика
   */
  code?: string;
  /**
   * Цвет фона
   */
  background_color?: string;
  /**
   * Цвет текста
   */
  text_color?: string;
  /**
   * Активность
   */
  is_active?: boolean;
};


        export type PatchNameplateResponseData = {
  /**
   * Идентификатор
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
  /**
   * Наименование шильдика
   */
  name?: string;
  /**
   * Код шильдика
   */
  code?: string;
  /**
   * Цвет фона
   */
  background_color?: string;
  /**
   * Цвет текста
   */
  text_color?: string;
  /**
   * Активность
   */
  is_active?: boolean;
} & {
  [k: string]: unknown;
};

        export type PatchNameplateResponseMeta = {};

        export type PatchNameplateResponse = CommonResponse<PatchNameplateResponseData, PatchNameplateResponseMeta>;
        export interface SearchNameplatesRequest {
  sort?: string[];
  filter?: {
    /**
     * Идентификатор(ы) шильдика
     */
    id?: number;
    /**
     * Идентификатор(ы) продукта
     */
    product_id?: number;
    /**
     * Название или часть названия шильдика
     */
    name_like?: string;
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
}


        export type SearchNameplatesResponseData = ({
  /**
   * Идентификатор
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
  /**
   * Наименование шильдика
   */
  name?: string;
  /**
   * Код шильдика
   */
  code?: string;
  /**
   * Цвет фона
   */
  background_color?: string;
  /**
   * Цвет текста
   */
  text_color?: string;
  /**
   * Активность
   */
  is_active?: boolean;
} & {
  [k: string]: unknown;
})[];

        export type SearchNameplatesResponseMeta = {
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

        export type SearchNameplatesResponse = CommonResponse<SearchNameplatesResponseData, SearchNameplatesResponseMeta>;
        export interface SearchNameplateProductsRequest {
  sort?: string[];
  filter?: {};
  include?: "product"[];
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
}


        export type SearchNameplateProductsResponseData = ({
  /**
   * Идентификатор
   */
  id: number;
  /**
   * Идентификатор шильдика
   */
  nameplate_id: number;
  /**
   * Идентификатор товара
   */
  product_id: number;
  /**
   * Дата создания
   */
  created_at: string;
  /**
   * Дата обновления
   */
  updated_at: string;
} & {
  product?: {
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
})[];

        export type SearchNameplateProductsResponseMeta = {
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

        export type SearchNameplateProductsResponse = CommonResponse<SearchNameplateProductsResponseData, SearchNameplateProductsResponseMeta>;
        