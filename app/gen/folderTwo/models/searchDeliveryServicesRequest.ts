/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchDeliveryServicesFilter } from './searchDeliveryServicesFilter';
import type { SearchDeliveryServicesRequestIncludeItem } from './searchDeliveryServicesRequestIncludeItem';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchDeliveryServicesRequest {
  sort?: RequestBodySort;
  filter?: SearchDeliveryServicesFilter;
  include?: SearchDeliveryServicesRequestIncludeItem[];
  pagination?: RequestBodyPagination;
}
