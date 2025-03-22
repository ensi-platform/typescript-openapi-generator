/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { StoreContact } from './storeContact';
import type { StoreContactResponseMeta } from './storeContactResponseMeta';

export interface StoreContactResponse {
  data: StoreContact;
  meta?: StoreContactResponseMeta;
}
