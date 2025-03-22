/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { SeoTemplateFillablePropertiesType } from './seoTemplateFillablePropertiesType';

export interface SeoTemplateFillableProperties {
  /** Название шаблона */
  name?: string;
  /** Тип шаблона из SeoTemplateTypeEnum */
  type?: SeoTemplateFillablePropertiesType;
  /** Заголовок h1 */
  header?: string;
  /**
   * Заголовок окна браузера
   * @nullable
   */
  title?: string | null;
  /**
   * Описание страницы, мета-тег description
   * @nullable
   */
  description?: string | null;
  /**
   * SEO-текст. Выводится над футером в SEO-блоке.
   * @nullable
   */
  seo_text?: string | null;
  /** Активность шаблона */
  is_active?: boolean;
}
