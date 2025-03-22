/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface SearchDirectoryValuesFilter {
  /** Идентификатор(ы) значений */
  id?: number;
  /** Название или часть названия значения */
  name?: string;
  /** Код(ы) значений */
  code?: string;
  /** Идентификатор(ы) атрибута, которому принадлежит значение */
  property_id?: number;
  /** Значение элемента справочника (string|number|integer|boolean) */
  value?: string;
}
