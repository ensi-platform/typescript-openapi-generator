/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { SellerFillableProperties } from './sellerFillableProperties';
import type { SellerUpdateProperties } from './sellerUpdateProperties';

export type PatchSellerRequest = SellerFillableProperties & SellerUpdateProperties;
