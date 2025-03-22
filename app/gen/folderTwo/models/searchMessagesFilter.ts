/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface SearchMessagesFilter {
  /** Id юзера */
  user_id?: number;
  /** Id чата */
  chat_id?: number;
  /** Тема чата */
  'chat.theme_like'?: string;
  /** Id типа чата */
  'chat.type_id'?: number;
  /** Непрочитанный админом чат */
  'chat.unread_admin'?: boolean;
  /** Дата отправления (От) */
  created_at_gte?: string;
  /** Дата отправления (До) */
  created_at_lte?: string;
}
