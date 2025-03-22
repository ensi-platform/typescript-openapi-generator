/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CustomerFavorite } from './customerFavorite';
import type { SearchCustomerFavoritesResponseMeta } from './searchCustomerFavoritesResponseMeta';

export interface SearchCustomerFavoritesResponse {
  data: CustomerFavorite[];
  meta: SearchCustomerFavoritesResponseMeta;
}
