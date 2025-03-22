/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductGroup1 } from './productGroup1';
import type { Product1 } from './product1';

export interface ProductGroupProduct {
  /** ID of the product link and the product */
  id: number;
  /** ID of the product link and the product from PIM */
  product_group_product_id: number;
  /** Product gluing ID from the PIM */
  product_group_id: number;
  /** Product ID from PIM */
  product_id: number;
  /**
   * Product gluing
   * @nullable
   */
  product_group?: ProductGroup1;
  /** Product offers */
  product?: Product1;
  /** Saved/created during migration of records from master services */
  is_migrated: boolean;
  /** Product Group Product created at */
  created_at: string;
  /** Product Group Product updated at */
  updated_at: string;
}
