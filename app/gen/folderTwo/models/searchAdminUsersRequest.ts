/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchAdminUsersFilter } from './searchAdminUsersFilter';
import type { SearchAdminUsersRequestIncludeItem } from './searchAdminUsersRequestIncludeItem';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchAdminUsersRequest {
  sort?: RequestBodySort;
  filter?: SearchAdminUsersFilter;
  include?: SearchAdminUsersRequestIncludeItem[];
  pagination?: RequestBodyPagination;
}
