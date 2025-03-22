/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { StatusSetting } from './statusSetting';
import type { StatusSettingResponseMeta } from './statusSettingResponseMeta';

export interface StatusSettingResponse {
  data: StatusSetting;
  meta?: StatusSettingResponseMeta;
}
