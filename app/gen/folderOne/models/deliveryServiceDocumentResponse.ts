/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DeliveryServiceDocument } from './deliveryServiceDocument';
import type { DeliveryServiceDocumentResponseMeta } from './deliveryServiceDocumentResponseMeta';

export interface DeliveryServiceDocumentResponse {
  data: DeliveryServiceDocument;
  meta?: DeliveryServiceDocumentResponseMeta;
}
