/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductImportWarning } from './productImportWarning';
import type { SearchProductImportWarningsResponseMeta } from './searchProductImportWarningsResponseMeta';

export interface SearchProductImportWarningsResponse {
  data: ProductImportWarning[];
  meta: SearchProductImportWarningsResponseMeta;
}
