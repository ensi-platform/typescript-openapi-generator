/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { StoreWorking } from './storeWorking';
import type { StoreWorkingResponseMeta } from './storeWorkingResponseMeta';

export interface StoreWorkingResponse {
  data: StoreWorking;
  meta?: StoreWorkingResponseMeta;
}
