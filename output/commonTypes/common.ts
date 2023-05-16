
export interface DeliveryServiceFillableProperties {
  /**
   * Название
   */
  name?: string;
  /**
   * Дата регистрации
   */
  registered_at?: string;
  /**
   * Юр. название компании
   */
  legal_info_company_name?: string | null;
  /**
   * адрес
   */
  legal_info_company_address?: {
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
   * ИНН
   */
  legal_info_inn?: string | null;
  /**
   * р/с
   */
  legal_info_payment_account?: string | null;
  /**
   * БИК
   */
  legal_info_bik?: string | null;
  /**
   * Банк
   */
  legal_info_bank?: string | null;
  /**
   * К/с банка
   */
  legal_info_bank_correspondent_account?: string | null;
  /**
   * ФИО ген. директора
   */
  general_manager_name?: string | null;
  /**
   * Номер договора
   */
  contract_number?: string | null;
  /**
   * Дата договора
   */
  contract_date?: string | null;
  /**
   * Cтавка НДС
   */
  vat_rate?: number | null;
  /**
   * Тип налогообложения
   */
  taxation_type?: number | null;
  /**
   * Службы доставки. Расшифровка значений:
   *   * `1` - Активен
   *   * `2` - Не активен
   *
   */
  status?: 1 | 2;
  /**
   * Комментарий
   */
  comment?: string | null;
  /**
   * Код в системе ApiShip
   */
  apiship_key?: string | null;
  /**
   * Приоритет (чем меньше, тем выше)
   */
  priority?: number;
  /**
   * Максимальное кол-во отправлений в день
   */
  max_shipments_per_day?: number;
  /**
   * Время создания заявки для забора отправления день-в-день
   */
  max_cargo_export_time?: string;
  /**
   * Консолидация многоместных отправлений?
   */
  do_consolidation?: boolean;
  /**
   * Расконсолидация многоместных отправлений?
   */
  do_deconsolidation?: boolean;
  /**
   * Осуществляет нулевую милю?
   */
  do_zero_mile?: boolean;
  /**
   * Осуществляет экспресс-доставку?
   */
  do_express_delivery?: boolean;
  /**
   * Принимает возвраты?
   */
  do_return?: boolean;
  /**
   * Осуществляет доставку опасных грузов?
   */
  do_dangerous_products_delivery?: boolean;
  /**
   * Перевозка крупногабаритных грузов?
   */
  do_transportation_oversized_cargo?: boolean;
  /**
   * Добавлять услугу частичного отказ в заказ на доставку?
   */
  add_partial_reject_service?: boolean;
  /**
   * Добавлять услугу страхования груза в заказ на доставку?
   */
  add_insurance_service?: boolean;
  /**
   * Добавлять услугу примерки в заказ на доставку?
   */
  add_fitting_service?: boolean;
  /**
   * Добавлять услугу возврата в заказ на доставку?
   */
  add_return_service?: boolean;
  /**
   * Добавлять услугу вскрытия при получении в заказ на доставку?
   */
  add_open_service?: boolean;
  /**
   * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
   */
  pct?: number;
}

export interface FederalDistrictFillableProperties {
  /**
   * Название
   */
  name?: string;
}

export interface RegionFillableProperties {
  /**
   * Id федерального округа
   */
  federal_district_id?: number;
  /**
   * Название
   */
  name?: string;
  /**
   * Id ФИАС
   */
  guid?: string;
}

export interface DeliveryPriceFillableProperties {
  /**
   * Id федерального округа
   */
  federal_district_id?: number;
  /**
   * Id региона
   */
  region_id?: number | null;
  /**
   * Id ФИАС региона
   */
  region_guid?: string | null;
  /**
   * Службы доставки. Расшифровка значений:
   *   * `1` - B2Cpl
   *   * `2` - Boxberry
   *   * `3` - CDEK
   *   * `4` - Dostavista
   *   * `5` - DPD
   *   * `6` - IML
   *   * `7` - MaxiPost;
   *   * `8` - PickPoint;
   *   * `9` - PONY EXPRESS;
   *   * `10`- Почта России;
   *
   */
  delivery_service?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /**
   * Тип точки выдачи заказов. Расшифровка значений:
   *   * `1` - Курьерская доставка
   *   * `2` - Самовывоз
   *
   */
  delivery_method?: 1 | 2;
  /**
   * Цена
   */
  price?: number;
}

export interface DeliveryKpiFillableProperties {
  /**
   * Ready-To-Go time - время для проверки заказа АОЗ до его передачи в MAS (мин)
   */
  rtg?: number;
  /**
   * Confirmation Time - время перехода Отправления из статуса “Ожидает подтверждения” в статус “На комплектации” (мин)
   */
  ct?: number;
  /**
   * Planned Processing Time - плановое время для прохождения Отправлением статусов от “На комплектации” до “Готов к передаче ЛО” (мин)
   */
  ppt?: number;
}

export type CreateDirectoryValueRequest = {
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

