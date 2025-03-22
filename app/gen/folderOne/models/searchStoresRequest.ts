/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchStoresFilter } from './searchStoresFilter';
import type { SearchStoresRequestIncludeItem } from './searchStoresRequestIncludeItem';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchStoresRequest {
  sort?: RequestBodySort;
  filter?: SearchStoresFilter;
  include?: SearchStoresRequestIncludeItem[];
  pagination?: RequestBodyPagination;
}
