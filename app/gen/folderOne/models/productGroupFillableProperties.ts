/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface ProductGroupFillableProperties {
  /** Идентификатор категории */
  category_id?: number;
  /**
   * Идентификатор товара для обложки
   * @nullable
   */
  main_product_id?: number | null;
  /** Название */
  name?: string;
  /** Активность */
  is_active?: boolean;
}
