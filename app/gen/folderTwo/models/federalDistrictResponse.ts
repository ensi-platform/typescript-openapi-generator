/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { FederalDistrict } from './federalDistrict';
import type { FederalDistrictResponseMeta } from './federalDistrictResponseMeta';

export interface FederalDistrictResponse {
  data: FederalDistrict;
  meta?: FederalDistrictResponseMeta;
}
