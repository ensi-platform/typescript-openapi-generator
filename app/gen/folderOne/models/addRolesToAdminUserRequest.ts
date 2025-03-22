/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface AddRolesToAdminUserRequest {
  /** Идентификаторы добавляемых ролей */
  roles: number[];
  /**
   * Время жизни роли
   * @nullable
   */
  expires: string | null;
}
