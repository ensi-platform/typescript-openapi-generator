/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { AdminUser } from './adminUser';
import type { SearchAdminUsersResponseMeta } from './searchAdminUsersResponseMeta';

export interface SearchAdminUsersResponse {
  data: AdminUser[];
  meta: SearchAdminUsersResponseMeta;
}
