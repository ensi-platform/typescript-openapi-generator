/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Order } from './order';
import type { SearchOrdersResponseMeta } from './searchOrdersResponseMeta';

export interface SearchOrdersResponse {
  data: Order[];
  meta: SearchOrdersResponseMeta;
}
