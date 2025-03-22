/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchDiscountProductsFilter } from './searchDiscountProductsFilter';
import type { SearchDiscountProductsRequestIncludeItem } from './searchDiscountProductsRequestIncludeItem';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchDiscountProductsRequest {
  sort?: RequestBodySort;
  filter?: SearchDiscountProductsFilter;
  include?: SearchDiscountProductsRequestIncludeItem[];
  pagination?: RequestBodyPagination;
}
