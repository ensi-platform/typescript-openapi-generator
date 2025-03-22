/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchNameplatesRequest0Filter } from './searchNameplatesRequest0Filter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchNameplatesRequest0 {
  sort?: RequestBodySort;
  /** Filter. See the fields available for filtering in :meta */
  filter?: SearchNameplatesRequest0Filter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
