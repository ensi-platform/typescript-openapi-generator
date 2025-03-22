/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';
import type { SearchProductDraftsFilter } from './searchProductDraftsFilter';

export interface SearchProductDraftsRequest {
  sort?: RequestBodySort;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
  filter?: SearchProductDraftsFilter;
}
