/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchSellerUsersRequestFilter } from './searchSellerUsersRequestFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchSellerUsersRequest {
  /** Сортировка. Доступные для сортировки поля см. в :meta */
  sort?: RequestBodySort;
  /** Фильтр. Доступные для фильтрации поля см. в :meta */
  filter?: SearchSellerUsersRequestFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
