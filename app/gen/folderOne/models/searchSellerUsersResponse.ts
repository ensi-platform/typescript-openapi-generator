/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { SellerUser } from './sellerUser';
import type { SearchSellerUsersResponseMeta } from './searchSellerUsersResponseMeta';

export interface SearchSellerUsersResponse {
  data: SellerUser[];
  meta: SearchSellerUsersResponseMeta;
}
