/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductAttributeValueFillablePropertiesValue } from './productAttributeValueFillablePropertiesValue';

export interface ProductAttributeValueFillableProperties {
  /** Идентификатор атрибута */
  property_id?: number;
  /** Значение элемента справочника (string|number|integer|boolean) */
  value?: ProductAttributeValueFillablePropertiesValue;
  /**
   * Название значения (например, имя цвета)
   * @nullable
   */
  name?: string | null;
  /** Идентификатор значения справочника. Если установлен, то value и name задавать не нужно. */
  directory_value_id?: number;
}
