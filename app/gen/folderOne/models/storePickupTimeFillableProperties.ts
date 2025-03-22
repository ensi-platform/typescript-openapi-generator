/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface StorePickupTimeFillableProperties {
  /** ID склада */
  store_id?: number;
  /** День недели (1-7) */
  day?: number;
  /**
   * Код времени отгрузки у службы доставки
   * @nullable
   */
  pickup_time_code?: string | null;
  /** Время начала отгрузки */
  pickup_time_start?: string;
  /** Время окончания отгрузки */
  pickup_time_end?: string;
  /**
   * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
   * @nullable
   */
  delivery_service?: number | null;
}
