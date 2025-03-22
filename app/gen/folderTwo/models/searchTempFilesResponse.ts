/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { TempFile } from './tempFile';
import type { SearchTempFilesResponseMeta } from './searchTempFilesResponseMeta';

export interface SearchTempFilesResponse {
  data: TempFile[];
  meta: SearchTempFilesResponseMeta;
}
