/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Type } from './type';
import type { TypeResponseMeta } from './typeResponseMeta';

export interface TypeResponse {
  data: Type;
  meta?: TypeResponseMeta;
}
