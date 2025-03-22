/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ChatFillablePropertiesUserType } from './chatFillablePropertiesUserType';
import type { ChatFillablePropertiesDirection } from './chatFillablePropertiesDirection';

export interface ChatFillableProperties {
  /** Идентификатор пользователя */
  user_id?: number;
  /** Тип пользователя */
  user_type?: ChatFillablePropertiesUserType;
  /** Направление чата */
  direction?: ChatFillablePropertiesDirection;
  /** Тип чата */
  type_id?: number;
  /** Тема чата */
  theme?: string;
  /** Флаг чата без ответов */
  muted?: boolean;
  /** Флаг непрочтении юзером */
  unread_user?: boolean;
  /** Флаг непрочтении админом */
  unread_admin?: boolean;
}
