/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DeliveryService } from './deliveryService';
import type { DeliveryServiceResponseMeta } from './deliveryServiceResponseMeta';

export interface DeliveryServiceResponse {
  data: DeliveryService;
  meta?: DeliveryServiceResponseMeta;
}
