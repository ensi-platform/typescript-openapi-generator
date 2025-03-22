/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchSeoTemplatesFilter } from './searchSeoTemplatesFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchSeoTemplatesRequest {
  sort?: RequestBodySort;
  filter?: SearchSeoTemplatesFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
