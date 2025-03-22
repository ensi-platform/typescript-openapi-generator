/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';
import type { SearchOffersRequest0Filter } from './searchOffersRequest0Filter';

export interface SearchOffersRequest0 {
  sort?: RequestBodySort;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
  filter?: SearchOffersRequest0Filter;
}
