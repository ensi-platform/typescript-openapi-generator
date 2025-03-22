/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Order } from './order';
import type { OrderItem } from './orderItem';
import type { RefundReason } from './refundReason';
import type { RefundFile } from './refundFile';

export interface RefundIncludes {
  order?: Order;
  items?: OrderItem[];
  reasons?: RefundReason[];
  files?: RefundFile[];
}
