/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DeliveryPrice } from './deliveryPrice';
import type { SearchDeliveryPricesResponseMeta } from './searchDeliveryPricesResponseMeta';

export interface SearchDeliveryPricesResponse {
  data: DeliveryPrice[];
  meta: SearchDeliveryPricesResponseMeta;
}
