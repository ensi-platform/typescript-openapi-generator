/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Store } from './store';
import type { SearchStoresResponseMeta } from './searchStoresResponseMeta';

export interface SearchStoresResponse {
  data: Store[];
  meta: SearchStoresResponseMeta;
}
