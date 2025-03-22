/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CatalogBulkOperationActionEnum } from './catalogBulkOperationActionEnum';
import type { CatalogBulkOperationEntityEnum } from './catalogBulkOperationEntityEnum';
import type { CatalogBulkOperationStatusEnum } from './catalogBulkOperationStatusEnum';

export interface BulkOperationProperties {
  /** Идентификатор массовой операции */
  id?: number;
  action?: CatalogBulkOperationActionEnum;
  entity?: CatalogBulkOperationEntityEnum;
  status?: CatalogBulkOperationStatusEnum;
  /** Идентификаторы для обработки */
  ids?: number[];
  /** Идентификаторы для обработки (для вывода в таблицу) */
  ids_string?: string;
  /**
   * Сообщение об ошибке
   * @nullable
   */
  error_message?: string | null;
  /** Дата создания */
  created_at?: string;
  /** Дата обновления */
  updated_at?: string;
}
