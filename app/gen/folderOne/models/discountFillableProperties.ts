/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface DiscountFillableProperties {
  /** Наименование скидки */
  name?: string;
  /** Тип значения скидки из DiscountValueTypeEnum */
  value_type?: number;
  /** Размер скидки */
  value?: number;
  /** Статус скидки из DiscountStatusEnum */
  status?: number;
  /**
   * Дата начала действия скидки
   * @nullable
   */
  start_date?: string | null;
  /**
   * Дата окончания действия скидки
   * @nullable
   */
  end_date?: string | null;
  /** Скидка действительна только по промокоду */
  promo_code_only?: boolean;
}
