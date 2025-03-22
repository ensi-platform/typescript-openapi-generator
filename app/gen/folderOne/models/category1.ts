/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ActualCategoryProperty1 } from './actualCategoryProperty1';

export interface Category1 {
  /** Category ID from Pim */
  id: number;
  /** Name */
  name: string;
  /** CNC code */
  code: string;
  /**
   * ID of the parent category from Pim
   * @nullable
   */
  parent_id: number | null;
  /** Category ID from Pim */
  category_id: number;
  /** Saved/created during migration of records from master services */
  is_migrated: boolean;
  /** Array of related ActualCategoryProperty objects */
  actual_properties?: ActualCategoryProperty1[];
  /** Property created at */
  created_at: string;
  /** Property updated at */
  updated_at: string;
}
