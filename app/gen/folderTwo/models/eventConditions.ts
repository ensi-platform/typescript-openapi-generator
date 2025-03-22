/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Условия для перехода в статус
 * @nullable
 */
export type EventConditions = {
  /**
   * Операция из EventOperationEnum
   * @nullable
   */
  operation: number | null;
  /** Список событий */
  events?: number[];
} | null;
