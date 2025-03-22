/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { FileOrNullProtected } from './fileOrNullProtected';

export interface DeliveryServiceDocumentReadonlyProperties {
  /** Идентификатор документа */
  id: number;
  file: FileOrNullProtected;
  /** Дата создания */
  created_at: string;
  /** Дата обновления */
  updated_at: string;
}
