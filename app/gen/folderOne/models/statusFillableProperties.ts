/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface StatusFillableProperties {
  /** Имя статуса */
  name?: string;
  /**
   * Активность
   * @nullable
   */
  active?: boolean | null;
  /**
   * По умолчанию
   * @nullable
   */
  default?: boolean | null;
  /**
   * Каналы
   * @nullable
   */
  channel?: number[] | null;
}
