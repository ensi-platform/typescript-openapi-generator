/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ChatReadonlyProperties } from './chatReadonlyProperties';
import type { ChatFillableProperties } from './chatFillableProperties';
import type { ChatRequiredFillableProperties } from './chatRequiredFillableProperties';
import type { ChatIncludes } from './chatIncludes';

export type Chat = ChatReadonlyProperties & ChatFillableProperties & ChatRequiredFillableProperties & ChatIncludes;
