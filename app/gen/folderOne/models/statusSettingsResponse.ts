/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { StatusSetting } from './statusSetting';
import type { StatusSettingsResponseMeta } from './statusSettingsResponseMeta';

export interface StatusSettingsResponse {
  data: StatusSetting[];
  meta: StatusSettingsResponseMeta;
}
