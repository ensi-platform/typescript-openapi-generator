/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface SearchAdminUsersFilter {
  /** ID пользователя */
  id?: number;
  /** Email пользователя */
  email?: string;
  /** Телефон пользователя */
  phone?: string;
  /** Телефон пользователя */
  phone_like?: string;
  /** Фамилия */
  last_name_like?: string;
  /** Имя */
  first_name_like?: string;
  /** Отчество */
  middle_name_like?: string;
  /** Дата создания (от) */
  created_at_gte?: string;
  /** Дата создания (до) */
  created_at_lte?: string;
  /** Дата последнего обновления (от) */
  updated_at_gte?: string;
  /** Дата последнего обновления (до) */
  updated_at_lte?: string;
  /** Логин пользователя */
  login?: string;
  /** Статус пользователя (true - Активен, false - Деактивирован) */
  active?: boolean;
  /** ID роли */
  role?: number;
}
