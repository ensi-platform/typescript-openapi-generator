/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { PromoCode } from './promoCode';
import type { PromoCodeResponseMeta } from './promoCodeResponseMeta';

export interface PromoCodeResponse {
  data: PromoCode;
  meta?: PromoCodeResponseMeta;
}
