/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchCategoriesRequest1Filter } from './searchCategoriesRequest1Filter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchCategoriesRequest1 {
  sort?: RequestBodySort;
  /** Filter. See the fields available for filtering in :meta */
  filter?: SearchCategoriesRequest1Filter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
