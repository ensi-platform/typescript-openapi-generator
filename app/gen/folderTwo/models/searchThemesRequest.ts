/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchThemesFilter } from './searchThemesFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchThemesRequest {
  sort?: RequestBodySort;
  filter?: SearchThemesFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
