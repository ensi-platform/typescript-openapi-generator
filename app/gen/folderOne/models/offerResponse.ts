/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Offer0 } from './offer0';
import type { OfferResponseMeta } from './offerResponseMeta';

export interface OfferResponse {
  data: Offer0;
  meta?: OfferResponseMeta;
}
