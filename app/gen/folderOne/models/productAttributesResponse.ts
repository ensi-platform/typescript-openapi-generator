/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductAttributeValue } from './productAttributeValue';
import type { ProductAttributesResponseMeta } from './productAttributesResponseMeta';

export interface ProductAttributesResponse {
  data: ProductAttributeValue[];
  meta?: ProductAttributesResponseMeta;
}
