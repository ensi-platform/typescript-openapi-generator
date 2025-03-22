/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Theme } from './theme';
import type { SearchThemesResponseMeta } from './searchThemesResponseMeta';

export interface SearchThemesResponse {
  data: Theme[];
  meta: SearchThemesResponseMeta;
}
