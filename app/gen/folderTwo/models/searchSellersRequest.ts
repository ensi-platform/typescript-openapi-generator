/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchSellersFilter } from './searchSellersFilter';
import type { SearchSellersRequestIncludeItem } from './searchSellersRequestIncludeItem';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchSellersRequest {
  sort?: RequestBodySort;
  filter?: SearchSellersFilter;
  include?: SearchSellersRequestIncludeItem[];
  pagination?: RequestBodyPagination;
}
