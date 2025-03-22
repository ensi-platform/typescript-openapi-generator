/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface DeliveryKpiFillableProperties {
  /**
   * Ready-To-Go time - время для проверки заказа АОЗ до его передачи в MAS (мин)
   * @nullable
   */
  rtg?: number | null;
  /**
   * Confirmation Time - время перехода Отправления из статуса “Ожидает подтверждения” в статус “На комплектации” (мин)
   * @nullable
   */
  ct?: number | null;
  /**
   * Planned Processing Time - плановое время для прохождения Отправлением статусов от “На комплектации” до “Готов к передаче ЛО” (мин)
   * @nullable
   */
  ppt?: number | null;
}
