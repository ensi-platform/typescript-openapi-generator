/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { FeedSettings0 } from './feedSettings0';
import type { FeedSettingsResponseMeta } from './feedSettingsResponseMeta';

export interface FeedSettingsResponse {
  data: FeedSettings0;
  meta?: FeedSettingsResponseMeta;
}
