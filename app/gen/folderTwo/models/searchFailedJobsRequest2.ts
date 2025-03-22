/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchFailedJobsRequest2Filter } from './searchFailedJobsRequest2Filter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchFailedJobsRequest2 {
  sort?: RequestBodySort;
  filter?: SearchFailedJobsRequest2Filter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
