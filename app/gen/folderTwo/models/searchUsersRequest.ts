/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchUsersFilter } from './searchUsersFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchUsersRequest {
  sort?: RequestBodySort;
  filter?: SearchUsersFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
