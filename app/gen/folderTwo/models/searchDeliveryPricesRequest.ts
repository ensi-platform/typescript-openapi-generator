/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchDeliveryPricesFilter } from './searchDeliveryPricesFilter';
import type { SearchDeliveryPricesRequestIncludeItem } from './searchDeliveryPricesRequestIncludeItem';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchDeliveryPricesRequest {
  sort?: RequestBodySort;
  filter?: SearchDeliveryPricesFilter;
  include?: SearchDeliveryPricesRequestIncludeItem[];
  pagination?: RequestBodyPagination;
}
