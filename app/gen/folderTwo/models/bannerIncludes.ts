/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { BannerType } from './bannerType';
import type { BannerButton } from './bannerButton';

export interface BannerIncludes {
  type?: BannerType;
  button?: BannerButton;
}
