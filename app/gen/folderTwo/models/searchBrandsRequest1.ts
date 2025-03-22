/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchBrandsRequest1Filter } from './searchBrandsRequest1Filter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchBrandsRequest1 {
  sort?: RequestBodySort;
  /** Filter. See the fields available for filtering in :meta */
  filter?: SearchBrandsRequest1Filter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
