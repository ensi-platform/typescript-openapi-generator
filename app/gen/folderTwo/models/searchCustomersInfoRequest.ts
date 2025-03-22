/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchCustomersInfoFilter } from './searchCustomersInfoFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchCustomersInfoRequest {
  sort?: RequestBodySort;
  filter?: SearchCustomersInfoFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
