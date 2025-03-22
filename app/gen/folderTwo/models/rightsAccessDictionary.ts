/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RightsAccess } from './rightsAccess';

export interface RightsAccessDictionary {
  /** Подраздел */
  section?: string;
  items?: RightsAccess[];
}
