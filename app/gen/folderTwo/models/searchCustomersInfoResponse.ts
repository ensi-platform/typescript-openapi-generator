/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CustomerInfo } from './customerInfo';
import type { SearchCustomersInfoResponseMeta } from './searchCustomersInfoResponseMeta';

export interface SearchCustomersInfoResponse {
  data: CustomerInfo[];
  meta: SearchCustomersInfoResponseMeta;
}
