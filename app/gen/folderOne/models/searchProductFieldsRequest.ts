/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { RequestBodyPagination } from './requestBodyPagination';
import type { SearchProductFieldsFilter } from './searchProductFieldsFilter';

export interface SearchProductFieldsRequest {
  sort?: RequestBodySort;
  pagination?: RequestBodyPagination;
  filter?: SearchProductFieldsFilter;
}
