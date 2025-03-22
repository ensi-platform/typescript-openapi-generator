/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Offer1 } from './offer1';
import type { SearchOffersResponse1Meta } from './searchOffersResponse1Meta';

export interface SearchOffersResponse1 {
  data: Offer1[];
  meta: SearchOffersResponse1Meta;
}
