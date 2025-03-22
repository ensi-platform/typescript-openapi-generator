/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchCustomerFavoritesFilter } from './searchCustomerFavoritesFilter';
import type { SearchCustomerFavoritesRequestIncludeItem } from './searchCustomerFavoritesRequestIncludeItem';
import type { RequestBodyPagination } from './requestBodyPagination';

/**
 * Fields available for sort: `id, created_at`. Related entities available for uploading: `products`.

 */
export interface SearchCustomerFavoritesRequest {
  sort?: RequestBodySort;
  filter?: SearchCustomerFavoritesFilter;
  include?: SearchCustomerFavoritesRequestIncludeItem[];
  pagination?: RequestBodyPagination;
}
