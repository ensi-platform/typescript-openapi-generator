/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchChatsFilter } from './searchChatsFilter';
import type { SearchChatsRequestIncludeItem } from './searchChatsRequestIncludeItem';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchChatsRequest {
  sort?: RequestBodySort;
  filter?: SearchChatsFilter;
  include?: SearchChatsRequestIncludeItem[];
  pagination?: RequestBodyPagination;
}
