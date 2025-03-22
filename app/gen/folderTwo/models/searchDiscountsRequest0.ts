/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchDiscountsRequest0Filter } from './searchDiscountsRequest0Filter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchDiscountsRequest0 {
  sort?: RequestBodySort;
  /** Filter. See the fields available for filtering in :meta */
  filter?: SearchDiscountsRequest0Filter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
