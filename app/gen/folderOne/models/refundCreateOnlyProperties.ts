/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface RefundCreateOnlyProperties {
  /** идентификатор заказа */
  order_id?: number;
  /**
   * идентификатор администратора (если автором был администратор)
   * @nullable
   */
  manager_id?: number | null;
  /** источник взаимодействия (канал) */
  source?: number;
  /** комментарий пользователя */
  user_comment?: string;
}
