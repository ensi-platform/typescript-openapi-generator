/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Customer } from './customer';
import type { SearchCustomersResponseMeta } from './searchCustomersResponseMeta';

export interface SearchCustomersResponse {
  data: Customer[];
  meta: SearchCustomersResponseMeta;
}
