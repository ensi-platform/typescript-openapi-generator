/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';
import type { SearchCategoriesFilter } from './searchCategoriesFilter';

export interface SearchCategoriesRequest0 {
  sort?: RequestBodySort;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
  filter?: SearchCategoriesFilter;
}
