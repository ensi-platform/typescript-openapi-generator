/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { StorePickupTime } from './storePickupTime';
import type { StorePickupTimeResponseMeta } from './storePickupTimeResponseMeta';

export interface StorePickupTimeResponse {
  data: StorePickupTime;
  meta?: StorePickupTimeResponseMeta;
}
