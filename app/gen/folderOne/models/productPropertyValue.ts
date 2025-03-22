/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Property2 } from './property2';
import type { PropertyDirectoryValue } from './propertyDirectoryValue';

export interface ProductPropertyValue {
  /** Product property value ID */
  id: number;
  /** Product property value ID from PIM */
  product_property_value_id: number;
  /** Product ID from PIM */
  product_id: number;
  /** Property ID from PIM */
  property_id: number;
  /**
   * Directory value ID from PIM
   * @nullable
   */
  directory_value_id?: number | null;
  /** Value type */
  type: string;
  /**
   * Value
   * @nullable
   */
  value: string | null;
  /**
   * Value name
   * @nullable
   */
  name: string | null;
  /** Saved/created during migration of records from master services */
  is_migrated: boolean;
  /** @nullable */
  property?: Property2;
  /** @nullable */
  directory_value?: PropertyDirectoryValue;
  /** Product property created at */
  created_at: string;
  /** Product property updated at */
  updated_at: string;
}
