/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { UserFillableProperties } from './userFillableProperties';
import type { UserWriteOnlyProperties } from './userWriteOnlyProperties';

export type PatchUserRequest = UserFillableProperties & UserWriteOnlyProperties;
