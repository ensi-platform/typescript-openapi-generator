/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchPropertyDirectoryValuesRequestFilter } from './searchPropertyDirectoryValuesRequestFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchPropertyDirectoryValuesRequest {
  sort?: RequestBodySort;
  /** Filter. See the fields available for filtering in :meta */
  filter?: SearchPropertyDirectoryValuesRequestFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
