/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { SeoTemplate } from './seoTemplate';
import type { SeoTemplateResponseMeta } from './seoTemplateResponseMeta';

export interface SeoTemplateResponse {
  data: SeoTemplate;
  meta?: SeoTemplateResponseMeta;
}
