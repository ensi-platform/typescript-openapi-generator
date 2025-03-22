/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { AdminUserRole } from './adminUserRole';
import type { AdminUserRoleResponseMeta } from './adminUserRoleResponseMeta';

export interface AdminUserRoleResponse {
  data: AdminUserRole;
  /** @nullable */
  meta?: AdminUserRoleResponseMeta;
}
