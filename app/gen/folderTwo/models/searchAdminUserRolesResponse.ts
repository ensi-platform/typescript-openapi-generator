/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { AdminUserRole } from './adminUserRole';
import type { SearchAdminUserRolesResponseMeta } from './searchAdminUserRolesResponseMeta';

export interface SearchAdminUserRolesResponse {
  data: AdminUserRole[];
  meta: SearchAdminUserRolesResponseMeta;
}
