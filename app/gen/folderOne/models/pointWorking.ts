/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface PointWorking {
  /** Идентификатор */
  id: number;
  /** Идентификатор пункта */
  point_id: number;
  /** Активность */
  is_active: boolean;
  /** День недели (1-7) */
  day: number;
  /** Время начала работы склада */
  working_start_time: string;
  /** Время конца работы склада */
  working_end_time: string;
  /** Дата создания */
  created_at: string;
  /** Дата обновления */
  updated_at: string;
}
