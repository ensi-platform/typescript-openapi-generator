/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { FederalDistrict } from './federalDistrict';
import type { SearchFederalDistrictsResponseMeta } from './searchFederalDistrictsResponseMeta';

export interface SearchFederalDistrictsResponse {
  data: FederalDistrict[];
  meta: SearchFederalDistrictsResponseMeta;
}
