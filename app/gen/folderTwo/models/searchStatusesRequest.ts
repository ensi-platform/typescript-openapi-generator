/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchStatusesFilter } from './searchStatusesFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchStatusesRequest {
  sort?: RequestBodySort;
  filter?: SearchStatusesFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
