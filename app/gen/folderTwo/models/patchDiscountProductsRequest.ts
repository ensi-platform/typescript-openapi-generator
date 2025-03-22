/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { EditDiscountProduct } from './editDiscountProduct';

export interface PatchDiscountProductsRequest {
  /** Обновление только заданных продуктов в скидке */
  products?: EditDiscountProduct[];
}
