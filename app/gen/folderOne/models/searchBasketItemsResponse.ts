/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { BasketItem } from './basketItem';
import type { SearchBasketItemsResponseMeta } from './searchBasketItemsResponseMeta';

export interface SearchBasketItemsResponse {
  data: BasketItem[];
  meta: SearchBasketItemsResponseMeta;
}
