/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchCustomerAddressesFilter } from './searchCustomerAddressesFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchCustomerAddressesRequest {
  sort?: RequestBodySort;
  filter?: SearchCustomerAddressesFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
