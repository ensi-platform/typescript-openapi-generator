/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductDraft } from './productDraft';
import type { ProductDraftResponseMeta } from './productDraftResponseMeta';

export interface ProductDraftResponse {
  data: ProductDraft;
  meta?: ProductDraftResponseMeta;
}
