/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchTypesFilter } from './searchTypesFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchTypesRequest {
  sort?: RequestBodySort;
  filter?: SearchTypesFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
