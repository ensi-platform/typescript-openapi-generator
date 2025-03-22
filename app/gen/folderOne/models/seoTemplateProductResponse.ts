/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { SeoTemplateProduct } from './seoTemplateProduct';
import type { SeoTemplateProductResponseMeta } from './seoTemplateProductResponseMeta';

export interface SeoTemplateProductResponse {
  data: SeoTemplateProduct;
  meta?: SeoTemplateProductResponseMeta;
}
