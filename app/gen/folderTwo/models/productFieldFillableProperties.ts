/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface ProductFieldFillableProperties {
  /** Наименование поля товара */
  name?: string;
  /** Признак обязательности заполнения */
  is_required?: boolean;
  /** Признак модерируемого поля */
  is_moderated?: boolean;
  /**
   * Категория метрики товара - значение перечисления MetricsCategoryEnum или null
   * @nullable
   */
  metric_category?: string | null;
}
