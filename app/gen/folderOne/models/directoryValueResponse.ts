/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DirectoryValue } from './directoryValue';
import type { DirectoryValueResponseMeta } from './directoryValueResponseMeta';

export interface DirectoryValueResponse {
  data: DirectoryValue;
  meta?: DirectoryValueResponseMeta;
}
