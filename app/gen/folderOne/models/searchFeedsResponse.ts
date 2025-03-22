/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Feed } from './feed';
import type { SearchFeedsResponseMeta } from './searchFeedsResponseMeta';

export interface SearchFeedsResponse {
  data: Feed[];
  meta: SearchFeedsResponseMeta;
}
