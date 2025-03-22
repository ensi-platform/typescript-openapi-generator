/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductField } from './productField';
import type { ProductFieldResponseMeta } from './productFieldResponseMeta';

export interface ProductFieldResponse {
  data: ProductField;
  meta?: ProductFieldResponseMeta;
}
