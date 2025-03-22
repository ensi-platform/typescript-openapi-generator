/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { PropertyDirectoryValue } from './propertyDirectoryValue';
import type { SearchPropertyDirectoryValuesResponseMeta } from './searchPropertyDirectoryValuesResponseMeta';

export interface SearchPropertyDirectoryValuesResponse {
  data: PropertyDirectoryValue[];
  meta: SearchPropertyDirectoryValuesResponseMeta;
}
