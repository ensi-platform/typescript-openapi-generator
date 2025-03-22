/**
 * Не трогать руками, файлы автогенерируемые
 */

export type SetAdminUserPasswordBody = {
  /** Токен из ссылки по которой перешел пользователь */
  token: string;
  /** Новый пароль пользователя */
  password: string;
};
