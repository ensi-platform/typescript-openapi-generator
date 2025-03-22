/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { SearchSellerUserRolesRequestSortItem } from './searchSellerUserRolesRequestSortItem';
import type { SearchSellerUserRolesRequestFilter } from './searchSellerUserRolesRequestFilter';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchSellerUserRolesRequest {
  sort?: SearchSellerUserRolesRequestSortItem[];
  filter?: SearchSellerUserRolesRequestFilter;
  pagination?: RequestBodyPagination;
}
