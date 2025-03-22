/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface RefundReadonlyProperties {
  /** идентификатор */
  id: number;
  /** сумма возврата, коп. */
  price: number;
  /** является заявкой на частичный возврат */
  is_partial: boolean;
  /** дата создания */
  created_at: string;
  /** дата обновления */
  updated_at: string;
}
