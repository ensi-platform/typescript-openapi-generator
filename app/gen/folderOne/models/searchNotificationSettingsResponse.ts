/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { NotificationSetting } from './notificationSetting';
import type { SearchNotificationSettingsResponseMeta } from './searchNotificationSettingsResponseMeta';

export interface SearchNotificationSettingsResponse {
  data: NotificationSetting[];
  meta: SearchNotificationSettingsResponseMeta;
}
