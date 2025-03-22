/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Status1 } from './status1';
import type { SearchStatusesResponseMeta } from './searchStatusesResponseMeta';

export interface SearchStatusesResponse {
  data: Status1[];
  meta: SearchStatusesResponseMeta;
}
