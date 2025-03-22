/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Category1 } from './category1';
import type { Product1 } from './product1';
import type { ProductGroupProduct } from './productGroupProduct';

export interface ProductGroup1 {
  /** Product gluing ID */
  id: number;
  /** Product gluing ID from PIM */
  product_group_id: number;
  /** Category ID from PIM */
  category_id: number;
  /** Name */
  name: string;
  /**
   * Main product ID from PIM
   * @nullable
   */
  main_product_id: number | null;
  /** Activity from PIM */
  is_active: boolean;
  /** Saved/created during migration of records from master services */
  is_migrated: boolean;
  /**
   * Category
   * @nullable
   */
  category?: Category1;
  /** Main product */
  main_product?: Product1;
  /** Products gluing */
  products?: Product1[];
  /** Product links to gluing */
  product_links?: ProductGroupProduct[];
  /** Product Group created at */
  created_at: string;
  /** Product Group updated at */
  updated_at: string;
}
