/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchNotificationsRequestFilter } from './searchNotificationsRequestFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchNotificationsRequest {
  sort?: RequestBodySort;
  filter?: SearchNotificationsRequestFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
