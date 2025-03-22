/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { SeoTemplateProduct } from './seoTemplateProduct';
import type { SearchSeoTemplateProductsResponseMeta } from './searchSeoTemplateProductsResponseMeta';

export interface SearchSeoTemplateProductsResponse {
  data: SeoTemplateProduct[];
  meta: SearchSeoTemplateProductsResponseMeta;
}
