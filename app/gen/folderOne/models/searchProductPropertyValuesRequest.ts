/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchProductPropertyValuesRequestFilter } from './searchProductPropertyValuesRequestFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchProductPropertyValuesRequest {
  sort?: RequestBodySort;
  /** Filter. See the fields available for filtering in :meta */
  filter?: SearchProductPropertyValuesRequestFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
