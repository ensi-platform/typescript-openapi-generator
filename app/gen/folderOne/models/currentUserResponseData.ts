/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { UnitsAdminUserRoleRightsAccessEnum } from './unitsAdminUserRoleRightsAccessEnum';

export type CurrentUserResponseData = {
  /** Идентификатор admin-пользователя */
  id: number;
  /** Полное ФИО */
  full_name: string;
  /** Сокращенное ФИО */
  short_name: string;
  /** Активен */
  active: boolean;
  /** Логин */
  login: string;
  /**
   * Фамилия
   * @nullable
   */
  last_name: string | null;
  /**
   * Имя
   * @nullable
   */
  first_name: string | null;
  /**
   * Отчество
   * @nullable
   */
  middle_name: string | null;
  /** Email */
  email: string;
  /** Телефон */
  phone: string;
  /** Роли пользователя */
  roles: number[];
  /** Права пользователя */
  rights_access: UnitsAdminUserRoleRightsAccessEnum[];
};
