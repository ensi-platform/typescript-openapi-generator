/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { UnitsAdminUserRoleRightsAccessEnum } from './unitsAdminUserRoleRightsAccessEnum';

export interface AdminUserRoleFillableProperties {
  /** Название роли */
  title?: string;
  /** Активность */
  active?: boolean;
  /** Права доступа */
  rights_access?: UnitsAdminUserRoleRightsAccessEnum[];
}
