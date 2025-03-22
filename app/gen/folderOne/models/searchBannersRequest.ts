/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { SearchBannersSort } from './searchBannersSort';
import type { SearchBannersFilter } from './searchBannersFilter';
import type { SearchBannersInclude } from './searchBannersInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchBannersRequest {
  sort?: SearchBannersSort;
  filter?: SearchBannersFilter;
  include?: SearchBannersInclude;
  pagination?: RequestBodyPagination;
}
