/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface SearchBonusOperationsFilter {
  /**
   * Идентификатор записи
   * @nullable
   */
  id?: number | null;
  /**
   * Идентификатор клиента
   * @nullable
   */
  customer_id?: number | null;
  /**
   * Номер заказа
   * @nullable
   */
  order_number?: number | null;
  /**
   * Скоуп отбора операций начисления баллов
   * @nullable
   */
  earning?: boolean | null;
  /**
   * Скоуп отбора операций списания баллов
   * @nullable
   */
  spending?: boolean | null;
}
