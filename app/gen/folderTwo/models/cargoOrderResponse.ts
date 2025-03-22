/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CargoOrder } from './cargoOrder';
import type { CargoOrderResponseMeta } from './cargoOrderResponseMeta';

export interface CargoOrderResponse {
  data: CargoOrder;
  meta?: CargoOrderResponseMeta;
}
