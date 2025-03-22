/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface BasketReadonlyProperties {
  /** Basket ID */
  id: number;
  /** Customer ID */
  customer_id: number;
  /** Date of creation */
  created_at: string;
  /** Date of update */
  updated_at: string;
  /**
   * The applied promo code
   * @nullable
   */
  promo_code: string | null;
}
