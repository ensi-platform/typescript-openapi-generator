/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { SeoTemplate } from './seoTemplate';
import type { SearchSeoTemplatesResponseMeta } from './searchSeoTemplatesResponseMeta';

export interface SearchSeoTemplatesResponse {
  data: SeoTemplate[];
  meta: SearchSeoTemplatesResponseMeta;
}
