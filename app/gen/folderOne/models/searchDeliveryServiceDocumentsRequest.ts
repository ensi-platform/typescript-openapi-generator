/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchDeliveryServiceDocumentsFilter } from './searchDeliveryServiceDocumentsFilter';
import type { SearchDeliveryServiceDocumentsRequestIncludeItem } from './searchDeliveryServiceDocumentsRequestIncludeItem';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchDeliveryServiceDocumentsRequest {
  sort?: RequestBodySort;
  filter?: SearchDeliveryServiceDocumentsFilter;
  include?: SearchDeliveryServiceDocumentsRequestIncludeItem[];
  pagination?: RequestBodyPagination;
}
