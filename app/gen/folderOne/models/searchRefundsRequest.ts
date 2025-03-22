/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchRefundsRequestFilter } from './searchRefundsRequestFilter';
import type { SearchRefundsRequestIncludeItem } from './searchRefundsRequestIncludeItem';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchRefundsRequest {
  sort?: RequestBodySort;
  filter?: SearchRefundsRequestFilter;
  include?: SearchRefundsRequestIncludeItem[];
  pagination?: RequestBodyPagination;
}
