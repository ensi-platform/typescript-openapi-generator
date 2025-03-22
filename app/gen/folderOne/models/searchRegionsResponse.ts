/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Region } from './region';
import type { SearchRegionsResponseMeta } from './searchRegionsResponseMeta';

export interface SearchRegionsResponse {
  data: Region[];
  meta: SearchRegionsResponseMeta;
}
