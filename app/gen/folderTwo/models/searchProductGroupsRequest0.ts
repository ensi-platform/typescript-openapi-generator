/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchProductGroupsInclude } from './searchProductGroupsInclude';
import type { RequestBodyPagination } from './requestBodyPagination';
import type { SearchProductGroupsFilter } from './searchProductGroupsFilter';

export interface SearchProductGroupsRequest0 {
  sort?: RequestBodySort;
  include?: SearchProductGroupsInclude;
  pagination?: RequestBodyPagination;
  filter?: SearchProductGroupsFilter;
}
