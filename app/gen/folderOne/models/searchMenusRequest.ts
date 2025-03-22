/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { SearchMenusSort } from './searchMenusSort';
import type { SearchMenusFilter } from './searchMenusFilter';
import type { SearchMenusInclude } from './searchMenusInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchMenusRequest {
  sort?: SearchMenusSort;
  filter?: SearchMenusFilter;
  include?: SearchMenusInclude;
  pagination?: RequestBodyPagination;
}
