/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CustomerStatus } from './customerStatus';
import type { CustomerStatusResponseMeta } from './customerStatusResponseMeta';

export interface CustomerStatusResponse {
  data: CustomerStatus;
  meta?: CustomerStatusResponseMeta;
}
