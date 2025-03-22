/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Chat } from './chat';
import type { ChatResponseMeta } from './chatResponseMeta';

export interface ChatResponse {
  data: Chat;
  meta?: ChatResponseMeta;
}
