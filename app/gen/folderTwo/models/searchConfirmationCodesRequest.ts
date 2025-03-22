/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchConfirmationCodesRequestFilter } from './searchConfirmationCodesRequestFilter';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchConfirmationCodesRequest {
  sort?: RequestBodySort;
  /** Filter. See the fields available for filtering in :meta */
  filter?: SearchConfirmationCodesRequestFilter;
  pagination?: RequestBodyPagination;
}
