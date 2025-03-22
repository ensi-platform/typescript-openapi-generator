/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Chat } from './chat';
import type { SearchChatsResponseMeta } from './searchChatsResponseMeta';

export interface SearchChatsResponse {
  data: Chat[];
  meta: SearchChatsResponseMeta;
}
