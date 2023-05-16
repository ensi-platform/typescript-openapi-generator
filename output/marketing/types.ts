import { CommonResponse } from "@api/common/types";
import { ErrorResponse } from "@api/commonTypes/errors";
import { EmptyDataResponse } from "@api/commonTypes/index";
import { GetResourceMetaResponse } from "@api/commonTypes/resource-meta";

export type DeletePromoCodeRequest = { id: number | string };

export type DeletePromoCodeResponse = EmptyDataResponse | ErrorResponse;

export type GetPromoCodesMetaResponse = GetResourceMetaResponse | ErrorResponse;

export type GetPromoCodeStatusesResponse = ErrorResponse;
export type DeleteDiscountRequest = { id: number | string };

export type DeleteDiscountResponse = EmptyDataResponse | ErrorResponse;

export type GetDiscountsMetaResponse = GetResourceMetaResponse | ErrorResponse;

export type GetDiscountStatusesResponse = ErrorResponse;

export type GetDiscountTypesResponse = ErrorResponse;

export type GetDiscountValueTypesResponse = ErrorResponse;

export type GetDiscountProductsMetaResponse = GetResourceMetaResponse | ErrorResponse;
export type MassDiscountsStatusUpdateRequest = {
  ids: number[];
} & {
  /**
   * Статус скидки из DiscountStatusEnum
   */
  status?: number;
};

export type MassDiscountsStatusUpdateResponse = EmptyDataResponse | ErrorResponse;
export interface PatchDiscountProductsRequest {
  /**
   * Обновление только заданных продуктов в скидке
   */
  products?: ({
    /**
     * Идентификатор товара
     */
    product_id?: number;
  } & {})[];
}

export type PatchDiscountProductsResponse = EmptyDataResponse | ErrorResponse;
export interface DeleteDiscountProductsRequest {
  /**
   * Удаление только заданных в запросе продуктов
   */
  ids: number[];
}

export type DeleteDiscountProductsResponse = EmptyDataResponse | ErrorResponse;


        export type GetPromoCodeResponseData = {
  /**
   * Идентификатор
   */
  id: number;
  /**
   * Количество использований промокода
   */
  current_counter?: number | null;
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
   * статус промокода из PromoCodeStatusEnum
   */
  status?: number;
  /**
   * Название промокода
   */
  name?: string;
  /**
   * Код
   */
  code?: string;
  counter?: number | null;
  start_date?: string | null;
  end_date?: string | null;
  /**
   * ID скидки
   */
  discount_id?: number;
} & {
  [k: string]: unknown;
} & {
  discount?: {
    /**
     * Идентификатор
     */
    id: number;
    /**
     * Дата создания скидки
     */
    created_at: string;
    /**
     * Дата обновления скидки
     */
    updated_at: string;
  } & {
    /**
     * Тип скидки из DiscountTypeEnum
     */
    type: number;
  } & {
    /**
     * Наименование скидки
     */
    name?: string;
    /**
     * Тип значения скидки из DiscountValueTypeEnum
     */
    value_type?: number;
    /**
     * Размер скидки
     */
    value?: number;
    /**
     * Статус скидки из DiscountStatusEnum
     */
    status?: number;
    start_date?: string | null;
    end_date?: string | null;
    /**
     * Скидка действительна только по промокоду
     */
    promo_code_only?: boolean;
  } & {} & {
    products?: ({
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
       * Идентификатор скидки
       */
      discount_id?: number;
    } & {
      /**
       * Идентификатор товара
       */
      product_id?: number;
    } & {} & {} & {
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
  };
};

        export type GetPromoCodeResponseMeta = {};

        export type GetPromoCodeResponse = CommonResponse<GetPromoCodeResponseData, GetPromoCodeResponseMeta>;
        


        export type GetDiscountResponseData = {
  /**
   * Идентификатор
   */
  id: number;
  /**
   * Дата создания скидки
   */
  created_at: string;
  /**
   * Дата обновления скидки
   */
  updated_at: string;
} & {
  /**
   * Тип скидки из DiscountTypeEnum
   */
  type: number;
} & {
  /**
   * Наименование скидки
   */
  name?: string;
  /**
   * Тип значения скидки из DiscountValueTypeEnum
   */
  value_type?: number;
  /**
   * Размер скидки
   */
  value?: number;
  /**
   * Статус скидки из DiscountStatusEnum
   */
  status?: number;
  start_date?: string | null;
  end_date?: string | null;
  /**
   * Скидка действительна только по промокоду
   */
  promo_code_only?: boolean;
} & {} & {
  products?: ({
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
     * Идентификатор скидки
     */
    discount_id?: number;
  } & {
    /**
     * Идентификатор товара
     */
    product_id?: number;
  } & {} & {} & {
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
};

        export type GetDiscountResponseMeta = {};

        export type GetDiscountResponse = CommonResponse<GetDiscountResponseData, GetDiscountResponseMeta>;
        


        export type GetDiscountProductResponseData = {
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
   * Идентификатор скидки
   */
  discount_id?: number;
} & {
  /**
   * Идентификатор товара
   */
  product_id?: number;
} & {} & {
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
};

        export type GetDiscountProductResponseMeta = {};

        export type GetDiscountProductResponse = CommonResponse<GetDiscountProductResponseData, GetDiscountProductResponseMeta>;
        export type CreatePromoCodeRequest = {
  /**
   * статус промокода из PromoCodeStatusEnum
   */
  status?: number;
  /**
   * Название промокода
   */
  name?: string;
  /**
   * Код
   */
  code?: string;
  /**
   * Ограничение на количество использований промокода
   */
  counter?: number | null;
  /**
   * Дата начала действия промокода
   */
  start_date?: string | null;
  /**
   * Дата окончания действия промокода
   */
  end_date?: string | null;
  /**
   * ID скидки
   */
  discount_id?: number;
} & {
  [k: string]: unknown;
};


        export type CreatePromoCodeResponseData = {
  /**
   * Идентификатор
   */
  id: number;
  current_counter?: number | null;
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
   * статус промокода из PromoCodeStatusEnum
   */
  status?: number;
  /**
   * Название промокода
   */
  name?: string;
  /**
   * Код
   */
  code?: string;
  counter?: number | null;
  start_date?: string | null;
  end_date?: string | null;
  /**
   * ID скидки
   */
  discount_id?: number;
} & {
  [k: string]: unknown;
} & {
  discount?: {
    /**
     * Идентификатор
     */
    id: number;
    /**
     * Дата создания скидки
     */
    created_at: string;
    /**
     * Дата обновления скидки
     */
    updated_at: string;
  } & {
    /**
     * Тип скидки из DiscountTypeEnum
     */
    type: number;
  } & {
    /**
     * Наименование скидки
     */
    name?: string;
    /**
     * Тип значения скидки из DiscountValueTypeEnum
     */
    value_type?: number;
    /**
     * Размер скидки
     */
    value?: number;
    /**
     * Статус скидки из DiscountStatusEnum
     */
    status?: number;
    start_date?: string | null;
    end_date?: string | null;
    /**
     * Скидка действительна только по промокоду
     */
    promo_code_only?: boolean;
  } & {} & {
    products?: ({
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
       * Идентификатор скидки
       */
      discount_id?: number;
    } & {
      /**
       * Идентификатор товара
       */
      product_id?: number;
    } & {} & {} & {
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
  };
};

        export type CreatePromoCodeResponseMeta = {};

        export type CreatePromoCodeResponse = CommonResponse<CreatePromoCodeResponseData, CreatePromoCodeResponseMeta>;
        export type PatchPromoCodeRequest = {
  /**
   * статус промокода из PromoCodeStatusEnum
   */
  status?: number;
  /**
   * Название промокода
   */
  name?: string;
  /**
   * Код
   */
  code?: string;
  counter?: number | null;
  start_date?: string | null;
  end_date?: string | null;
  /**
   * ID скидки
   */
  discount_id?: number;
};


        export type PatchPromoCodeResponseData = {
  /**
   * Идентификатор
   */
  id: number;
  current_counter?: number | null;
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
   * статус промокода из PromoCodeStatusEnum
   */
  status?: number;
  /**
   * Название промокода
   */
  name?: string;
  /**
   * Код
   */
  code?: string;
  counter?: number | null;
  start_date?: string | null;
  end_date?: string | null;
  /**
   * ID скидки
   */
  discount_id?: number;
} & {
  [k: string]: unknown;
} & {
  discount?: {
    /**
     * Идентификатор
     */
    id: number;
    /**
     * Дата создания скидки
     */
    created_at: string;
    /**
     * Дата обновления скидки
     */
    updated_at: string;
  } & {
    /**
     * Тип скидки из DiscountTypeEnum
     */
    type: number;
  } & {
    /**
     * Наименование скидки
     */
    name?: string;
    /**
     * Тип значения скидки из DiscountValueTypeEnum
     */
    value_type?: number;
    /**
     * Размер скидки
     */
    value?: number;
    /**
     * Статус скидки из DiscountStatusEnum
     */
    status?: number;
    start_date?: string | null;
    end_date?: string | null;
    /**
     * Скидка действительна только по промокоду
     */
    promo_code_only?: boolean;
  } & {} & {
    products?: ({
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
       * Идентификатор скидки
       */
      discount_id?: number;
    } & {
      /**
       * Идентификатор товара
       */
      product_id?: number;
    } & {} & {} & {
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
  };
};

        export type PatchPromoCodeResponseMeta = {};

        export type PatchPromoCodeResponse = CommonResponse<PatchPromoCodeResponseData, PatchPromoCodeResponseMeta>;
        export interface SearchPromoCodesRequest {
  sort?: string[];
  filter?: {};
  include?: ("discount" | "discount.products" | "discount.products.product")[];
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


        export type SearchPromoCodesResponseData = ({
  /**
   * Идентификатор
   */
  id: number;
  current_counter?: number | null;
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
   * статус промокода из PromoCodeStatusEnum
   */
  status?: number;
  /**
   * Название промокода
   */
  name?: string;
  /**
   * Код
   */
  code?: string;
  counter?: number | null;
  start_date?: string | null;
  end_date?: string | null;
  /**
   * ID скидки
   */
  discount_id?: number;
} & {
  [k: string]: unknown;
} & {
  discount?: {
    /**
     * Идентификатор
     */
    id: number;
    /**
     * Дата создания скидки
     */
    created_at: string;
    /**
     * Дата обновления скидки
     */
    updated_at: string;
  } & {
    /**
     * Тип скидки из DiscountTypeEnum
     */
    type: number;
  } & {
    /**
     * Наименование скидки
     */
    name?: string;
    /**
     * Тип значения скидки из DiscountValueTypeEnum
     */
    value_type?: number;
    /**
     * Размер скидки
     */
    value?: number;
    /**
     * Статус скидки из DiscountStatusEnum
     */
    status?: number;
    start_date?: string | null;
    end_date?: string | null;
    /**
     * Скидка действительна только по промокоду
     */
    promo_code_only?: boolean;
  } & {} & {
    products?: ({
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
       * Идентификатор скидки
       */
      discount_id?: number;
    } & {
      /**
       * Идентификатор товара
       */
      product_id?: number;
    } & {} & {} & {
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
  };
})[];

        export type SearchPromoCodesResponseMeta = {
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

        export type SearchPromoCodesResponse = CommonResponse<SearchPromoCodesResponseData, SearchPromoCodesResponseMeta>;
        export type CreateDiscountRequest = {
  /**
   * Тип скидки из DiscountTypeEnum
   */
  type: number;
} & {
  /**
   * Наименование скидки
   */
  name?: string;
  /**
   * Тип значения скидки из DiscountValueTypeEnum
   */
  value_type?: number;
  /**
   * Размер скидки
   */
  value?: number;
  /**
   * Статус скидки из DiscountStatusEnum
   */
  status?: number;
  /**
   * Дата начала действия скидки
   */
  start_date?: string | null;
  /**
   * Дата окончания действия скидки
   */
  end_date?: string | null;
  /**
   * Скидка действительна только по промокоду
   */
  promo_code_only?: boolean;
} & {} & {
  products?: ({
    /**
     * Идентификатор товара
     */
    product_id?: number;
  } & {})[];
};


        export type CreateDiscountResponseData = {
  /**
   * Идентификатор
   */
  id: number;
  /**
   * Дата создания скидки
   */
  created_at: string;
  /**
   * Дата обновления скидки
   */
  updated_at: string;
} & {
  /**
   * Тип скидки из DiscountTypeEnum
   */
  type: number;
} & {
  /**
   * Наименование скидки
   */
  name?: string;
  /**
   * Тип значения скидки из DiscountValueTypeEnum
   */
  value_type?: number;
  /**
   * Размер скидки
   */
  value?: number;
  /**
   * Статус скидки из DiscountStatusEnum
   */
  status?: number;
  start_date?: string | null;
  end_date?: string | null;
  /**
   * Скидка действительна только по промокоду
   */
  promo_code_only?: boolean;
} & {} & {
  products?: ({
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
     * Идентификатор скидки
     */
    discount_id?: number;
  } & {
    /**
     * Идентификатор товара
     */
    product_id?: number;
  } & {} & {} & {
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
};

        export type CreateDiscountResponseMeta = {};

        export type CreateDiscountResponse = CommonResponse<CreateDiscountResponseData, CreateDiscountResponseMeta>;
        export type PatchDiscountRequest = {
  /**
   * Наименование скидки
   */
  name?: string;
  /**
   * Тип значения скидки из DiscountValueTypeEnum
   */
  value_type?: number;
  /**
   * Размер скидки
   */
  value?: number;
  /**
   * Статус скидки из DiscountStatusEnum
   */
  status?: number;
  start_date?: string | null;
  end_date?: string | null;
  /**
   * Скидка действительна только по промокоду
   */
  promo_code_only?: boolean;
};


        export type PatchDiscountResponseData = {
  /**
   * Идентификатор
   */
  id: number;
  /**
   * Дата создания скидки
   */
  created_at: string;
  /**
   * Дата обновления скидки
   */
  updated_at: string;
} & {
  /**
   * Тип скидки из DiscountTypeEnum
   */
  type: number;
} & {
  /**
   * Наименование скидки
   */
  name?: string;
  /**
   * Тип значения скидки из DiscountValueTypeEnum
   */
  value_type?: number;
  /**
   * Размер скидки
   */
  value?: number;
  /**
   * Статус скидки из DiscountStatusEnum
   */
  status?: number;
  start_date?: string | null;
  end_date?: string | null;
  /**
   * Скидка действительна только по промокоду
   */
  promo_code_only?: boolean;
} & {} & {
  products?: ({
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
     * Идентификатор скидки
     */
    discount_id?: number;
  } & {
    /**
     * Идентификатор товара
     */
    product_id?: number;
  } & {} & {} & {
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
};

        export type PatchDiscountResponseMeta = {};

        export type PatchDiscountResponse = CommonResponse<PatchDiscountResponseData, PatchDiscountResponseMeta>;
        export interface SearchDiscountsRequest {
  sort?: string[];
  filter?: {};
  include?: ("products" | "products.product")[];
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


        export type SearchDiscountsResponseData = ({
  /**
   * Идентификатор
   */
  id: number;
  /**
   * Дата создания скидки
   */
  created_at: string;
  /**
   * Дата обновления скидки
   */
  updated_at: string;
} & {
  /**
   * Тип скидки из DiscountTypeEnum
   */
  type: number;
} & {
  /**
   * Наименование скидки
   */
  name?: string;
  /**
   * Тип значения скидки из DiscountValueTypeEnum
   */
  value_type?: number;
  /**
   * Размер скидки
   */
  value?: number;
  /**
   * Статус скидки из DiscountStatusEnum
   */
  status?: number;
  start_date?: string | null;
  end_date?: string | null;
  /**
   * Скидка действительна только по промокоду
   */
  promo_code_only?: boolean;
} & {} & {
  products?: ({
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
     * Идентификатор скидки
     */
    discount_id?: number;
  } & {
    /**
     * Идентификатор товара
     */
    product_id?: number;
  } & {} & {} & {
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
})[];

        export type SearchDiscountsResponseMeta = {
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

        export type SearchDiscountsResponse = CommonResponse<SearchDiscountsResponseData, SearchDiscountsResponseMeta>;
        export interface SearchDiscountProductsRequest {
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


        export type SearchDiscountProductsResponseData = ({
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
   * Идентификатор скидки
   */
  discount_id?: number;
} & {
  /**
   * Идентификатор товара
   */
  product_id?: number;
} & {} & {} & {
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

        export type SearchDiscountProductsResponseMeta = {
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

        export type SearchDiscountProductsResponse = CommonResponse<SearchDiscountProductsResponseData, SearchDiscountProductsResponseMeta>;
        