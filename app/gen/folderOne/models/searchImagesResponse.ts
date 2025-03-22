/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Image } from './image';
import type { SearchImagesResponseMeta } from './searchImagesResponseMeta';

export interface SearchImagesResponse {
  data: Image[];
  meta: SearchImagesResponseMeta;
}
