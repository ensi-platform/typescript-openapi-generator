/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Banner } from './banner';
import type { SearchBannersResponseMeta } from './searchBannersResponseMeta';

export interface SearchBannersResponse {
  data: Banner[];
  meta: SearchBannersResponseMeta;
}
