/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface MassChangeActiveRequest {
  /** ID пользователей */
  user_ids: number[];
  /** Статус пользователя (true - Активен, false - Деактивирован) */
  active: boolean;
  /** Причина деактивации */
  cause_deactivation?: string;
}
