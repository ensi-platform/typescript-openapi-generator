/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface SearchUsersFilter {
  /**
   * Идентификатор пользователя
   * @nullable
   */
  id?: number | null;
  /**
   * Логин
   * @nullable
   */
  login?: string | null;
  /**
   * Активен
   * @nullable
   */
  active?: boolean | null;
}
