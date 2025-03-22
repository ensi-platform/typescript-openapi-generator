/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DeliveryServiceStatus } from './deliveryServiceStatus';
import type { GetDeliveryServiceStatusesResponseMeta } from './getDeliveryServiceStatusesResponseMeta';

export interface GetDeliveryServiceStatusesResponse {
  data: DeliveryServiceStatus[];
  meta?: GetDeliveryServiceStatusesResponseMeta;
}
