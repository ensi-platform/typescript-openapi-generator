/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface AddRolesToSellerUserRequest {
  /** Идентификаторы добавляемых ролей */
  roles: number[];
  /**
   * Время жизни роли
   * @nullable
   */
  expires?: string | null;
}
