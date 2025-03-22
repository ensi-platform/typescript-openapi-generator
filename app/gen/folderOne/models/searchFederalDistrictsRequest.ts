/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchFederalDistrictsFilter } from './searchFederalDistrictsFilter';
import type { SearchFederalDistrictsRequestIncludeItem } from './searchFederalDistrictsRequestIncludeItem';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchFederalDistrictsRequest {
  sort?: RequestBodySort;
  filter?: SearchFederalDistrictsFilter;
  include?: SearchFederalDistrictsRequestIncludeItem[];
  pagination?: RequestBodyPagination;
}
