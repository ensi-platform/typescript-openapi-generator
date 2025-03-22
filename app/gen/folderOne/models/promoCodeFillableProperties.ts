/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface PromoCodeFillableProperties {
  /** статус промокода из PromoCodeStatusEnum */
  status?: number;
  /** Название промокода */
  name?: string;
  /** Код */
  code?: string;
  /**
   * Ограничение на количество использований промокода
   * @nullable
   */
  counter?: number | null;
  /**
   * Дата начала действия промокода
   * @nullable
   */
  start_date?: string | null;
  /**
   * Дата окончания действия промокода
   * @nullable
   */
  end_date?: string | null;
  /** ID скидки */
  discount_id?: number;
}
