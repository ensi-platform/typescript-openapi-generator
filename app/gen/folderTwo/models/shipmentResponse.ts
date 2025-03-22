/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Shipment } from './shipment';
import type { ShipmentResponseMeta } from './shipmentResponseMeta';

export interface ShipmentResponse {
  data: Shipment;
  meta?: ShipmentResponseMeta;
}
