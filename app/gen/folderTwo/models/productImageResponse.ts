/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductImage } from './productImage';
import type { ProductImageResponseMeta } from './productImageResponseMeta';

export interface ProductImageResponse {
  data: ProductImage;
  meta?: ProductImageResponseMeta;
}
