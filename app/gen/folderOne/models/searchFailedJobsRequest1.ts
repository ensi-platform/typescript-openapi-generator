/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchFailedJobsRequest1Filter } from './searchFailedJobsRequest1Filter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchFailedJobsRequest1 {
  sort?: RequestBodySort;
  filter?: SearchFailedJobsRequest1Filter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
