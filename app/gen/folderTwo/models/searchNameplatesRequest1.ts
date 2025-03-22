/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchNameplatesRequest1Filter } from './searchNameplatesRequest1Filter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchNameplatesRequest1 {
  sort?: RequestBodySort;
  /** Filter. See the fields available for filtering in :meta */
  filter?: SearchNameplatesRequest1Filter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
