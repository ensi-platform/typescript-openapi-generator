/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CargoOrder } from './cargoOrder';
import type { SearchCargoOrdersResponseMeta } from './searchCargoOrdersResponseMeta';

export interface SearchCargoOrdersResponse {
  data: CargoOrder[];
  meta: SearchCargoOrdersResponseMeta;
}
