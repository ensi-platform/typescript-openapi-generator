/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RightsAccessDictionary } from './rightsAccessDictionary';
import type { RightsAccessResponseMeta } from './rightsAccessResponseMeta';

export interface RightsAccessResponse {
  data: RightsAccessDictionary[];
  meta?: RightsAccessResponseMeta;
}
