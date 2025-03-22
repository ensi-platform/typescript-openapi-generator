/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { SellerUserFillableProperties } from './sellerUserFillableProperties';
import type { SellerUserFillableRequiredProperties } from './sellerUserFillableRequiredProperties';
import type { SellerUserWriteOnlyProperties } from './sellerUserWriteOnlyProperties';
import type { SellerUserWriteOnlyRequiredProperties } from './sellerUserWriteOnlyRequiredProperties';

export type CreateSellerUserRequest = SellerUserFillableProperties & SellerUserFillableRequiredProperties & SellerUserWriteOnlyProperties & SellerUserWriteOnlyRequiredProperties;
