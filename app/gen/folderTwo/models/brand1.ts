/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface Brand1 {
  /** Brand ID */
  id: number;
  /** Brand ID from PIM */
  brand_id: number;
  /** Name */
  name: string;
  /** CNC code */
  code: string;
  /**
   * Brand description
   * @nullable
   */
  description?: string | null;
  /**
   * Logotype file
   * @nullable
   */
  logo_file?: string | null;
  /**
   * Logotype URL
   * @nullable
   */
  logo_url?: string | null;
  /** Saved/created during migration of records from master services */
  is_migrated: boolean;
  /** Brand created at */
  created_at: string;
  /** Brand updated at */
  updated_at: string;
}
