/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { StoreWorking } from './storeWorking';
import type { StoreContact } from './storeContact';
import type { StorePickupTime } from './storePickupTime';

export interface StoreIncludes {
  workings?: StoreWorking[];
  contacts?: StoreContact[];
  contact?: StoreContact;
  pickup_times?: StorePickupTime[];
}
