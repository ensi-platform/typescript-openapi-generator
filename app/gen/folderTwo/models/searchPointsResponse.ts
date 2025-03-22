/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Point } from './point';
import type { SearchPointsResponseMeta } from './searchPointsResponseMeta';

export interface SearchPointsResponse {
  data: Point[];
  meta: SearchPointsResponseMeta;
}
