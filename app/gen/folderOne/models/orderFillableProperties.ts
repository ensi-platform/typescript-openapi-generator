/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface OrderFillableProperties {
  /** статус заказа из OrdersOrderStatusEnum */
  status?: number;
  /**
   * комментарий менеджера
   * @nullable
   */
  client_comment?: string | null;
  /**
   * имя получателя
   * @nullable
   */
  receiver_name?: string | null;
  /**
   * телефон получателя
   * @nullable
   */
  receiver_phone?: string | null;
  /**
   * e-mail получателя
   * @nullable
   */
  receiver_email?: string | null;
  /**
   * флаг, что заказ проблемный
   * @nullable
   */
  is_problem?: boolean | null;
  /**
   * последнее сообщение продавца о проблеме со сборкой
   * @nullable
   */
  problem_comment?: string | null;
}
