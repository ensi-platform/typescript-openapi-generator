/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { UserReadonlyProperties } from './userReadonlyProperties';
import type { UserFillableProperties } from './userFillableProperties';
import type { UserFillableRequiredProperties } from './userFillableRequiredProperties';

export type User = UserReadonlyProperties & UserFillableProperties & UserFillableRequiredProperties;
