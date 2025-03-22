/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchDiscountsFilter } from './searchDiscountsFilter';
import type { SearchDiscountsRequest1IncludeItem } from './searchDiscountsRequest1IncludeItem';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchDiscountsRequest1 {
  sort?: RequestBodySort;
  filter?: SearchDiscountsFilter;
  include?: SearchDiscountsRequest1IncludeItem[];
  pagination?: RequestBodyPagination;
}
