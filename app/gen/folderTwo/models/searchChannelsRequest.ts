/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchChannelsFilter } from './searchChannelsFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchChannelsRequest {
  sort?: RequestBodySort;
  filter?: SearchChannelsFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
