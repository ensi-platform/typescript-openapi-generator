/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { FederalDistrict } from './federalDistrict';
import type { Region } from './region';

export interface DeliveryPriceIncludes {
  federal_district?: FederalDistrict;
  region?: Region;
}
