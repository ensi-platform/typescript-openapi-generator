/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchFeedSettingsFilter } from './searchFeedSettingsFilter';
import type { SearchFeedSettingsRequestIncludeItem } from './searchFeedSettingsRequestIncludeItem';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchFeedSettingsRequest {
  sort?: RequestBodySort;
  filter?: SearchFeedSettingsFilter;
  include?: SearchFeedSettingsRequestIncludeItem[];
  pagination?: RequestBodyPagination;
}
