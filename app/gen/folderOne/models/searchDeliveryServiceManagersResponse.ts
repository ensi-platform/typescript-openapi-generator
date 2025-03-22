/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DeliveryServiceManager } from './deliveryServiceManager';
import type { SearchDeliveryServiceManagersResponseMeta } from './searchDeliveryServiceManagersResponseMeta';

export interface SearchDeliveryServiceManagersResponse {
  data: DeliveryServiceManager[];
  meta: SearchDeliveryServiceManagersResponseMeta;
}
