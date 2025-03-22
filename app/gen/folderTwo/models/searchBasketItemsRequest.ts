/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchBasketItemsRequestFilter } from './searchBasketItemsRequestFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchBasketItemsRequest {
  sort?: RequestBodySort;
  filter?: SearchBasketItemsRequestFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
