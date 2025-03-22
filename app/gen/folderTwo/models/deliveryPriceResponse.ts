/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DeliveryPrice } from './deliveryPrice';
import type { DeliveryPriceResponseMeta } from './deliveryPriceResponseMeta';

export interface DeliveryPriceResponse {
  data: DeliveryPrice;
  meta?: DeliveryPriceResponseMeta;
}
