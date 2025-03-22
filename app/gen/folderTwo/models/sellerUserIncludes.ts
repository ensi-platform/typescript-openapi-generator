/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { SellerUserRoleIncluded } from './sellerUserRoleIncluded';

export interface SellerUserIncludes {
  /** Роли пользователя продавца. Объект, в котором ключ - ID роли (см. UnitsSellerUserRoleEnum) */
  roles?: SellerUserRoleIncluded[];
}
