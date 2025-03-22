/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DiscountCreateProperties } from './discountCreateProperties';
import type { DiscountFillableProperties } from './discountFillableProperties';
import type { DiscountRequiredProperties } from './discountRequiredProperties';
import type { DiscountCreateIncludesProductsProperties } from './discountCreateIncludesProductsProperties';

export type DiscountForCreate = DiscountCreateProperties & DiscountFillableProperties & DiscountRequiredProperties & DiscountCreateIncludesProductsProperties;
