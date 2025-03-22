/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchActualCategoryPropertiesRequest0Filter } from './searchActualCategoryPropertiesRequest0Filter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchActualCategoryPropertiesRequest0 {
  sort?: RequestBodySort;
  /** Filter. See the fields available for filtering in :meta */
  filter?: SearchActualCategoryPropertiesRequest0Filter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
