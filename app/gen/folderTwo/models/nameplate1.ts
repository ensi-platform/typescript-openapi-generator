/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { NameplateProduct1 } from './nameplateProduct1';

export interface Nameplate1 {
  /** Category ID from CMS */
  id: number;
  /** Nameplate ID from CMS */
  nameplate_id: number;
  /** Nameplate name */
  name: string;
  /** Nameplate code */
  code: string;
  /** Background color */
  background_color: string;
  /** Text color */
  text_color: string;
  /** Active */
  is_active: boolean;
  /** Array of related NameplateProduct objects */
  product_links?: NameplateProduct1[];
  /** Saved/created during migration of records from master services */
  is_migrated: boolean;
  /** Nameplate created at */
  created_at: string;
  /** Nameplate updated at */
  updated_at: string;
}
