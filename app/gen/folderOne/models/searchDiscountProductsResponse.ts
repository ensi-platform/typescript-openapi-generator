/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DiscountProduct } from './discountProduct';
import type { SearchDiscountProductsResponseMeta } from './searchDiscountProductsResponseMeta';

export interface SearchDiscountProductsResponse {
  data: DiscountProduct[];
  meta: SearchDiscountProductsResponseMeta;
}
