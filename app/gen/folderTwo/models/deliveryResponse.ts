/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Delivery } from './delivery';
import type { DeliveryResponseMeta } from './deliveryResponseMeta';

export interface DeliveryResponse {
  data: Delivery;
  meta?: DeliveryResponseMeta;
}
