/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface DirectoryValueReadonlyProperties {
  /** Идентификатор значения */
  id: number;
  /**
   * URL файла
   * @nullable
   */
  url?: string | null;
  /** Тип значения из перечисления CatalogPropertyTypeEnum */
  type: string;
  /** Идентификатор атрибута, которому принадлежит значение */
  property_id?: number;
}
