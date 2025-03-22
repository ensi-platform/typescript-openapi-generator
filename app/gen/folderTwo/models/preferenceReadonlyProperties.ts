/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface PreferenceReadonlyProperties {
  /** Идентификатор */
  id: number;
  /** Идентификатор клиента */
  customer_id: number;
  /** Название атрибута */
  attribute_name: string;
  /** Значение атрибута атрибута */
  attribute_value: string;
  /** Колличество купленных товаров */
  product_count: number;
  /** Cумма стоимости купленных товаров */
  product_sum: number;
}
