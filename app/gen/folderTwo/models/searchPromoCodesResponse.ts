/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { PromoCode } from './promoCode';
import type { SearchPromoCodesResponseMeta } from './searchPromoCodesResponseMeta';

export interface SearchPromoCodesResponse {
  data: PromoCode[];
  meta: SearchPromoCodesResponseMeta;
}
