/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { SellerUser } from './sellerUser';
import type { SellerUserResponseMeta } from './sellerUserResponseMeta';

export interface SellerUserResponse {
  data: SellerUser;
  meta?: SellerUserResponseMeta;
}
