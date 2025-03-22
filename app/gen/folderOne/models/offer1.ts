/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Product1 } from './product1';
import type { Discount0 } from './discount0';
import type { ProductGroup1 } from './productGroup1';
import type { ProductGroupProduct } from './productGroupProduct';

export interface Offer1 {
  /** Offer ID */
  id: number;
  /** Offer ID from Offers */
  offer_id: number;
  /** Product ID from Pim */
  product_id: number;
  /** The final activity of the offer */
  is_active: boolean;
  /** Saved/created during migration of records from master services */
  is_migrated: boolean;
  /**
   * Base price
   * @nullable
   */
  base_price?: number | null;
  /**
   * The final discounted price. If null, it is calculated during indexing
   * @nullable
   */
  price?: number | null;
  /** @nullable */
  product?: Product1;
  /** @nullable */
  discount?: Discount0;
  /** @nullable */
  product_group?: ProductGroup1;
  /** @nullable */
  product_group_product?: ProductGroupProduct;
  /** Offer created at */
  created_at: string;
  /** Offer updated at */
  updated_at: string;
}
