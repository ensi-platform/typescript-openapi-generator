/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { MessageReadonlyPropertiesUserType } from './messageReadonlyPropertiesUserType';
import type { FileProtected } from './fileProtected';

export interface MessageReadonlyProperties {
  /** Идентификатор сообщения */
  id: number;
  /** Идентификатор пользователя */
  user_id: number;
  /** Тип пользователя */
  user_type: MessageReadonlyPropertiesUserType;
  /** Идентификатор чата */
  chat_id: number;
  /** Содержание сообщения */
  text: string;
  /**
   * Прикрепленные файлы
   * @nullable
   */
  files: FileProtected[] | null;
  /** Дата создания сообщения */
  created_at: string;
  /** Дата обновления сообщения */
  updated_at: string;
}
