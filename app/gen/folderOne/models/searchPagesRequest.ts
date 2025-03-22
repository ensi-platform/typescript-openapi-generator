/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchPagesFilter } from './searchPagesFilter';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchPagesRequest {
  sort?: RequestBodySort;
  filter?: SearchPagesFilter;
  pagination?: RequestBodyPagination;
}
