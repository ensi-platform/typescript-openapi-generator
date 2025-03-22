/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductImage } from './productImage';
import type { ProductImagesResponseMeta } from './productImagesResponseMeta';

export interface ProductImagesResponse {
  data: ProductImage[];
  meta?: ProductImagesResponseMeta;
}
