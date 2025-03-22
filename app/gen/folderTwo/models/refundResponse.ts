/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Refund } from './refund';
import type { RefundResponseMeta } from './refundResponseMeta';

export interface RefundResponse {
  data: Refund;
  meta?: RefundResponseMeta;
}
