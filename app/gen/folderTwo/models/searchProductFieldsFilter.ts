/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface SearchProductFieldsFilter {
  /** Идентификатор(ы) полей */
  id?: number;
  /** Наименование(я) поля */
  name?: string;
  /** Признак обязательности заполнения */
  is_required?: boolean;
  /** Признак модерируемого поля */
  is_moderated?: boolean;
  /**
   * Категория метрики товара из перечисления MetricsCategoryEnum
   * @nullable
   */
  metrics_category?: string | null;
}
