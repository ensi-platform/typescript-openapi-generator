/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface PropertyFillableProperties {
  /** Название свойства */
  name?: string;
  /** Публичное наименование */
  display_name?: string;
  /** Код свойства */
  code?: string;
  /** Тип свойства из PropertyTypeEnum */
  type?: string;
  /**
   * Подсказка при заполнении для значения
   * @nullable
   */
  hint_value?: string | null;
  /**
   * Подсказка при заполнении для названия значения
   * @nullable
   */
  hint_value_name?: string | null;
  /** Поддерживает множественные значения */
  is_multiple?: boolean;
  /** Выводится в фильтрах на витрине */
  is_filterable?: boolean;
  /** Выводить на витрине */
  is_public?: boolean;
  /** Активность атрибута */
  is_active?: boolean;
  /** Обязательность заполнения для общего (is_common=true) атрибута */
  is_required?: boolean;
  /** Атрибут имеет справочник значений */
  has_directory?: boolean;
  /** Атрибут модерируется */
  is_moderated?: boolean;
}
