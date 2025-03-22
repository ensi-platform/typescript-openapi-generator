/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Property0 } from './property0';
import type { PropertyResponseMeta } from './propertyResponseMeta';

export interface PropertyResponse {
  data: Property0;
  meta?: PropertyResponseMeta;
}
