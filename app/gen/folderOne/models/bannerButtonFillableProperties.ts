/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CmsBannerButtonLocationEnum } from './cmsBannerButtonLocationEnum';
import type { CmsBannerButtonTypeEnum } from './cmsBannerButtonTypeEnum';

export interface BannerButtonFillableProperties {
  /** Ссылка */
  url?: string;
  /** Текст */
  text?: string;
  /** Размещение (значение из CmsBannerButtonLocationEnum) */
  location?: CmsBannerButtonLocationEnum;
  /** Тип (значение из CmsBannerButtonTypeEnum) */
  type?: CmsBannerButtonTypeEnum;
}
