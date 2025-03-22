/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ShipmentMethod } from './shipmentMethod';
import type { GetShipmentMethodsResponseMeta } from './getShipmentMethodsResponseMeta';

export interface GetShipmentMethodsResponse {
  data: ShipmentMethod[];
  meta?: GetShipmentMethodsResponseMeta;
}
