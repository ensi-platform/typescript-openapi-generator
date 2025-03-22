/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Cargo } from './cargo';
import type { CargoResponseMeta } from './cargoResponseMeta';

export interface CargoResponse {
  data: Cargo;
  meta?: CargoResponseMeta;
}
