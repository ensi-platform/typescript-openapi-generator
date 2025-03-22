/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchCargoRequestFilter } from './searchCargoRequestFilter';
import type { SearchCargoRequestIncludeItem } from './searchCargoRequestIncludeItem';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchCargoRequest {
  sort?: RequestBodySort;
  filter?: SearchCargoRequestFilter;
  include?: SearchCargoRequestIncludeItem[];
  pagination?: RequestBodyPagination;
}
