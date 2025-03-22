/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CustomerStatus } from './customerStatus';
import type { SearchCustomerStatusesResponseMeta } from './searchCustomerStatusesResponseMeta';

export interface SearchCustomerStatusesResponse {
  data: CustomerStatus[];
  meta: SearchCustomerStatusesResponseMeta;
}
