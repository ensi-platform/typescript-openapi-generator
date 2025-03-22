/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchTempFilesRequestFilter } from './searchTempFilesRequestFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchTempFilesRequest {
  sort?: RequestBodySort;
  filter?: SearchTempFilesRequestFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
