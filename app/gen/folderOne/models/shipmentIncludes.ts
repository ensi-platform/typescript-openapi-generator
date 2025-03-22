/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Delivery } from './delivery';
import type { OrderItem } from './orderItem';
import type { Store } from './store';

export interface ShipmentIncludes {
  delivery?: Delivery;
  order_items?: OrderItem[];
  store?: Store;
}
