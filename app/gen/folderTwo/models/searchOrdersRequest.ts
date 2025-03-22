/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { SearchOrdersRequestSortItem } from './searchOrdersRequestSortItem';
import type { SearchOrdersRequestFilter } from './searchOrdersRequestFilter';
import type { SearchOrdersRequestIncludeItem } from './searchOrdersRequestIncludeItem';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchOrdersRequest {
  sort?: SearchOrdersRequestSortItem[];
  /** Большая часть доступных фильтров указана в /orders:meta */
  filter?: SearchOrdersRequestFilter;
  include?: SearchOrdersRequestIncludeItem[];
  pagination?: RequestBodyPagination;
}
