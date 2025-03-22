/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface BasketItem {
  /** Basket item ID */
  id: number;
  /** Basket ID */
  basket_id: number;
  /** Offer ID */
  offer_id: number;
  /** Product ID */
  product_id: number;
  /** Product quantity */
  qty: number;
  /** Date of creation */
  created_at: string;
  /** Date of update */
  updated_at: string;
}
