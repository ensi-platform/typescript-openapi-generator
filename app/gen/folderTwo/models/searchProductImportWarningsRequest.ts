/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';
import type { SearchProductImportWarningsRequestFilter } from './searchProductImportWarningsRequestFilter';

export interface SearchProductImportWarningsRequest {
  sort?: RequestBodySort;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
  filter?: SearchProductImportWarningsRequestFilter;
}
