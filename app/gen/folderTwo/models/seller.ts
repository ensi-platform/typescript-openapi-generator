/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { SellerReadonlyProperties } from './sellerReadonlyProperties';
import type { SellerFillableProperties } from './sellerFillableProperties';
import type { SellerFillableRequiredProperties } from './sellerFillableRequiredProperties';
import type { SellerUpdateProperties } from './sellerUpdateProperties';
import type { SellerUpdateRequiredProperties } from './sellerUpdateRequiredProperties';
import type { SellerIncludes } from './sellerIncludes';

export type Seller = SellerReadonlyProperties & SellerFillableProperties & SellerFillableRequiredProperties & SellerUpdateProperties & SellerUpdateRequiredProperties & SellerIncludes;
