/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { SearchBannersSort } from './searchBannersSort';
import type { SearchBannersFilter } from './searchBannersFilter';
import type { SearchBannersInclude } from './searchBannersInclude';

export interface SearchOneBannerRequest {
  sort?: SearchBannersSort;
  filter?: SearchBannersFilter;
  include?: SearchBannersInclude;
}
