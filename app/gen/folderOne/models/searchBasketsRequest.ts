/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchBasketsRequestFilter } from './searchBasketsRequestFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchBasketsRequest {
  sort?: RequestBodySort;
  filter?: SearchBasketsRequestFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
