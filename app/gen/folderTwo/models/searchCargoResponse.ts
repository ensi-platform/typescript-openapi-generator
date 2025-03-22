/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Cargo } from './cargo';
import type { SearchCargoResponseMeta } from './searchCargoResponseMeta';

export interface SearchCargoResponse {
  data: Cargo[];
  meta: SearchCargoResponseMeta;
}
