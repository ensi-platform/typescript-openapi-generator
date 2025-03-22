/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { FileProtected } from './fileProtected';

export interface RefundFile {
  /** идентификатор */
  id: number;
  /** идентификатор заявки на возврат */
  refund_id: number;
  /** Оригинальное название файла */
  original_name: string;
  file: FileProtected;
  /** дата загрузки файла */
  created_at: string;
  /** дата обновления файла */
  updated_at: string;
}
