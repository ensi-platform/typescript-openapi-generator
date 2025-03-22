/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { User } from './user';
import type { SearchUsersResponseMeta } from './searchUsersResponseMeta';

export interface SearchUsersResponse {
  data: User[];
  meta: SearchUsersResponseMeta;
}
