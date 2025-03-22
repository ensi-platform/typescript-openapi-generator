/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { StatusSettingProperties } from './statusSettingProperties';

export interface StatusSettingIncludes {
  next_statuses?: StatusSettingProperties[];
  /** Список названий следующих статусов через запятую, возвращается при возврате next_statuses */
  next_status_ids?: string;
  previous_statuses?: StatusSettingProperties[];
  /** Список названий предыдущих статусов через запятую, возвращается при возврате previous_statuses */
  previous_status_ids?: string;
}
