/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface CustomerReadonlyProperties {
  /** Идентификатор покупателя */
  id: number;
  /**
   * Ссылка на аватар
   * @nullable
   */
  avatar: string | null;
  /**
   * Дата и время запроса на удаление персональных данных
   * @nullable
   */
  delete_request: string | null;
  /** Дата создания */
  created_at: string;
  /** Дата обновления */
  updated_at: string;
}
