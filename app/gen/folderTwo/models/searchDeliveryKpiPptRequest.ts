/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchDeliveryKpiPptFilter } from './searchDeliveryKpiPptFilter';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchDeliveryKpiPptRequest {
  sort?: RequestBodySort;
  filter?: SearchDeliveryKpiPptFilter;
  pagination?: RequestBodyPagination;
}
