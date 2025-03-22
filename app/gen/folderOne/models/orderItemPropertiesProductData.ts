/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Информация о товаре
 */
export type OrderItemPropertiesProductData = {
  /** Вес нетто товара (кг) */
  weight: number;
  /** Вес брутто товара (кг) */
  weight_gross: number;
  /** Ширина товара (мм) */
  width: number;
  /** Высота товара (мм) */
  height: number;
  /** Длина товара (мм) */
  length: number;
  /**
   * артикул (EAN)
   * @nullable
   */
  barcode: string | null;
};
