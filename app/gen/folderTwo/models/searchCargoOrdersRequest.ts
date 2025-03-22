/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchCargoOrdersRequestFilter } from './searchCargoOrdersRequestFilter';
import type { SearchCargoOrdersRequestIncludeItem } from './searchCargoOrdersRequestIncludeItem';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchCargoOrdersRequest {
  sort?: RequestBodySort;
  filter?: SearchCargoOrdersRequestFilter;
  include?: SearchCargoOrdersRequestIncludeItem[];
  pagination?: RequestBodyPagination;
}
