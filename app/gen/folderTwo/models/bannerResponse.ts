/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Banner } from './banner';
import type { BannerResponseMeta } from './bannerResponseMeta';

export interface BannerResponse {
  data: Banner;
  meta?: BannerResponseMeta;
}
