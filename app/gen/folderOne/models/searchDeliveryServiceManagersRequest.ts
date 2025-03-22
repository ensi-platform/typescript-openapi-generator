/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchDeliveryServiceManagersFilter } from './searchDeliveryServiceManagersFilter';
import type { SearchDeliveryServiceManagersRequestIncludeItem } from './searchDeliveryServiceManagersRequestIncludeItem';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchDeliveryServiceManagersRequest {
  sort?: RequestBodySort;
  filter?: SearchDeliveryServiceManagersFilter;
  include?: SearchDeliveryServiceManagersRequestIncludeItem[];
  pagination?: RequestBodyPagination;
}
