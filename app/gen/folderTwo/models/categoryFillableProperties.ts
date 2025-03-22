/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface CategoryFillableProperties {
  /** Название категории */
  name?: string;
  /** Код категории */
  code?: string;
  /**
   * Идентификатор родительской категории
   * @nullable
   */
  parent_id?: number | null;
  /** Категория наследует атрибуты родительской */
  is_inherits_properties?: boolean;
  /** Признак активности данной категории */
  is_active?: boolean;
}
