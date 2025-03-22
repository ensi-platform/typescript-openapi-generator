/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchDeliveryKpiCtFilter } from './searchDeliveryKpiCtFilter';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchDeliveryKpiCtRequest {
  sort?: RequestBodySort;
  filter?: SearchDeliveryKpiCtFilter;
  pagination?: RequestBodyPagination;
}
