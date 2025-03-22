/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Address1CountryCode } from './address1CountryCode';

/**
 * адрес
 * @nullable
 */
export type Address1 = {
  /** Полная строка адреса */
  address_string?: string;
  /** Код страны */
  country_code?: Address1CountryCode;
  /** Почтовый индекс */
  post_index?: string;
  /** Регион */
  region?: string;
  /** GUID региона */
  region_guid?: string;
  /** название области */
  area?: string;
  /** GUID области */
  area_guid?: string;
  /** название города */
  city?: string;
  /** GUID города */
  city_guid?: string;
  /** улица */
  street?: string;
  /** дом */
  house?: string;
  /** Строение / Корпус */
  block?: string;
  /** Квартира / Офис */
  flat?: string;
  /** этаж */
  floor?: string;
  /** подъезд */
  porch?: string;
  /** код домофона */
  intercom?: string;
  /** широта */
  geo_lat?: string;
  /** долгота */
  geo_lon?: string;
} | null;
