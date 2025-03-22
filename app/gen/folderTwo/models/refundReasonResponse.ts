/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RefundReason } from './refundReason';
import type { RefundReasonResponseMeta } from './refundReasonResponseMeta';

export interface RefundReasonResponse {
  data: RefundReason;
  meta?: RefundReasonResponseMeta;
}
