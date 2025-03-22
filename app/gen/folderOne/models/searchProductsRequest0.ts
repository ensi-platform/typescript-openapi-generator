/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';
import type { SearchProductsFilter } from './searchProductsFilter';

export interface SearchProductsRequest0 {
  /** Sorting. The fields available for sorting can be found in :meta */
  sort?: RequestBodySort;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
  filter?: SearchProductsFilter;
}
