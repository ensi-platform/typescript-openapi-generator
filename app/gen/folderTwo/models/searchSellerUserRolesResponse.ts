/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { SellerUserRole } from './sellerUserRole';
import type { SearchSellerUserRolesResponseMeta } from './searchSellerUserRolesResponseMeta';

export interface SearchSellerUserRolesResponse {
  data: SellerUserRole[];
  meta: SearchSellerUserRolesResponseMeta;
}
