/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchIndexerTimestampsRequestFilter } from './searchIndexerTimestampsRequestFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchIndexerTimestampsRequest {
  sort?: RequestBodySort;
  filter?: SearchIndexerTimestampsRequestFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
