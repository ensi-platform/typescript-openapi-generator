/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Order } from './order';
import type { OrderResponseMeta } from './orderResponseMeta';

export interface OrderResponse {
  data: Order;
  meta?: OrderResponseMeta;
}
