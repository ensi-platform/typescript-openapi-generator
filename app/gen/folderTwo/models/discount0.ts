/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Offer1 } from './offer1';

export interface Discount0 {
  /** ID */
  id: number;
  /** Offer ID from Offers */
  offer_id: number;
  /** Value type */
  value_type: number;
  /** Discount value */
  value: number;
  offer?: Offer1;
  /** Discount created at */
  created_at: string;
  /** Discount updated at */
  updated_at: string;
}
