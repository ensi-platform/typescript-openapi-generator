/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { SearchBannerTypesRequestFilter } from './searchBannerTypesRequestFilter';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchBannerTypesRequest {
  sort?: RequestBodySort;
  include?: RequestBodyInclude;
  filter?: SearchBannerTypesRequestFilter;
  pagination?: RequestBodyPagination;
}
