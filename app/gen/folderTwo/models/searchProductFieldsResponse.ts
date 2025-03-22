/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductField } from './productField';
import type { SearchProductFieldsResponseMeta } from './searchProductFieldsResponseMeta';

export interface SearchProductFieldsResponse {
  data: ProductField[];
  meta: SearchProductFieldsResponseMeta;
}
