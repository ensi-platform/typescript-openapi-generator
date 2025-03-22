/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Notification } from './notification';
import type { SearchNotificationsResponseMeta } from './searchNotificationsResponseMeta';

export interface SearchNotificationsResponse {
  data: Notification[];
  meta: SearchNotificationsResponseMeta;
}
