/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { CustomerSearchStatusesFilter } from './customerSearchStatusesFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchCustomerStatusesRequest {
  sort?: RequestBodySort;
  filter?: CustomerSearchStatusesFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
