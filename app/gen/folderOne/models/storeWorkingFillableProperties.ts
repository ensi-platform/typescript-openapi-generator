/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface StoreWorkingFillableProperties {
  /** ID склада */
  store_id?: number;
  /** Флаг активности дня работы склада */
  active?: boolean;
  /** День недели (1-7) */
  day?: number;
  /**
   * Время начала работы склада (00:00)
   * @nullable
   */
  working_start_time?: string | null;
  /**
   * Время конца работы склада (00:00)
   * @nullable
   */
  working_end_time?: string | null;
}
