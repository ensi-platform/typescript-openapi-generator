/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { LogisticDeliveryServiceEnum } from './logisticDeliveryServiceEnum';
import type { LogisticDeliveryMethodEnum } from './logisticDeliveryMethodEnum';

export interface SearchDeliveryPricesFilter {
  /** Идентификатор цены доставки */
  id?: number;
  /** Id федерального округа */
  federal_district_id?: number;
  /** Id региона */
  region_id?: number;
  /** Id ФИАС */
  region_guid?: string;
  delivery_service?: LogisticDeliveryServiceEnum;
  delivery_method?: LogisticDeliveryMethodEnum;
  /** Цена от */
  price_gte?: number;
  /** Цена до */
  price_lte?: number;
}
