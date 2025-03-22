/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { IndexerTimestamp } from './indexerTimestamp';
import type { IndexerTimestampResponseMeta } from './indexerTimestampResponseMeta';

export interface IndexerTimestampResponse {
  data: IndexerTimestamp;
  meta?: IndexerTimestampResponseMeta;
}
