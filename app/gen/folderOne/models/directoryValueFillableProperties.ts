/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface DirectoryValueFillableProperties {
  /**
   * Значение элемента справочника (string|number|integer|boolean) Обязателен для заполнения, если не задан preload_file_id.

   */
  value?: string;
  /** Название значения (например, имя цвета) */
  name?: string;
  /** Символьный код значения */
  code?: string;
}
