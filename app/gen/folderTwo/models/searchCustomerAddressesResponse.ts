/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CustomerAddress0 } from './customerAddress0';
import type { SearchCustomerAddressesResponseMeta } from './searchCustomerAddressesResponseMeta';

export interface SearchCustomerAddressesResponse {
  data: CustomerAddress0[];
  meta: SearchCustomerAddressesResponseMeta;
}
