/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DeliveryServiceDocument } from './deliveryServiceDocument';
import type { SearchDeliveryServiceDocumentsResponseMeta } from './searchDeliveryServiceDocumentsResponseMeta';

export interface SearchDeliveryServiceDocumentsResponse {
  data: DeliveryServiceDocument[];
  meta: SearchDeliveryServiceDocumentsResponseMeta;
}
