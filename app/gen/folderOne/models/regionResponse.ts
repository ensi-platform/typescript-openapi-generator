/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Region } from './region';
import type { RegionResponseMeta } from './regionResponseMeta';

export interface RegionResponse {
  data: Region;
  meta?: RegionResponseMeta;
}
