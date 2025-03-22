/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Type } from './type';
import type { SearchTypesResponseMeta } from './searchTypesResponseMeta';

export interface SearchTypesResponse {
  data: Type[];
  meta: SearchTypesResponseMeta;
}
