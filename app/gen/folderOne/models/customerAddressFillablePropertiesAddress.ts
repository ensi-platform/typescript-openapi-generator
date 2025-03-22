/**
 * Не трогать руками, файлы автогенерируемые
 */

export type CustomerAddressFillablePropertiesAddress = {
  /** Строка с полным описанием адреса */
  address_string: string;
  /**
   * Почтовый индекс
   * @nullable
   */
  post_index?: string | null;
  /**
   * Код страны
   * @nullable
   */
  country_code?: string | null;
  /**
   * Регион
   * @nullable
   */
  region?: string | null;
  /**
   * Код ФИАС региона
   * @nullable
   */
  region_guid?: string | null;
  /**
   * Район
   * @nullable
   */
  area?: string | null;
  /**
   * Код ФИАС района
   * @nullable
   */
  area_guid?: string | null;
  /**
   * Город
   * @nullable
   */
  city?: string | null;
  /** Код ФИАС города */
  city_guid: string;
  /**
   * Улица
   * @nullable
   */
  street?: string | null;
  /**
   * Дом
   * @nullable
   */
  house?: string | null;
  /**
   * Строение
   * @nullable
   */
  block?: string | null;
  /**
   * Подъезд
   * @nullable
   */
  porch?: string | null;
  /**
   * Домофон
   * @nullable
   */
  intercom?: string | null;
  /**
   * Этаж
   * @nullable
   */
  floor?: string | null;
  /**
   * Квартира
   * @nullable
   */
  flat?: string | null;
  /**
   * Комментарий к адресу
   * @nullable
   */
  comment?: string | null;
  /**
   * Ширина
   * @nullable
   */
  geo_lat?: number | null;
  /**
   * Долгота
   * @nullable
   */
  geo_lon?: number | null;
};
