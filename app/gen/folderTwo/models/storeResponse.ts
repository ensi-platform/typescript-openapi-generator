/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Store } from './store';
import type { StoreResponseMeta } from './storeResponseMeta';

export interface StoreResponse {
  data: Store;
  meta?: StoreResponseMeta;
}
