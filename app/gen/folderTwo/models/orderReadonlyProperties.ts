/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface OrderReadonlyProperties {
  /** ID заказа */
  id: number;
  /** номер заказа */
  number: string;
  /** id покупателя */
  customer_id: number;
  /** email покупателя */
  customer_email: string;
  /** стоимость (без учета скидки) (рассчитывается автоматически) в коп. */
  cost: number;
  /** стоимость (с учетом скидок) (рассчитывается автоматически) в коп. */
  price: number;
  /**
   * Использованный промокод
   * @nullable
   */
  promo_code: string | null;
  /** источник взаимодействия из OrdersOrderSourceEnum */
  source: number;
  /**
   * дата установки статуса заказа
   * @nullable
   */
  status_at: string | null;
  /** статус оплаты из OrdersPaymentStatusEnum */
  payment_status: number;
  /**
   * дата установки статуса оплаты
   * @nullable
   */
  payment_status_at: string | null;
  /**
   * Дата оплаты
   * @nullable
   */
  payed_at: string | null;
  /**
   * Дата, до которой нужно провести оплату
   * @nullable
   */
  payment_expires_at: string | null;
  /** метод оплаты из PaymentMethodEnum */
  payment_method: number;
  /** система оплаты из PaymentSystemEnum */
  payment_system: number;
  /**
   * ID оплаты во внешней системе
   * @nullable
   */
  payment_external_id: string | null;
  /**
   * дата установки флага проблемного заказа
   * @nullable
   */
  is_problem_at: string | null;
  /** флаг, что заказ может быть изменён */
  is_editable?: boolean;
  /** флаг, что заказ был изменён */
  is_changed?: boolean;
  /** флаг, что заказ просроченный */
  is_expired: boolean;
  /**
   * дата установки флага просроченного заказа
   * @nullable
   */
  is_expired_at: string | null;
  /** флаг, что заказ возвращен */
  is_return: boolean;
  /**
   * дата установки флага возвращенного заказа
   * @nullable
   */
  is_return_at: string | null;
  /** флаг, что заказ частично возвращен */
  is_partial_return: boolean;
  /**
   * дата установки флага частично возвращенного заказа
   * @nullable
   */
  is_partial_return_at: string | null;
  /**
   * дата создания заказа
   * @nullable
   */
  created_at: string | null;
  /**
   * дата обновления заказа
   * @nullable
   */
  updated_at: string | null;
}
