/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ChatFillableProperties } from './chatFillableProperties';
import type { ChatRequiredFillableProperties } from './chatRequiredFillableProperties';

export type CreateChatRequest = ChatFillableProperties & ChatRequiredFillableProperties;
