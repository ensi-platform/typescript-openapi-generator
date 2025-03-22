/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchPropertiesRequest1Filter } from './searchPropertiesRequest1Filter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchPropertiesRequest1 {
  sort?: RequestBodySort;
  /** Filter. See the fields available for filtering in :meta */
  filter?: SearchPropertiesRequest1Filter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
