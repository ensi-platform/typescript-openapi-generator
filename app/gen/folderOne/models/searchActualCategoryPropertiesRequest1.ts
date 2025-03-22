/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchActualCategoryPropertiesRequest1Filter } from './searchActualCategoryPropertiesRequest1Filter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchActualCategoryPropertiesRequest1 {
  sort?: RequestBodySort;
  /** Filter. See the fields available for filtering in :meta */
  filter?: SearchActualCategoryPropertiesRequest1Filter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
