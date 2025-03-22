/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { UserFillableProperties } from './userFillableProperties';
import type { UserWriteOnlyProperties } from './userWriteOnlyProperties';
import type { UserRequiredProperties } from './userRequiredProperties';

export type CreateUserRequest = UserFillableProperties & UserWriteOnlyProperties & UserRequiredProperties;
