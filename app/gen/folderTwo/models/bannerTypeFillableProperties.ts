/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CmsBannerTypeEnum } from './cmsBannerTypeEnum';

export interface BannerTypeFillableProperties {
  code?: CmsBannerTypeEnum;
  /** Activity */
  active?: boolean;
  /** Name */
  name?: string;
}
