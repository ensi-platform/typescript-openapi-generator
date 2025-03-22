/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { User } from './user';
import type { UserResponseMeta } from './userResponseMeta';

export interface UserResponse {
  data: User;
  meta?: UserResponseMeta;
}
