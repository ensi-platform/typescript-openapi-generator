/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DeliveryService } from './deliveryService';
import type { SearchDeliveryServicesResponseMeta } from './searchDeliveryServicesResponseMeta';

export interface SearchDeliveryServicesResponse {
  data: DeliveryService[];
  meta: SearchDeliveryServicesResponseMeta;
}
