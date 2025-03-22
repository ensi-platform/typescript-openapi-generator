/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { BannerFile } from './bannerFile';
import type { UploadBannerFileResponseMeta } from './uploadBannerFileResponseMeta';

export interface UploadBannerFileResponse {
  data: BannerFile;
  meta?: UploadBannerFileResponseMeta;
}
