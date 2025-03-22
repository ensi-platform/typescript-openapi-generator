/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { FileProtected } from './fileProtected';

export interface OrderFile {
  /** ID файла */
  id: number;
  /** ID заказа */
  order_id: number;
  /** Оригинальное название файла */
  original_name: string;
  file: FileProtected;
  /** дата создания файла */
  created_at: string;
  /** дата обновления файла */
  updated_at: string;
}
