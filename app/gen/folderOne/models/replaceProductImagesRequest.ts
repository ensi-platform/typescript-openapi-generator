/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { EditProductImage } from './editProductImage';

export interface ReplaceProductImagesRequest {
  /** Замещение всех имеющихся картинок на заданные */
  images?: EditProductImage[];
}
