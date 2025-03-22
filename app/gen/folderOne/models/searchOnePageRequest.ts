/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchPagesFilter } from './searchPagesFilter';

export interface SearchOnePageRequest {
  sort?: RequestBodySort;
  filter?: SearchPagesFilter;
}
