/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { BulkOperation } from './bulkOperation';
import type { SearchBulkOperationsResponseMeta } from './searchBulkOperationsResponseMeta';

export interface SearchBulkOperationsResponse {
  data: BulkOperation[];
  meta: SearchBulkOperationsResponseMeta;
}
