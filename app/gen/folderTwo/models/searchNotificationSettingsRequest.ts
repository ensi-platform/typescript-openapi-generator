/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchNotificationSettingsRequestFilter } from './searchNotificationSettingsRequestFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchNotificationSettingsRequest {
  sort?: RequestBodySort;
  filter?: SearchNotificationSettingsRequestFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
