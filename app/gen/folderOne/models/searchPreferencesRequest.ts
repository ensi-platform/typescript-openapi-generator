/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchPreferencesFilter } from './searchPreferencesFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchPreferencesRequest {
  sort?: RequestBodySort;
  filter?: SearchPreferencesFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
