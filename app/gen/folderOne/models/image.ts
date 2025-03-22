/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface Image {
  /** Image ID */
  id: number;
  /** Image ID from PIM */
  image_id: number;
  /** Product ID from PIM */
  product_id: number;
  /**
   * Image description
   * @nullable
   */
  name: string | null;
  /** Sorting order */
  sort: number;
  /**
   * Image file
   * @nullable
   */
  file: string | null;
  /** Saved/created during migration of records from master services */
  is_migrated: boolean;
  /** Image created at */
  created_at: string;
  /** Image updated at */
  updated_at: string;
}
