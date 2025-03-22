/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DirectoryValue } from './directoryValue';
import type { SearchDirectoryValuesResponseMeta } from './searchDirectoryValuesResponseMeta';

export interface SearchDirectoryValuesResponse {
  data: DirectoryValue[];
  meta: SearchDirectoryValuesResponseMeta;
}
