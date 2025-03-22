/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchProductGroupsRequest1Filter } from './searchProductGroupsRequest1Filter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchProductGroupsRequest1 {
  sort?: RequestBodySort;
  /** Filter. See the fields available for filtering in :meta */
  filter?: SearchProductGroupsRequest1Filter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
