/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchRegionsFilter } from './searchRegionsFilter';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchRegionsRequest {
  sort?: RequestBodySort;
  filter?: SearchRegionsFilter;
  pagination?: RequestBodyPagination;
}
