/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Preference } from './preference';
import type { SearchPreferencesResponseMeta } from './searchPreferencesResponseMeta';

export interface SearchPreferencesResponse {
  data: Preference[];
  meta: SearchPreferencesResponseMeta;
}
