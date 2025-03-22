/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Discount1 } from './discount1';
import type { DiscountResponseMeta } from './discountResponseMeta';

export interface DiscountResponse {
  data: Discount1;
  meta?: DiscountResponseMeta;
}
