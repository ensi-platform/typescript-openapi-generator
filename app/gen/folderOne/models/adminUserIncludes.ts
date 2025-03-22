/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { AdminUserRoleIncluded } from './adminUserRoleIncluded';

export interface AdminUserIncludes {
  /** Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminAdminUserRoleEnum) */
  roles?: AdminUserRoleIncluded[];
}
