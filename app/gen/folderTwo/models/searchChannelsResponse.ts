/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Channel } from './channel';
import type { SearchChannelsResponseMeta } from './searchChannelsResponseMeta';

export interface SearchChannelsResponse {
  data: Channel[];
  meta: SearchChannelsResponseMeta;
}
