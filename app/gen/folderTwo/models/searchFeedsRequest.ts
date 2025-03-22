/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchFeedsFilter } from './searchFeedsFilter';
import type { SearchFeedsRequestIncludeItem } from './searchFeedsRequestIncludeItem';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchFeedsRequest {
  sort?: RequestBodySort;
  filter?: SearchFeedsFilter;
  include?: SearchFeedsRequestIncludeItem[];
  pagination?: RequestBodyPagination;
}
