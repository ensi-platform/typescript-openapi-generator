/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DeliveryServiceManager } from './deliveryServiceManager';
import type { DeliveryServiceManagerResponseMeta } from './deliveryServiceManagerResponseMeta';

export interface DeliveryServiceManagerResponse {
  data: DeliveryServiceManager;
  meta?: DeliveryServiceManagerResponseMeta;
}
