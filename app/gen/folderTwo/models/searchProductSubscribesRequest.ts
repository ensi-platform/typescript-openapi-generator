/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchProductSubscribesFilter } from './searchProductSubscribesFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchProductSubscribesRequest {
  sort?: RequestBodySort;
  filter?: SearchProductSubscribesFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
