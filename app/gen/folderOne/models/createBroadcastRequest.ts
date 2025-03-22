/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CreateBroadcastRequestUserType } from './createBroadcastRequestUserType';

export interface CreateBroadcastRequest {
  /** Id юзеров-адресатов */
  user_ids?: number[];
  /** Тип пользователя */
  user_type?: CreateBroadcastRequestUserType;
  /** Тема */
  theme?: string;
  /** Id типа */
  type_id?: number;
  /** Id статуса */
  status_id?: number;
  /** Текст сообщения */
  message?: string;
  /** Прикрепленные файлы */
  files?: string[];
  required?: unknown;
}
