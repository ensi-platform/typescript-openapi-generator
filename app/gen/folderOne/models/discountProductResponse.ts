/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DiscountProduct } from './discountProduct';
import type { DiscountProductResponseMeta } from './discountProductResponseMeta';

export interface DiscountProductResponse {
  data: DiscountProduct;
  meta?: DiscountProductResponseMeta;
}
