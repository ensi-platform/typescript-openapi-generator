/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface NameplateProduct1 {
  /** NameplateProduct ID */
  id: number;
  /** Bundles of nameplate and product from CMS */
  nameplate_product_id: number;
  /** Nameplate ID from CMS */
  nameplate_id: number;
  /** Product ID from PIM */
  product_id: number;
  /** Saved/created during migration of records from master services */
  is_migrated: boolean;
  /** NameplateProduct created at */
  created_at: string;
  /** NameplateProduct updated at */
  updated_at: string;
}
