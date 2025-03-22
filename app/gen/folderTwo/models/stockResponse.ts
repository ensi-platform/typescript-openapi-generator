/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Stock } from './stock';
import type { StockResponseMeta } from './stockResponseMeta';

export interface StockResponse {
  data: Stock;
  meta?: StockResponseMeta;
}
