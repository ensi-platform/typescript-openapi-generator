/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchFailedJobsRequest0Filter } from './searchFailedJobsRequest0Filter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchFailedJobsRequest0 {
  sort?: RequestBodySort;
  filter?: SearchFailedJobsRequest0Filter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
