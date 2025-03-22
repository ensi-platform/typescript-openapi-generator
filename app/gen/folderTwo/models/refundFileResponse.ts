/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RefundFile } from './refundFile';
import type { RefundFileResponseMeta } from './refundFileResponseMeta';

export interface RefundFileResponse {
  data: RefundFile;
  meta?: RefundFileResponseMeta;
}
