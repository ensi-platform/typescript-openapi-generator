/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchNameplateProductsRequest1Filter } from './searchNameplateProductsRequest1Filter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchNameplateProductsRequest1 {
  sort?: RequestBodySort;
  /** Filter. See the fields available for filtering in :meta */
  filter?: SearchNameplateProductsRequest1Filter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
