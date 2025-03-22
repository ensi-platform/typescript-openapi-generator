/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Message } from './message';
import type { SearchMessagesResponseMeta } from './searchMessagesResponseMeta';

export interface SearchMessagesResponse {
  data: Message[];
  meta: SearchMessagesResponseMeta;
}
