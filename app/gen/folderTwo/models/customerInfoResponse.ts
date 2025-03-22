/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CustomerInfo } from './customerInfo';
import type { CustomerInfoResponseMeta } from './customerInfoResponseMeta';

export interface CustomerInfoResponse {
  data: CustomerInfo;
  meta?: CustomerInfoResponseMeta;
}
