/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchProductGroupProductsRequestFilter } from './searchProductGroupProductsRequestFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchProductGroupProductsRequest {
  sort?: RequestBodySort;
  /** Filter. See the fields available for filtering in :meta */
  filter?: SearchProductGroupProductsRequestFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
