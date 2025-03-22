/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchPromoCodesFilter } from './searchPromoCodesFilter';
import type { SearchPromoCodesRequestIncludeItem } from './searchPromoCodesRequestIncludeItem';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchPromoCodesRequest {
  sort?: RequestBodySort;
  filter?: SearchPromoCodesFilter;
  include?: SearchPromoCodesRequestIncludeItem[];
  pagination?: RequestBodyPagination;
}
