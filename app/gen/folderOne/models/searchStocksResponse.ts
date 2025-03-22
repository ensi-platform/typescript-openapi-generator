/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Stock } from './stock';
import type { SearchStocksResponseMeta } from './searchStocksResponseMeta';

export interface SearchStocksResponse {
  data: Stock[];
  meta: SearchStocksResponseMeta;
}
