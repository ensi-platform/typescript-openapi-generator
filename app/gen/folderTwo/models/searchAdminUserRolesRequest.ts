/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { SearchAdminUserRolesRequestSortItem } from './searchAdminUserRolesRequestSortItem';
import type { SearchAdminUserRolesRequestFilter } from './searchAdminUserRolesRequestFilter';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchAdminUserRolesRequest {
  sort?: SearchAdminUserRolesRequestSortItem[];
  filter?: SearchAdminUserRolesRequestFilter;
  pagination?: RequestBodyPagination;
}
