/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RefundOnlyCreateRequestPropertiesOrderItemsItem } from './refundOnlyCreateRequestPropertiesOrderItemsItem';

export interface RefundOnlyCreateRequestProperties {
  order_items?: RefundOnlyCreateRequestPropertiesOrderItemsItem[];
  refund_reason_ids?: number[];
}
