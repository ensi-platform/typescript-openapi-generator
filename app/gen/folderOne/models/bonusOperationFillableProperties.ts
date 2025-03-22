/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface BonusOperationFillableProperties {
  /** Идентификатор клиента */
  customer_id?: number;
  /**
   * Номре заказа
   * @nullable
   */
  order_number?: number | null;
  /** Количество начисления/списания бонусов (с “-” при списании) */
  bonus_amount?: number;
  /**
   * Комментарий к бонусной операции
   * @nullable
   */
  comment?: string | null;
  /**
   * Дата активации
   * @nullable
   */
  activation_date?: string | null;
  /**
   * Дата сгорания
   * @nullable
   */
  expiration_date?: string | null;
}
