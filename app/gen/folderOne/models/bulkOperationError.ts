/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface BulkOperationError {
  /** Идентификатор массовой операции */
  operation_id: number;
  /** Идентификатор сущности */
  entity_id: number;
  /** Ошибка */
  message: string;
}
