/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchStatusSettingsRequestFilter } from './searchStatusSettingsRequestFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchStatusSettingsRequest {
  sort?: RequestBodySort;
  filter?: SearchStatusSettingsRequestFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
