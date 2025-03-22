/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface CustomerFillableProperties {
  /**
   * Идентификатор пользователя
   * @nullable
   */
  user_id?: number | null;
  /**
   * Идентификатор статуса пользователя
   * @nullable
   */
  status_id?: number | null;
  /**
   * Идентификатор менеджера
   * @nullable
   */
  manager_id?: number | null;
  /**
   * Идентификатор пользователя в YandexMetric
   * @nullable
   */
  yandex_metric_id?: string | null;
  /**
   * Идентификатор пользователя в GoogleAnalytics
   * @nullable
   */
  google_analytics_id?: string | null;
  /** Активность пользователя */
  active?: boolean;
  /**
   * Email
   * @nullable
   */
  email?: string | null;
  /** Телефон */
  phone?: string;
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
  /**
   * Пол из CustomerGenderEnum
   * @nullable
   */
  gender?: number | null;
  /** Пользователь создан администратором */
  create_by_admin?: boolean;
  /**
   * Город клиента
   * @nullable
   */
  city?: string | null;
  /**
   * День рождения
   * @nullable
   */
  birthday?: string | null;
  /**
   * Дата последней авторизации
   * @nullable
   */
  last_visit_date?: string | null;
  /**
   * Коментарий к статусу клиента
   * @nullable
   */
  comment_status?: string | null;
  /** Временная зона */
  timezone?: string;
  /** Удалены ли данные пользователя */
  is_deleted?: boolean;
  /**
   * Ошибки при удалении персональных данных пользователя
   * @nullable
   */
  error_delete?: string | null;
}
