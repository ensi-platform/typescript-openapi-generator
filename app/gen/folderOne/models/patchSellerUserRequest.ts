/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { SellerUserFillableProperties } from './sellerUserFillableProperties';
import type { SellerUserWriteOnlyProperties } from './sellerUserWriteOnlyProperties';

export type PatchSellerUserRequest = SellerUserFillableProperties & SellerUserWriteOnlyProperties;
