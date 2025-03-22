/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface RefundFillableProperties {
  /** статус заявки на возврат из RefundStatusEnum */
  status?: number;
  /**
   * идентификатор ответственного
   * @nullable
   */
  responsible_id?: number | null;
  /**
   * причина отклонения
   * @nullable
   */
  rejection_comment?: string | null;
}
