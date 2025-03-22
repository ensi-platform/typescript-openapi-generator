/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { FeedSettings0 } from './feedSettings0';
import type { SearchFeedSettingsResponseMeta } from './searchFeedSettingsResponseMeta';

export interface SearchFeedSettingsResponse {
  data: FeedSettings0[];
  meta: SearchFeedSettingsResponseMeta;
}
