/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface StockReadonlyProperties {
  /** Идентификатор стока */
  id: number;
  /** ID склада */
  store_id: number;
  /** ID товарного предложения */
  offer_id: number;
  /**
   * Дата создания остатка
   * @nullable
   */
  created_at: string | null;
  /**
   * Дата обновления остатка
   * @nullable
   */
  updated_at: string | null;
}
