/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface CargoReadonlyProperties {
  /** id */
  id: number;
  /** Идентификатор продавца */
  seller_id: number;
  /** Идентификатор склада продавца */
  store_id: number;
  /** Идентификатор сервиса доставки */
  delivery_service_id: number;
  /** Дата создания */
  created_at: string;
  /** Дата обновления */
  updated_at: string;
  /**
   * Дата установки статуса
   * @nullable
   */
  status_at: string | null;
  /**
   * Дата установки флага проблемного груза
   * @nullable
   */
  is_problem_at: string | null;
  /**
   * Дата установки флага отмены груза
   * @nullable
   */
  is_canceled_at: string | null;
}
