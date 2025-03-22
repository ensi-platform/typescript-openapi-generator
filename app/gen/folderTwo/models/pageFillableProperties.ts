/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface PageFillableProperties {
  /** Наименование страницы */
  name?: string;
  /** Человекопонятный идентификатор для url */
  slug?: string;
  /** Html блок-контент */
  content?: string;
  /** Активность страницы */
  is_active?: boolean;
  /**
   * Дата и время начала публикации страницы
   * @nullable
   */
  active_from?: string | null;
  /**
   * Дата и время окончания публикации страницы
   * @nullable
   */
  active_to?: string | null;
}
