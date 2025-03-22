/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { PromoCodeReadonlyProperties } from './promoCodeReadonlyProperties';
import type { PromoCodeFillableProperties } from './promoCodeFillableProperties';
import type { PromoCodeRequiredProperties } from './promoCodeRequiredProperties';
import type { PromoCodeIncludes } from './promoCodeIncludes';

export type PromoCode = PromoCodeReadonlyProperties & PromoCodeFillableProperties & PromoCodeRequiredProperties & PromoCodeIncludes;
