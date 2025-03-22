/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface AdminUserFillableProperties {
  /** Активен */
  active?: boolean;
  /** Логин */
  login?: string;
  /**
   * Фамилия
   * @nullable
   */
  last_name?: string | null;
  /**
   * Имя
   * @nullable
   */
  first_name?: string | null;
  /**
   * Отчество
   * @nullable
   */
  middle_name?: string | null;
  /** Email */
  email?: string;
  /** Телефон */
  phone?: string;
  /** Временная зона */
  timezone?: string;
}
