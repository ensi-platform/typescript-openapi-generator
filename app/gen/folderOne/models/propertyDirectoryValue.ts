/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface PropertyDirectoryValue {
  /** Directory value id */
  id: number;
  /** Directory value id from PIM */
  directory_value_id: number;
  /** Property ID from PIM */
  property_id: number;
  /**
   * Value name
   * @nullable
   */
  name: string | null;
  /**
   * Code
   * @nullable
   */
  code: string | null;
  /** Value */
  value: string;
  /** Type of stored value */
  type: string;
  /** Saved/created during migration of records from master services */
  is_migrated: boolean;
  /** Nameplate created at */
  created_at: string;
  /** Nameplate updated at */
  updated_at: string;
}
