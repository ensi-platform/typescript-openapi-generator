/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Feed } from './feed';
import type { FeedResponseMeta } from './feedResponseMeta';

export interface FeedResponse {
  data: Feed;
  meta?: FeedResponseMeta;
}
