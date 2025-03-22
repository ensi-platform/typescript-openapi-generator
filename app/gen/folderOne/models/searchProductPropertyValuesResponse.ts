/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductPropertyValue } from './productPropertyValue';
import type { SearchProductPropertyValuesResponseMeta } from './searchProductPropertyValuesResponseMeta';

export interface SearchProductPropertyValuesResponse {
  data: ProductPropertyValue[];
  meta: SearchProductPropertyValuesResponseMeta;
}
