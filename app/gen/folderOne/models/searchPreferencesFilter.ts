/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface SearchPreferencesFilter {
  /**
   * Идентификатор записи
   * @nullable
   */
  id?: number | null;
  /**
   * Идентификатор клиента
   * @nullable
   */
  customer_id?: number | null;
  /**
   * Название атрибута
   * @nullable
   */
  attribute_name?: string | null;
  /**
   * Значение атрибута атрибута
   * @nullable
   */
  attribute_value?: string | null;
}
