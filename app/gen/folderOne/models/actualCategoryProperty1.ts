/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface ActualCategoryProperty1 {
  /** ID of actual category property */
  id: number;
  /** ID of actual category property from Pim */
  actual_category_property_id: number;
  /** Property ID from Pim */
  property_id: number;
  /** Category ID from Pim */
  category_id: number;
  /** The property is used for gluing products */
  is_gluing: boolean;
  /** Saved/created during migration of records from master services */
  is_migrated: boolean;
  /** Property created at */
  created_at: string;
  /** Property updated at */
  updated_at: string;
}
