/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Channel } from './channel';
import type { ChannelResponseMeta } from './channelResponseMeta';

export interface ChannelResponse {
  data: Channel;
  meta?: ChannelResponseMeta;
}
