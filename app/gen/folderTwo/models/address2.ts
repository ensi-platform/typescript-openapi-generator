/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * адрес
 * @nullable
 */
export type Address2 = {
  /**
   * Полная строка адреса
   * @nullable
   */
  address_string: string | null;
  /**
   * Код страны
   * @nullable
   */
  country_code?: string | null;
  /**
   * Почтовый индекс
   * @nullable
   */
  post_index?: string | null;
  /**
   * Регион
   * @nullable
   */
  region?: string | null;
  /**
   * GUID региона
   * @nullable
   */
  region_guid?: string | null;
  /**
   * название области
   * @nullable
   */
  area?: string | null;
  /**
   * GUID области
   * @nullable
   */
  area_guid?: string | null;
  /**
   * название города
   * @nullable
   */
  city?: string | null;
  /**
   * GUID города
   * @nullable
   */
  city_guid?: string | null;
  /**
   * улица
   * @nullable
   */
  street?: string | null;
  /**
   * дом
   * @nullable
   */
  house?: string | null;
  /**
   * Строение / Корпус
   * @nullable
   */
  block?: string | null;
  /**
   * Квартира / Офис
   * @nullable
   */
  flat?: string | null;
  /**
   * этаж
   * @nullable
   */
  floor?: string | null;
  /**
   * подъезд
   * @nullable
   */
  porch?: string | null;
  /**
   * код домофона
   * @nullable
   */
  intercom?: string | null;
  /**
   * широта
   * @nullable
   */
  geo_lat?: string | null;
  /**
   * долгота
   * @nullable
   */
  geo_lon?: string | null;
} | null;
