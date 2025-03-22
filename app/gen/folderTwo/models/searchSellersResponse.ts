/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Seller } from './seller';
import type { SearchSellersResponseMeta } from './searchSellersResponseMeta';

export interface SearchSellersResponse {
  data: Seller[];
  meta: SearchSellersResponseMeta;
}
