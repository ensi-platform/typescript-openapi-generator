/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { EditProductImage } from './editProductImage';

export interface PatchProductImagesRequest {
  /** Обновление только заданных в запросе картинок */
  images?: EditProductImage[];
}
