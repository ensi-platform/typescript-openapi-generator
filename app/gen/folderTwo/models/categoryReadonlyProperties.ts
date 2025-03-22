/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface CategoryReadonlyProperties {
  /** Идентификатор категории */
  id: number;
  /** Дата создания */
  created_at: string;
  /** Дата обновления */
  updated_at: string;
  /** Признак активности с учетом иерархии */
  is_real_active: boolean;
}
