import { CommonResponse } from "@api/common/types";
import { GetResourceMetaResponse } from "@api/commonTypes/resource-meta";
import { ErrorResponse } from "@api/commonTypes/errors";
import { EmptyDataResponse } from "@api/commonTypes/index";



export type GetOrderMetaResponse = GetResourceMetaResponse | ErrorResponse;
export type AttachOrderFileRequest = {
                        formData: FormData;
                        id: number | string;
                    }

export type AttachOrderFileResponse = ErrorResponse;

export type GetOrderStatusesResponse = ErrorResponse;

export type GetOrderSourcesResponse = ErrorResponse;

export type GetPaymentMethodsResponse = ErrorResponse;

export type GetPaymentStatusesResponse = ErrorResponse;

export type GetDeliveryStatusesResponse = ErrorResponse;

export type GetShipmentStatusesResponse = ErrorResponse;

export type GetRefundStatusesResponse = ErrorResponse;

export type GetRefundReasonsResponse = ErrorResponse;

export type SearchOmsSettingsResponse = ErrorResponse;

export type GetOmsSettingsMetaResponse = GetResourceMetaResponse | ErrorResponse;

export type SearchBasketsSettingsResponse = ErrorResponse;

export type GetBasketsSettingsResponse = GetResourceMetaResponse | ErrorResponse;

export type GetRefundsMetaResponse = GetResourceMetaResponse | ErrorResponse;
export interface DeleteOrderFilesRequest {
  file_ids?: number[];
}

export type DeleteOrderFilesResponse = EmptyDataResponse | ErrorResponse;
export interface PatchOmsSettingsRequest {
  settings?: ({
    /**
     * ID параметра
     */
    id?: number;
  } & {
    /**
     * значение параметра
     */
    value?: string;
    /**
     * название параметра
     */
    name?: string;
  })[];
}

export type PatchOmsSettingsResponse = ErrorResponse;
export interface PatchBasketsSettingsRequest {
  settings?: ({
    /**
     * ID параметра
     */
    id?: number;
  } & {
    /**
     * значение параметра
     */
    value?: string;
    /**
     * название параметра
     */
    name?: string;
  })[];
}

export type PatchBasketsSettingsResponse = ErrorResponse;
export interface DeleteRefundFilesRequest {
  file_ids?: number[];
}

export type DeleteRefundFilesResponse = EmptyDataResponse | ErrorResponse;


        export type GetOrderResponseData = {
  /**
   * ID заказа
   */
  id?: number;
  /**
   * номер заказа
   */
  number?: string;
  /**
   * id покупателя
   */
  customer_id?: number;
  /**
   * email покупателя
   */
  customer_email?: string;
  /**
   * стоимость (без учета скидки) (рассчитывается автоматически) в коп.
   */
  cost?: number;
  /**
   * стоимость (с учетом скидок) (рассчитывается автоматически) в коп.
   */
  price?: number;
  /**
   * списано бонусов
   */
  spent_bonus?: number;
  /**
   * Использованный промокод
   */
  promo_code?: string | null;
  /**
   * начислено бонусов
   */
  added_bonus?: number;
  /**
   * источник взаимодействия из OrdersOrderSourceEnum
   */
  source?: number;
  /**
   * дата установки статуса заказа
   */
  status_at?: string | null;
  /**
   * статус оплаты из OrdersPaymentStatusEnum
   */
  payment_status?: number;
  /**
   * дата установки статуса оплаты
   */
  payment_status_at?: string | null;
  /**
   * Дата оплаты
   */
  payed_at?: string | null;
  /**
   * Дата, до которой нужно провести оплату
   */
  payment_expires_at?: string | null;
  /**
   * метод оплаты из PaymentMethodEnum
   */
  payment_method?: number;
  /**
   * система оплаты из PaymentSystemEnum
   */
  payment_system?: number;
  /**
   * ID оплаты во внешней системе
   */
  payment_external_id?: string | null;
  /**
   * дата установки флага проблемного заказа
   */
  is_problem_at?: string | null;
  /**
   * флаг, что заказ просроченный
   */
  is_expired?: boolean;
  /**
   * дата установки флага просроченного заказа
   */
  is_expired_at?: string | null;
  /**
   * флаг, что заказ возвращен
   */
  is_return?: boolean;
  /**
   * дата установки флага возвращенного заказа
   */
  is_return_at?: string | null;
  /**
   * флаг, что заказ частично возвращен
   */
  is_partial_return?: boolean;
  /**
   * дата установки флага частично возвращенного заказа
   */
  is_partial_return_at?: string | null;
  /**
   * дата создания заказа
   */
  created_at?: string | null;
  /**
   * дата обновления заказа
   */
  updated_at?: string | null;
} & {
  responsible_id?: number | null;
  /**
   * статус заказа из OrdersOrderStatusEnum
   */
  status?: number;
  client_comment?: string | null;
  receiver_name?: string | null;
  receiver_phone?: string | null;
  receiver_email?: string | null;
  is_problem?: boolean | null;
  problem_comment?: string | null;
} & {
  /**
   * служба доставки
   */
  delivery_service?: number;
  /**
   * метод доставки
   */
  delivery_method?: number;
  /**
   * стоимость доставки (без учета скидки) в коп.
   */
  delivery_cost?: number;
  /**
   * стоимость доставки (с учетом скидки) в коп.
   */
  delivery_price?: number;
  delivery_tariff_id?: number | null;
  delivery_point_id?: number | null;
  delivery_address?: {} | null;
  delivery_comment?: string | null;
} & {
  deliveries?: ({
    /**
     * ID отправления
     */
    id?: number;
    /**
     * ID заказа
     */
    order_id?: number;
    /**
     * номер отправления
     */
    number?: string;
    /**
     * статус отправления из OrdersDeliveryStatusEnum
     */
    status?: number;
    /**
     * дата установки статуса
     */
    status_at?: string | null;
    /**
     * стоимость доставки, полученная от службы доставки (не влияет на общую стоимость доставки по заказу), коп.
     */
    cost?: number;
    /**
     * ширина (мм)
     */
    width?: number;
    /**
     * высота (мм)
     */
    height?: number;
    /**
     * длина (мм)
     */
    length?: number;
    /**
     * вес (кг)
     */
    weight?: number;
    /**
     * дата создания
     */
    created_at?: string | null;
    /**
     * дата обновления
     */
    updated_at?: string | null;
  } & {
    date?: string | null;
    timeslot?: {} | null;
  } & {
    shipments?: ({
      /**
       * идентификатор
       */
      id?: number;
      /**
       * номер отгрузки
       */
      number?: string;
      /**
       * ид отправления
       */
      delivery_id?: number;
      /**
       * ид мерчанта
       */
      seller_id?: number;
      /**
       * ид склада
       */
      store_id?: number;
      /**
       * дата установки статуса
       */
      status_at?: string;
      /**
       * сумма товаров отгрузки (расчитывается автоматически), коп.
       */
      cost?: number;
      /**
       * ширина (мм)
       */
      width?: number;
      /**
       * высота (мм)
       */
      height?: number;
      /**
       * длина (мм)
       */
      length?: number;
      /**
       * вес (кг)
       */
      weight?: number;
      /**
       * дата создания
       */
      created_at?: string;
      /**
       * дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * статус отгрузки из OrdersShipmentStatusEnum
       */
      status?: number;
    } & {
      /**
       * Объект типа Delivery
       */
      delivery?: {};
      order_items?: ({
        /**
         * id элемента корзины
         */
        id?: number;
        /**
         * ID заказа
         */
        order_id?: number;
        /**
         * ID отгрузки
         */
        shipment_id?: number;
        /**
         * ID оффера
         */
        offer_id?: number;
        /**
         * Название товара
         */
        name?: string;
        /**
         * Кол-во товара
         */
        qty?: number;
        /**
         * Цена товара (цена * qty - скидки), коп.
         */
        price?: number;
        /**
         * Цена единичного товара (в коп.)
         */
        price_per_one?: number;
        /**
         * Цена товара до скидок (цена * qty), коп.
         */
        cost?: number;
        /**
         * Цена единичного товара до скидок (в коп.)
         */
        cost_per_one?: number;
        /**
         * Информация о товаре
         */
        product_data?: {
          /**
           * Вес нетто товара (кг)
           */
          weight?: number;
          /**
           * Вес брутто товара (кг)
           */
          weight_gross?: number;
          /**
           * Ширина товара (мм)
           */
          width?: number;
          /**
           * Высота товара (мм)
           */
          height?: number;
          /**
           * Длина товара (мм)
           */
          length?: number;
          storage_address?: string | null;
          barcode?: string | null;
        };
        refund_qty?: number | null;
        /**
         * дата создания
         */
        created_at?: string;
        /**
         * дата обновления
         */
        updated_at?: string;
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
        stock?: {
          /**
           * Идентификатор стока
           */
          id?: number;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * ID товарного предложения
           */
          offer_id?: number;
          /**
           * Идентификатор товара
           */
          product_id?: number;
          /**
           * Количество товара для резервирования
           */
          qty?: number;
        } & {};
      })[];
      store?: {
        /**
         * Идентификатор склада
         */
        id?: number;
        /**
         * Время создания склада
         */
        created_at?: string;
        /**
         * Время обновления склада
         */
        updated_at?: string;
      } & {
        /**
         * ID продавца
         */
        seller_id?: number;
        /**
         * ID склада в системе продавца
         */
        xml_id?: string;
        /**
         * Флаг активности склада
         */
        active?: boolean;
        /**
         * Название
         */
        name?: string;
        /**
         * Адрес
         */
        address?: {
          /**
           * Адрес одной строкой
           */
          address_string?: string;
          /**
           * Код страны
           */
          country_code?: string;
          /**
           * Почтовый индекс
           */
          post_index?: string;
          /**
           * Регион
           */
          region?: string;
          /**
           * ФИАС ID региона
           */
          region_guid?: string;
          /**
           * Район в регионе
           */
          area?: string;
          /**
           * ФИАС ID района в регионе
           */
          area_guid?: string;
          /**
           * Город/населенный пункт
           */
          city?: string;
          /**
           * ФИАС ID города/населенного пункта
           */
          city_guid?: string;
          /**
           * Улица
           */
          street?: string;
          /**
           * Дом
           */
          house?: string;
          /**
           * Строение/корпус
           */
          block?: string;
          /**
           * Квартира/офис
           */
          flat?: string;
          /**
           * Подъезд
           */
          porch?: string;
          /**
           * Этаж
           */
          floor?: string;
          /**
           * Домофон
           */
          intercom?: string;
          /**
           * Комментарий к адресу
           */
          comment?: string;
          /**
           * координаты: широта
           */
          geo_lat?: string;
          /**
           * координаты: долгота
           */
          geo_lon?: string;
        };
        /**
         * Часовой пояс
         */
        timezone?: string;
      } & {
        workings?: ({
          /**
           * Идентификатор записи о времени работы
           */
          id?: number;
          /**
           * Время создания записи о времени работы
           */
          created_at?: string;
          /**
           * Время обновления записи о времени работы
           */
          updated_at?: string;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * Флаг активности дня работы склада
           */
          active?: boolean;
          /**
           * День недели (1-7)
           */
          day?: number;
          /**
           * Время начала работы склада (00:00)
           */
          working_start_time?: string;
          /**
           * Время конца работы склада (00:00)
           */
          working_end_time?: string;
        })[];
        contacts?: ({
          /**
           * Идентификатор контактного лица для склада
           */
          id?: number;
          /**
           * Время создания контактного лица для склада
           */
          created_at?: string;
          /**
           * Время обновления контактного лица для склада
           */
          updated_at?: string;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * Имя контактного лица
           */
          name?: string;
          /**
           * Телефон контактного лица
           */
          phone?: string;
          /**
           * Email контактного лица
           */
          email?: string;
        })[];
        pickup_times?: ({
          /**
           * Идентификатор записи о времени отгрузки
           */
          id?: number;
          /**
           * Время создания записи о времени отгрузки
           */
          created_at?: string;
          /**
           * Время обновления записи о времени отгрузки
           */
          updated_at?: string;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * День недели (1-7)
           */
          day?: number;
          /**
           * Код времени отгрузки у службы доставки
           */
          pickup_time_code?: string;
          /**
           * Время начала отгрузки
           */
          pickup_time_start?: string;
          /**
           * Время окончания отгрузки
           */
          pickup_time_end?: string;
          /**
           * Время выгрузки информации о грузе в службу доставки
           */
          cargo_export_time?: string;
          /**
           * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
           */
          delivery_service?: number;
        })[];
      };
      seller?: {
        /**
         * Идентификатор продавца
         */
        id?: number;
        /**
         * Время изменения статуса продавца
         */
        status_at?: string;
        /**
         * Время создания продавца
         */
        created_at?: string;
        /**
         * Время обновления продавца
         */
        updated_at?: string;
      } & {
        /**
         * Юридическое наименование организации
         */
        legal_name?: string;
        /**
         * Внешний код
         */
        external_id?: string;
        /**
         * ИНН
         */
        inn?: string;
        /**
         * КПП
         */
        kpp?: string;
        /**
         * Юр. адрес
         */
        legal_address?: string;
        /**
         * Фактический адрес
         */
        fact_address?: string;
        /**
         * Номер банковского счета
         */
        payment_account?: string;
        /**
         * Наименование банка
         */
        bank?: string;
        /**
         * Юридический адрес банка
         */
        bank_address?: string;
        /**
         * БИК банка
         */
        bank_bik?: string;
        /**
         * Статус продавца. Расшифровка значений:
         *   * `1` - Продавец недооформлен, не дозаполнил информацию
         *   * `2` - Продавец активен
         *   * `3` - Продавец заблокирован
         *
         */
        status?: 1 | 2 | 3;
        /**
         * ID менеджера
         */
        manager_id?: number;
        /**
         * Номер корреспондентского счета банка
         */
        correspondent_account?: string;
        /**
         * Адреса складов отгрузки
         */
        storage_address?: string;
        /**
         * Сайт компании
         */
        site?: string;
        /**
         * Подтверждение о возможности работы с Платформой с использованием автоматических механизмов интеграции
         */
        can_integration?: boolean;
        /**
         * Бренды и товары, которыми торгует продавец
         */
        sale_info?: string;
        /**
         * Город продавца
         */
        city?: string;
      } & {
        owner?: {
          /**
           * Идентификатор пользователя продавца
           */
          id?: number;
          /**
           * Полное ФИО
           */
          full_name?: string;
          /**
           * Сокращенное ФИО
           */
          short_name?: string;
          /**
           * Дата регистрации
           */
          created_at?: string;
          /**
           * Дата обновления
           */
          updated_at?: string;
        } & {
          /**
           * ID продавца
           */
          seller_id?: number;
          /**
           * Активен
           */
          active?: boolean;
          /**
           * Логин
           */
          login?: string;
          last_name?: string | null;
          first_name?: string | null;
          middle_name?: string | null;
          /**
           * Email
           */
          email?: string;
          /**
           * Телефон
           */
          phone?: string;
          /**
           * Временная зона
           */
          timezone?: string;
        } & {
          /**
           * Роли пользователя продавца. Объект, в котором ключ - ID роли (см. UnitsSellerUserRoleEnum)
           */
          roles?: ({
            /**
             * ID роли
             */
            id?: number;
          } & {
            /**
             * Название роли
             */
            title?: string;
            expires?: string | null;
          })[];
        };
        manager?: {
          /**
           * Идентификатор admin-пользователя
           */
          id?: number;
          /**
           * Полное ФИО
           */
          full_name?: string;
          /**
           * Сокращенное ФИО
           */
          short_name?: string;
          /**
           * Дата регистрации
           */
          created_at?: string;
          /**
           * Дата обновления
           */
          updated_at?: string;
        } & {
          /**
           * Активен
           */
          active?: boolean;
          /**
           * Логин
           */
          login?: string;
          last_name?: string | null;
          first_name?: string | null;
          middle_name?: string | null;
          /**
           * Email
           */
          email?: string;
          /**
           * Телефон
           */
          phone?: string;
          /**
           * Временная зона
           */
          timezone?: string;
        } & {
          /**
           * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
           */
          roles?: ({
            /**
             * ID роли
             */
            id?: number;
          } & {
            /**
             * Название роли
             */
            title?: string;
            expires?: string | null;
          })[];
        };
      };
    })[];
  })[];
  customer?: {
    /**
     * Идентификатор покупателя
     */
    id?: number;
    /**
     * Ссылка на аватар
     */
    avatar?: string | null;
    /**
     * Дата и время запроса на удаление персональных данных
     */
    delete_request?: string | null;
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
     * Идентификатор пользователя
     */
    user_id?: number | null;
    /**
     * Идентификатор статуса пользователя
     */
    status_id?: number | null;
    /**
     * Идентификатор менеджера
     */
    manager_id?: number | null;
    /**
     * Идентификатор пользователя в YandexMetric
     */
    yandex_metric_id?: string | null;
    /**
     * Идентификатор пользователя в GoogleAnalytics
     */
    google_analytics_id?: string | null;
    /**
     * Массив идентификаторов свойств клиента из Attributes
     */
    attribute_ids?: number[] | null;
    /**
     * Активность пользователя
     */
    active?: boolean;
    /**
     * Email
     */
    email?: string | null;
    /**
     * Телефон
     */
    phone?: string;
    /**
     * Фамилия
     */
    last_name?: string | null;
    /**
     * Имя
     */
    first_name?: string | null;
    /**
     * Отчество
     */
    middle_name?: string | null;
    /**
     * Пол из CustomerGenderEnum
     */
    gender?: number | null;
    /**
     * Пользователь создан администратором
     */
    create_by_admin?: boolean;
    /**
     * Город клиента
     */
    city?: string | null;
    /**
     * День рождения
     */
    birthday?: string | null;
    /**
     * Дата последней авторизации
     */
    last_visit_date?: string | null;
    /**
     * Коментарий к статусу клиента
     */
    comment_status?: string | null;
    /**
     * Временная зона
     */
    timezone?: string;
    /**
     * Удалены ли данные пользователя
     */
    is_deleted?: boolean;
    /**
     * Ошибки при удалении персональных данных пользователя
     */
    error_delete?: string | null;
  } & {
    addresses?: ({
      /**
       * Идентификатор адреса
       */
      id?: number;
    } & {
      /**
       * Идентификатор клиента
       */
      customer_id?: number;
      /**
       * Строка с полным описанием адреса
       */
      address_string?: string;
      /**
       * Является адресом по-умолчанию
       */
      default?: boolean;
      /**
       * Почтовый индекс
       */
      post_index?: string | null;
      /**
       * Код страны
       */
      country_code?: string | null;
      /**
       * Регион
       */
      region?: string | null;
      /**
       * Код ФИАС региона
       */
      region_guid?: string | null;
      /**
       * Район
       */
      area?: string | null;
      /**
       * Код ФИАС района
       */
      area_guid?: string | null;
      /**
       * Город
       */
      city?: string | null;
      /**
       * Код ФИАС города
       */
      city_guid?: string;
      /**
       * Улица
       */
      street?: string | null;
      /**
       * Дом
       */
      house?: string | null;
      /**
       * Строение
       */
      block?: string | null;
      /**
       * Подъезд
       */
      porch?: string | null;
      /**
       * Домофон
       */
      intercom?: string | null;
      /**
       * Этаж
       */
      floor?: string | null;
      /**
       * Квартира
       */
      flat?: string | null;
      /**
       * Комментарий к адресу
       */
      comment?: string | null;
      /**
       * Ширина
       */
      geo_lat?: number | null;
      /**
       * Долгота
       */
      geo_lon?: number | null;
    })[];
    status?: {
      /**
       * Идентификатор статуса
       */
      id?: number;
    } & {
      /**
       * Название статуса
       */
      name?: string;
    };
    attributes?: ({
      /**
       * Идентификатор свойства
       */
      id?: number;
    } & {
      /**
       * Название свойства
       */
      name?: string;
    })[];
    user?: {
      /**
       * Идентификатор пользователя
       */
      id?: number;
      /**
       * Дата регистрации
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * Активен
       */
      active?: boolean;
      /**
       * Логин
       */
      login?: string;
    };
  } & {};
  responsible?: {
    /**
     * Идентификатор admin-пользователя
     */
    id?: number;
    /**
     * Полное ФИО
     */
    full_name?: string;
    /**
     * Сокращенное ФИО
     */
    short_name?: string;
    /**
     * Дата регистрации
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
  } & {
    /**
     * Активен
     */
    active?: boolean;
    /**
     * Логин
     */
    login?: string;
    last_name?: string | null;
    first_name?: string | null;
    middle_name?: string | null;
    /**
     * Email
     */
    email?: string;
    /**
     * Телефон
     */
    phone?: string;
    /**
     * Временная зона
     */
    timezone?: string;
  } & {
    /**
     * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
     */
    roles?: ({
      /**
       * ID роли
       */
      id?: number;
    } & {
      /**
       * Название роли
       */
      title?: string;
      expires?: string | null;
    })[];
  };
  files?: {
    /**
     * ID файла
     */
    id?: number;
    /**
     * ID заказа
     */
    order_id?: number;
    /**
     * Оригинальное название файла
     */
    original_name?: string;
    /**
     * Информация о файле в виде объекта. Для потребителя неважно какие внутри ключи
     */
    file?: {};
    /**
     * дата создания файла
     */
    created_at?: string;
    /**
     * дата обновления файла
     */
    updated_at?: string;
  }[];
};

        export type GetOrderResponseMeta = {};

        export type GetOrderResponse = CommonResponse<GetOrderResponseData, GetOrderResponseMeta>;
        


        export type GetRefundResponseData = {
  /**
   * идентификатор
   */
  id?: number;
  /**
   * сумма возврата, коп.
   */
  price?: number;
  /**
   * является заявкой на частичный возврат
   */
  is_partial?: boolean;
  files?: {
    /**
     * идентификатор
     */
    id?: number;
    /**
     * идентификатор заявки на возврат
     */
    refund_id?: number;
    /**
     * Оригинальное название файла
     */
    original_name?: string;
    /**
     * Информация о файле в виде объекта. Для потребителя неважно какие внутри ключи
     */
    file?: {};
    /**
     * дата загрузки файла
     */
    created_at?: string;
    /**
     * дата обновления файла
     */
    updated_at?: string;
  }[];
  /**
   * дата создания
   */
  created_at?: string;
  /**
   * дата обновления
   */
  updated_at?: string;
} & {
  /**
   * статус заявки на возврат из OrderRefundStatusEnum
   */
  status?: number;
  responsible_id?: number | null;
  rejection_comment?: string | null;
} & {
  /**
   * идентификатор заказа
   */
  order_id?: number;
  manager_id?: number | null;
  /**
   * источник взаимодействия (канал)
   */
  source?: number;
  /**
   * комментарий пользователя
   */
  user_comment?: string;
} & {
  order?: {
    /**
     * ID заказа
     */
    id?: number;
    /**
     * номер заказа
     */
    number?: string;
    /**
     * id покупателя
     */
    customer_id?: number;
    /**
     * email покупателя
     */
    customer_email?: string;
    /**
     * стоимость (без учета скидки) (рассчитывается автоматически) в коп.
     */
    cost?: number;
    /**
     * стоимость (с учетом скидок) (рассчитывается автоматически) в коп.
     */
    price?: number;
    /**
     * списано бонусов
     */
    spent_bonus?: number;
    promo_code?: string | null;
    /**
     * начислено бонусов
     */
    added_bonus?: number;
    /**
     * источник взаимодействия из OrdersOrderSourceEnum
     */
    source?: number;
    status_at?: string | null;
    /**
     * статус оплаты из OrdersPaymentStatusEnum
     */
    payment_status?: number;
    payment_status_at?: string | null;
    payed_at?: string | null;
    payment_expires_at?: string | null;
    /**
     * метод оплаты из PaymentMethodEnum
     */
    payment_method?: number;
    /**
     * система оплаты из PaymentSystemEnum
     */
    payment_system?: number;
    payment_external_id?: string | null;
    is_problem_at?: string | null;
    /**
     * флаг, что заказ просроченный
     */
    is_expired?: boolean;
    is_expired_at?: string | null;
    /**
     * флаг, что заказ возвращен
     */
    is_return?: boolean;
    is_return_at?: string | null;
    /**
     * флаг, что заказ частично возвращен
     */
    is_partial_return?: boolean;
    is_partial_return_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
  } & {
    responsible_id?: number | null;
    /**
     * статус заказа из OrdersOrderStatusEnum
     */
    status?: number;
    client_comment?: string | null;
    receiver_name?: string | null;
    receiver_phone?: string | null;
    receiver_email?: string | null;
    is_problem?: boolean | null;
    problem_comment?: string | null;
  } & {
    /**
     * служба доставки
     */
    delivery_service?: number;
    /**
     * метод доставки
     */
    delivery_method?: number;
    /**
     * стоимость доставки (без учета скидки) в коп.
     */
    delivery_cost?: number;
    /**
     * стоимость доставки (с учетом скидки) в коп.
     */
    delivery_price?: number;
    delivery_tariff_id?: number | null;
    delivery_point_id?: number | null;
    delivery_address?: {} | null;
    delivery_comment?: string | null;
  } & {
    deliveries?: ({
      /**
       * ID отправления
       */
      id?: number;
      /**
       * ID заказа
       */
      order_id?: number;
      /**
       * номер отправления
       */
      number?: string;
      /**
       * статус отправления из OrdersDeliveryStatusEnum
       */
      status?: number;
      status_at?: string | null;
      /**
       * стоимость доставки, полученная от службы доставки (не влияет на общую стоимость доставки по заказу), коп.
       */
      cost?: number;
      /**
       * ширина (мм)
       */
      width?: number;
      /**
       * высота (мм)
       */
      height?: number;
      /**
       * длина (мм)
       */
      length?: number;
      /**
       * вес (кг)
       */
      weight?: number;
      created_at?: string | null;
      updated_at?: string | null;
    } & {
      date?: string | null;
      timeslot?: {} | null;
    } & {
      shipments?: ({
        /**
         * идентификатор
         */
        id?: number;
        /**
         * номер отгрузки
         */
        number?: string;
        /**
         * ид отправления
         */
        delivery_id?: number;
        /**
         * ид мерчанта
         */
        seller_id?: number;
        /**
         * ид склада
         */
        store_id?: number;
        /**
         * дата установки статуса
         */
        status_at?: string;
        /**
         * сумма товаров отгрузки (расчитывается автоматически), коп.
         */
        cost?: number;
        /**
         * ширина (мм)
         */
        width?: number;
        /**
         * высота (мм)
         */
        height?: number;
        /**
         * длина (мм)
         */
        length?: number;
        /**
         * вес (кг)
         */
        weight?: number;
        /**
         * дата создания
         */
        created_at?: string;
        /**
         * дата обновления
         */
        updated_at?: string;
      } & {
        /**
         * статус отгрузки из OrdersShipmentStatusEnum
         */
        status?: number;
      } & {
        /**
         * Объект типа Delivery
         */
        delivery?: {};
        order_items?: ({
          /**
           * id элемента корзины
           */
          id?: number;
          /**
           * ID заказа
           */
          order_id?: number;
          /**
           * ID отгрузки
           */
          shipment_id?: number;
          /**
           * ID оффера
           */
          offer_id?: number;
          /**
           * Название товара
           */
          name?: string;
          /**
           * Кол-во товара
           */
          qty?: number;
          /**
           * Цена товара (цена * qty - скидки), коп.
           */
          price?: number;
          /**
           * Цена единичного товара (в коп.)
           */
          price_per_one?: number;
          /**
           * Цена товара до скидок (цена * qty), коп.
           */
          cost?: number;
          /**
           * Цена единичного товара до скидок (в коп.)
           */
          cost_per_one?: number;
          /**
           * Информация о товаре
           */
          product_data?: {
            /**
             * Вес нетто товара (кг)
             */
            weight?: number;
            /**
             * Вес брутто товара (кг)
             */
            weight_gross?: number;
            /**
             * Ширина товара (мм)
             */
            width?: number;
            /**
             * Высота товара (мм)
             */
            height?: number;
            /**
             * Длина товара (мм)
             */
            length?: number;
            storage_address?: string | null;
            barcode?: string | null;
          };
          refund_qty?: number | null;
          /**
           * дата создания
           */
          created_at?: string;
          /**
           * дата обновления
           */
          updated_at?: string;
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
          stock?: {
            /**
             * Идентификатор стока
             */
            id?: number;
          } & {
            /**
             * ID склада
             */
            store_id?: number;
            /**
             * ID товарного предложения
             */
            offer_id?: number;
            /**
             * Идентификатор товара
             */
            product_id?: number;
            /**
             * Количество товара для резервирования
             */
            qty?: number;
          } & {};
        })[];
        store?: {
          /**
           * Идентификатор склада
           */
          id?: number;
          /**
           * Время создания склада
           */
          created_at?: string;
          /**
           * Время обновления склада
           */
          updated_at?: string;
        } & {
          /**
           * ID продавца
           */
          seller_id?: number;
          /**
           * ID склада в системе продавца
           */
          xml_id?: string;
          /**
           * Флаг активности склада
           */
          active?: boolean;
          /**
           * Название
           */
          name?: string;
          /**
           * Адрес
           */
          address?: {
            /**
             * Адрес одной строкой
             */
            address_string?: string;
            /**
             * Код страны
             */
            country_code?: string;
            /**
             * Почтовый индекс
             */
            post_index?: string;
            /**
             * Регион
             */
            region?: string;
            /**
             * ФИАС ID региона
             */
            region_guid?: string;
            /**
             * Район в регионе
             */
            area?: string;
            /**
             * ФИАС ID района в регионе
             */
            area_guid?: string;
            /**
             * Город/населенный пункт
             */
            city?: string;
            /**
             * ФИАС ID города/населенного пункта
             */
            city_guid?: string;
            /**
             * Улица
             */
            street?: string;
            /**
             * Дом
             */
            house?: string;
            /**
             * Строение/корпус
             */
            block?: string;
            /**
             * Квартира/офис
             */
            flat?: string;
            /**
             * Подъезд
             */
            porch?: string;
            /**
             * Этаж
             */
            floor?: string;
            /**
             * Домофон
             */
            intercom?: string;
            /**
             * Комментарий к адресу
             */
            comment?: string;
            /**
             * координаты: широта
             */
            geo_lat?: string;
            /**
             * координаты: долгота
             */
            geo_lon?: string;
          };
          /**
           * Часовой пояс
           */
          timezone?: string;
        } & {
          workings?: ({
            /**
             * Идентификатор записи о времени работы
             */
            id?: number;
            /**
             * Время создания записи о времени работы
             */
            created_at?: string;
            /**
             * Время обновления записи о времени работы
             */
            updated_at?: string;
          } & {
            /**
             * ID склада
             */
            store_id?: number;
            /**
             * Флаг активности дня работы склада
             */
            active?: boolean;
            /**
             * День недели (1-7)
             */
            day?: number;
            /**
             * Время начала работы склада (00:00)
             */
            working_start_time?: string;
            /**
             * Время конца работы склада (00:00)
             */
            working_end_time?: string;
          })[];
          contacts?: ({
            /**
             * Идентификатор контактного лица для склада
             */
            id?: number;
            /**
             * Время создания контактного лица для склада
             */
            created_at?: string;
            /**
             * Время обновления контактного лица для склада
             */
            updated_at?: string;
          } & {
            /**
             * ID склада
             */
            store_id?: number;
            /**
             * Имя контактного лица
             */
            name?: string;
            /**
             * Телефон контактного лица
             */
            phone?: string;
            /**
             * Email контактного лица
             */
            email?: string;
          })[];
          pickup_times?: ({
            /**
             * Идентификатор записи о времени отгрузки
             */
            id?: number;
            /**
             * Время создания записи о времени отгрузки
             */
            created_at?: string;
            /**
             * Время обновления записи о времени отгрузки
             */
            updated_at?: string;
          } & {
            /**
             * ID склада
             */
            store_id?: number;
            /**
             * День недели (1-7)
             */
            day?: number;
            /**
             * Код времени отгрузки у службы доставки
             */
            pickup_time_code?: string;
            /**
             * Время начала отгрузки
             */
            pickup_time_start?: string;
            /**
             * Время окончания отгрузки
             */
            pickup_time_end?: string;
            /**
             * Время выгрузки информации о грузе в службу доставки
             */
            cargo_export_time?: string;
            /**
             * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
             */
            delivery_service?: number;
          })[];
        };
        seller?: {
          /**
           * Идентификатор продавца
           */
          id?: number;
          /**
           * Время изменения статуса продавца
           */
          status_at?: string;
          /**
           * Время создания продавца
           */
          created_at?: string;
          /**
           * Время обновления продавца
           */
          updated_at?: string;
        } & {
          /**
           * Юридическое наименование организации
           */
          legal_name?: string;
          /**
           * Внешний код
           */
          external_id?: string;
          /**
           * ИНН
           */
          inn?: string;
          /**
           * КПП
           */
          kpp?: string;
          /**
           * Юр. адрес
           */
          legal_address?: string;
          /**
           * Фактический адрес
           */
          fact_address?: string;
          /**
           * Номер банковского счета
           */
          payment_account?: string;
          /**
           * Наименование банка
           */
          bank?: string;
          /**
           * Юридический адрес банка
           */
          bank_address?: string;
          /**
           * БИК банка
           */
          bank_bik?: string;
          /**
           * Статус продавца. Расшифровка значений:
           *   * `1` - Продавец недооформлен, не дозаполнил информацию
           *   * `2` - Продавец активен
           *   * `3` - Продавец заблокирован
           *
           */
          status?: 1 | 2 | 3;
          /**
           * ID менеджера
           */
          manager_id?: number;
          /**
           * Номер корреспондентского счета банка
           */
          correspondent_account?: string;
          /**
           * Адреса складов отгрузки
           */
          storage_address?: string;
          /**
           * Сайт компании
           */
          site?: string;
          /**
           * Подтверждение о возможности работы с Платформой с использованием автоматических механизмов интеграции
           */
          can_integration?: boolean;
          /**
           * Бренды и товары, которыми торгует продавец
           */
          sale_info?: string;
          /**
           * Город продавца
           */
          city?: string;
        } & {
          owner?: {
            /**
             * Идентификатор пользователя продавца
             */
            id?: number;
            /**
             * Полное ФИО
             */
            full_name?: string;
            /**
             * Сокращенное ФИО
             */
            short_name?: string;
            /**
             * Дата регистрации
             */
            created_at?: string;
            /**
             * Дата обновления
             */
            updated_at?: string;
          } & {
            /**
             * ID продавца
             */
            seller_id?: number;
            /**
             * Активен
             */
            active?: boolean;
            /**
             * Логин
             */
            login?: string;
            last_name?: string | null;
            first_name?: string | null;
            middle_name?: string | null;
            /**
             * Email
             */
            email?: string;
            /**
             * Телефон
             */
            phone?: string;
            /**
             * Временная зона
             */
            timezone?: string;
          } & {
            /**
             * Роли пользователя продавца. Объект, в котором ключ - ID роли (см. UnitsSellerUserRoleEnum)
             */
            roles?: ({
              /**
               * ID роли
               */
              id?: number;
            } & {
              /**
               * Название роли
               */
              title?: string;
              expires?: string | null;
            })[];
          };
          manager?: {
            /**
             * Идентификатор admin-пользователя
             */
            id?: number;
            /**
             * Полное ФИО
             */
            full_name?: string;
            /**
             * Сокращенное ФИО
             */
            short_name?: string;
            /**
             * Дата регистрации
             */
            created_at?: string;
            /**
             * Дата обновления
             */
            updated_at?: string;
          } & {
            /**
             * Активен
             */
            active?: boolean;
            /**
             * Логин
             */
            login?: string;
            last_name?: string | null;
            first_name?: string | null;
            middle_name?: string | null;
            /**
             * Email
             */
            email?: string;
            /**
             * Телефон
             */
            phone?: string;
            /**
             * Временная зона
             */
            timezone?: string;
          } & {
            /**
             * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
             */
            roles?: ({
              /**
               * ID роли
               */
              id?: number;
            } & {
              /**
               * Название роли
               */
              title?: string;
              expires?: string | null;
            })[];
          };
        };
      })[];
    })[];
    customer?: {
      /**
       * Идентификатор покупателя
       */
      id?: number;
      avatar?: string | null;
      delete_request?: string | null;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      user_id?: number | null;
      status_id?: number | null;
      manager_id?: number | null;
      yandex_metric_id?: string | null;
      google_analytics_id?: string | null;
      attribute_ids?: unknown[] | null;
      /**
       * Активность пользователя
       */
      active?: boolean;
      email?: string | null;
      /**
       * Телефон
       */
      phone?: string;
      last_name?: string | null;
      first_name?: string | null;
      middle_name?: string | null;
      gender?: number | null;
      /**
       * Пользователь создан администратором
       */
      create_by_admin?: boolean;
      city?: string | null;
      birthday?: string | null;
      last_visit_date?: string | null;
      comment_status?: string | null;
      /**
       * Временная зона
       */
      timezone?: string;
      /**
       * Удалены ли данные пользователя
       */
      is_deleted?: boolean;
      error_delete?: string | null;
    } & {
      addresses?: ({
        /**
         * Идентификатор адреса
         */
        id?: number;
      } & {
        /**
         * Идентификатор клиента
         */
        customer_id?: number;
        /**
         * Строка с полным описанием адреса
         */
        address_string?: string;
        /**
         * Является адресом по-умолчанию
         */
        default?: boolean;
        post_index?: string | null;
        country_code?: string | null;
        region?: string | null;
        region_guid?: string | null;
        area?: string | null;
        area_guid?: string | null;
        city?: string | null;
        /**
         * Код ФИАС города
         */
        city_guid?: string;
        street?: string | null;
        house?: string | null;
        block?: string | null;
        porch?: string | null;
        intercom?: string | null;
        floor?: string | null;
        flat?: string | null;
        comment?: string | null;
        geo_lat?: number | null;
        geo_lon?: number | null;
      })[];
      status?: {
        /**
         * Идентификатор статуса
         */
        id?: number;
      } & {
        /**
         * Название статуса
         */
        name?: string;
      };
      attributes?: ({
        /**
         * Идентификатор свойства
         */
        id?: number;
      } & {
        /**
         * Название свойства
         */
        name?: string;
      })[];
      user?: {
        /**
         * Идентификатор пользователя
         */
        id?: number;
        /**
         * Дата регистрации
         */
        created_at?: string;
        /**
         * Дата обновления
         */
        updated_at?: string;
      } & {
        /**
         * Активен
         */
        active?: boolean;
        /**
         * Логин
         */
        login?: string;
      };
    } & {};
    responsible?: {
      /**
       * Идентификатор admin-пользователя
       */
      id?: number;
      /**
       * Полное ФИО
       */
      full_name?: string;
      /**
       * Сокращенное ФИО
       */
      short_name?: string;
      /**
       * Дата регистрации
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * Активен
       */
      active?: boolean;
      /**
       * Логин
       */
      login?: string;
      last_name?: string | null;
      first_name?: string | null;
      middle_name?: string | null;
      /**
       * Email
       */
      email?: string;
      /**
       * Телефон
       */
      phone?: string;
      /**
       * Временная зона
       */
      timezone?: string;
    } & {
      /**
       * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
       */
      roles?: ({
        /**
         * ID роли
         */
        id?: number;
      } & {
        /**
         * Название роли
         */
        title?: string;
        expires?: string | null;
      })[];
    };
    files?: {
      /**
       * ID файла
       */
      id?: number;
      /**
       * ID заказа
       */
      order_id?: number;
      /**
       * Оригинальное название файла
       */
      original_name?: string;
      /**
       * Информация о файле в виде объекта. Для потребителя неважно какие внутри ключи
       */
      file?: {};
      /**
       * дата создания файла
       */
      created_at?: string;
      /**
       * дата обновления файла
       */
      updated_at?: string;
    }[];
  };
  items?: ({
    /**
     * id элемента корзины
     */
    id?: number;
    /**
     * ID заказа
     */
    order_id?: number;
    /**
     * ID отгрузки
     */
    shipment_id?: number;
    /**
     * ID оффера
     */
    offer_id?: number;
    /**
     * Название товара
     */
    name?: string;
    /**
     * Кол-во товара
     */
    qty?: number;
    /**
     * Цена товара (цена * qty - скидки), коп.
     */
    price?: number;
    /**
     * Цена единичного товара (в коп.)
     */
    price_per_one?: number;
    /**
     * Цена товара до скидок (цена * qty), коп.
     */
    cost?: number;
    /**
     * Цена единичного товара до скидок (в коп.)
     */
    cost_per_one?: number;
    /**
     * Информация о товаре
     */
    product_data?: {
      /**
       * Вес нетто товара (кг)
       */
      weight?: number;
      /**
       * Вес брутто товара (кг)
       */
      weight_gross?: number;
      /**
       * Ширина товара (мм)
       */
      width?: number;
      /**
       * Высота товара (мм)
       */
      height?: number;
      /**
       * Длина товара (мм)
       */
      length?: number;
      storage_address?: string | null;
      barcode?: string | null;
    };
    refund_qty?: number | null;
    /**
     * дата создания
     */
    created_at?: string;
    /**
     * дата обновления
     */
    updated_at?: string;
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
    stock?: {
      /**
       * Идентификатор стока
       */
      id?: number;
    } & {
      /**
       * ID склада
       */
      store_id?: number;
      /**
       * ID товарного предложения
       */
      offer_id?: number;
      /**
       * Идентификатор товара
       */
      product_id?: number;
      /**
       * Количество товара для резервирования
       */
      qty?: number;
    } & {};
  })[];
  reasons?: ({
    /**
     * идентификатор
     */
    id?: number;
    /**
     * дата создания
     */
    created_at?: string;
    /**
     * дата обновления
     */
    updated_at?: string;
  } & {
    /**
     * Символьный код причины возврата
     */
    code?: string;
    /**
     * Название причины возврата
     */
    name?: string;
    description?: string | null;
  })[];
};

        export type GetRefundResponseMeta = {};

        export type GetRefundResponse = CommonResponse<GetRefundResponseData, GetRefundResponseMeta>;
        export type AttachRefundFileRequest = {
                        formData: FormData;
                        id: number | string;
                    }


        export type AttachRefundFileResponseData = {
  /**
   * идентификатор
   */
  id?: number;
  /**
   * идентификатор заявки на возврат
   */
  refund_id?: number;
  /**
   * Оригинальное название файла
   */
  original_name?: string;
  /**
   * Информация о файле в виде объекта. Для потребителя неважно какие внутри ключи
   */
  file?: {};
  /**
   * дата загрузки файла
   */
  created_at?: string;
  /**
   * дата обновления файла
   */
  updated_at?: string;
};

        export type AttachRefundFileResponseMeta = {};

        export type AttachRefundFileResponse = CommonResponse<AttachRefundFileResponseData, AttachRefundFileResponseMeta>;
        export interface SearchOrdersRequest {
  sort?: ("number" | "created_at" | "price" | "delivery_price")[];
  /**
   * Большая часть доступных фильтров указана в /orders:meta
   */
  filter?: {
    "deliveries.shipments.seller_id"?: number[];
    "deliveries.shipments.store_id"?: number[];
  };
  include?: (
    | "files"
    | "deliveries"
    | "deliveries.shipments"
    | "deliveries.shipments.orderItems"
    | "deliveries.shipments.seller"
    | "deliveries.shipments.store"
    | "responsible"
    | "customer"
    | "customer.user"
    | "orderItems.product"
    | "orderItems.product.images"
    | "orderItems.product.category"
    | "orderItems.product.brand"
    | "orderItems.stock"
  )[];
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


        export type SearchOrdersResponseData = ({
  /**
   * ID заказа
   */
  id?: number;
  /**
   * номер заказа
   */
  number?: string;
  /**
   * id покупателя
   */
  customer_id?: number;
  /**
   * email покупателя
   */
  customer_email?: string;
  /**
   * стоимость (без учета скидки) (рассчитывается автоматически) в коп.
   */
  cost?: number;
  /**
   * стоимость (с учетом скидок) (рассчитывается автоматически) в коп.
   */
  price?: number;
  /**
   * списано бонусов
   */
  spent_bonus?: number;
  promo_code?: string | null;
  /**
   * начислено бонусов
   */
  added_bonus?: number;
  /**
   * источник взаимодействия из OrdersOrderSourceEnum
   */
  source?: number;
  status_at?: string | null;
  /**
   * статус оплаты из OrdersPaymentStatusEnum
   */
  payment_status?: number;
  payment_status_at?: string | null;
  payed_at?: string | null;
  payment_expires_at?: string | null;
  /**
   * метод оплаты из PaymentMethodEnum
   */
  payment_method?: number;
  /**
   * система оплаты из PaymentSystemEnum
   */
  payment_system?: number;
  payment_external_id?: string | null;
  is_problem_at?: string | null;
  /**
   * флаг, что заказ просроченный
   */
  is_expired?: boolean;
  is_expired_at?: string | null;
  /**
   * флаг, что заказ возвращен
   */
  is_return?: boolean;
  is_return_at?: string | null;
  /**
   * флаг, что заказ частично возвращен
   */
  is_partial_return?: boolean;
  is_partial_return_at?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
} & {
  responsible_id?: number | null;
  /**
   * статус заказа из OrdersOrderStatusEnum
   */
  status?: number;
  client_comment?: string | null;
  receiver_name?: string | null;
  receiver_phone?: string | null;
  receiver_email?: string | null;
  is_problem?: boolean | null;
  problem_comment?: string | null;
} & {
  /**
   * служба доставки
   */
  delivery_service?: number;
  /**
   * метод доставки
   */
  delivery_method?: number;
  /**
   * стоимость доставки (без учета скидки) в коп.
   */
  delivery_cost?: number;
  /**
   * стоимость доставки (с учетом скидки) в коп.
   */
  delivery_price?: number;
  delivery_tariff_id?: number | null;
  delivery_point_id?: number | null;
  delivery_address?: {} | null;
  delivery_comment?: string | null;
} & {
  deliveries?: ({
    /**
     * ID отправления
     */
    id?: number;
    /**
     * ID заказа
     */
    order_id?: number;
    /**
     * номер отправления
     */
    number?: string;
    /**
     * статус отправления из OrdersDeliveryStatusEnum
     */
    status?: number;
    status_at?: string | null;
    /**
     * стоимость доставки, полученная от службы доставки (не влияет на общую стоимость доставки по заказу), коп.
     */
    cost?: number;
    /**
     * ширина (мм)
     */
    width?: number;
    /**
     * высота (мм)
     */
    height?: number;
    /**
     * длина (мм)
     */
    length?: number;
    /**
     * вес (кг)
     */
    weight?: number;
    created_at?: string | null;
    updated_at?: string | null;
  } & {
    date?: string | null;
    timeslot?: {} | null;
  } & {
    shipments?: ({
      /**
       * идентификатор
       */
      id?: number;
      /**
       * номер отгрузки
       */
      number?: string;
      /**
       * ид отправления
       */
      delivery_id?: number;
      /**
       * ид мерчанта
       */
      seller_id?: number;
      /**
       * ид склада
       */
      store_id?: number;
      /**
       * дата установки статуса
       */
      status_at?: string;
      /**
       * сумма товаров отгрузки (расчитывается автоматически), коп.
       */
      cost?: number;
      /**
       * ширина (мм)
       */
      width?: number;
      /**
       * высота (мм)
       */
      height?: number;
      /**
       * длина (мм)
       */
      length?: number;
      /**
       * вес (кг)
       */
      weight?: number;
      /**
       * дата создания
       */
      created_at?: string;
      /**
       * дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * статус отгрузки из OrdersShipmentStatusEnum
       */
      status?: number;
    } & {
      /**
       * Объект типа Delivery
       */
      delivery?: {};
      order_items?: ({
        /**
         * id элемента корзины
         */
        id?: number;
        /**
         * ID заказа
         */
        order_id?: number;
        /**
         * ID отгрузки
         */
        shipment_id?: number;
        /**
         * ID оффера
         */
        offer_id?: number;
        /**
         * Название товара
         */
        name?: string;
        /**
         * Кол-во товара
         */
        qty?: number;
        /**
         * Цена товара (цена * qty - скидки), коп.
         */
        price?: number;
        /**
         * Цена единичного товара (в коп.)
         */
        price_per_one?: number;
        /**
         * Цена товара до скидок (цена * qty), коп.
         */
        cost?: number;
        /**
         * Цена единичного товара до скидок (в коп.)
         */
        cost_per_one?: number;
        /**
         * Информация о товаре
         */
        product_data?: {
          /**
           * Вес нетто товара (кг)
           */
          weight?: number;
          /**
           * Вес брутто товара (кг)
           */
          weight_gross?: number;
          /**
           * Ширина товара (мм)
           */
          width?: number;
          /**
           * Высота товара (мм)
           */
          height?: number;
          /**
           * Длина товара (мм)
           */
          length?: number;
          storage_address?: string | null;
          barcode?: string | null;
        };
        refund_qty?: number | null;
        /**
         * дата создания
         */
        created_at?: string;
        /**
         * дата обновления
         */
        updated_at?: string;
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
        stock?: {
          /**
           * Идентификатор стока
           */
          id?: number;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * ID товарного предложения
           */
          offer_id?: number;
          /**
           * Идентификатор товара
           */
          product_id?: number;
          /**
           * Количество товара для резервирования
           */
          qty?: number;
        } & {};
      })[];
      store?: {
        /**
         * Идентификатор склада
         */
        id?: number;
        /**
         * Время создания склада
         */
        created_at?: string;
        /**
         * Время обновления склада
         */
        updated_at?: string;
      } & {
        /**
         * ID продавца
         */
        seller_id?: number;
        /**
         * ID склада в системе продавца
         */
        xml_id?: string;
        /**
         * Флаг активности склада
         */
        active?: boolean;
        /**
         * Название
         */
        name?: string;
        /**
         * Адрес
         */
        address?: {
          /**
           * Адрес одной строкой
           */
          address_string?: string;
          /**
           * Код страны
           */
          country_code?: string;
          /**
           * Почтовый индекс
           */
          post_index?: string;
          /**
           * Регион
           */
          region?: string;
          /**
           * ФИАС ID региона
           */
          region_guid?: string;
          /**
           * Район в регионе
           */
          area?: string;
          /**
           * ФИАС ID района в регионе
           */
          area_guid?: string;
          /**
           * Город/населенный пункт
           */
          city?: string;
          /**
           * ФИАС ID города/населенного пункта
           */
          city_guid?: string;
          /**
           * Улица
           */
          street?: string;
          /**
           * Дом
           */
          house?: string;
          /**
           * Строение/корпус
           */
          block?: string;
          /**
           * Квартира/офис
           */
          flat?: string;
          /**
           * Подъезд
           */
          porch?: string;
          /**
           * Этаж
           */
          floor?: string;
          /**
           * Домофон
           */
          intercom?: string;
          /**
           * Комментарий к адресу
           */
          comment?: string;
          /**
           * координаты: широта
           */
          geo_lat?: string;
          /**
           * координаты: долгота
           */
          geo_lon?: string;
        };
        /**
         * Часовой пояс
         */
        timezone?: string;
      } & {
        workings?: ({
          /**
           * Идентификатор записи о времени работы
           */
          id?: number;
          /**
           * Время создания записи о времени работы
           */
          created_at?: string;
          /**
           * Время обновления записи о времени работы
           */
          updated_at?: string;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * Флаг активности дня работы склада
           */
          active?: boolean;
          /**
           * День недели (1-7)
           */
          day?: number;
          /**
           * Время начала работы склада (00:00)
           */
          working_start_time?: string;
          /**
           * Время конца работы склада (00:00)
           */
          working_end_time?: string;
        })[];
        contacts?: ({
          /**
           * Идентификатор контактного лица для склада
           */
          id?: number;
          /**
           * Время создания контактного лица для склада
           */
          created_at?: string;
          /**
           * Время обновления контактного лица для склада
           */
          updated_at?: string;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * Имя контактного лица
           */
          name?: string;
          /**
           * Телефон контактного лица
           */
          phone?: string;
          /**
           * Email контактного лица
           */
          email?: string;
        })[];
        pickup_times?: ({
          /**
           * Идентификатор записи о времени отгрузки
           */
          id?: number;
          /**
           * Время создания записи о времени отгрузки
           */
          created_at?: string;
          /**
           * Время обновления записи о времени отгрузки
           */
          updated_at?: string;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * День недели (1-7)
           */
          day?: number;
          /**
           * Код времени отгрузки у службы доставки
           */
          pickup_time_code?: string;
          /**
           * Время начала отгрузки
           */
          pickup_time_start?: string;
          /**
           * Время окончания отгрузки
           */
          pickup_time_end?: string;
          /**
           * Время выгрузки информации о грузе в службу доставки
           */
          cargo_export_time?: string;
          /**
           * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
           */
          delivery_service?: number;
        })[];
      };
      seller?: {
        /**
         * Идентификатор продавца
         */
        id?: number;
        /**
         * Время изменения статуса продавца
         */
        status_at?: string;
        /**
         * Время создания продавца
         */
        created_at?: string;
        /**
         * Время обновления продавца
         */
        updated_at?: string;
      } & {
        /**
         * Юридическое наименование организации
         */
        legal_name?: string;
        /**
         * Внешний код
         */
        external_id?: string;
        /**
         * ИНН
         */
        inn?: string;
        /**
         * КПП
         */
        kpp?: string;
        /**
         * Юр. адрес
         */
        legal_address?: string;
        /**
         * Фактический адрес
         */
        fact_address?: string;
        /**
         * Номер банковского счета
         */
        payment_account?: string;
        /**
         * Наименование банка
         */
        bank?: string;
        /**
         * Юридический адрес банка
         */
        bank_address?: string;
        /**
         * БИК банка
         */
        bank_bik?: string;
        /**
         * Статус продавца. Расшифровка значений:
         *   * `1` - Продавец недооформлен, не дозаполнил информацию
         *   * `2` - Продавец активен
         *   * `3` - Продавец заблокирован
         *
         */
        status?: 1 | 2 | 3;
        /**
         * ID менеджера
         */
        manager_id?: number;
        /**
         * Номер корреспондентского счета банка
         */
        correspondent_account?: string;
        /**
         * Адреса складов отгрузки
         */
        storage_address?: string;
        /**
         * Сайт компании
         */
        site?: string;
        /**
         * Подтверждение о возможности работы с Платформой с использованием автоматических механизмов интеграции
         */
        can_integration?: boolean;
        /**
         * Бренды и товары, которыми торгует продавец
         */
        sale_info?: string;
        /**
         * Город продавца
         */
        city?: string;
      } & {
        owner?: {
          /**
           * Идентификатор пользователя продавца
           */
          id?: number;
          /**
           * Полное ФИО
           */
          full_name?: string;
          /**
           * Сокращенное ФИО
           */
          short_name?: string;
          /**
           * Дата регистрации
           */
          created_at?: string;
          /**
           * Дата обновления
           */
          updated_at?: string;
        } & {
          /**
           * ID продавца
           */
          seller_id?: number;
          /**
           * Активен
           */
          active?: boolean;
          /**
           * Логин
           */
          login?: string;
          last_name?: string | null;
          first_name?: string | null;
          middle_name?: string | null;
          /**
           * Email
           */
          email?: string;
          /**
           * Телефон
           */
          phone?: string;
          /**
           * Временная зона
           */
          timezone?: string;
        } & {
          /**
           * Роли пользователя продавца. Объект, в котором ключ - ID роли (см. UnitsSellerUserRoleEnum)
           */
          roles?: ({
            /**
             * ID роли
             */
            id?: number;
          } & {
            /**
             * Название роли
             */
            title?: string;
            expires?: string | null;
          })[];
        };
        manager?: {
          /**
           * Идентификатор admin-пользователя
           */
          id?: number;
          /**
           * Полное ФИО
           */
          full_name?: string;
          /**
           * Сокращенное ФИО
           */
          short_name?: string;
          /**
           * Дата регистрации
           */
          created_at?: string;
          /**
           * Дата обновления
           */
          updated_at?: string;
        } & {
          /**
           * Активен
           */
          active?: boolean;
          /**
           * Логин
           */
          login?: string;
          last_name?: string | null;
          first_name?: string | null;
          middle_name?: string | null;
          /**
           * Email
           */
          email?: string;
          /**
           * Телефон
           */
          phone?: string;
          /**
           * Временная зона
           */
          timezone?: string;
        } & {
          /**
           * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
           */
          roles?: ({
            /**
             * ID роли
             */
            id?: number;
          } & {
            /**
             * Название роли
             */
            title?: string;
            expires?: string | null;
          })[];
        };
      };
    })[];
  })[];
  customer?: {
    /**
     * Идентификатор покупателя
     */
    id?: number;
    avatar?: string | null;
    delete_request?: string | null;
    /**
     * Дата создания
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
  } & {
    user_id?: number | null;
    status_id?: number | null;
    manager_id?: number | null;
    yandex_metric_id?: string | null;
    google_analytics_id?: string | null;
    attribute_ids?: unknown[] | null;
    /**
     * Активность пользователя
     */
    active?: boolean;
    email?: string | null;
    /**
     * Телефон
     */
    phone?: string;
    last_name?: string | null;
    first_name?: string | null;
    middle_name?: string | null;
    gender?: number | null;
    /**
     * Пользователь создан администратором
     */
    create_by_admin?: boolean;
    city?: string | null;
    birthday?: string | null;
    last_visit_date?: string | null;
    comment_status?: string | null;
    /**
     * Временная зона
     */
    timezone?: string;
    /**
     * Удалены ли данные пользователя
     */
    is_deleted?: boolean;
    error_delete?: string | null;
  } & {
    addresses?: ({
      /**
       * Идентификатор адреса
       */
      id?: number;
    } & {
      /**
       * Идентификатор клиента
       */
      customer_id?: number;
      /**
       * Строка с полным описанием адреса
       */
      address_string?: string;
      /**
       * Является адресом по-умолчанию
       */
      default?: boolean;
      post_index?: string | null;
      country_code?: string | null;
      region?: string | null;
      region_guid?: string | null;
      area?: string | null;
      area_guid?: string | null;
      city?: string | null;
      /**
       * Код ФИАС города
       */
      city_guid?: string;
      street?: string | null;
      house?: string | null;
      block?: string | null;
      porch?: string | null;
      intercom?: string | null;
      floor?: string | null;
      flat?: string | null;
      comment?: string | null;
      geo_lat?: number | null;
      geo_lon?: number | null;
    })[];
    status?: {
      /**
       * Идентификатор статуса
       */
      id?: number;
    } & {
      /**
       * Название статуса
       */
      name?: string;
    };
    attributes?: ({
      /**
       * Идентификатор свойства
       */
      id?: number;
    } & {
      /**
       * Название свойства
       */
      name?: string;
    })[];
    user?: {
      /**
       * Идентификатор пользователя
       */
      id?: number;
      /**
       * Дата регистрации
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * Активен
       */
      active?: boolean;
      /**
       * Логин
       */
      login?: string;
    };
  } & {};
  responsible?: {
    /**
     * Идентификатор admin-пользователя
     */
    id?: number;
    /**
     * Полное ФИО
     */
    full_name?: string;
    /**
     * Сокращенное ФИО
     */
    short_name?: string;
    /**
     * Дата регистрации
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
  } & {
    /**
     * Активен
     */
    active?: boolean;
    /**
     * Логин
     */
    login?: string;
    last_name?: string | null;
    first_name?: string | null;
    middle_name?: string | null;
    /**
     * Email
     */
    email?: string;
    /**
     * Телефон
     */
    phone?: string;
    /**
     * Временная зона
     */
    timezone?: string;
  } & {
    /**
     * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
     */
    roles?: ({
      /**
       * ID роли
       */
      id?: number;
    } & {
      /**
       * Название роли
       */
      title?: string;
      expires?: string | null;
    })[];
  };
  files?: {
    /**
     * ID файла
     */
    id?: number;
    /**
     * ID заказа
     */
    order_id?: number;
    /**
     * Оригинальное название файла
     */
    original_name?: string;
    /**
     * Информация о файле в виде объекта. Для потребителя неважно какие внутри ключи
     */
    file?: {};
    /**
     * дата создания файла
     */
    created_at?: string;
    /**
     * дата обновления файла
     */
    updated_at?: string;
  }[];
})[];

        export type SearchOrdersResponseMeta = {
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

        export type SearchOrdersResponse = CommonResponse<SearchOrdersResponseData, SearchOrdersResponseMeta>;
        export type PatchOrderRequest = {
  /**
   * Идентификатор ответственного за заказ
   */
  responsible_id?: number | null;
  /**
   * статус заказа из OrdersOrderStatusEnum
   */
  status?: number;
  /**
   * комментарий менеджера
   */
  client_comment?: string | null;
  /**
   * имя получателя
   */
  receiver_name?: string | null;
  /**
   * телефон получателя
   */
  receiver_phone?: string | null;
  /**
   * e-mail получателя
   */
  receiver_email?: string | null;
  /**
   * флаг, что заказ проблемный
   */
  is_problem?: boolean | null;
  /**
   * последнее сообщение продавца о проблеме со сборкой
   */
  problem_comment?: string | null;
};


        export type PatchOrderResponseData = {
  /**
   * ID заказа
   */
  id?: number;
  /**
   * номер заказа
   */
  number?: string;
  /**
   * id покупателя
   */
  customer_id?: number;
  /**
   * email покупателя
   */
  customer_email?: string;
  /**
   * стоимость (без учета скидки) (рассчитывается автоматически) в коп.
   */
  cost?: number;
  /**
   * стоимость (с учетом скидок) (рассчитывается автоматически) в коп.
   */
  price?: number;
  /**
   * списано бонусов
   */
  spent_bonus?: number;
  promo_code?: string | null;
  /**
   * начислено бонусов
   */
  added_bonus?: number;
  /**
   * источник взаимодействия из OrdersOrderSourceEnum
   */
  source?: number;
  status_at?: string | null;
  /**
   * статус оплаты из OrdersPaymentStatusEnum
   */
  payment_status?: number;
  payment_status_at?: string | null;
  payed_at?: string | null;
  payment_expires_at?: string | null;
  /**
   * метод оплаты из PaymentMethodEnum
   */
  payment_method?: number;
  /**
   * система оплаты из PaymentSystemEnum
   */
  payment_system?: number;
  payment_external_id?: string | null;
  is_problem_at?: string | null;
  /**
   * флаг, что заказ просроченный
   */
  is_expired?: boolean;
  is_expired_at?: string | null;
  /**
   * флаг, что заказ возвращен
   */
  is_return?: boolean;
  is_return_at?: string | null;
  /**
   * флаг, что заказ частично возвращен
   */
  is_partial_return?: boolean;
  is_partial_return_at?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
} & {
  responsible_id?: number | null;
  /**
   * статус заказа из OrdersOrderStatusEnum
   */
  status?: number;
  client_comment?: string | null;
  receiver_name?: string | null;
  receiver_phone?: string | null;
  receiver_email?: string | null;
  is_problem?: boolean | null;
  problem_comment?: string | null;
} & {
  /**
   * служба доставки
   */
  delivery_service?: number;
  /**
   * метод доставки
   */
  delivery_method?: number;
  /**
   * стоимость доставки (без учета скидки) в коп.
   */
  delivery_cost?: number;
  /**
   * стоимость доставки (с учетом скидки) в коп.
   */
  delivery_price?: number;
  delivery_tariff_id?: number | null;
  delivery_point_id?: number | null;
  delivery_address?: {} | null;
  delivery_comment?: string | null;
} & {
  deliveries?: ({
    /**
     * ID отправления
     */
    id?: number;
    /**
     * ID заказа
     */
    order_id?: number;
    /**
     * номер отправления
     */
    number?: string;
    /**
     * статус отправления из OrdersDeliveryStatusEnum
     */
    status?: number;
    status_at?: string | null;
    /**
     * стоимость доставки, полученная от службы доставки (не влияет на общую стоимость доставки по заказу), коп.
     */
    cost?: number;
    /**
     * ширина (мм)
     */
    width?: number;
    /**
     * высота (мм)
     */
    height?: number;
    /**
     * длина (мм)
     */
    length?: number;
    /**
     * вес (кг)
     */
    weight?: number;
    created_at?: string | null;
    updated_at?: string | null;
  } & {
    date?: string | null;
    timeslot?: {} | null;
  } & {
    shipments?: ({
      /**
       * идентификатор
       */
      id?: number;
      /**
       * номер отгрузки
       */
      number?: string;
      /**
       * ид отправления
       */
      delivery_id?: number;
      /**
       * ид мерчанта
       */
      seller_id?: number;
      /**
       * ид склада
       */
      store_id?: number;
      /**
       * дата установки статуса
       */
      status_at?: string;
      /**
       * сумма товаров отгрузки (расчитывается автоматически), коп.
       */
      cost?: number;
      /**
       * ширина (мм)
       */
      width?: number;
      /**
       * высота (мм)
       */
      height?: number;
      /**
       * длина (мм)
       */
      length?: number;
      /**
       * вес (кг)
       */
      weight?: number;
      /**
       * дата создания
       */
      created_at?: string;
      /**
       * дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * статус отгрузки из OrdersShipmentStatusEnum
       */
      status?: number;
    } & {
      /**
       * Объект типа Delivery
       */
      delivery?: {};
      order_items?: ({
        /**
         * id элемента корзины
         */
        id?: number;
        /**
         * ID заказа
         */
        order_id?: number;
        /**
         * ID отгрузки
         */
        shipment_id?: number;
        /**
         * ID оффера
         */
        offer_id?: number;
        /**
         * Название товара
         */
        name?: string;
        /**
         * Кол-во товара
         */
        qty?: number;
        /**
         * Цена товара (цена * qty - скидки), коп.
         */
        price?: number;
        /**
         * Цена единичного товара (в коп.)
         */
        price_per_one?: number;
        /**
         * Цена товара до скидок (цена * qty), коп.
         */
        cost?: number;
        /**
         * Цена единичного товара до скидок (в коп.)
         */
        cost_per_one?: number;
        /**
         * Информация о товаре
         */
        product_data?: {
          /**
           * Вес нетто товара (кг)
           */
          weight?: number;
          /**
           * Вес брутто товара (кг)
           */
          weight_gross?: number;
          /**
           * Ширина товара (мм)
           */
          width?: number;
          /**
           * Высота товара (мм)
           */
          height?: number;
          /**
           * Длина товара (мм)
           */
          length?: number;
          storage_address?: string | null;
          barcode?: string | null;
        };
        refund_qty?: number | null;
        /**
         * дата создания
         */
        created_at?: string;
        /**
         * дата обновления
         */
        updated_at?: string;
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
        stock?: {
          /**
           * Идентификатор стока
           */
          id?: number;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * ID товарного предложения
           */
          offer_id?: number;
          /**
           * Идентификатор товара
           */
          product_id?: number;
          /**
           * Количество товара для резервирования
           */
          qty?: number;
        } & {};
      })[];
      store?: {
        /**
         * Идентификатор склада
         */
        id?: number;
        /**
         * Время создания склада
         */
        created_at?: string;
        /**
         * Время обновления склада
         */
        updated_at?: string;
      } & {
        /**
         * ID продавца
         */
        seller_id?: number;
        /**
         * ID склада в системе продавца
         */
        xml_id?: string;
        /**
         * Флаг активности склада
         */
        active?: boolean;
        /**
         * Название
         */
        name?: string;
        /**
         * Адрес
         */
        address?: {
          /**
           * Адрес одной строкой
           */
          address_string?: string;
          /**
           * Код страны
           */
          country_code?: string;
          /**
           * Почтовый индекс
           */
          post_index?: string;
          /**
           * Регион
           */
          region?: string;
          /**
           * ФИАС ID региона
           */
          region_guid?: string;
          /**
           * Район в регионе
           */
          area?: string;
          /**
           * ФИАС ID района в регионе
           */
          area_guid?: string;
          /**
           * Город/населенный пункт
           */
          city?: string;
          /**
           * ФИАС ID города/населенного пункта
           */
          city_guid?: string;
          /**
           * Улица
           */
          street?: string;
          /**
           * Дом
           */
          house?: string;
          /**
           * Строение/корпус
           */
          block?: string;
          /**
           * Квартира/офис
           */
          flat?: string;
          /**
           * Подъезд
           */
          porch?: string;
          /**
           * Этаж
           */
          floor?: string;
          /**
           * Домофон
           */
          intercom?: string;
          /**
           * Комментарий к адресу
           */
          comment?: string;
          /**
           * координаты: широта
           */
          geo_lat?: string;
          /**
           * координаты: долгота
           */
          geo_lon?: string;
        };
        /**
         * Часовой пояс
         */
        timezone?: string;
      } & {
        workings?: ({
          /**
           * Идентификатор записи о времени работы
           */
          id?: number;
          /**
           * Время создания записи о времени работы
           */
          created_at?: string;
          /**
           * Время обновления записи о времени работы
           */
          updated_at?: string;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * Флаг активности дня работы склада
           */
          active?: boolean;
          /**
           * День недели (1-7)
           */
          day?: number;
          /**
           * Время начала работы склада (00:00)
           */
          working_start_time?: string;
          /**
           * Время конца работы склада (00:00)
           */
          working_end_time?: string;
        })[];
        contacts?: ({
          /**
           * Идентификатор контактного лица для склада
           */
          id?: number;
          /**
           * Время создания контактного лица для склада
           */
          created_at?: string;
          /**
           * Время обновления контактного лица для склада
           */
          updated_at?: string;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * Имя контактного лица
           */
          name?: string;
          /**
           * Телефон контактного лица
           */
          phone?: string;
          /**
           * Email контактного лица
           */
          email?: string;
        })[];
        pickup_times?: ({
          /**
           * Идентификатор записи о времени отгрузки
           */
          id?: number;
          /**
           * Время создания записи о времени отгрузки
           */
          created_at?: string;
          /**
           * Время обновления записи о времени отгрузки
           */
          updated_at?: string;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * День недели (1-7)
           */
          day?: number;
          /**
           * Код времени отгрузки у службы доставки
           */
          pickup_time_code?: string;
          /**
           * Время начала отгрузки
           */
          pickup_time_start?: string;
          /**
           * Время окончания отгрузки
           */
          pickup_time_end?: string;
          /**
           * Время выгрузки информации о грузе в службу доставки
           */
          cargo_export_time?: string;
          /**
           * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
           */
          delivery_service?: number;
        })[];
      };
      seller?: {
        /**
         * Идентификатор продавца
         */
        id?: number;
        /**
         * Время изменения статуса продавца
         */
        status_at?: string;
        /**
         * Время создания продавца
         */
        created_at?: string;
        /**
         * Время обновления продавца
         */
        updated_at?: string;
      } & {
        /**
         * Юридическое наименование организации
         */
        legal_name?: string;
        /**
         * Внешний код
         */
        external_id?: string;
        /**
         * ИНН
         */
        inn?: string;
        /**
         * КПП
         */
        kpp?: string;
        /**
         * Юр. адрес
         */
        legal_address?: string;
        /**
         * Фактический адрес
         */
        fact_address?: string;
        /**
         * Номер банковского счета
         */
        payment_account?: string;
        /**
         * Наименование банка
         */
        bank?: string;
        /**
         * Юридический адрес банка
         */
        bank_address?: string;
        /**
         * БИК банка
         */
        bank_bik?: string;
        /**
         * Статус продавца. Расшифровка значений:
         *   * `1` - Продавец недооформлен, не дозаполнил информацию
         *   * `2` - Продавец активен
         *   * `3` - Продавец заблокирован
         *
         */
        status?: 1 | 2 | 3;
        /**
         * ID менеджера
         */
        manager_id?: number;
        /**
         * Номер корреспондентского счета банка
         */
        correspondent_account?: string;
        /**
         * Адреса складов отгрузки
         */
        storage_address?: string;
        /**
         * Сайт компании
         */
        site?: string;
        /**
         * Подтверждение о возможности работы с Платформой с использованием автоматических механизмов интеграции
         */
        can_integration?: boolean;
        /**
         * Бренды и товары, которыми торгует продавец
         */
        sale_info?: string;
        /**
         * Город продавца
         */
        city?: string;
      } & {
        owner?: {
          /**
           * Идентификатор пользователя продавца
           */
          id?: number;
          /**
           * Полное ФИО
           */
          full_name?: string;
          /**
           * Сокращенное ФИО
           */
          short_name?: string;
          /**
           * Дата регистрации
           */
          created_at?: string;
          /**
           * Дата обновления
           */
          updated_at?: string;
        } & {
          /**
           * ID продавца
           */
          seller_id?: number;
          /**
           * Активен
           */
          active?: boolean;
          /**
           * Логин
           */
          login?: string;
          last_name?: string | null;
          first_name?: string | null;
          middle_name?: string | null;
          /**
           * Email
           */
          email?: string;
          /**
           * Телефон
           */
          phone?: string;
          /**
           * Временная зона
           */
          timezone?: string;
        } & {
          /**
           * Роли пользователя продавца. Объект, в котором ключ - ID роли (см. UnitsSellerUserRoleEnum)
           */
          roles?: ({
            /**
             * ID роли
             */
            id?: number;
          } & {
            /**
             * Название роли
             */
            title?: string;
            expires?: string | null;
          })[];
        };
        manager?: {
          /**
           * Идентификатор admin-пользователя
           */
          id?: number;
          /**
           * Полное ФИО
           */
          full_name?: string;
          /**
           * Сокращенное ФИО
           */
          short_name?: string;
          /**
           * Дата регистрации
           */
          created_at?: string;
          /**
           * Дата обновления
           */
          updated_at?: string;
        } & {
          /**
           * Активен
           */
          active?: boolean;
          /**
           * Логин
           */
          login?: string;
          last_name?: string | null;
          first_name?: string | null;
          middle_name?: string | null;
          /**
           * Email
           */
          email?: string;
          /**
           * Телефон
           */
          phone?: string;
          /**
           * Временная зона
           */
          timezone?: string;
        } & {
          /**
           * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
           */
          roles?: ({
            /**
             * ID роли
             */
            id?: number;
          } & {
            /**
             * Название роли
             */
            title?: string;
            expires?: string | null;
          })[];
        };
      };
    })[];
  })[];
  customer?: {
    /**
     * Идентификатор покупателя
     */
    id?: number;
    avatar?: string | null;
    delete_request?: string | null;
    /**
     * Дата создания
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
  } & {
    user_id?: number | null;
    status_id?: number | null;
    manager_id?: number | null;
    yandex_metric_id?: string | null;
    google_analytics_id?: string | null;
    attribute_ids?: unknown[] | null;
    /**
     * Активность пользователя
     */
    active?: boolean;
    email?: string | null;
    /**
     * Телефон
     */
    phone?: string;
    last_name?: string | null;
    first_name?: string | null;
    middle_name?: string | null;
    gender?: number | null;
    /**
     * Пользователь создан администратором
     */
    create_by_admin?: boolean;
    city?: string | null;
    birthday?: string | null;
    last_visit_date?: string | null;
    comment_status?: string | null;
    /**
     * Временная зона
     */
    timezone?: string;
    /**
     * Удалены ли данные пользователя
     */
    is_deleted?: boolean;
    error_delete?: string | null;
  } & {
    addresses?: ({
      /**
       * Идентификатор адреса
       */
      id?: number;
    } & {
      /**
       * Идентификатор клиента
       */
      customer_id?: number;
      /**
       * Строка с полным описанием адреса
       */
      address_string?: string;
      /**
       * Является адресом по-умолчанию
       */
      default?: boolean;
      post_index?: string | null;
      country_code?: string | null;
      region?: string | null;
      region_guid?: string | null;
      area?: string | null;
      area_guid?: string | null;
      city?: string | null;
      /**
       * Код ФИАС города
       */
      city_guid?: string;
      street?: string | null;
      house?: string | null;
      block?: string | null;
      porch?: string | null;
      intercom?: string | null;
      floor?: string | null;
      flat?: string | null;
      comment?: string | null;
      geo_lat?: number | null;
      geo_lon?: number | null;
    })[];
    status?: {
      /**
       * Идентификатор статуса
       */
      id?: number;
    } & {
      /**
       * Название статуса
       */
      name?: string;
    };
    attributes?: ({
      /**
       * Идентификатор свойства
       */
      id?: number;
    } & {
      /**
       * Название свойства
       */
      name?: string;
    })[];
    user?: {
      /**
       * Идентификатор пользователя
       */
      id?: number;
      /**
       * Дата регистрации
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * Активен
       */
      active?: boolean;
      /**
       * Логин
       */
      login?: string;
    };
  } & {};
  responsible?: {
    /**
     * Идентификатор admin-пользователя
     */
    id?: number;
    /**
     * Полное ФИО
     */
    full_name?: string;
    /**
     * Сокращенное ФИО
     */
    short_name?: string;
    /**
     * Дата регистрации
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
  } & {
    /**
     * Активен
     */
    active?: boolean;
    /**
     * Логин
     */
    login?: string;
    last_name?: string | null;
    first_name?: string | null;
    middle_name?: string | null;
    /**
     * Email
     */
    email?: string;
    /**
     * Телефон
     */
    phone?: string;
    /**
     * Временная зона
     */
    timezone?: string;
  } & {
    /**
     * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
     */
    roles?: ({
      /**
       * ID роли
       */
      id?: number;
    } & {
      /**
       * Название роли
       */
      title?: string;
      expires?: string | null;
    })[];
  };
  files?: {
    /**
     * ID файла
     */
    id?: number;
    /**
     * ID заказа
     */
    order_id?: number;
    /**
     * Оригинальное название файла
     */
    original_name?: string;
    /**
     * Информация о файле в виде объекта. Для потребителя неважно какие внутри ключи
     */
    file?: {};
    /**
     * дата создания файла
     */
    created_at?: string;
    /**
     * дата обновления файла
     */
    updated_at?: string;
  }[];
};

        export type PatchOrderResponseMeta = {};

        export type PatchOrderResponse = CommonResponse<PatchOrderResponseData, PatchOrderResponseMeta>;
        export interface ChangeOrderPaymentSystemRequest {
  /**
   * Система оплаты из PaymentSystemEnum
   */
  payment_system: number;
}


        export type ChangeOrderPaymentSystemResponseData = {
  /**
   * ID заказа
   */
  id?: number;
  /**
   * номер заказа
   */
  number?: string;
  /**
   * id покупателя
   */
  customer_id?: number;
  /**
   * email покупателя
   */
  customer_email?: string;
  /**
   * стоимость (без учета скидки) (рассчитывается автоматически) в коп.
   */
  cost?: number;
  /**
   * стоимость (с учетом скидок) (рассчитывается автоматически) в коп.
   */
  price?: number;
  /**
   * списано бонусов
   */
  spent_bonus?: number;
  promo_code?: string | null;
  /**
   * начислено бонусов
   */
  added_bonus?: number;
  /**
   * источник взаимодействия из OrdersOrderSourceEnum
   */
  source?: number;
  status_at?: string | null;
  /**
   * статус оплаты из OrdersPaymentStatusEnum
   */
  payment_status?: number;
  payment_status_at?: string | null;
  payed_at?: string | null;
  payment_expires_at?: string | null;
  /**
   * метод оплаты из PaymentMethodEnum
   */
  payment_method?: number;
  /**
   * система оплаты из PaymentSystemEnum
   */
  payment_system?: number;
  payment_external_id?: string | null;
  is_problem_at?: string | null;
  /**
   * флаг, что заказ просроченный
   */
  is_expired?: boolean;
  is_expired_at?: string | null;
  /**
   * флаг, что заказ возвращен
   */
  is_return?: boolean;
  is_return_at?: string | null;
  /**
   * флаг, что заказ частично возвращен
   */
  is_partial_return?: boolean;
  is_partial_return_at?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
} & {
  responsible_id?: number | null;
  /**
   * статус заказа из OrdersOrderStatusEnum
   */
  status?: number;
  client_comment?: string | null;
  receiver_name?: string | null;
  receiver_phone?: string | null;
  receiver_email?: string | null;
  is_problem?: boolean | null;
  problem_comment?: string | null;
} & {
  /**
   * служба доставки
   */
  delivery_service?: number;
  /**
   * метод доставки
   */
  delivery_method?: number;
  /**
   * стоимость доставки (без учета скидки) в коп.
   */
  delivery_cost?: number;
  /**
   * стоимость доставки (с учетом скидки) в коп.
   */
  delivery_price?: number;
  delivery_tariff_id?: number | null;
  delivery_point_id?: number | null;
  delivery_address?: {} | null;
  delivery_comment?: string | null;
} & {
  deliveries?: ({
    /**
     * ID отправления
     */
    id?: number;
    /**
     * ID заказа
     */
    order_id?: number;
    /**
     * номер отправления
     */
    number?: string;
    /**
     * статус отправления из OrdersDeliveryStatusEnum
     */
    status?: number;
    status_at?: string | null;
    /**
     * стоимость доставки, полученная от службы доставки (не влияет на общую стоимость доставки по заказу), коп.
     */
    cost?: number;
    /**
     * ширина (мм)
     */
    width?: number;
    /**
     * высота (мм)
     */
    height?: number;
    /**
     * длина (мм)
     */
    length?: number;
    /**
     * вес (кг)
     */
    weight?: number;
    created_at?: string | null;
    updated_at?: string | null;
  } & {
    date?: string | null;
    timeslot?: {} | null;
  } & {
    shipments?: ({
      /**
       * идентификатор
       */
      id?: number;
      /**
       * номер отгрузки
       */
      number?: string;
      /**
       * ид отправления
       */
      delivery_id?: number;
      /**
       * ид мерчанта
       */
      seller_id?: number;
      /**
       * ид склада
       */
      store_id?: number;
      /**
       * дата установки статуса
       */
      status_at?: string;
      /**
       * сумма товаров отгрузки (расчитывается автоматически), коп.
       */
      cost?: number;
      /**
       * ширина (мм)
       */
      width?: number;
      /**
       * высота (мм)
       */
      height?: number;
      /**
       * длина (мм)
       */
      length?: number;
      /**
       * вес (кг)
       */
      weight?: number;
      /**
       * дата создания
       */
      created_at?: string;
      /**
       * дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * статус отгрузки из OrdersShipmentStatusEnum
       */
      status?: number;
    } & {
      /**
       * Объект типа Delivery
       */
      delivery?: {};
      order_items?: ({
        /**
         * id элемента корзины
         */
        id?: number;
        /**
         * ID заказа
         */
        order_id?: number;
        /**
         * ID отгрузки
         */
        shipment_id?: number;
        /**
         * ID оффера
         */
        offer_id?: number;
        /**
         * Название товара
         */
        name?: string;
        /**
         * Кол-во товара
         */
        qty?: number;
        /**
         * Цена товара (цена * qty - скидки), коп.
         */
        price?: number;
        /**
         * Цена единичного товара (в коп.)
         */
        price_per_one?: number;
        /**
         * Цена товара до скидок (цена * qty), коп.
         */
        cost?: number;
        /**
         * Цена единичного товара до скидок (в коп.)
         */
        cost_per_one?: number;
        /**
         * Информация о товаре
         */
        product_data?: {
          /**
           * Вес нетто товара (кг)
           */
          weight?: number;
          /**
           * Вес брутто товара (кг)
           */
          weight_gross?: number;
          /**
           * Ширина товара (мм)
           */
          width?: number;
          /**
           * Высота товара (мм)
           */
          height?: number;
          /**
           * Длина товара (мм)
           */
          length?: number;
          storage_address?: string | null;
          barcode?: string | null;
        };
        refund_qty?: number | null;
        /**
         * дата создания
         */
        created_at?: string;
        /**
         * дата обновления
         */
        updated_at?: string;
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
        stock?: {
          /**
           * Идентификатор стока
           */
          id?: number;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * ID товарного предложения
           */
          offer_id?: number;
          /**
           * Идентификатор товара
           */
          product_id?: number;
          /**
           * Количество товара для резервирования
           */
          qty?: number;
        } & {};
      })[];
      store?: {
        /**
         * Идентификатор склада
         */
        id?: number;
        /**
         * Время создания склада
         */
        created_at?: string;
        /**
         * Время обновления склада
         */
        updated_at?: string;
      } & {
        /**
         * ID продавца
         */
        seller_id?: number;
        /**
         * ID склада в системе продавца
         */
        xml_id?: string;
        /**
         * Флаг активности склада
         */
        active?: boolean;
        /**
         * Название
         */
        name?: string;
        /**
         * Адрес
         */
        address?: {
          /**
           * Адрес одной строкой
           */
          address_string?: string;
          /**
           * Код страны
           */
          country_code?: string;
          /**
           * Почтовый индекс
           */
          post_index?: string;
          /**
           * Регион
           */
          region?: string;
          /**
           * ФИАС ID региона
           */
          region_guid?: string;
          /**
           * Район в регионе
           */
          area?: string;
          /**
           * ФИАС ID района в регионе
           */
          area_guid?: string;
          /**
           * Город/населенный пункт
           */
          city?: string;
          /**
           * ФИАС ID города/населенного пункта
           */
          city_guid?: string;
          /**
           * Улица
           */
          street?: string;
          /**
           * Дом
           */
          house?: string;
          /**
           * Строение/корпус
           */
          block?: string;
          /**
           * Квартира/офис
           */
          flat?: string;
          /**
           * Подъезд
           */
          porch?: string;
          /**
           * Этаж
           */
          floor?: string;
          /**
           * Домофон
           */
          intercom?: string;
          /**
           * Комментарий к адресу
           */
          comment?: string;
          /**
           * координаты: широта
           */
          geo_lat?: string;
          /**
           * координаты: долгота
           */
          geo_lon?: string;
        };
        /**
         * Часовой пояс
         */
        timezone?: string;
      } & {
        workings?: ({
          /**
           * Идентификатор записи о времени работы
           */
          id?: number;
          /**
           * Время создания записи о времени работы
           */
          created_at?: string;
          /**
           * Время обновления записи о времени работы
           */
          updated_at?: string;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * Флаг активности дня работы склада
           */
          active?: boolean;
          /**
           * День недели (1-7)
           */
          day?: number;
          /**
           * Время начала работы склада (00:00)
           */
          working_start_time?: string;
          /**
           * Время конца работы склада (00:00)
           */
          working_end_time?: string;
        })[];
        contacts?: ({
          /**
           * Идентификатор контактного лица для склада
           */
          id?: number;
          /**
           * Время создания контактного лица для склада
           */
          created_at?: string;
          /**
           * Время обновления контактного лица для склада
           */
          updated_at?: string;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * Имя контактного лица
           */
          name?: string;
          /**
           * Телефон контактного лица
           */
          phone?: string;
          /**
           * Email контактного лица
           */
          email?: string;
        })[];
        pickup_times?: ({
          /**
           * Идентификатор записи о времени отгрузки
           */
          id?: number;
          /**
           * Время создания записи о времени отгрузки
           */
          created_at?: string;
          /**
           * Время обновления записи о времени отгрузки
           */
          updated_at?: string;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * День недели (1-7)
           */
          day?: number;
          /**
           * Код времени отгрузки у службы доставки
           */
          pickup_time_code?: string;
          /**
           * Время начала отгрузки
           */
          pickup_time_start?: string;
          /**
           * Время окончания отгрузки
           */
          pickup_time_end?: string;
          /**
           * Время выгрузки информации о грузе в службу доставки
           */
          cargo_export_time?: string;
          /**
           * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
           */
          delivery_service?: number;
        })[];
      };
      seller?: {
        /**
         * Идентификатор продавца
         */
        id?: number;
        /**
         * Время изменения статуса продавца
         */
        status_at?: string;
        /**
         * Время создания продавца
         */
        created_at?: string;
        /**
         * Время обновления продавца
         */
        updated_at?: string;
      } & {
        /**
         * Юридическое наименование организации
         */
        legal_name?: string;
        /**
         * Внешний код
         */
        external_id?: string;
        /**
         * ИНН
         */
        inn?: string;
        /**
         * КПП
         */
        kpp?: string;
        /**
         * Юр. адрес
         */
        legal_address?: string;
        /**
         * Фактический адрес
         */
        fact_address?: string;
        /**
         * Номер банковского счета
         */
        payment_account?: string;
        /**
         * Наименование банка
         */
        bank?: string;
        /**
         * Юридический адрес банка
         */
        bank_address?: string;
        /**
         * БИК банка
         */
        bank_bik?: string;
        /**
         * Статус продавца. Расшифровка значений:
         *   * `1` - Продавец недооформлен, не дозаполнил информацию
         *   * `2` - Продавец активен
         *   * `3` - Продавец заблокирован
         *
         */
        status?: 1 | 2 | 3;
        /**
         * ID менеджера
         */
        manager_id?: number;
        /**
         * Номер корреспондентского счета банка
         */
        correspondent_account?: string;
        /**
         * Адреса складов отгрузки
         */
        storage_address?: string;
        /**
         * Сайт компании
         */
        site?: string;
        /**
         * Подтверждение о возможности работы с Платформой с использованием автоматических механизмов интеграции
         */
        can_integration?: boolean;
        /**
         * Бренды и товары, которыми торгует продавец
         */
        sale_info?: string;
        /**
         * Город продавца
         */
        city?: string;
      } & {
        owner?: {
          /**
           * Идентификатор пользователя продавца
           */
          id?: number;
          /**
           * Полное ФИО
           */
          full_name?: string;
          /**
           * Сокращенное ФИО
           */
          short_name?: string;
          /**
           * Дата регистрации
           */
          created_at?: string;
          /**
           * Дата обновления
           */
          updated_at?: string;
        } & {
          /**
           * ID продавца
           */
          seller_id?: number;
          /**
           * Активен
           */
          active?: boolean;
          /**
           * Логин
           */
          login?: string;
          last_name?: string | null;
          first_name?: string | null;
          middle_name?: string | null;
          /**
           * Email
           */
          email?: string;
          /**
           * Телефон
           */
          phone?: string;
          /**
           * Временная зона
           */
          timezone?: string;
        } & {
          /**
           * Роли пользователя продавца. Объект, в котором ключ - ID роли (см. UnitsSellerUserRoleEnum)
           */
          roles?: ({
            /**
             * ID роли
             */
            id?: number;
          } & {
            /**
             * Название роли
             */
            title?: string;
            expires?: string | null;
          })[];
        };
        manager?: {
          /**
           * Идентификатор admin-пользователя
           */
          id?: number;
          /**
           * Полное ФИО
           */
          full_name?: string;
          /**
           * Сокращенное ФИО
           */
          short_name?: string;
          /**
           * Дата регистрации
           */
          created_at?: string;
          /**
           * Дата обновления
           */
          updated_at?: string;
        } & {
          /**
           * Активен
           */
          active?: boolean;
          /**
           * Логин
           */
          login?: string;
          last_name?: string | null;
          first_name?: string | null;
          middle_name?: string | null;
          /**
           * Email
           */
          email?: string;
          /**
           * Телефон
           */
          phone?: string;
          /**
           * Временная зона
           */
          timezone?: string;
        } & {
          /**
           * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
           */
          roles?: ({
            /**
             * ID роли
             */
            id?: number;
          } & {
            /**
             * Название роли
             */
            title?: string;
            expires?: string | null;
          })[];
        };
      };
    })[];
  })[];
  customer?: {
    /**
     * Идентификатор покупателя
     */
    id?: number;
    avatar?: string | null;
    delete_request?: string | null;
    /**
     * Дата создания
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
  } & {
    user_id?: number | null;
    status_id?: number | null;
    manager_id?: number | null;
    yandex_metric_id?: string | null;
    google_analytics_id?: string | null;
    attribute_ids?: unknown[] | null;
    /**
     * Активность пользователя
     */
    active?: boolean;
    email?: string | null;
    /**
     * Телефон
     */
    phone?: string;
    last_name?: string | null;
    first_name?: string | null;
    middle_name?: string | null;
    gender?: number | null;
    /**
     * Пользователь создан администратором
     */
    create_by_admin?: boolean;
    city?: string | null;
    birthday?: string | null;
    last_visit_date?: string | null;
    comment_status?: string | null;
    /**
     * Временная зона
     */
    timezone?: string;
    /**
     * Удалены ли данные пользователя
     */
    is_deleted?: boolean;
    error_delete?: string | null;
  } & {
    addresses?: ({
      /**
       * Идентификатор адреса
       */
      id?: number;
    } & {
      /**
       * Идентификатор клиента
       */
      customer_id?: number;
      /**
       * Строка с полным описанием адреса
       */
      address_string?: string;
      /**
       * Является адресом по-умолчанию
       */
      default?: boolean;
      post_index?: string | null;
      country_code?: string | null;
      region?: string | null;
      region_guid?: string | null;
      area?: string | null;
      area_guid?: string | null;
      city?: string | null;
      /**
       * Код ФИАС города
       */
      city_guid?: string;
      street?: string | null;
      house?: string | null;
      block?: string | null;
      porch?: string | null;
      intercom?: string | null;
      floor?: string | null;
      flat?: string | null;
      comment?: string | null;
      geo_lat?: number | null;
      geo_lon?: number | null;
    })[];
    status?: {
      /**
       * Идентификатор статуса
       */
      id?: number;
    } & {
      /**
       * Название статуса
       */
      name?: string;
    };
    attributes?: ({
      /**
       * Идентификатор свойства
       */
      id?: number;
    } & {
      /**
       * Название свойства
       */
      name?: string;
    })[];
    user?: {
      /**
       * Идентификатор пользователя
       */
      id?: number;
      /**
       * Дата регистрации
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * Активен
       */
      active?: boolean;
      /**
       * Логин
       */
      login?: string;
    };
  } & {};
  responsible?: {
    /**
     * Идентификатор admin-пользователя
     */
    id?: number;
    /**
     * Полное ФИО
     */
    full_name?: string;
    /**
     * Сокращенное ФИО
     */
    short_name?: string;
    /**
     * Дата регистрации
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
  } & {
    /**
     * Активен
     */
    active?: boolean;
    /**
     * Логин
     */
    login?: string;
    last_name?: string | null;
    first_name?: string | null;
    middle_name?: string | null;
    /**
     * Email
     */
    email?: string;
    /**
     * Телефон
     */
    phone?: string;
    /**
     * Временная зона
     */
    timezone?: string;
  } & {
    /**
     * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
     */
    roles?: ({
      /**
       * ID роли
       */
      id?: number;
    } & {
      /**
       * Название роли
       */
      title?: string;
      expires?: string | null;
    })[];
  };
  files?: {
    /**
     * ID файла
     */
    id?: number;
    /**
     * ID заказа
     */
    order_id?: number;
    /**
     * Оригинальное название файла
     */
    original_name?: string;
    /**
     * Информация о файле в виде объекта. Для потребителя неважно какие внутри ключи
     */
    file?: {};
    /**
     * дата создания файла
     */
    created_at?: string;
    /**
     * дата обновления файла
     */
    updated_at?: string;
  }[];
};

        export type ChangeOrderPaymentSystemResponseMeta = {};

        export type ChangeOrderPaymentSystemResponse = CommonResponse<ChangeOrderPaymentSystemResponseData, ChangeOrderPaymentSystemResponseMeta>;
        export type ChangeOrderDeliveryRequest = {
  /**
   * служба доставки
   */
  delivery_service?: number;
  /**
   * метод доставки
   */
  delivery_method?: number;
  /**
   * стоимость доставки (без учета скидки) в коп.
   */
  delivery_cost?: number;
  /**
   * стоимость доставки (с учетом скидки) в коп.
   */
  delivery_price?: number;
  /**
   * ID тарифа на доставку из сервиса логистики
   */
  delivery_tariff_id?: number | null;
  /**
   * ID пункта самовывоза из сервиса логистики
   */
  delivery_point_id?: number | null;
  /**
   * адрес
   */
  delivery_address?: {
    /**
     * Полная строка адреса
     */
    address_string?: string;
    /**
     * Код страны
     */
    country_code?: "RU";
    /**
     * Почтовый индекс
     */
    post_index?: string;
    /**
     * Регион
     */
    region?: string;
    /**
     * GUID региона
     */
    region_guid?: string;
    /**
     * название области
     */
    area?: string;
    /**
     * GUID области
     */
    area_guid?: string;
    /**
     * название города
     */
    city?: string;
    /**
     * GUID города
     */
    city_guid?: string;
    /**
     * улица
     */
    street?: string;
    /**
     * дом
     */
    house?: string;
    /**
     * Строение / Корпус
     */
    block?: string;
    /**
     * Квартира / Офис
     */
    flat?: string;
    /**
     * этаж
     */
    floor?: string;
    /**
     * подъезд
     */
    porch?: string;
    /**
     * код домофона
     */
    intercom?: string;
    /**
     * широта
     */
    geo_lat?: string;
    /**
     * долгота
     */
    geo_lon?: string;
  } | null;
  /**
   * комментарий к доставке
   */
  delivery_comment?: string | null;
};


        export type ChangeOrderDeliveryResponseData = {
  /**
   * ID заказа
   */
  id?: number;
  /**
   * номер заказа
   */
  number?: string;
  /**
   * id покупателя
   */
  customer_id?: number;
  /**
   * email покупателя
   */
  customer_email?: string;
  /**
   * стоимость (без учета скидки) (рассчитывается автоматически) в коп.
   */
  cost?: number;
  /**
   * стоимость (с учетом скидок) (рассчитывается автоматически) в коп.
   */
  price?: number;
  /**
   * списано бонусов
   */
  spent_bonus?: number;
  promo_code?: string | null;
  /**
   * начислено бонусов
   */
  added_bonus?: number;
  /**
   * источник взаимодействия из OrdersOrderSourceEnum
   */
  source?: number;
  status_at?: string | null;
  /**
   * статус оплаты из OrdersPaymentStatusEnum
   */
  payment_status?: number;
  payment_status_at?: string | null;
  payed_at?: string | null;
  payment_expires_at?: string | null;
  /**
   * метод оплаты из PaymentMethodEnum
   */
  payment_method?: number;
  /**
   * система оплаты из PaymentSystemEnum
   */
  payment_system?: number;
  payment_external_id?: string | null;
  is_problem_at?: string | null;
  /**
   * флаг, что заказ просроченный
   */
  is_expired?: boolean;
  is_expired_at?: string | null;
  /**
   * флаг, что заказ возвращен
   */
  is_return?: boolean;
  is_return_at?: string | null;
  /**
   * флаг, что заказ частично возвращен
   */
  is_partial_return?: boolean;
  is_partial_return_at?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
} & {
  responsible_id?: number | null;
  /**
   * статус заказа из OrdersOrderStatusEnum
   */
  status?: number;
  client_comment?: string | null;
  receiver_name?: string | null;
  receiver_phone?: string | null;
  receiver_email?: string | null;
  is_problem?: boolean | null;
  problem_comment?: string | null;
} & {
  /**
   * служба доставки
   */
  delivery_service?: number;
  /**
   * метод доставки
   */
  delivery_method?: number;
  /**
   * стоимость доставки (без учета скидки) в коп.
   */
  delivery_cost?: number;
  /**
   * стоимость доставки (с учетом скидки) в коп.
   */
  delivery_price?: number;
  delivery_tariff_id?: number | null;
  delivery_point_id?: number | null;
  delivery_address?: {} | null;
  delivery_comment?: string | null;
} & {
  deliveries?: ({
    /**
     * ID отправления
     */
    id?: number;
    /**
     * ID заказа
     */
    order_id?: number;
    /**
     * номер отправления
     */
    number?: string;
    /**
     * статус отправления из OrdersDeliveryStatusEnum
     */
    status?: number;
    status_at?: string | null;
    /**
     * стоимость доставки, полученная от службы доставки (не влияет на общую стоимость доставки по заказу), коп.
     */
    cost?: number;
    /**
     * ширина (мм)
     */
    width?: number;
    /**
     * высота (мм)
     */
    height?: number;
    /**
     * длина (мм)
     */
    length?: number;
    /**
     * вес (кг)
     */
    weight?: number;
    created_at?: string | null;
    updated_at?: string | null;
  } & {
    date?: string | null;
    timeslot?: {} | null;
  } & {
    shipments?: ({
      /**
       * идентификатор
       */
      id?: number;
      /**
       * номер отгрузки
       */
      number?: string;
      /**
       * ид отправления
       */
      delivery_id?: number;
      /**
       * ид мерчанта
       */
      seller_id?: number;
      /**
       * ид склада
       */
      store_id?: number;
      /**
       * дата установки статуса
       */
      status_at?: string;
      /**
       * сумма товаров отгрузки (расчитывается автоматически), коп.
       */
      cost?: number;
      /**
       * ширина (мм)
       */
      width?: number;
      /**
       * высота (мм)
       */
      height?: number;
      /**
       * длина (мм)
       */
      length?: number;
      /**
       * вес (кг)
       */
      weight?: number;
      /**
       * дата создания
       */
      created_at?: string;
      /**
       * дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * статус отгрузки из OrdersShipmentStatusEnum
       */
      status?: number;
    } & {
      /**
       * Объект типа Delivery
       */
      delivery?: {};
      order_items?: ({
        /**
         * id элемента корзины
         */
        id?: number;
        /**
         * ID заказа
         */
        order_id?: number;
        /**
         * ID отгрузки
         */
        shipment_id?: number;
        /**
         * ID оффера
         */
        offer_id?: number;
        /**
         * Название товара
         */
        name?: string;
        /**
         * Кол-во товара
         */
        qty?: number;
        /**
         * Цена товара (цена * qty - скидки), коп.
         */
        price?: number;
        /**
         * Цена единичного товара (в коп.)
         */
        price_per_one?: number;
        /**
         * Цена товара до скидок (цена * qty), коп.
         */
        cost?: number;
        /**
         * Цена единичного товара до скидок (в коп.)
         */
        cost_per_one?: number;
        /**
         * Информация о товаре
         */
        product_data?: {
          /**
           * Вес нетто товара (кг)
           */
          weight?: number;
          /**
           * Вес брутто товара (кг)
           */
          weight_gross?: number;
          /**
           * Ширина товара (мм)
           */
          width?: number;
          /**
           * Высота товара (мм)
           */
          height?: number;
          /**
           * Длина товара (мм)
           */
          length?: number;
          storage_address?: string | null;
          barcode?: string | null;
        };
        refund_qty?: number | null;
        /**
         * дата создания
         */
        created_at?: string;
        /**
         * дата обновления
         */
        updated_at?: string;
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
        stock?: {
          /**
           * Идентификатор стока
           */
          id?: number;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * ID товарного предложения
           */
          offer_id?: number;
          /**
           * Идентификатор товара
           */
          product_id?: number;
          /**
           * Количество товара для резервирования
           */
          qty?: number;
        } & {};
      })[];
      store?: {
        /**
         * Идентификатор склада
         */
        id?: number;
        /**
         * Время создания склада
         */
        created_at?: string;
        /**
         * Время обновления склада
         */
        updated_at?: string;
      } & {
        /**
         * ID продавца
         */
        seller_id?: number;
        /**
         * ID склада в системе продавца
         */
        xml_id?: string;
        /**
         * Флаг активности склада
         */
        active?: boolean;
        /**
         * Название
         */
        name?: string;
        /**
         * Адрес
         */
        address?: {
          /**
           * Адрес одной строкой
           */
          address_string?: string;
          /**
           * Код страны
           */
          country_code?: string;
          /**
           * Почтовый индекс
           */
          post_index?: string;
          /**
           * Регион
           */
          region?: string;
          /**
           * ФИАС ID региона
           */
          region_guid?: string;
          /**
           * Район в регионе
           */
          area?: string;
          /**
           * ФИАС ID района в регионе
           */
          area_guid?: string;
          /**
           * Город/населенный пункт
           */
          city?: string;
          /**
           * ФИАС ID города/населенного пункта
           */
          city_guid?: string;
          /**
           * Улица
           */
          street?: string;
          /**
           * Дом
           */
          house?: string;
          /**
           * Строение/корпус
           */
          block?: string;
          /**
           * Квартира/офис
           */
          flat?: string;
          /**
           * Подъезд
           */
          porch?: string;
          /**
           * Этаж
           */
          floor?: string;
          /**
           * Домофон
           */
          intercom?: string;
          /**
           * Комментарий к адресу
           */
          comment?: string;
          /**
           * координаты: широта
           */
          geo_lat?: string;
          /**
           * координаты: долгота
           */
          geo_lon?: string;
        };
        /**
         * Часовой пояс
         */
        timezone?: string;
      } & {
        workings?: ({
          /**
           * Идентификатор записи о времени работы
           */
          id?: number;
          /**
           * Время создания записи о времени работы
           */
          created_at?: string;
          /**
           * Время обновления записи о времени работы
           */
          updated_at?: string;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * Флаг активности дня работы склада
           */
          active?: boolean;
          /**
           * День недели (1-7)
           */
          day?: number;
          /**
           * Время начала работы склада (00:00)
           */
          working_start_time?: string;
          /**
           * Время конца работы склада (00:00)
           */
          working_end_time?: string;
        })[];
        contacts?: ({
          /**
           * Идентификатор контактного лица для склада
           */
          id?: number;
          /**
           * Время создания контактного лица для склада
           */
          created_at?: string;
          /**
           * Время обновления контактного лица для склада
           */
          updated_at?: string;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * Имя контактного лица
           */
          name?: string;
          /**
           * Телефон контактного лица
           */
          phone?: string;
          /**
           * Email контактного лица
           */
          email?: string;
        })[];
        pickup_times?: ({
          /**
           * Идентификатор записи о времени отгрузки
           */
          id?: number;
          /**
           * Время создания записи о времени отгрузки
           */
          created_at?: string;
          /**
           * Время обновления записи о времени отгрузки
           */
          updated_at?: string;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * День недели (1-7)
           */
          day?: number;
          /**
           * Код времени отгрузки у службы доставки
           */
          pickup_time_code?: string;
          /**
           * Время начала отгрузки
           */
          pickup_time_start?: string;
          /**
           * Время окончания отгрузки
           */
          pickup_time_end?: string;
          /**
           * Время выгрузки информации о грузе в службу доставки
           */
          cargo_export_time?: string;
          /**
           * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
           */
          delivery_service?: number;
        })[];
      };
      seller?: {
        /**
         * Идентификатор продавца
         */
        id?: number;
        /**
         * Время изменения статуса продавца
         */
        status_at?: string;
        /**
         * Время создания продавца
         */
        created_at?: string;
        /**
         * Время обновления продавца
         */
        updated_at?: string;
      } & {
        /**
         * Юридическое наименование организации
         */
        legal_name?: string;
        /**
         * Внешний код
         */
        external_id?: string;
        /**
         * ИНН
         */
        inn?: string;
        /**
         * КПП
         */
        kpp?: string;
        /**
         * Юр. адрес
         */
        legal_address?: string;
        /**
         * Фактический адрес
         */
        fact_address?: string;
        /**
         * Номер банковского счета
         */
        payment_account?: string;
        /**
         * Наименование банка
         */
        bank?: string;
        /**
         * Юридический адрес банка
         */
        bank_address?: string;
        /**
         * БИК банка
         */
        bank_bik?: string;
        /**
         * Статус продавца. Расшифровка значений:
         *   * `1` - Продавец недооформлен, не дозаполнил информацию
         *   * `2` - Продавец активен
         *   * `3` - Продавец заблокирован
         *
         */
        status?: 1 | 2 | 3;
        /**
         * ID менеджера
         */
        manager_id?: number;
        /**
         * Номер корреспондентского счета банка
         */
        correspondent_account?: string;
        /**
         * Адреса складов отгрузки
         */
        storage_address?: string;
        /**
         * Сайт компании
         */
        site?: string;
        /**
         * Подтверждение о возможности работы с Платформой с использованием автоматических механизмов интеграции
         */
        can_integration?: boolean;
        /**
         * Бренды и товары, которыми торгует продавец
         */
        sale_info?: string;
        /**
         * Город продавца
         */
        city?: string;
      } & {
        owner?: {
          /**
           * Идентификатор пользователя продавца
           */
          id?: number;
          /**
           * Полное ФИО
           */
          full_name?: string;
          /**
           * Сокращенное ФИО
           */
          short_name?: string;
          /**
           * Дата регистрации
           */
          created_at?: string;
          /**
           * Дата обновления
           */
          updated_at?: string;
        } & {
          /**
           * ID продавца
           */
          seller_id?: number;
          /**
           * Активен
           */
          active?: boolean;
          /**
           * Логин
           */
          login?: string;
          last_name?: string | null;
          first_name?: string | null;
          middle_name?: string | null;
          /**
           * Email
           */
          email?: string;
          /**
           * Телефон
           */
          phone?: string;
          /**
           * Временная зона
           */
          timezone?: string;
        } & {
          /**
           * Роли пользователя продавца. Объект, в котором ключ - ID роли (см. UnitsSellerUserRoleEnum)
           */
          roles?: ({
            /**
             * ID роли
             */
            id?: number;
          } & {
            /**
             * Название роли
             */
            title?: string;
            expires?: string | null;
          })[];
        };
        manager?: {
          /**
           * Идентификатор admin-пользователя
           */
          id?: number;
          /**
           * Полное ФИО
           */
          full_name?: string;
          /**
           * Сокращенное ФИО
           */
          short_name?: string;
          /**
           * Дата регистрации
           */
          created_at?: string;
          /**
           * Дата обновления
           */
          updated_at?: string;
        } & {
          /**
           * Активен
           */
          active?: boolean;
          /**
           * Логин
           */
          login?: string;
          last_name?: string | null;
          first_name?: string | null;
          middle_name?: string | null;
          /**
           * Email
           */
          email?: string;
          /**
           * Телефон
           */
          phone?: string;
          /**
           * Временная зона
           */
          timezone?: string;
        } & {
          /**
           * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
           */
          roles?: ({
            /**
             * ID роли
             */
            id?: number;
          } & {
            /**
             * Название роли
             */
            title?: string;
            expires?: string | null;
          })[];
        };
      };
    })[];
  })[];
  customer?: {
    /**
     * Идентификатор покупателя
     */
    id?: number;
    avatar?: string | null;
    delete_request?: string | null;
    /**
     * Дата создания
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
  } & {
    user_id?: number | null;
    status_id?: number | null;
    manager_id?: number | null;
    yandex_metric_id?: string | null;
    google_analytics_id?: string | null;
    attribute_ids?: unknown[] | null;
    /**
     * Активность пользователя
     */
    active?: boolean;
    email?: string | null;
    /**
     * Телефон
     */
    phone?: string;
    last_name?: string | null;
    first_name?: string | null;
    middle_name?: string | null;
    gender?: number | null;
    /**
     * Пользователь создан администратором
     */
    create_by_admin?: boolean;
    city?: string | null;
    birthday?: string | null;
    last_visit_date?: string | null;
    comment_status?: string | null;
    /**
     * Временная зона
     */
    timezone?: string;
    /**
     * Удалены ли данные пользователя
     */
    is_deleted?: boolean;
    error_delete?: string | null;
  } & {
    addresses?: ({
      /**
       * Идентификатор адреса
       */
      id?: number;
    } & {
      /**
       * Идентификатор клиента
       */
      customer_id?: number;
      /**
       * Строка с полным описанием адреса
       */
      address_string?: string;
      /**
       * Является адресом по-умолчанию
       */
      default?: boolean;
      post_index?: string | null;
      country_code?: string | null;
      region?: string | null;
      region_guid?: string | null;
      area?: string | null;
      area_guid?: string | null;
      city?: string | null;
      /**
       * Код ФИАС города
       */
      city_guid?: string;
      street?: string | null;
      house?: string | null;
      block?: string | null;
      porch?: string | null;
      intercom?: string | null;
      floor?: string | null;
      flat?: string | null;
      comment?: string | null;
      geo_lat?: number | null;
      geo_lon?: number | null;
    })[];
    status?: {
      /**
       * Идентификатор статуса
       */
      id?: number;
    } & {
      /**
       * Название статуса
       */
      name?: string;
    };
    attributes?: ({
      /**
       * Идентификатор свойства
       */
      id?: number;
    } & {
      /**
       * Название свойства
       */
      name?: string;
    })[];
    user?: {
      /**
       * Идентификатор пользователя
       */
      id?: number;
      /**
       * Дата регистрации
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * Активен
       */
      active?: boolean;
      /**
       * Логин
       */
      login?: string;
    };
  } & {};
  responsible?: {
    /**
     * Идентификатор admin-пользователя
     */
    id?: number;
    /**
     * Полное ФИО
     */
    full_name?: string;
    /**
     * Сокращенное ФИО
     */
    short_name?: string;
    /**
     * Дата регистрации
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
  } & {
    /**
     * Активен
     */
    active?: boolean;
    /**
     * Логин
     */
    login?: string;
    last_name?: string | null;
    first_name?: string | null;
    middle_name?: string | null;
    /**
     * Email
     */
    email?: string;
    /**
     * Телефон
     */
    phone?: string;
    /**
     * Временная зона
     */
    timezone?: string;
  } & {
    /**
     * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
     */
    roles?: ({
      /**
       * ID роли
       */
      id?: number;
    } & {
      /**
       * Название роли
       */
      title?: string;
      expires?: string | null;
    })[];
  };
  files?: {
    /**
     * ID файла
     */
    id?: number;
    /**
     * ID заказа
     */
    order_id?: number;
    /**
     * Оригинальное название файла
     */
    original_name?: string;
    /**
     * Информация о файле в виде объекта. Для потребителя неважно какие внутри ключи
     */
    file?: {};
    /**
     * дата создания файла
     */
    created_at?: string;
    /**
     * дата обновления файла
     */
    updated_at?: string;
  }[];
};

        export type ChangeOrderDeliveryResponseMeta = {};

        export type ChangeOrderDeliveryResponse = CommonResponse<ChangeOrderDeliveryResponseData, ChangeOrderDeliveryResponseMeta>;
        export type PatchShipmentRequest = {
  /**
   * статус отгрузки из OrdersShipmentStatusEnum
   */
  status?: number;
};


        export type PatchShipmentResponseData = {
  /**
   * идентификатор
   */
  id?: number;
  /**
   * номер отгрузки
   */
  number?: string;
  /**
   * ид отправления
   */
  delivery_id?: number;
  /**
   * ид мерчанта
   */
  seller_id?: number;
  /**
   * ид склада
   */
  store_id?: number;
  /**
   * дата установки статуса
   */
  status_at?: string;
  /**
   * сумма товаров отгрузки (расчитывается автоматически), коп.
   */
  cost?: number;
  /**
   * ширина (мм)
   */
  width?: number;
  /**
   * высота (мм)
   */
  height?: number;
  /**
   * длина (мм)
   */
  length?: number;
  /**
   * вес (кг)
   */
  weight?: number;
  /**
   * дата создания
   */
  created_at?: string;
  /**
   * дата обновления
   */
  updated_at?: string;
} & {
  /**
   * статус отгрузки из OrdersShipmentStatusEnum
   */
  status?: number;
} & {
  /**
   * Объект типа Delivery
   */
  delivery?: {};
  order_items?: ({
    /**
     * id элемента корзины
     */
    id?: number;
    /**
     * ID заказа
     */
    order_id?: number;
    /**
     * ID отгрузки
     */
    shipment_id?: number;
    /**
     * ID оффера
     */
    offer_id?: number;
    /**
     * Название товара
     */
    name?: string;
    /**
     * Кол-во товара
     */
    qty?: number;
    /**
     * Цена товара (цена * qty - скидки), коп.
     */
    price?: number;
    /**
     * Цена единичного товара (в коп.)
     */
    price_per_one?: number;
    /**
     * Цена товара до скидок (цена * qty), коп.
     */
    cost?: number;
    /**
     * Цена единичного товара до скидок (в коп.)
     */
    cost_per_one?: number;
    /**
     * Информация о товаре
     */
    product_data?: {
      /**
       * Вес нетто товара (кг)
       */
      weight?: number;
      /**
       * Вес брутто товара (кг)
       */
      weight_gross?: number;
      /**
       * Ширина товара (мм)
       */
      width?: number;
      /**
       * Высота товара (мм)
       */
      height?: number;
      /**
       * Длина товара (мм)
       */
      length?: number;
      storage_address?: string | null;
      barcode?: string | null;
    };
    refund_qty?: number | null;
    /**
     * дата создания
     */
    created_at?: string;
    /**
     * дата обновления
     */
    updated_at?: string;
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
    stock?: {
      /**
       * Идентификатор стока
       */
      id?: number;
    } & {
      /**
       * ID склада
       */
      store_id?: number;
      /**
       * ID товарного предложения
       */
      offer_id?: number;
      /**
       * Идентификатор товара
       */
      product_id?: number;
      /**
       * Количество товара для резервирования
       */
      qty?: number;
    } & {};
  })[];
  store?: {
    /**
     * Идентификатор склада
     */
    id?: number;
    /**
     * Время создания склада
     */
    created_at?: string;
    /**
     * Время обновления склада
     */
    updated_at?: string;
  } & {
    /**
     * ID продавца
     */
    seller_id?: number;
    /**
     * ID склада в системе продавца
     */
    xml_id?: string;
    /**
     * Флаг активности склада
     */
    active?: boolean;
    /**
     * Название
     */
    name?: string;
    /**
     * Адрес
     */
    address?: {
      /**
       * Адрес одной строкой
       */
      address_string?: string;
      /**
       * Код страны
       */
      country_code?: string;
      /**
       * Почтовый индекс
       */
      post_index?: string;
      /**
       * Регион
       */
      region?: string;
      /**
       * ФИАС ID региона
       */
      region_guid?: string;
      /**
       * Район в регионе
       */
      area?: string;
      /**
       * ФИАС ID района в регионе
       */
      area_guid?: string;
      /**
       * Город/населенный пункт
       */
      city?: string;
      /**
       * ФИАС ID города/населенного пункта
       */
      city_guid?: string;
      /**
       * Улица
       */
      street?: string;
      /**
       * Дом
       */
      house?: string;
      /**
       * Строение/корпус
       */
      block?: string;
      /**
       * Квартира/офис
       */
      flat?: string;
      /**
       * Подъезд
       */
      porch?: string;
      /**
       * Этаж
       */
      floor?: string;
      /**
       * Домофон
       */
      intercom?: string;
      /**
       * Комментарий к адресу
       */
      comment?: string;
      /**
       * координаты: широта
       */
      geo_lat?: string;
      /**
       * координаты: долгота
       */
      geo_lon?: string;
    };
    /**
     * Часовой пояс
     */
    timezone?: string;
  } & {
    workings?: ({
      /**
       * Идентификатор записи о времени работы
       */
      id?: number;
      /**
       * Время создания записи о времени работы
       */
      created_at?: string;
      /**
       * Время обновления записи о времени работы
       */
      updated_at?: string;
    } & {
      /**
       * ID склада
       */
      store_id?: number;
      /**
       * Флаг активности дня работы склада
       */
      active?: boolean;
      /**
       * День недели (1-7)
       */
      day?: number;
      /**
       * Время начала работы склада (00:00)
       */
      working_start_time?: string;
      /**
       * Время конца работы склада (00:00)
       */
      working_end_time?: string;
    })[];
    contacts?: ({
      /**
       * Идентификатор контактного лица для склада
       */
      id?: number;
      /**
       * Время создания контактного лица для склада
       */
      created_at?: string;
      /**
       * Время обновления контактного лица для склада
       */
      updated_at?: string;
    } & {
      /**
       * ID склада
       */
      store_id?: number;
      /**
       * Имя контактного лица
       */
      name?: string;
      /**
       * Телефон контактного лица
       */
      phone?: string;
      /**
       * Email контактного лица
       */
      email?: string;
    })[];
    pickup_times?: ({
      /**
       * Идентификатор записи о времени отгрузки
       */
      id?: number;
      /**
       * Время создания записи о времени отгрузки
       */
      created_at?: string;
      /**
       * Время обновления записи о времени отгрузки
       */
      updated_at?: string;
    } & {
      /**
       * ID склада
       */
      store_id?: number;
      /**
       * День недели (1-7)
       */
      day?: number;
      /**
       * Код времени отгрузки у службы доставки
       */
      pickup_time_code?: string;
      /**
       * Время начала отгрузки
       */
      pickup_time_start?: string;
      /**
       * Время окончания отгрузки
       */
      pickup_time_end?: string;
      /**
       * Время выгрузки информации о грузе в службу доставки
       */
      cargo_export_time?: string;
      /**
       * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
       */
      delivery_service?: number;
    })[];
  };
  seller?: {
    /**
     * Идентификатор продавца
     */
    id?: number;
    /**
     * Время изменения статуса продавца
     */
    status_at?: string;
    /**
     * Время создания продавца
     */
    created_at?: string;
    /**
     * Время обновления продавца
     */
    updated_at?: string;
  } & {
    /**
     * Юридическое наименование организации
     */
    legal_name?: string;
    /**
     * Внешний код
     */
    external_id?: string;
    /**
     * ИНН
     */
    inn?: string;
    /**
     * КПП
     */
    kpp?: string;
    /**
     * Юр. адрес
     */
    legal_address?: string;
    /**
     * Фактический адрес
     */
    fact_address?: string;
    /**
     * Номер банковского счета
     */
    payment_account?: string;
    /**
     * Наименование банка
     */
    bank?: string;
    /**
     * Юридический адрес банка
     */
    bank_address?: string;
    /**
     * БИК банка
     */
    bank_bik?: string;
    /**
     * Статус продавца. Расшифровка значений:
     *   * `1` - Продавец недооформлен, не дозаполнил информацию
     *   * `2` - Продавец активен
     *   * `3` - Продавец заблокирован
     *
     */
    status?: 1 | 2 | 3;
    /**
     * ID менеджера
     */
    manager_id?: number;
    /**
     * Номер корреспондентского счета банка
     */
    correspondent_account?: string;
    /**
     * Адреса складов отгрузки
     */
    storage_address?: string;
    /**
     * Сайт компании
     */
    site?: string;
    /**
     * Подтверждение о возможности работы с Платформой с использованием автоматических механизмов интеграции
     */
    can_integration?: boolean;
    /**
     * Бренды и товары, которыми торгует продавец
     */
    sale_info?: string;
    /**
     * Город продавца
     */
    city?: string;
  } & {
    owner?: {
      /**
       * Идентификатор пользователя продавца
       */
      id?: number;
      /**
       * Полное ФИО
       */
      full_name?: string;
      /**
       * Сокращенное ФИО
       */
      short_name?: string;
      /**
       * Дата регистрации
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * ID продавца
       */
      seller_id?: number;
      /**
       * Активен
       */
      active?: boolean;
      /**
       * Логин
       */
      login?: string;
      last_name?: string | null;
      first_name?: string | null;
      middle_name?: string | null;
      /**
       * Email
       */
      email?: string;
      /**
       * Телефон
       */
      phone?: string;
      /**
       * Временная зона
       */
      timezone?: string;
    } & {
      /**
       * Роли пользователя продавца. Объект, в котором ключ - ID роли (см. UnitsSellerUserRoleEnum)
       */
      roles?: ({
        /**
         * ID роли
         */
        id?: number;
      } & {
        /**
         * Название роли
         */
        title?: string;
        expires?: string | null;
      })[];
    };
    manager?: {
      /**
       * Идентификатор admin-пользователя
       */
      id?: number;
      /**
       * Полное ФИО
       */
      full_name?: string;
      /**
       * Сокращенное ФИО
       */
      short_name?: string;
      /**
       * Дата регистрации
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * Активен
       */
      active?: boolean;
      /**
       * Логин
       */
      login?: string;
      last_name?: string | null;
      first_name?: string | null;
      middle_name?: string | null;
      /**
       * Email
       */
      email?: string;
      /**
       * Телефон
       */
      phone?: string;
      /**
       * Временная зона
       */
      timezone?: string;
    } & {
      /**
       * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
       */
      roles?: ({
        /**
         * ID роли
         */
        id?: number;
      } & {
        /**
         * Название роли
         */
        title?: string;
        expires?: string | null;
      })[];
    };
  };
};

        export type PatchShipmentResponseMeta = {};

        export type PatchShipmentResponse = CommonResponse<PatchShipmentResponseData, PatchShipmentResponseMeta>;
        export type PatchDeliveryRequest = {
  /**
   * желаемая дата доставки
   */
  date?: string | null;
  /**
   * Слот доставки
   */
  timeslot?: {
    /**
     * Идентификатор слота
     */
    id?: string;
    /**
     * Время начала
     */
    from?: string;
    /**
     * Время окончания
     */
    to?: string;
  } | null;
};


        export type PatchDeliveryResponseData = {
  /**
   * ID отправления
   */
  id?: number;
  /**
   * ID заказа
   */
  order_id?: number;
  /**
   * номер отправления
   */
  number?: string;
  /**
   * статус отправления из OrdersDeliveryStatusEnum
   */
  status?: number;
  status_at?: string | null;
  /**
   * стоимость доставки, полученная от службы доставки (не влияет на общую стоимость доставки по заказу), коп.
   */
  cost?: number;
  /**
   * ширина (мм)
   */
  width?: number;
  /**
   * высота (мм)
   */
  height?: number;
  /**
   * длина (мм)
   */
  length?: number;
  /**
   * вес (кг)
   */
  weight?: number;
  created_at?: string | null;
  updated_at?: string | null;
} & {
  date?: string | null;
  timeslot?: {} | null;
} & {
  shipments?: ({
    /**
     * идентификатор
     */
    id?: number;
    /**
     * номер отгрузки
     */
    number?: string;
    /**
     * ид отправления
     */
    delivery_id?: number;
    /**
     * ид мерчанта
     */
    seller_id?: number;
    /**
     * ид склада
     */
    store_id?: number;
    /**
     * дата установки статуса
     */
    status_at?: string;
    /**
     * сумма товаров отгрузки (расчитывается автоматически), коп.
     */
    cost?: number;
    /**
     * ширина (мм)
     */
    width?: number;
    /**
     * высота (мм)
     */
    height?: number;
    /**
     * длина (мм)
     */
    length?: number;
    /**
     * вес (кг)
     */
    weight?: number;
    /**
     * дата создания
     */
    created_at?: string;
    /**
     * дата обновления
     */
    updated_at?: string;
  } & {
    /**
     * статус отгрузки из OrdersShipmentStatusEnum
     */
    status?: number;
  } & {
    /**
     * Объект типа Delivery
     */
    delivery?: {};
    order_items?: ({
      /**
       * id элемента корзины
       */
      id?: number;
      /**
       * ID заказа
       */
      order_id?: number;
      /**
       * ID отгрузки
       */
      shipment_id?: number;
      /**
       * ID оффера
       */
      offer_id?: number;
      /**
       * Название товара
       */
      name?: string;
      /**
       * Кол-во товара
       */
      qty?: number;
      /**
       * Цена товара (цена * qty - скидки), коп.
       */
      price?: number;
      /**
       * Цена единичного товара (в коп.)
       */
      price_per_one?: number;
      /**
       * Цена товара до скидок (цена * qty), коп.
       */
      cost?: number;
      /**
       * Цена единичного товара до скидок (в коп.)
       */
      cost_per_one?: number;
      /**
       * Информация о товаре
       */
      product_data?: {
        /**
         * Вес нетто товара (кг)
         */
        weight?: number;
        /**
         * Вес брутто товара (кг)
         */
        weight_gross?: number;
        /**
         * Ширина товара (мм)
         */
        width?: number;
        /**
         * Высота товара (мм)
         */
        height?: number;
        /**
         * Длина товара (мм)
         */
        length?: number;
        storage_address?: string | null;
        barcode?: string | null;
      };
      refund_qty?: number | null;
      /**
       * дата создания
       */
      created_at?: string;
      /**
       * дата обновления
       */
      updated_at?: string;
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
      stock?: {
        /**
         * Идентификатор стока
         */
        id?: number;
      } & {
        /**
         * ID склада
         */
        store_id?: number;
        /**
         * ID товарного предложения
         */
        offer_id?: number;
        /**
         * Идентификатор товара
         */
        product_id?: number;
        /**
         * Количество товара для резервирования
         */
        qty?: number;
      } & {};
    })[];
    store?: {
      /**
       * Идентификатор склада
       */
      id?: number;
      /**
       * Время создания склада
       */
      created_at?: string;
      /**
       * Время обновления склада
       */
      updated_at?: string;
    } & {
      /**
       * ID продавца
       */
      seller_id?: number;
      /**
       * ID склада в системе продавца
       */
      xml_id?: string;
      /**
       * Флаг активности склада
       */
      active?: boolean;
      /**
       * Название
       */
      name?: string;
      /**
       * Адрес
       */
      address?: {
        /**
         * Адрес одной строкой
         */
        address_string?: string;
        /**
         * Код страны
         */
        country_code?: string;
        /**
         * Почтовый индекс
         */
        post_index?: string;
        /**
         * Регион
         */
        region?: string;
        /**
         * ФИАС ID региона
         */
        region_guid?: string;
        /**
         * Район в регионе
         */
        area?: string;
        /**
         * ФИАС ID района в регионе
         */
        area_guid?: string;
        /**
         * Город/населенный пункт
         */
        city?: string;
        /**
         * ФИАС ID города/населенного пункта
         */
        city_guid?: string;
        /**
         * Улица
         */
        street?: string;
        /**
         * Дом
         */
        house?: string;
        /**
         * Строение/корпус
         */
        block?: string;
        /**
         * Квартира/офис
         */
        flat?: string;
        /**
         * Подъезд
         */
        porch?: string;
        /**
         * Этаж
         */
        floor?: string;
        /**
         * Домофон
         */
        intercom?: string;
        /**
         * Комментарий к адресу
         */
        comment?: string;
        /**
         * координаты: широта
         */
        geo_lat?: string;
        /**
         * координаты: долгота
         */
        geo_lon?: string;
      };
      /**
       * Часовой пояс
       */
      timezone?: string;
    } & {
      workings?: ({
        /**
         * Идентификатор записи о времени работы
         */
        id?: number;
        /**
         * Время создания записи о времени работы
         */
        created_at?: string;
        /**
         * Время обновления записи о времени работы
         */
        updated_at?: string;
      } & {
        /**
         * ID склада
         */
        store_id?: number;
        /**
         * Флаг активности дня работы склада
         */
        active?: boolean;
        /**
         * День недели (1-7)
         */
        day?: number;
        /**
         * Время начала работы склада (00:00)
         */
        working_start_time?: string;
        /**
         * Время конца работы склада (00:00)
         */
        working_end_time?: string;
      })[];
      contacts?: ({
        /**
         * Идентификатор контактного лица для склада
         */
        id?: number;
        /**
         * Время создания контактного лица для склада
         */
        created_at?: string;
        /**
         * Время обновления контактного лица для склада
         */
        updated_at?: string;
      } & {
        /**
         * ID склада
         */
        store_id?: number;
        /**
         * Имя контактного лица
         */
        name?: string;
        /**
         * Телефон контактного лица
         */
        phone?: string;
        /**
         * Email контактного лица
         */
        email?: string;
      })[];
      pickup_times?: ({
        /**
         * Идентификатор записи о времени отгрузки
         */
        id?: number;
        /**
         * Время создания записи о времени отгрузки
         */
        created_at?: string;
        /**
         * Время обновления записи о времени отгрузки
         */
        updated_at?: string;
      } & {
        /**
         * ID склада
         */
        store_id?: number;
        /**
         * День недели (1-7)
         */
        day?: number;
        /**
         * Код времени отгрузки у службы доставки
         */
        pickup_time_code?: string;
        /**
         * Время начала отгрузки
         */
        pickup_time_start?: string;
        /**
         * Время окончания отгрузки
         */
        pickup_time_end?: string;
        /**
         * Время выгрузки информации о грузе в службу доставки
         */
        cargo_export_time?: string;
        /**
         * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
         */
        delivery_service?: number;
      })[];
    };
    seller?: {
      /**
       * Идентификатор продавца
       */
      id?: number;
      /**
       * Время изменения статуса продавца
       */
      status_at?: string;
      /**
       * Время создания продавца
       */
      created_at?: string;
      /**
       * Время обновления продавца
       */
      updated_at?: string;
    } & {
      /**
       * Юридическое наименование организации
       */
      legal_name?: string;
      /**
       * Внешний код
       */
      external_id?: string;
      /**
       * ИНН
       */
      inn?: string;
      /**
       * КПП
       */
      kpp?: string;
      /**
       * Юр. адрес
       */
      legal_address?: string;
      /**
       * Фактический адрес
       */
      fact_address?: string;
      /**
       * Номер банковского счета
       */
      payment_account?: string;
      /**
       * Наименование банка
       */
      bank?: string;
      /**
       * Юридический адрес банка
       */
      bank_address?: string;
      /**
       * БИК банка
       */
      bank_bik?: string;
      /**
       * Статус продавца. Расшифровка значений:
       *   * `1` - Продавец недооформлен, не дозаполнил информацию
       *   * `2` - Продавец активен
       *   * `3` - Продавец заблокирован
       *
       */
      status?: 1 | 2 | 3;
      /**
       * ID менеджера
       */
      manager_id?: number;
      /**
       * Номер корреспондентского счета банка
       */
      correspondent_account?: string;
      /**
       * Адреса складов отгрузки
       */
      storage_address?: string;
      /**
       * Сайт компании
       */
      site?: string;
      /**
       * Подтверждение о возможности работы с Платформой с использованием автоматических механизмов интеграции
       */
      can_integration?: boolean;
      /**
       * Бренды и товары, которыми торгует продавец
       */
      sale_info?: string;
      /**
       * Город продавца
       */
      city?: string;
    } & {
      owner?: {
        /**
         * Идентификатор пользователя продавца
         */
        id?: number;
        /**
         * Полное ФИО
         */
        full_name?: string;
        /**
         * Сокращенное ФИО
         */
        short_name?: string;
        /**
         * Дата регистрации
         */
        created_at?: string;
        /**
         * Дата обновления
         */
        updated_at?: string;
      } & {
        /**
         * ID продавца
         */
        seller_id?: number;
        /**
         * Активен
         */
        active?: boolean;
        /**
         * Логин
         */
        login?: string;
        last_name?: string | null;
        first_name?: string | null;
        middle_name?: string | null;
        /**
         * Email
         */
        email?: string;
        /**
         * Телефон
         */
        phone?: string;
        /**
         * Временная зона
         */
        timezone?: string;
      } & {
        /**
         * Роли пользователя продавца. Объект, в котором ключ - ID роли (см. UnitsSellerUserRoleEnum)
         */
        roles?: ({
          /**
           * ID роли
           */
          id?: number;
        } & {
          /**
           * Название роли
           */
          title?: string;
          expires?: string | null;
        })[];
      };
      manager?: {
        /**
         * Идентификатор admin-пользователя
         */
        id?: number;
        /**
         * Полное ФИО
         */
        full_name?: string;
        /**
         * Сокращенное ФИО
         */
        short_name?: string;
        /**
         * Дата регистрации
         */
        created_at?: string;
        /**
         * Дата обновления
         */
        updated_at?: string;
      } & {
        /**
         * Активен
         */
        active?: boolean;
        /**
         * Логин
         */
        login?: string;
        last_name?: string | null;
        first_name?: string | null;
        middle_name?: string | null;
        /**
         * Email
         */
        email?: string;
        /**
         * Телефон
         */
        phone?: string;
        /**
         * Временная зона
         */
        timezone?: string;
      } & {
        /**
         * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
         */
        roles?: ({
          /**
           * ID роли
           */
          id?: number;
        } & {
          /**
           * Название роли
           */
          title?: string;
          expires?: string | null;
        })[];
      };
    };
  })[];
};

        export type PatchDeliveryResponseMeta = {};

        export type PatchDeliveryResponse = CommonResponse<PatchDeliveryResponseData, PatchDeliveryResponseMeta>;
        export type CreateRefundReasonRequest = {
  /**
   * Символьный код причины возврата
   */
  code?: string;
  /**
   * Название причины возврата
   */
  name?: string;
  /**
   * Детальное описание причины возврата
   */
  description?: string | null;
} & {};


        export type CreateRefundReasonResponseData = {
  /**
   * идентификатор
   */
  id?: number;
  /**
   * дата создания
   */
  created_at?: string;
  /**
   * дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Символьный код причины возврата
   */
  code?: string;
  /**
   * Название причины возврата
   */
  name?: string;
  description?: string | null;
};

        export type CreateRefundReasonResponseMeta = {};

        export type CreateRefundReasonResponse = CommonResponse<CreateRefundReasonResponseData, CreateRefundReasonResponseMeta>;
        export type PatchRefundReasonRequest = {
  /**
   * Символьный код причины возврата
   */
  code?: string;
  /**
   * Название причины возврата
   */
  name?: string;
  description?: string | null;
};


        export type PatchRefundReasonResponseData = {
  /**
   * идентификатор
   */
  id?: number;
  /**
   * дата создания
   */
  created_at?: string;
  /**
   * дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Символьный код причины возврата
   */
  code?: string;
  /**
   * Название причины возврата
   */
  name?: string;
  description?: string | null;
};

        export type PatchRefundReasonResponseMeta = {};

        export type PatchRefundReasonResponse = CommonResponse<PatchRefundReasonResponseData, PatchRefundReasonResponseMeta>;
        export type CreateRefundRequest = {
  /**
   * идентификатор заказа
   */
  order_id?: number;
  /**
   * идентификатор администратора (если автором был администратор)
   */
  manager_id?: number | null;
  /**
   * источник взаимодействия (канал)
   */
  source?: number;
  /**
   * комментарий пользователя
   */
  user_comment?: string;
} & {
  /**
   * статус заявки на возврат из OrderRefundStatusEnum
   */
  status?: number;
  /**
   * идентификатор ответственного
   */
  responsible_id?: number | null;
  /**
   * причина отклонения
   */
  rejection_comment?: string | null;
} & {
  order_items?: {
    /**
     * идентификатор элемента корзины
     */
    id?: number;
    /**
     * количество возвращаемых позиций
     */
    qty?: number;
  }[];
  refund_reason_ids?: number[];
};


        export type CreateRefundResponseData = {
  /**
   * идентификатор
   */
  id?: number;
  /**
   * сумма возврата, коп.
   */
  price?: number;
  /**
   * является заявкой на частичный возврат
   */
  is_partial?: boolean;
  files?: {
    /**
     * идентификатор
     */
    id?: number;
    /**
     * идентификатор заявки на возврат
     */
    refund_id?: number;
    /**
     * Оригинальное название файла
     */
    original_name?: string;
    /**
     * Информация о файле в виде объекта. Для потребителя неважно какие внутри ключи
     */
    file?: {};
    /**
     * дата загрузки файла
     */
    created_at?: string;
    /**
     * дата обновления файла
     */
    updated_at?: string;
  }[];
  /**
   * дата создания
   */
  created_at?: string;
  /**
   * дата обновления
   */
  updated_at?: string;
} & {
  /**
   * статус заявки на возврат из OrderRefundStatusEnum
   */
  status?: number;
  responsible_id?: number | null;
  rejection_comment?: string | null;
} & {
  /**
   * идентификатор заказа
   */
  order_id?: number;
  manager_id?: number | null;
  /**
   * источник взаимодействия (канал)
   */
  source?: number;
  /**
   * комментарий пользователя
   */
  user_comment?: string;
} & {
  order?: {
    /**
     * ID заказа
     */
    id?: number;
    /**
     * номер заказа
     */
    number?: string;
    /**
     * id покупателя
     */
    customer_id?: number;
    /**
     * email покупателя
     */
    customer_email?: string;
    /**
     * стоимость (без учета скидки) (рассчитывается автоматически) в коп.
     */
    cost?: number;
    /**
     * стоимость (с учетом скидок) (рассчитывается автоматически) в коп.
     */
    price?: number;
    /**
     * списано бонусов
     */
    spent_bonus?: number;
    promo_code?: string | null;
    /**
     * начислено бонусов
     */
    added_bonus?: number;
    /**
     * источник взаимодействия из OrdersOrderSourceEnum
     */
    source?: number;
    status_at?: string | null;
    /**
     * статус оплаты из OrdersPaymentStatusEnum
     */
    payment_status?: number;
    payment_status_at?: string | null;
    payed_at?: string | null;
    payment_expires_at?: string | null;
    /**
     * метод оплаты из PaymentMethodEnum
     */
    payment_method?: number;
    /**
     * система оплаты из PaymentSystemEnum
     */
    payment_system?: number;
    payment_external_id?: string | null;
    is_problem_at?: string | null;
    /**
     * флаг, что заказ просроченный
     */
    is_expired?: boolean;
    is_expired_at?: string | null;
    /**
     * флаг, что заказ возвращен
     */
    is_return?: boolean;
    is_return_at?: string | null;
    /**
     * флаг, что заказ частично возвращен
     */
    is_partial_return?: boolean;
    is_partial_return_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
  } & {
    responsible_id?: number | null;
    /**
     * статус заказа из OrdersOrderStatusEnum
     */
    status?: number;
    client_comment?: string | null;
    receiver_name?: string | null;
    receiver_phone?: string | null;
    receiver_email?: string | null;
    is_problem?: boolean | null;
    problem_comment?: string | null;
  } & {
    /**
     * служба доставки
     */
    delivery_service?: number;
    /**
     * метод доставки
     */
    delivery_method?: number;
    /**
     * стоимость доставки (без учета скидки) в коп.
     */
    delivery_cost?: number;
    /**
     * стоимость доставки (с учетом скидки) в коп.
     */
    delivery_price?: number;
    delivery_tariff_id?: number | null;
    delivery_point_id?: number | null;
    delivery_address?: {} | null;
    delivery_comment?: string | null;
  } & {
    deliveries?: ({
      /**
       * ID отправления
       */
      id?: number;
      /**
       * ID заказа
       */
      order_id?: number;
      /**
       * номер отправления
       */
      number?: string;
      /**
       * статус отправления из OrdersDeliveryStatusEnum
       */
      status?: number;
      status_at?: string | null;
      /**
       * стоимость доставки, полученная от службы доставки (не влияет на общую стоимость доставки по заказу), коп.
       */
      cost?: number;
      /**
       * ширина (мм)
       */
      width?: number;
      /**
       * высота (мм)
       */
      height?: number;
      /**
       * длина (мм)
       */
      length?: number;
      /**
       * вес (кг)
       */
      weight?: number;
      created_at?: string | null;
      updated_at?: string | null;
    } & {
      date?: string | null;
      timeslot?: {} | null;
    } & {
      shipments?: ({
        /**
         * идентификатор
         */
        id?: number;
        /**
         * номер отгрузки
         */
        number?: string;
        /**
         * ид отправления
         */
        delivery_id?: number;
        /**
         * ид мерчанта
         */
        seller_id?: number;
        /**
         * ид склада
         */
        store_id?: number;
        /**
         * дата установки статуса
         */
        status_at?: string;
        /**
         * сумма товаров отгрузки (расчитывается автоматически), коп.
         */
        cost?: number;
        /**
         * ширина (мм)
         */
        width?: number;
        /**
         * высота (мм)
         */
        height?: number;
        /**
         * длина (мм)
         */
        length?: number;
        /**
         * вес (кг)
         */
        weight?: number;
        /**
         * дата создания
         */
        created_at?: string;
        /**
         * дата обновления
         */
        updated_at?: string;
      } & {
        /**
         * статус отгрузки из OrdersShipmentStatusEnum
         */
        status?: number;
      } & {
        /**
         * Объект типа Delivery
         */
        delivery?: {};
        order_items?: ({
          /**
           * id элемента корзины
           */
          id?: number;
          /**
           * ID заказа
           */
          order_id?: number;
          /**
           * ID отгрузки
           */
          shipment_id?: number;
          /**
           * ID оффера
           */
          offer_id?: number;
          /**
           * Название товара
           */
          name?: string;
          /**
           * Кол-во товара
           */
          qty?: number;
          /**
           * Цена товара (цена * qty - скидки), коп.
           */
          price?: number;
          /**
           * Цена единичного товара (в коп.)
           */
          price_per_one?: number;
          /**
           * Цена товара до скидок (цена * qty), коп.
           */
          cost?: number;
          /**
           * Цена единичного товара до скидок (в коп.)
           */
          cost_per_one?: number;
          /**
           * Информация о товаре
           */
          product_data?: {
            /**
             * Вес нетто товара (кг)
             */
            weight?: number;
            /**
             * Вес брутто товара (кг)
             */
            weight_gross?: number;
            /**
             * Ширина товара (мм)
             */
            width?: number;
            /**
             * Высота товара (мм)
             */
            height?: number;
            /**
             * Длина товара (мм)
             */
            length?: number;
            storage_address?: string | null;
            barcode?: string | null;
          };
          refund_qty?: number | null;
          /**
           * дата создания
           */
          created_at?: string;
          /**
           * дата обновления
           */
          updated_at?: string;
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
          stock?: {
            /**
             * Идентификатор стока
             */
            id?: number;
          } & {
            /**
             * ID склада
             */
            store_id?: number;
            /**
             * ID товарного предложения
             */
            offer_id?: number;
            /**
             * Идентификатор товара
             */
            product_id?: number;
            /**
             * Количество товара для резервирования
             */
            qty?: number;
          } & {};
        })[];
        store?: {
          /**
           * Идентификатор склада
           */
          id?: number;
          /**
           * Время создания склада
           */
          created_at?: string;
          /**
           * Время обновления склада
           */
          updated_at?: string;
        } & {
          /**
           * ID продавца
           */
          seller_id?: number;
          /**
           * ID склада в системе продавца
           */
          xml_id?: string;
          /**
           * Флаг активности склада
           */
          active?: boolean;
          /**
           * Название
           */
          name?: string;
          /**
           * Адрес
           */
          address?: {
            /**
             * Адрес одной строкой
             */
            address_string?: string;
            /**
             * Код страны
             */
            country_code?: string;
            /**
             * Почтовый индекс
             */
            post_index?: string;
            /**
             * Регион
             */
            region?: string;
            /**
             * ФИАС ID региона
             */
            region_guid?: string;
            /**
             * Район в регионе
             */
            area?: string;
            /**
             * ФИАС ID района в регионе
             */
            area_guid?: string;
            /**
             * Город/населенный пункт
             */
            city?: string;
            /**
             * ФИАС ID города/населенного пункта
             */
            city_guid?: string;
            /**
             * Улица
             */
            street?: string;
            /**
             * Дом
             */
            house?: string;
            /**
             * Строение/корпус
             */
            block?: string;
            /**
             * Квартира/офис
             */
            flat?: string;
            /**
             * Подъезд
             */
            porch?: string;
            /**
             * Этаж
             */
            floor?: string;
            /**
             * Домофон
             */
            intercom?: string;
            /**
             * Комментарий к адресу
             */
            comment?: string;
            /**
             * координаты: широта
             */
            geo_lat?: string;
            /**
             * координаты: долгота
             */
            geo_lon?: string;
          };
          /**
           * Часовой пояс
           */
          timezone?: string;
        } & {
          workings?: ({
            /**
             * Идентификатор записи о времени работы
             */
            id?: number;
            /**
             * Время создания записи о времени работы
             */
            created_at?: string;
            /**
             * Время обновления записи о времени работы
             */
            updated_at?: string;
          } & {
            /**
             * ID склада
             */
            store_id?: number;
            /**
             * Флаг активности дня работы склада
             */
            active?: boolean;
            /**
             * День недели (1-7)
             */
            day?: number;
            /**
             * Время начала работы склада (00:00)
             */
            working_start_time?: string;
            /**
             * Время конца работы склада (00:00)
             */
            working_end_time?: string;
          })[];
          contacts?: ({
            /**
             * Идентификатор контактного лица для склада
             */
            id?: number;
            /**
             * Время создания контактного лица для склада
             */
            created_at?: string;
            /**
             * Время обновления контактного лица для склада
             */
            updated_at?: string;
          } & {
            /**
             * ID склада
             */
            store_id?: number;
            /**
             * Имя контактного лица
             */
            name?: string;
            /**
             * Телефон контактного лица
             */
            phone?: string;
            /**
             * Email контактного лица
             */
            email?: string;
          })[];
          pickup_times?: ({
            /**
             * Идентификатор записи о времени отгрузки
             */
            id?: number;
            /**
             * Время создания записи о времени отгрузки
             */
            created_at?: string;
            /**
             * Время обновления записи о времени отгрузки
             */
            updated_at?: string;
          } & {
            /**
             * ID склада
             */
            store_id?: number;
            /**
             * День недели (1-7)
             */
            day?: number;
            /**
             * Код времени отгрузки у службы доставки
             */
            pickup_time_code?: string;
            /**
             * Время начала отгрузки
             */
            pickup_time_start?: string;
            /**
             * Время окончания отгрузки
             */
            pickup_time_end?: string;
            /**
             * Время выгрузки информации о грузе в службу доставки
             */
            cargo_export_time?: string;
            /**
             * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
             */
            delivery_service?: number;
          })[];
        };
        seller?: {
          /**
           * Идентификатор продавца
           */
          id?: number;
          /**
           * Время изменения статуса продавца
           */
          status_at?: string;
          /**
           * Время создания продавца
           */
          created_at?: string;
          /**
           * Время обновления продавца
           */
          updated_at?: string;
        } & {
          /**
           * Юридическое наименование организации
           */
          legal_name?: string;
          /**
           * Внешний код
           */
          external_id?: string;
          /**
           * ИНН
           */
          inn?: string;
          /**
           * КПП
           */
          kpp?: string;
          /**
           * Юр. адрес
           */
          legal_address?: string;
          /**
           * Фактический адрес
           */
          fact_address?: string;
          /**
           * Номер банковского счета
           */
          payment_account?: string;
          /**
           * Наименование банка
           */
          bank?: string;
          /**
           * Юридический адрес банка
           */
          bank_address?: string;
          /**
           * БИК банка
           */
          bank_bik?: string;
          /**
           * Статус продавца. Расшифровка значений:
           *   * `1` - Продавец недооформлен, не дозаполнил информацию
           *   * `2` - Продавец активен
           *   * `3` - Продавец заблокирован
           *
           */
          status?: 1 | 2 | 3;
          /**
           * ID менеджера
           */
          manager_id?: number;
          /**
           * Номер корреспондентского счета банка
           */
          correspondent_account?: string;
          /**
           * Адреса складов отгрузки
           */
          storage_address?: string;
          /**
           * Сайт компании
           */
          site?: string;
          /**
           * Подтверждение о возможности работы с Платформой с использованием автоматических механизмов интеграции
           */
          can_integration?: boolean;
          /**
           * Бренды и товары, которыми торгует продавец
           */
          sale_info?: string;
          /**
           * Город продавца
           */
          city?: string;
        } & {
          owner?: {
            /**
             * Идентификатор пользователя продавца
             */
            id?: number;
            /**
             * Полное ФИО
             */
            full_name?: string;
            /**
             * Сокращенное ФИО
             */
            short_name?: string;
            /**
             * Дата регистрации
             */
            created_at?: string;
            /**
             * Дата обновления
             */
            updated_at?: string;
          } & {
            /**
             * ID продавца
             */
            seller_id?: number;
            /**
             * Активен
             */
            active?: boolean;
            /**
             * Логин
             */
            login?: string;
            last_name?: string | null;
            first_name?: string | null;
            middle_name?: string | null;
            /**
             * Email
             */
            email?: string;
            /**
             * Телефон
             */
            phone?: string;
            /**
             * Временная зона
             */
            timezone?: string;
          } & {
            /**
             * Роли пользователя продавца. Объект, в котором ключ - ID роли (см. UnitsSellerUserRoleEnum)
             */
            roles?: ({
              /**
               * ID роли
               */
              id?: number;
            } & {
              /**
               * Название роли
               */
              title?: string;
              expires?: string | null;
            })[];
          };
          manager?: {
            /**
             * Идентификатор admin-пользователя
             */
            id?: number;
            /**
             * Полное ФИО
             */
            full_name?: string;
            /**
             * Сокращенное ФИО
             */
            short_name?: string;
            /**
             * Дата регистрации
             */
            created_at?: string;
            /**
             * Дата обновления
             */
            updated_at?: string;
          } & {
            /**
             * Активен
             */
            active?: boolean;
            /**
             * Логин
             */
            login?: string;
            last_name?: string | null;
            first_name?: string | null;
            middle_name?: string | null;
            /**
             * Email
             */
            email?: string;
            /**
             * Телефон
             */
            phone?: string;
            /**
             * Временная зона
             */
            timezone?: string;
          } & {
            /**
             * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
             */
            roles?: ({
              /**
               * ID роли
               */
              id?: number;
            } & {
              /**
               * Название роли
               */
              title?: string;
              expires?: string | null;
            })[];
          };
        };
      })[];
    })[];
    customer?: {
      /**
       * Идентификатор покупателя
       */
      id?: number;
      avatar?: string | null;
      delete_request?: string | null;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      user_id?: number | null;
      status_id?: number | null;
      manager_id?: number | null;
      yandex_metric_id?: string | null;
      google_analytics_id?: string | null;
      attribute_ids?: unknown[] | null;
      /**
       * Активность пользователя
       */
      active?: boolean;
      email?: string | null;
      /**
       * Телефон
       */
      phone?: string;
      last_name?: string | null;
      first_name?: string | null;
      middle_name?: string | null;
      gender?: number | null;
      /**
       * Пользователь создан администратором
       */
      create_by_admin?: boolean;
      city?: string | null;
      birthday?: string | null;
      last_visit_date?: string | null;
      comment_status?: string | null;
      /**
       * Временная зона
       */
      timezone?: string;
      /**
       * Удалены ли данные пользователя
       */
      is_deleted?: boolean;
      error_delete?: string | null;
    } & {
      addresses?: ({
        /**
         * Идентификатор адреса
         */
        id?: number;
      } & {
        /**
         * Идентификатор клиента
         */
        customer_id?: number;
        /**
         * Строка с полным описанием адреса
         */
        address_string?: string;
        /**
         * Является адресом по-умолчанию
         */
        default?: boolean;
        post_index?: string | null;
        country_code?: string | null;
        region?: string | null;
        region_guid?: string | null;
        area?: string | null;
        area_guid?: string | null;
        city?: string | null;
        /**
         * Код ФИАС города
         */
        city_guid?: string;
        street?: string | null;
        house?: string | null;
        block?: string | null;
        porch?: string | null;
        intercom?: string | null;
        floor?: string | null;
        flat?: string | null;
        comment?: string | null;
        geo_lat?: number | null;
        geo_lon?: number | null;
      })[];
      status?: {
        /**
         * Идентификатор статуса
         */
        id?: number;
      } & {
        /**
         * Название статуса
         */
        name?: string;
      };
      attributes?: ({
        /**
         * Идентификатор свойства
         */
        id?: number;
      } & {
        /**
         * Название свойства
         */
        name?: string;
      })[];
      user?: {
        /**
         * Идентификатор пользователя
         */
        id?: number;
        /**
         * Дата регистрации
         */
        created_at?: string;
        /**
         * Дата обновления
         */
        updated_at?: string;
      } & {
        /**
         * Активен
         */
        active?: boolean;
        /**
         * Логин
         */
        login?: string;
      };
    } & {};
    responsible?: {
      /**
       * Идентификатор admin-пользователя
       */
      id?: number;
      /**
       * Полное ФИО
       */
      full_name?: string;
      /**
       * Сокращенное ФИО
       */
      short_name?: string;
      /**
       * Дата регистрации
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * Активен
       */
      active?: boolean;
      /**
       * Логин
       */
      login?: string;
      last_name?: string | null;
      first_name?: string | null;
      middle_name?: string | null;
      /**
       * Email
       */
      email?: string;
      /**
       * Телефон
       */
      phone?: string;
      /**
       * Временная зона
       */
      timezone?: string;
    } & {
      /**
       * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
       */
      roles?: ({
        /**
         * ID роли
         */
        id?: number;
      } & {
        /**
         * Название роли
         */
        title?: string;
        expires?: string | null;
      })[];
    };
    files?: {
      /**
       * ID файла
       */
      id?: number;
      /**
       * ID заказа
       */
      order_id?: number;
      /**
       * Оригинальное название файла
       */
      original_name?: string;
      /**
       * Информация о файле в виде объекта. Для потребителя неважно какие внутри ключи
       */
      file?: {};
      /**
       * дата создания файла
       */
      created_at?: string;
      /**
       * дата обновления файла
       */
      updated_at?: string;
    }[];
  };
  items?: ({
    /**
     * id элемента корзины
     */
    id?: number;
    /**
     * ID заказа
     */
    order_id?: number;
    /**
     * ID отгрузки
     */
    shipment_id?: number;
    /**
     * ID оффера
     */
    offer_id?: number;
    /**
     * Название товара
     */
    name?: string;
    /**
     * Кол-во товара
     */
    qty?: number;
    /**
     * Цена товара (цена * qty - скидки), коп.
     */
    price?: number;
    /**
     * Цена единичного товара (в коп.)
     */
    price_per_one?: number;
    /**
     * Цена товара до скидок (цена * qty), коп.
     */
    cost?: number;
    /**
     * Цена единичного товара до скидок (в коп.)
     */
    cost_per_one?: number;
    /**
     * Информация о товаре
     */
    product_data?: {
      /**
       * Вес нетто товара (кг)
       */
      weight?: number;
      /**
       * Вес брутто товара (кг)
       */
      weight_gross?: number;
      /**
       * Ширина товара (мм)
       */
      width?: number;
      /**
       * Высота товара (мм)
       */
      height?: number;
      /**
       * Длина товара (мм)
       */
      length?: number;
      storage_address?: string | null;
      barcode?: string | null;
    };
    refund_qty?: number | null;
    /**
     * дата создания
     */
    created_at?: string;
    /**
     * дата обновления
     */
    updated_at?: string;
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
    stock?: {
      /**
       * Идентификатор стока
       */
      id?: number;
    } & {
      /**
       * ID склада
       */
      store_id?: number;
      /**
       * ID товарного предложения
       */
      offer_id?: number;
      /**
       * Идентификатор товара
       */
      product_id?: number;
      /**
       * Количество товара для резервирования
       */
      qty?: number;
    } & {};
  })[];
  reasons?: ({
    /**
     * идентификатор
     */
    id?: number;
    /**
     * дата создания
     */
    created_at?: string;
    /**
     * дата обновления
     */
    updated_at?: string;
  } & {
    /**
     * Символьный код причины возврата
     */
    code?: string;
    /**
     * Название причины возврата
     */
    name?: string;
    description?: string | null;
  })[];
};

        export type CreateRefundResponseMeta = {};

        export type CreateRefundResponse = CommonResponse<CreateRefundResponseData, CreateRefundResponseMeta>;
        export interface SearchRefundsRequest {
  sort?: string[];
  filter?: {};
  include?: ("order" | "items" | "items.product" | "reasons" | "files")[];
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


        export type SearchRefundsResponseData = ({
  /**
   * идентификатор
   */
  id?: number;
  /**
   * сумма возврата, коп.
   */
  price?: number;
  /**
   * является заявкой на частичный возврат
   */
  is_partial?: boolean;
  files?: {
    /**
     * идентификатор
     */
    id?: number;
    /**
     * идентификатор заявки на возврат
     */
    refund_id?: number;
    /**
     * Оригинальное название файла
     */
    original_name?: string;
    /**
     * Информация о файле в виде объекта. Для потребителя неважно какие внутри ключи
     */
    file?: {};
    /**
     * дата загрузки файла
     */
    created_at?: string;
    /**
     * дата обновления файла
     */
    updated_at?: string;
  }[];
  /**
   * дата создания
   */
  created_at?: string;
  /**
   * дата обновления
   */
  updated_at?: string;
} & {
  /**
   * статус заявки на возврат из OrderRefundStatusEnum
   */
  status?: number;
  responsible_id?: number | null;
  rejection_comment?: string | null;
} & {
  /**
   * идентификатор заказа
   */
  order_id?: number;
  manager_id?: number | null;
  /**
   * источник взаимодействия (канал)
   */
  source?: number;
  /**
   * комментарий пользователя
   */
  user_comment?: string;
} & {
  order?: {
    /**
     * ID заказа
     */
    id?: number;
    /**
     * номер заказа
     */
    number?: string;
    /**
     * id покупателя
     */
    customer_id?: number;
    /**
     * email покупателя
     */
    customer_email?: string;
    /**
     * стоимость (без учета скидки) (рассчитывается автоматически) в коп.
     */
    cost?: number;
    /**
     * стоимость (с учетом скидок) (рассчитывается автоматически) в коп.
     */
    price?: number;
    /**
     * списано бонусов
     */
    spent_bonus?: number;
    promo_code?: string | null;
    /**
     * начислено бонусов
     */
    added_bonus?: number;
    /**
     * источник взаимодействия из OrdersOrderSourceEnum
     */
    source?: number;
    status_at?: string | null;
    /**
     * статус оплаты из OrdersPaymentStatusEnum
     */
    payment_status?: number;
    payment_status_at?: string | null;
    payed_at?: string | null;
    payment_expires_at?: string | null;
    /**
     * метод оплаты из PaymentMethodEnum
     */
    payment_method?: number;
    /**
     * система оплаты из PaymentSystemEnum
     */
    payment_system?: number;
    payment_external_id?: string | null;
    is_problem_at?: string | null;
    /**
     * флаг, что заказ просроченный
     */
    is_expired?: boolean;
    is_expired_at?: string | null;
    /**
     * флаг, что заказ возвращен
     */
    is_return?: boolean;
    is_return_at?: string | null;
    /**
     * флаг, что заказ частично возвращен
     */
    is_partial_return?: boolean;
    is_partial_return_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
  } & {
    responsible_id?: number | null;
    /**
     * статус заказа из OrdersOrderStatusEnum
     */
    status?: number;
    client_comment?: string | null;
    receiver_name?: string | null;
    receiver_phone?: string | null;
    receiver_email?: string | null;
    is_problem?: boolean | null;
    problem_comment?: string | null;
  } & {
    /**
     * служба доставки
     */
    delivery_service?: number;
    /**
     * метод доставки
     */
    delivery_method?: number;
    /**
     * стоимость доставки (без учета скидки) в коп.
     */
    delivery_cost?: number;
    /**
     * стоимость доставки (с учетом скидки) в коп.
     */
    delivery_price?: number;
    delivery_tariff_id?: number | null;
    delivery_point_id?: number | null;
    delivery_address?: {} | null;
    delivery_comment?: string | null;
  } & {
    deliveries?: ({
      /**
       * ID отправления
       */
      id?: number;
      /**
       * ID заказа
       */
      order_id?: number;
      /**
       * номер отправления
       */
      number?: string;
      /**
       * статус отправления из OrdersDeliveryStatusEnum
       */
      status?: number;
      status_at?: string | null;
      /**
       * стоимость доставки, полученная от службы доставки (не влияет на общую стоимость доставки по заказу), коп.
       */
      cost?: number;
      /**
       * ширина (мм)
       */
      width?: number;
      /**
       * высота (мм)
       */
      height?: number;
      /**
       * длина (мм)
       */
      length?: number;
      /**
       * вес (кг)
       */
      weight?: number;
      created_at?: string | null;
      updated_at?: string | null;
    } & {
      date?: string | null;
      timeslot?: {} | null;
    } & {
      shipments?: ({
        /**
         * идентификатор
         */
        id?: number;
        /**
         * номер отгрузки
         */
        number?: string;
        /**
         * ид отправления
         */
        delivery_id?: number;
        /**
         * ид мерчанта
         */
        seller_id?: number;
        /**
         * ид склада
         */
        store_id?: number;
        /**
         * дата установки статуса
         */
        status_at?: string;
        /**
         * сумма товаров отгрузки (расчитывается автоматически), коп.
         */
        cost?: number;
        /**
         * ширина (мм)
         */
        width?: number;
        /**
         * высота (мм)
         */
        height?: number;
        /**
         * длина (мм)
         */
        length?: number;
        /**
         * вес (кг)
         */
        weight?: number;
        /**
         * дата создания
         */
        created_at?: string;
        /**
         * дата обновления
         */
        updated_at?: string;
      } & {
        /**
         * статус отгрузки из OrdersShipmentStatusEnum
         */
        status?: number;
      } & {
        /**
         * Объект типа Delivery
         */
        delivery?: {};
        order_items?: ({
          /**
           * id элемента корзины
           */
          id?: number;
          /**
           * ID заказа
           */
          order_id?: number;
          /**
           * ID отгрузки
           */
          shipment_id?: number;
          /**
           * ID оффера
           */
          offer_id?: number;
          /**
           * Название товара
           */
          name?: string;
          /**
           * Кол-во товара
           */
          qty?: number;
          /**
           * Цена товара (цена * qty - скидки), коп.
           */
          price?: number;
          /**
           * Цена единичного товара (в коп.)
           */
          price_per_one?: number;
          /**
           * Цена товара до скидок (цена * qty), коп.
           */
          cost?: number;
          /**
           * Цена единичного товара до скидок (в коп.)
           */
          cost_per_one?: number;
          /**
           * Информация о товаре
           */
          product_data?: {
            /**
             * Вес нетто товара (кг)
             */
            weight?: number;
            /**
             * Вес брутто товара (кг)
             */
            weight_gross?: number;
            /**
             * Ширина товара (мм)
             */
            width?: number;
            /**
             * Высота товара (мм)
             */
            height?: number;
            /**
             * Длина товара (мм)
             */
            length?: number;
            storage_address?: string | null;
            barcode?: string | null;
          };
          refund_qty?: number | null;
          /**
           * дата создания
           */
          created_at?: string;
          /**
           * дата обновления
           */
          updated_at?: string;
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
          stock?: {
            /**
             * Идентификатор стока
             */
            id?: number;
          } & {
            /**
             * ID склада
             */
            store_id?: number;
            /**
             * ID товарного предложения
             */
            offer_id?: number;
            /**
             * Идентификатор товара
             */
            product_id?: number;
            /**
             * Количество товара для резервирования
             */
            qty?: number;
          } & {};
        })[];
        store?: {
          /**
           * Идентификатор склада
           */
          id?: number;
          /**
           * Время создания склада
           */
          created_at?: string;
          /**
           * Время обновления склада
           */
          updated_at?: string;
        } & {
          /**
           * ID продавца
           */
          seller_id?: number;
          /**
           * ID склада в системе продавца
           */
          xml_id?: string;
          /**
           * Флаг активности склада
           */
          active?: boolean;
          /**
           * Название
           */
          name?: string;
          /**
           * Адрес
           */
          address?: {
            /**
             * Адрес одной строкой
             */
            address_string?: string;
            /**
             * Код страны
             */
            country_code?: string;
            /**
             * Почтовый индекс
             */
            post_index?: string;
            /**
             * Регион
             */
            region?: string;
            /**
             * ФИАС ID региона
             */
            region_guid?: string;
            /**
             * Район в регионе
             */
            area?: string;
            /**
             * ФИАС ID района в регионе
             */
            area_guid?: string;
            /**
             * Город/населенный пункт
             */
            city?: string;
            /**
             * ФИАС ID города/населенного пункта
             */
            city_guid?: string;
            /**
             * Улица
             */
            street?: string;
            /**
             * Дом
             */
            house?: string;
            /**
             * Строение/корпус
             */
            block?: string;
            /**
             * Квартира/офис
             */
            flat?: string;
            /**
             * Подъезд
             */
            porch?: string;
            /**
             * Этаж
             */
            floor?: string;
            /**
             * Домофон
             */
            intercom?: string;
            /**
             * Комментарий к адресу
             */
            comment?: string;
            /**
             * координаты: широта
             */
            geo_lat?: string;
            /**
             * координаты: долгота
             */
            geo_lon?: string;
          };
          /**
           * Часовой пояс
           */
          timezone?: string;
        } & {
          workings?: ({
            /**
             * Идентификатор записи о времени работы
             */
            id?: number;
            /**
             * Время создания записи о времени работы
             */
            created_at?: string;
            /**
             * Время обновления записи о времени работы
             */
            updated_at?: string;
          } & {
            /**
             * ID склада
             */
            store_id?: number;
            /**
             * Флаг активности дня работы склада
             */
            active?: boolean;
            /**
             * День недели (1-7)
             */
            day?: number;
            /**
             * Время начала работы склада (00:00)
             */
            working_start_time?: string;
            /**
             * Время конца работы склада (00:00)
             */
            working_end_time?: string;
          })[];
          contacts?: ({
            /**
             * Идентификатор контактного лица для склада
             */
            id?: number;
            /**
             * Время создания контактного лица для склада
             */
            created_at?: string;
            /**
             * Время обновления контактного лица для склада
             */
            updated_at?: string;
          } & {
            /**
             * ID склада
             */
            store_id?: number;
            /**
             * Имя контактного лица
             */
            name?: string;
            /**
             * Телефон контактного лица
             */
            phone?: string;
            /**
             * Email контактного лица
             */
            email?: string;
          })[];
          pickup_times?: ({
            /**
             * Идентификатор записи о времени отгрузки
             */
            id?: number;
            /**
             * Время создания записи о времени отгрузки
             */
            created_at?: string;
            /**
             * Время обновления записи о времени отгрузки
             */
            updated_at?: string;
          } & {
            /**
             * ID склада
             */
            store_id?: number;
            /**
             * День недели (1-7)
             */
            day?: number;
            /**
             * Код времени отгрузки у службы доставки
             */
            pickup_time_code?: string;
            /**
             * Время начала отгрузки
             */
            pickup_time_start?: string;
            /**
             * Время окончания отгрузки
             */
            pickup_time_end?: string;
            /**
             * Время выгрузки информации о грузе в службу доставки
             */
            cargo_export_time?: string;
            /**
             * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
             */
            delivery_service?: number;
          })[];
        };
        seller?: {
          /**
           * Идентификатор продавца
           */
          id?: number;
          /**
           * Время изменения статуса продавца
           */
          status_at?: string;
          /**
           * Время создания продавца
           */
          created_at?: string;
          /**
           * Время обновления продавца
           */
          updated_at?: string;
        } & {
          /**
           * Юридическое наименование организации
           */
          legal_name?: string;
          /**
           * Внешний код
           */
          external_id?: string;
          /**
           * ИНН
           */
          inn?: string;
          /**
           * КПП
           */
          kpp?: string;
          /**
           * Юр. адрес
           */
          legal_address?: string;
          /**
           * Фактический адрес
           */
          fact_address?: string;
          /**
           * Номер банковского счета
           */
          payment_account?: string;
          /**
           * Наименование банка
           */
          bank?: string;
          /**
           * Юридический адрес банка
           */
          bank_address?: string;
          /**
           * БИК банка
           */
          bank_bik?: string;
          /**
           * Статус продавца. Расшифровка значений:
           *   * `1` - Продавец недооформлен, не дозаполнил информацию
           *   * `2` - Продавец активен
           *   * `3` - Продавец заблокирован
           *
           */
          status?: 1 | 2 | 3;
          /**
           * ID менеджера
           */
          manager_id?: number;
          /**
           * Номер корреспондентского счета банка
           */
          correspondent_account?: string;
          /**
           * Адреса складов отгрузки
           */
          storage_address?: string;
          /**
           * Сайт компании
           */
          site?: string;
          /**
           * Подтверждение о возможности работы с Платформой с использованием автоматических механизмов интеграции
           */
          can_integration?: boolean;
          /**
           * Бренды и товары, которыми торгует продавец
           */
          sale_info?: string;
          /**
           * Город продавца
           */
          city?: string;
        } & {
          owner?: {
            /**
             * Идентификатор пользователя продавца
             */
            id?: number;
            /**
             * Полное ФИО
             */
            full_name?: string;
            /**
             * Сокращенное ФИО
             */
            short_name?: string;
            /**
             * Дата регистрации
             */
            created_at?: string;
            /**
             * Дата обновления
             */
            updated_at?: string;
          } & {
            /**
             * ID продавца
             */
            seller_id?: number;
            /**
             * Активен
             */
            active?: boolean;
            /**
             * Логин
             */
            login?: string;
            last_name?: string | null;
            first_name?: string | null;
            middle_name?: string | null;
            /**
             * Email
             */
            email?: string;
            /**
             * Телефон
             */
            phone?: string;
            /**
             * Временная зона
             */
            timezone?: string;
          } & {
            /**
             * Роли пользователя продавца. Объект, в котором ключ - ID роли (см. UnitsSellerUserRoleEnum)
             */
            roles?: ({
              /**
               * ID роли
               */
              id?: number;
            } & {
              /**
               * Название роли
               */
              title?: string;
              expires?: string | null;
            })[];
          };
          manager?: {
            /**
             * Идентификатор admin-пользователя
             */
            id?: number;
            /**
             * Полное ФИО
             */
            full_name?: string;
            /**
             * Сокращенное ФИО
             */
            short_name?: string;
            /**
             * Дата регистрации
             */
            created_at?: string;
            /**
             * Дата обновления
             */
            updated_at?: string;
          } & {
            /**
             * Активен
             */
            active?: boolean;
            /**
             * Логин
             */
            login?: string;
            last_name?: string | null;
            first_name?: string | null;
            middle_name?: string | null;
            /**
             * Email
             */
            email?: string;
            /**
             * Телефон
             */
            phone?: string;
            /**
             * Временная зона
             */
            timezone?: string;
          } & {
            /**
             * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
             */
            roles?: ({
              /**
               * ID роли
               */
              id?: number;
            } & {
              /**
               * Название роли
               */
              title?: string;
              expires?: string | null;
            })[];
          };
        };
      })[];
    })[];
    customer?: {
      /**
       * Идентификатор покупателя
       */
      id?: number;
      avatar?: string | null;
      delete_request?: string | null;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      user_id?: number | null;
      status_id?: number | null;
      manager_id?: number | null;
      yandex_metric_id?: string | null;
      google_analytics_id?: string | null;
      attribute_ids?: unknown[] | null;
      /**
       * Активность пользователя
       */
      active?: boolean;
      email?: string | null;
      /**
       * Телефон
       */
      phone?: string;
      last_name?: string | null;
      first_name?: string | null;
      middle_name?: string | null;
      gender?: number | null;
      /**
       * Пользователь создан администратором
       */
      create_by_admin?: boolean;
      city?: string | null;
      birthday?: string | null;
      last_visit_date?: string | null;
      comment_status?: string | null;
      /**
       * Временная зона
       */
      timezone?: string;
      /**
       * Удалены ли данные пользователя
       */
      is_deleted?: boolean;
      error_delete?: string | null;
    } & {
      addresses?: ({
        /**
         * Идентификатор адреса
         */
        id?: number;
      } & {
        /**
         * Идентификатор клиента
         */
        customer_id?: number;
        /**
         * Строка с полным описанием адреса
         */
        address_string?: string;
        /**
         * Является адресом по-умолчанию
         */
        default?: boolean;
        post_index?: string | null;
        country_code?: string | null;
        region?: string | null;
        region_guid?: string | null;
        area?: string | null;
        area_guid?: string | null;
        city?: string | null;
        /**
         * Код ФИАС города
         */
        city_guid?: string;
        street?: string | null;
        house?: string | null;
        block?: string | null;
        porch?: string | null;
        intercom?: string | null;
        floor?: string | null;
        flat?: string | null;
        comment?: string | null;
        geo_lat?: number | null;
        geo_lon?: number | null;
      })[];
      status?: {
        /**
         * Идентификатор статуса
         */
        id?: number;
      } & {
        /**
         * Название статуса
         */
        name?: string;
      };
      attributes?: ({
        /**
         * Идентификатор свойства
         */
        id?: number;
      } & {
        /**
         * Название свойства
         */
        name?: string;
      })[];
      user?: {
        /**
         * Идентификатор пользователя
         */
        id?: number;
        /**
         * Дата регистрации
         */
        created_at?: string;
        /**
         * Дата обновления
         */
        updated_at?: string;
      } & {
        /**
         * Активен
         */
        active?: boolean;
        /**
         * Логин
         */
        login?: string;
      };
    } & {};
    responsible?: {
      /**
       * Идентификатор admin-пользователя
       */
      id?: number;
      /**
       * Полное ФИО
       */
      full_name?: string;
      /**
       * Сокращенное ФИО
       */
      short_name?: string;
      /**
       * Дата регистрации
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * Активен
       */
      active?: boolean;
      /**
       * Логин
       */
      login?: string;
      last_name?: string | null;
      first_name?: string | null;
      middle_name?: string | null;
      /**
       * Email
       */
      email?: string;
      /**
       * Телефон
       */
      phone?: string;
      /**
       * Временная зона
       */
      timezone?: string;
    } & {
      /**
       * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
       */
      roles?: ({
        /**
         * ID роли
         */
        id?: number;
      } & {
        /**
         * Название роли
         */
        title?: string;
        expires?: string | null;
      })[];
    };
    files?: {
      /**
       * ID файла
       */
      id?: number;
      /**
       * ID заказа
       */
      order_id?: number;
      /**
       * Оригинальное название файла
       */
      original_name?: string;
      /**
       * Информация о файле в виде объекта. Для потребителя неважно какие внутри ключи
       */
      file?: {};
      /**
       * дата создания файла
       */
      created_at?: string;
      /**
       * дата обновления файла
       */
      updated_at?: string;
    }[];
  };
  items?: ({
    /**
     * id элемента корзины
     */
    id?: number;
    /**
     * ID заказа
     */
    order_id?: number;
    /**
     * ID отгрузки
     */
    shipment_id?: number;
    /**
     * ID оффера
     */
    offer_id?: number;
    /**
     * Название товара
     */
    name?: string;
    /**
     * Кол-во товара
     */
    qty?: number;
    /**
     * Цена товара (цена * qty - скидки), коп.
     */
    price?: number;
    /**
     * Цена единичного товара (в коп.)
     */
    price_per_one?: number;
    /**
     * Цена товара до скидок (цена * qty), коп.
     */
    cost?: number;
    /**
     * Цена единичного товара до скидок (в коп.)
     */
    cost_per_one?: number;
    /**
     * Информация о товаре
     */
    product_data?: {
      /**
       * Вес нетто товара (кг)
       */
      weight?: number;
      /**
       * Вес брутто товара (кг)
       */
      weight_gross?: number;
      /**
       * Ширина товара (мм)
       */
      width?: number;
      /**
       * Высота товара (мм)
       */
      height?: number;
      /**
       * Длина товара (мм)
       */
      length?: number;
      storage_address?: string | null;
      barcode?: string | null;
    };
    refund_qty?: number | null;
    /**
     * дата создания
     */
    created_at?: string;
    /**
     * дата обновления
     */
    updated_at?: string;
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
    stock?: {
      /**
       * Идентификатор стока
       */
      id?: number;
    } & {
      /**
       * ID склада
       */
      store_id?: number;
      /**
       * ID товарного предложения
       */
      offer_id?: number;
      /**
       * Идентификатор товара
       */
      product_id?: number;
      /**
       * Количество товара для резервирования
       */
      qty?: number;
    } & {};
  })[];
  reasons?: ({
    /**
     * идентификатор
     */
    id?: number;
    /**
     * дата создания
     */
    created_at?: string;
    /**
     * дата обновления
     */
    updated_at?: string;
  } & {
    /**
     * Символьный код причины возврата
     */
    code?: string;
    /**
     * Название причины возврата
     */
    name?: string;
    description?: string | null;
  })[];
})[];

        export type SearchRefundsResponseMeta = {
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

        export type SearchRefundsResponse = CommonResponse<SearchRefundsResponseData, SearchRefundsResponseMeta>;
        export type PatchRefundRequest = {
  /**
   * статус заявки на возврат из OrderRefundStatusEnum
   */
  status?: number;
  responsible_id?: number | null;
  rejection_comment?: string | null;
};


        export type PatchRefundResponseData = {
  /**
   * идентификатор
   */
  id?: number;
  /**
   * сумма возврата, коп.
   */
  price?: number;
  /**
   * является заявкой на частичный возврат
   */
  is_partial?: boolean;
  files?: {
    /**
     * идентификатор
     */
    id?: number;
    /**
     * идентификатор заявки на возврат
     */
    refund_id?: number;
    /**
     * Оригинальное название файла
     */
    original_name?: string;
    /**
     * Информация о файле в виде объекта. Для потребителя неважно какие внутри ключи
     */
    file?: {};
    /**
     * дата загрузки файла
     */
    created_at?: string;
    /**
     * дата обновления файла
     */
    updated_at?: string;
  }[];
  /**
   * дата создания
   */
  created_at?: string;
  /**
   * дата обновления
   */
  updated_at?: string;
} & {
  /**
   * статус заявки на возврат из OrderRefundStatusEnum
   */
  status?: number;
  responsible_id?: number | null;
  rejection_comment?: string | null;
} & {
  /**
   * идентификатор заказа
   */
  order_id?: number;
  manager_id?: number | null;
  /**
   * источник взаимодействия (канал)
   */
  source?: number;
  /**
   * комментарий пользователя
   */
  user_comment?: string;
} & {
  order?: {
    /**
     * ID заказа
     */
    id?: number;
    /**
     * номер заказа
     */
    number?: string;
    /**
     * id покупателя
     */
    customer_id?: number;
    /**
     * email покупателя
     */
    customer_email?: string;
    /**
     * стоимость (без учета скидки) (рассчитывается автоматически) в коп.
     */
    cost?: number;
    /**
     * стоимость (с учетом скидок) (рассчитывается автоматически) в коп.
     */
    price?: number;
    /**
     * списано бонусов
     */
    spent_bonus?: number;
    promo_code?: string | null;
    /**
     * начислено бонусов
     */
    added_bonus?: number;
    /**
     * источник взаимодействия из OrdersOrderSourceEnum
     */
    source?: number;
    status_at?: string | null;
    /**
     * статус оплаты из OrdersPaymentStatusEnum
     */
    payment_status?: number;
    payment_status_at?: string | null;
    payed_at?: string | null;
    payment_expires_at?: string | null;
    /**
     * метод оплаты из PaymentMethodEnum
     */
    payment_method?: number;
    /**
     * система оплаты из PaymentSystemEnum
     */
    payment_system?: number;
    payment_external_id?: string | null;
    is_problem_at?: string | null;
    /**
     * флаг, что заказ просроченный
     */
    is_expired?: boolean;
    is_expired_at?: string | null;
    /**
     * флаг, что заказ возвращен
     */
    is_return?: boolean;
    is_return_at?: string | null;
    /**
     * флаг, что заказ частично возвращен
     */
    is_partial_return?: boolean;
    is_partial_return_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
  } & {
    responsible_id?: number | null;
    /**
     * статус заказа из OrdersOrderStatusEnum
     */
    status?: number;
    client_comment?: string | null;
    receiver_name?: string | null;
    receiver_phone?: string | null;
    receiver_email?: string | null;
    is_problem?: boolean | null;
    problem_comment?: string | null;
  } & {
    /**
     * служба доставки
     */
    delivery_service?: number;
    /**
     * метод доставки
     */
    delivery_method?: number;
    /**
     * стоимость доставки (без учета скидки) в коп.
     */
    delivery_cost?: number;
    /**
     * стоимость доставки (с учетом скидки) в коп.
     */
    delivery_price?: number;
    delivery_tariff_id?: number | null;
    delivery_point_id?: number | null;
    delivery_address?: {} | null;
    delivery_comment?: string | null;
  } & {
    deliveries?: ({
      /**
       * ID отправления
       */
      id?: number;
      /**
       * ID заказа
       */
      order_id?: number;
      /**
       * номер отправления
       */
      number?: string;
      /**
       * статус отправления из OrdersDeliveryStatusEnum
       */
      status?: number;
      status_at?: string | null;
      /**
       * стоимость доставки, полученная от службы доставки (не влияет на общую стоимость доставки по заказу), коп.
       */
      cost?: number;
      /**
       * ширина (мм)
       */
      width?: number;
      /**
       * высота (мм)
       */
      height?: number;
      /**
       * длина (мм)
       */
      length?: number;
      /**
       * вес (кг)
       */
      weight?: number;
      created_at?: string | null;
      updated_at?: string | null;
    } & {
      date?: string | null;
      timeslot?: {} | null;
    } & {
      shipments?: ({
        /**
         * идентификатор
         */
        id?: number;
        /**
         * номер отгрузки
         */
        number?: string;
        /**
         * ид отправления
         */
        delivery_id?: number;
        /**
         * ид мерчанта
         */
        seller_id?: number;
        /**
         * ид склада
         */
        store_id?: number;
        /**
         * дата установки статуса
         */
        status_at?: string;
        /**
         * сумма товаров отгрузки (расчитывается автоматически), коп.
         */
        cost?: number;
        /**
         * ширина (мм)
         */
        width?: number;
        /**
         * высота (мм)
         */
        height?: number;
        /**
         * длина (мм)
         */
        length?: number;
        /**
         * вес (кг)
         */
        weight?: number;
        /**
         * дата создания
         */
        created_at?: string;
        /**
         * дата обновления
         */
        updated_at?: string;
      } & {
        /**
         * статус отгрузки из OrdersShipmentStatusEnum
         */
        status?: number;
      } & {
        /**
         * Объект типа Delivery
         */
        delivery?: {};
        order_items?: ({
          /**
           * id элемента корзины
           */
          id?: number;
          /**
           * ID заказа
           */
          order_id?: number;
          /**
           * ID отгрузки
           */
          shipment_id?: number;
          /**
           * ID оффера
           */
          offer_id?: number;
          /**
           * Название товара
           */
          name?: string;
          /**
           * Кол-во товара
           */
          qty?: number;
          /**
           * Цена товара (цена * qty - скидки), коп.
           */
          price?: number;
          /**
           * Цена единичного товара (в коп.)
           */
          price_per_one?: number;
          /**
           * Цена товара до скидок (цена * qty), коп.
           */
          cost?: number;
          /**
           * Цена единичного товара до скидок (в коп.)
           */
          cost_per_one?: number;
          /**
           * Информация о товаре
           */
          product_data?: {
            /**
             * Вес нетто товара (кг)
             */
            weight?: number;
            /**
             * Вес брутто товара (кг)
             */
            weight_gross?: number;
            /**
             * Ширина товара (мм)
             */
            width?: number;
            /**
             * Высота товара (мм)
             */
            height?: number;
            /**
             * Длина товара (мм)
             */
            length?: number;
            storage_address?: string | null;
            barcode?: string | null;
          };
          refund_qty?: number | null;
          /**
           * дата создания
           */
          created_at?: string;
          /**
           * дата обновления
           */
          updated_at?: string;
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
          stock?: {
            /**
             * Идентификатор стока
             */
            id?: number;
          } & {
            /**
             * ID склада
             */
            store_id?: number;
            /**
             * ID товарного предложения
             */
            offer_id?: number;
            /**
             * Идентификатор товара
             */
            product_id?: number;
            /**
             * Количество товара для резервирования
             */
            qty?: number;
          } & {};
        })[];
        store?: {
          /**
           * Идентификатор склада
           */
          id?: number;
          /**
           * Время создания склада
           */
          created_at?: string;
          /**
           * Время обновления склада
           */
          updated_at?: string;
        } & {
          /**
           * ID продавца
           */
          seller_id?: number;
          /**
           * ID склада в системе продавца
           */
          xml_id?: string;
          /**
           * Флаг активности склада
           */
          active?: boolean;
          /**
           * Название
           */
          name?: string;
          /**
           * Адрес
           */
          address?: {
            /**
             * Адрес одной строкой
             */
            address_string?: string;
            /**
             * Код страны
             */
            country_code?: string;
            /**
             * Почтовый индекс
             */
            post_index?: string;
            /**
             * Регион
             */
            region?: string;
            /**
             * ФИАС ID региона
             */
            region_guid?: string;
            /**
             * Район в регионе
             */
            area?: string;
            /**
             * ФИАС ID района в регионе
             */
            area_guid?: string;
            /**
             * Город/населенный пункт
             */
            city?: string;
            /**
             * ФИАС ID города/населенного пункта
             */
            city_guid?: string;
            /**
             * Улица
             */
            street?: string;
            /**
             * Дом
             */
            house?: string;
            /**
             * Строение/корпус
             */
            block?: string;
            /**
             * Квартира/офис
             */
            flat?: string;
            /**
             * Подъезд
             */
            porch?: string;
            /**
             * Этаж
             */
            floor?: string;
            /**
             * Домофон
             */
            intercom?: string;
            /**
             * Комментарий к адресу
             */
            comment?: string;
            /**
             * координаты: широта
             */
            geo_lat?: string;
            /**
             * координаты: долгота
             */
            geo_lon?: string;
          };
          /**
           * Часовой пояс
           */
          timezone?: string;
        } & {
          workings?: ({
            /**
             * Идентификатор записи о времени работы
             */
            id?: number;
            /**
             * Время создания записи о времени работы
             */
            created_at?: string;
            /**
             * Время обновления записи о времени работы
             */
            updated_at?: string;
          } & {
            /**
             * ID склада
             */
            store_id?: number;
            /**
             * Флаг активности дня работы склада
             */
            active?: boolean;
            /**
             * День недели (1-7)
             */
            day?: number;
            /**
             * Время начала работы склада (00:00)
             */
            working_start_time?: string;
            /**
             * Время конца работы склада (00:00)
             */
            working_end_time?: string;
          })[];
          contacts?: ({
            /**
             * Идентификатор контактного лица для склада
             */
            id?: number;
            /**
             * Время создания контактного лица для склада
             */
            created_at?: string;
            /**
             * Время обновления контактного лица для склада
             */
            updated_at?: string;
          } & {
            /**
             * ID склада
             */
            store_id?: number;
            /**
             * Имя контактного лица
             */
            name?: string;
            /**
             * Телефон контактного лица
             */
            phone?: string;
            /**
             * Email контактного лица
             */
            email?: string;
          })[];
          pickup_times?: ({
            /**
             * Идентификатор записи о времени отгрузки
             */
            id?: number;
            /**
             * Время создания записи о времени отгрузки
             */
            created_at?: string;
            /**
             * Время обновления записи о времени отгрузки
             */
            updated_at?: string;
          } & {
            /**
             * ID склада
             */
            store_id?: number;
            /**
             * День недели (1-7)
             */
            day?: number;
            /**
             * Код времени отгрузки у службы доставки
             */
            pickup_time_code?: string;
            /**
             * Время начала отгрузки
             */
            pickup_time_start?: string;
            /**
             * Время окончания отгрузки
             */
            pickup_time_end?: string;
            /**
             * Время выгрузки информации о грузе в службу доставки
             */
            cargo_export_time?: string;
            /**
             * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
             */
            delivery_service?: number;
          })[];
        };
        seller?: {
          /**
           * Идентификатор продавца
           */
          id?: number;
          /**
           * Время изменения статуса продавца
           */
          status_at?: string;
          /**
           * Время создания продавца
           */
          created_at?: string;
          /**
           * Время обновления продавца
           */
          updated_at?: string;
        } & {
          /**
           * Юридическое наименование организации
           */
          legal_name?: string;
          /**
           * Внешний код
           */
          external_id?: string;
          /**
           * ИНН
           */
          inn?: string;
          /**
           * КПП
           */
          kpp?: string;
          /**
           * Юр. адрес
           */
          legal_address?: string;
          /**
           * Фактический адрес
           */
          fact_address?: string;
          /**
           * Номер банковского счета
           */
          payment_account?: string;
          /**
           * Наименование банка
           */
          bank?: string;
          /**
           * Юридический адрес банка
           */
          bank_address?: string;
          /**
           * БИК банка
           */
          bank_bik?: string;
          /**
           * Статус продавца. Расшифровка значений:
           *   * `1` - Продавец недооформлен, не дозаполнил информацию
           *   * `2` - Продавец активен
           *   * `3` - Продавец заблокирован
           *
           */
          status?: 1 | 2 | 3;
          /**
           * ID менеджера
           */
          manager_id?: number;
          /**
           * Номер корреспондентского счета банка
           */
          correspondent_account?: string;
          /**
           * Адреса складов отгрузки
           */
          storage_address?: string;
          /**
           * Сайт компании
           */
          site?: string;
          /**
           * Подтверждение о возможности работы с Платформой с использованием автоматических механизмов интеграции
           */
          can_integration?: boolean;
          /**
           * Бренды и товары, которыми торгует продавец
           */
          sale_info?: string;
          /**
           * Город продавца
           */
          city?: string;
        } & {
          owner?: {
            /**
             * Идентификатор пользователя продавца
             */
            id?: number;
            /**
             * Полное ФИО
             */
            full_name?: string;
            /**
             * Сокращенное ФИО
             */
            short_name?: string;
            /**
             * Дата регистрации
             */
            created_at?: string;
            /**
             * Дата обновления
             */
            updated_at?: string;
          } & {
            /**
             * ID продавца
             */
            seller_id?: number;
            /**
             * Активен
             */
            active?: boolean;
            /**
             * Логин
             */
            login?: string;
            last_name?: string | null;
            first_name?: string | null;
            middle_name?: string | null;
            /**
             * Email
             */
            email?: string;
            /**
             * Телефон
             */
            phone?: string;
            /**
             * Временная зона
             */
            timezone?: string;
          } & {
            /**
             * Роли пользователя продавца. Объект, в котором ключ - ID роли (см. UnitsSellerUserRoleEnum)
             */
            roles?: ({
              /**
               * ID роли
               */
              id?: number;
            } & {
              /**
               * Название роли
               */
              title?: string;
              expires?: string | null;
            })[];
          };
          manager?: {
            /**
             * Идентификатор admin-пользователя
             */
            id?: number;
            /**
             * Полное ФИО
             */
            full_name?: string;
            /**
             * Сокращенное ФИО
             */
            short_name?: string;
            /**
             * Дата регистрации
             */
            created_at?: string;
            /**
             * Дата обновления
             */
            updated_at?: string;
          } & {
            /**
             * Активен
             */
            active?: boolean;
            /**
             * Логин
             */
            login?: string;
            last_name?: string | null;
            first_name?: string | null;
            middle_name?: string | null;
            /**
             * Email
             */
            email?: string;
            /**
             * Телефон
             */
            phone?: string;
            /**
             * Временная зона
             */
            timezone?: string;
          } & {
            /**
             * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
             */
            roles?: ({
              /**
               * ID роли
               */
              id?: number;
            } & {
              /**
               * Название роли
               */
              title?: string;
              expires?: string | null;
            })[];
          };
        };
      })[];
    })[];
    customer?: {
      /**
       * Идентификатор покупателя
       */
      id?: number;
      avatar?: string | null;
      delete_request?: string | null;
      /**
       * Дата создания
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      user_id?: number | null;
      status_id?: number | null;
      manager_id?: number | null;
      yandex_metric_id?: string | null;
      google_analytics_id?: string | null;
      attribute_ids?: unknown[] | null;
      /**
       * Активность пользователя
       */
      active?: boolean;
      email?: string | null;
      /**
       * Телефон
       */
      phone?: string;
      last_name?: string | null;
      first_name?: string | null;
      middle_name?: string | null;
      gender?: number | null;
      /**
       * Пользователь создан администратором
       */
      create_by_admin?: boolean;
      city?: string | null;
      birthday?: string | null;
      last_visit_date?: string | null;
      comment_status?: string | null;
      /**
       * Временная зона
       */
      timezone?: string;
      /**
       * Удалены ли данные пользователя
       */
      is_deleted?: boolean;
      error_delete?: string | null;
    } & {
      addresses?: ({
        /**
         * Идентификатор адреса
         */
        id?: number;
      } & {
        /**
         * Идентификатор клиента
         */
        customer_id?: number;
        /**
         * Строка с полным описанием адреса
         */
        address_string?: string;
        /**
         * Является адресом по-умолчанию
         */
        default?: boolean;
        post_index?: string | null;
        country_code?: string | null;
        region?: string | null;
        region_guid?: string | null;
        area?: string | null;
        area_guid?: string | null;
        city?: string | null;
        /**
         * Код ФИАС города
         */
        city_guid?: string;
        street?: string | null;
        house?: string | null;
        block?: string | null;
        porch?: string | null;
        intercom?: string | null;
        floor?: string | null;
        flat?: string | null;
        comment?: string | null;
        geo_lat?: number | null;
        geo_lon?: number | null;
      })[];
      status?: {
        /**
         * Идентификатор статуса
         */
        id?: number;
      } & {
        /**
         * Название статуса
         */
        name?: string;
      };
      attributes?: ({
        /**
         * Идентификатор свойства
         */
        id?: number;
      } & {
        /**
         * Название свойства
         */
        name?: string;
      })[];
      user?: {
        /**
         * Идентификатор пользователя
         */
        id?: number;
        /**
         * Дата регистрации
         */
        created_at?: string;
        /**
         * Дата обновления
         */
        updated_at?: string;
      } & {
        /**
         * Активен
         */
        active?: boolean;
        /**
         * Логин
         */
        login?: string;
      };
    } & {};
    responsible?: {
      /**
       * Идентификатор admin-пользователя
       */
      id?: number;
      /**
       * Полное ФИО
       */
      full_name?: string;
      /**
       * Сокращенное ФИО
       */
      short_name?: string;
      /**
       * Дата регистрации
       */
      created_at?: string;
      /**
       * Дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * Активен
       */
      active?: boolean;
      /**
       * Логин
       */
      login?: string;
      last_name?: string | null;
      first_name?: string | null;
      middle_name?: string | null;
      /**
       * Email
       */
      email?: string;
      /**
       * Телефон
       */
      phone?: string;
      /**
       * Временная зона
       */
      timezone?: string;
    } & {
      /**
       * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
       */
      roles?: ({
        /**
         * ID роли
         */
        id?: number;
      } & {
        /**
         * Название роли
         */
        title?: string;
        expires?: string | null;
      })[];
    };
    files?: {
      /**
       * ID файла
       */
      id?: number;
      /**
       * ID заказа
       */
      order_id?: number;
      /**
       * Оригинальное название файла
       */
      original_name?: string;
      /**
       * Информация о файле в виде объекта. Для потребителя неважно какие внутри ключи
       */
      file?: {};
      /**
       * дата создания файла
       */
      created_at?: string;
      /**
       * дата обновления файла
       */
      updated_at?: string;
    }[];
  };
  items?: ({
    /**
     * id элемента корзины
     */
    id?: number;
    /**
     * ID заказа
     */
    order_id?: number;
    /**
     * ID отгрузки
     */
    shipment_id?: number;
    /**
     * ID оффера
     */
    offer_id?: number;
    /**
     * Название товара
     */
    name?: string;
    /**
     * Кол-во товара
     */
    qty?: number;
    /**
     * Цена товара (цена * qty - скидки), коп.
     */
    price?: number;
    /**
     * Цена единичного товара (в коп.)
     */
    price_per_one?: number;
    /**
     * Цена товара до скидок (цена * qty), коп.
     */
    cost?: number;
    /**
     * Цена единичного товара до скидок (в коп.)
     */
    cost_per_one?: number;
    /**
     * Информация о товаре
     */
    product_data?: {
      /**
       * Вес нетто товара (кг)
       */
      weight?: number;
      /**
       * Вес брутто товара (кг)
       */
      weight_gross?: number;
      /**
       * Ширина товара (мм)
       */
      width?: number;
      /**
       * Высота товара (мм)
       */
      height?: number;
      /**
       * Длина товара (мм)
       */
      length?: number;
      storage_address?: string | null;
      barcode?: string | null;
    };
    refund_qty?: number | null;
    /**
     * дата создания
     */
    created_at?: string;
    /**
     * дата обновления
     */
    updated_at?: string;
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
    stock?: {
      /**
       * Идентификатор стока
       */
      id?: number;
    } & {
      /**
       * ID склада
       */
      store_id?: number;
      /**
       * ID товарного предложения
       */
      offer_id?: number;
      /**
       * Идентификатор товара
       */
      product_id?: number;
      /**
       * Количество товара для резервирования
       */
      qty?: number;
    } & {};
  })[];
  reasons?: ({
    /**
     * идентификатор
     */
    id?: number;
    /**
     * дата создания
     */
    created_at?: string;
    /**
     * дата обновления
     */
    updated_at?: string;
  } & {
    /**
     * Символьный код причины возврата
     */
    code?: string;
    /**
     * Название причины возврата
     */
    name?: string;
    description?: string | null;
  })[];
};

        export type PatchRefundResponseMeta = {};

        export type PatchRefundResponse = CommonResponse<PatchRefundResponseData, PatchRefundResponseMeta>;
        