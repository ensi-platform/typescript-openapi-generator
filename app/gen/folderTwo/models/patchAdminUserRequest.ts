/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { AdminUserFillableProperties } from './adminUserFillableProperties';
import type { AdminUserWriteOnlyProperties } from './adminUserWriteOnlyProperties';
import type { PatchAdminUserRequestAllOf } from './patchAdminUserRequestAllOf';

export type PatchAdminUserRequest = AdminUserFillableProperties & AdminUserWriteOnlyProperties & PatchAdminUserRequestAllOf;
