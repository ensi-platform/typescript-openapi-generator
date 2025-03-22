/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface ProductFieldReadonlyProperties {
  /** Идентификатор поля */
  id: number;
  /** Символьный код поля */
  code: string;
  /** Значения из FieldSettingsMaskEnum, соответствующие доступным для редактирования свойствам */
  edit_mask: number[];
  /** Дата создания */
  created_at: string;
  /** Дата обновления */
  updated_at: string;
}
