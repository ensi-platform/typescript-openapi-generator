/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { NotificationSetting } from './notificationSetting';
import type { NotificationSettingResponseMeta } from './notificationSettingResponseMeta';

export interface NotificationSettingResponse {
  data: NotificationSetting;
  meta?: NotificationSettingResponseMeta;
}
