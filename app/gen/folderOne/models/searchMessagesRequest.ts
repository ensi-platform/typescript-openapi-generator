/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchMessagesFilter } from './searchMessagesFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchMessagesRequest {
  sort?: RequestBodySort;
  filter?: SearchMessagesFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
