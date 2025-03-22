/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchCustomersFilter } from './searchCustomersFilter';
import type { RequestBodyInclude } from './requestBodyInclude';
import type { RequestBodyPagination } from './requestBodyPagination';

/**
 * Доступные для сортировки поля: `id, email, phone, first_name, last_name, middle_name, birthday, last_visit_date, created_at, updated_at, active`.

 */
export interface SearchCustomersRequest {
  sort?: RequestBodySort;
  filter?: SearchCustomersFilter;
  include?: RequestBodyInclude;
  pagination?: RequestBodyPagination;
}
