/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchProductEventsRequestFilter } from './searchProductEventsRequestFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchProductEventsRequest {
  sort?: RequestBodySort;
  /** Filter. See the fields available for filtering in :meta */
  filter?: SearchProductEventsRequestFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
