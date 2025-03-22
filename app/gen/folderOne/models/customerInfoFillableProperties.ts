/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface CustomerInfoFillableProperties {
  /** Идентификатор пользователя */
  customer_id?: number;
  /**
   * Колличетсво купленных товаров
   * @nullable
   */
  kpi_sku_count?: number | null;
  /**
   * Сумма цен купленных товаров
   * @nullable
   */
  kpi_sku_price_sum?: number | null;
  /**
   * Колличетсво офрмленных заказов
   * @nullable
   */
  kpi_order_count?: number | null;
  /**
   * Колличетсво оформленных отправок
   * @nullable
   */
  kpi_shipment_count?: number | null;
  /**
   * Колличетсво досталенных
   * @nullable
   */
  kpi_delivered_count?: number | null;
  /**
   * Сумма цен доставленных
   * @nullable
   */
  kpi_delivered_sum?: number | null;
  /**
   * Колличетсво возвращенных
   * @nullable
   */
  kpi_refunded_count?: number | null;
  /**
   * Сумма цен возвращенных
   * @nullable
   */
  kpi_refunded_sum?: number | null;
  /**
   * Колличетсво отмененных
   * @nullable
   */
  kpi_canceled_count?: number | null;
  /**
   * Сумма цен отмененных
   * @nullable
   */
  kpi_canceled_sum?: number | null;
}
