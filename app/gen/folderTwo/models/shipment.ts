/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ShipmentReadonlyProperties } from './shipmentReadonlyProperties';
import type { ShipmentFillableProperties } from './shipmentFillableProperties';
import type { ShipmentFillableRequiredProperties } from './shipmentFillableRequiredProperties';
import type { ShipmentIncludes } from './shipmentIncludes';

export type Shipment = ShipmentReadonlyProperties & ShipmentFillableProperties & ShipmentFillableRequiredProperties & ShipmentIncludes;
