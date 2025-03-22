/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { IndexerTimestamp } from './indexerTimestamp';
import type { SearchIndexerTimestampsResponseMeta } from './searchIndexerTimestampsResponseMeta';

export interface SearchIndexerTimestampsResponse {
  data: IndexerTimestamp[];
  meta: SearchIndexerTimestampsResponseMeta;
}
