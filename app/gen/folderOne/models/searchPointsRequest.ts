/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchPointsRequestFilter } from './searchPointsRequestFilter';
import type { SearchPointsRequestIncludeItem } from './searchPointsRequestIncludeItem';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchPointsRequest {
  sort?: RequestBodySort;
  filter?: SearchPointsRequestFilter;
  include?: SearchPointsRequestIncludeItem[];
  pagination?: RequestBodyPagination;
}
