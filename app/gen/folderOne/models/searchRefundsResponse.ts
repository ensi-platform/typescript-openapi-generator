/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Refund } from './refund';
import type { SearchRefundsResponseMeta } from './searchRefundsResponseMeta';

export interface SearchRefundsResponse {
  data: Refund[];
  meta: SearchRefundsResponseMeta;
}
