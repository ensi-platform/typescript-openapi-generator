/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface PromoCodeReadonlyProperties {
  /** Идентификатор */
  id: number;
  /**
   * Количество использований промокода
   * @nullable
   */
  current_counter?: number | null;
  /** Дата создания */
  created_at: string;
  /** Дата обновления */
  updated_at: string;
}
