/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductImport } from './productImport';
import type { SearchProductImportsResponseMeta } from './searchProductImportsResponseMeta';

export interface SearchProductImportsResponse {
  data: ProductImport[];
  meta: SearchProductImportsResponseMeta;
}
