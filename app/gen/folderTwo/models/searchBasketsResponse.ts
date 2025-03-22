/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Basket } from './basket';
import type { SearchBasketsResponseMeta } from './searchBasketsResponseMeta';

export interface SearchBasketsResponse {
  data: Basket[];
  meta: SearchBasketsResponseMeta;
}
