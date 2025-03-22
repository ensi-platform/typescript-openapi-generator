/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchReviewsFilter } from './searchReviewsFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

/**
 * Доступные для сортировки поля: `id, product_id, created_at, updated_at`. Загружаемые через include связанные сущности: `customers, products`.

 */
export interface SearchReviewsRequest {
  sort?: RequestBodySort;
  filter?: SearchReviewsFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
