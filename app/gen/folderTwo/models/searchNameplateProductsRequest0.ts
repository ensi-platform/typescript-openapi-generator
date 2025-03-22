/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchNameplateProductsRequest0Filter } from './searchNameplateProductsRequest0Filter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchNameplateProductsRequest0 {
  sort?: RequestBodySort;
  /** Filter. See the fields available for filtering in :meta */
  filter?: SearchNameplateProductsRequest0Filter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
