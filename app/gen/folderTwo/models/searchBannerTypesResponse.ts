/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { BannerType } from './bannerType';
import type { SearchBannerTypesResponseMeta } from './searchBannerTypesResponseMeta';

export interface SearchBannerTypesResponse {
  data: BannerType[];
  meta: SearchBannerTypesResponseMeta;
}
