/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductDraft } from './productDraft';
import type { SearchProductDraftsResponseMeta } from './searchProductDraftsResponseMeta';

export interface SearchProductDraftsResponse {
  data: ProductDraft[];
  meta: SearchProductDraftsResponseMeta;
}
