/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Point } from './point';
import type { PointResponseMeta } from './pointResponseMeta';

export interface PointResponse {
  data: Point;
  meta?: PointResponseMeta;
}
