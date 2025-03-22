/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Status1 } from './status1';
import type { StatusResponseMeta } from './statusResponseMeta';

export interface StatusResponse {
  data: Status1;
  meta?: StatusResponseMeta;
}
