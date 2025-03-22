/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface Property2 {
  /** Category ID from Pim */
  id: number;
  /** Property ID from PIM */
  property_id: number;
  /** Name */
  name: string;
  /** Property code */
  code: string;
  /** Type */
  type: string;
  /** Display on the showcase */
  is_public: boolean;
  /** Property active */
  is_active: boolean;
  /** Saved/created during migration of records from master services */
  is_migrated: boolean;
  /** Property created at */
  created_at: string;
  /** Property updated at */
  updated_at: string;
}
