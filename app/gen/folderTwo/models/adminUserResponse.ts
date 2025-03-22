/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { AdminUser } from './adminUser';
import type { AdminUserResponseMeta } from './adminUserResponseMeta';

export interface AdminUserResponse {
  data: AdminUser;
  meta?: AdminUserResponseMeta;
}
