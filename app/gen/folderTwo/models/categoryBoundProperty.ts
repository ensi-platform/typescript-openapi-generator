/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface CategoryBoundProperty {
  /** Название свойства */
  name: string;
  /** Публичное наименование */
  display_name: string;
  /** Код свойства */
  code: string;
  /** Тип свойства из PropertyTypeEnum */
  type: string;
  /**
   * Подсказка при заполнении для значения
   * @nullable
   */
  hint_value: string | null;
  /**
   * Подсказка при заполнении для названия значения
   * @nullable
   */
  hint_value_name: string | null;
  /** Поддерживает множественные значения */
  is_multiple: boolean;
  /** Выводится в фильтрах на витрине */
  is_filterable: boolean;
  /** Выводить на витрине */
  is_public: boolean;
  /** Активность атрибут */
  is_active: boolean;
  /** Атрибут имеет справочник значений */
  has_directory: boolean;
  /** Наследуемой от родительской категории атрибут */
  is_inherited: boolean;
  /** Атрибут обязателен для заполнения */
  is_required: boolean;
  /** Признак системного атрибута */
  is_system: boolean;
  /** Атрибут модерируется */
  is_moderated: boolean;
  /** Свойство используется для склейки товаров */
  is_gluing: boolean;
  /** Признак общего для всех категорий атрибута */
  is_common: boolean;
  /** Идентификатор атрибута, которому принадлежит значение */
  property_id: number;
}
