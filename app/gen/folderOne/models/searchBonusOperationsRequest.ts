/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchBonusOperationsFilter } from './searchBonusOperationsFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchBonusOperationsRequest {
  sort?: RequestBodySort;
  filter?: SearchBonusOperationsFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
