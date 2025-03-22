/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface NotificationReadonlyProperties {
  /** Notification ID */
  id: number;
  /** Customer ID */
  customer_id: number;
  /** ID of notification event from NotificationEventEnum */
  event: number;
  channels: number[];
  /**
   * Notification theme
   * @nullable
   */
  theme: string | null;
  /** Notification text */
  text: string;
  /** Date of creation */
  created_at: string;
  /** Date of update */
  updated_at: string;
}
