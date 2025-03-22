/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { AdminUserFillableProperties } from './adminUserFillableProperties';
import type { AdminUserWriteOnlyProperties } from './adminUserWriteOnlyProperties';
import type { AdminUserRequiredProperties } from './adminUserRequiredProperties';

export type CreateAdminUserRequest = AdminUserFillableProperties & AdminUserWriteOnlyProperties & AdminUserRequiredProperties;
