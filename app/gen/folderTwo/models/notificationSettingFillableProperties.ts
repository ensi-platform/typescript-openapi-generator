/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface NotificationSettingFillableProperties {
  /** Название уведомления */
  name?: string;
  /** Идентификатор события уведомления из NotificationEventEnum */
  event?: number;
  channels?: number[];
  /**
   * Тема уведомлени
   * @nullable
   */
  theme?: string | null;
  /** Текст уведомления */
  text?: string;
}
