/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Customer } from './customer';
import type { CustomerResponseMeta } from './customerResponseMeta';

export interface CustomerResponse {
  data: Customer;
  meta?: CustomerResponseMeta;
}
