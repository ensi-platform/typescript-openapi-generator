/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Seller } from './seller';
import type { SellerResponseMeta } from './sellerResponseMeta';

export interface SellerResponse {
  data: Seller;
  meta?: SellerResponseMeta;
}
