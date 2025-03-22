/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchProductsRequest1Filter } from './searchProductsRequest1Filter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchProductsRequest1 {
  sort?: RequestBodySort;
  /** Filter. See the fields available for filtering in :meta */
  filter?: SearchProductsRequest1Filter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
