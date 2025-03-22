/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface ProductGroupReadonlyProperties {
  /** Идентификатор склейки */
  id: number;
  /** Кол-во товаров в склейке */
  products_count: number;
  /**
   * URL картинки главного товара
   * @nullable
   */
  main_product_image: string | null;
  /** Дата создания */
  created_at: string;
  /** Дата обновления */
  updated_at: string;
}
