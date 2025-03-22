/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DeliveryReadonlyProperties } from './deliveryReadonlyProperties';
import type { DeliveryFillableProperties } from './deliveryFillableProperties';
import type { DeliveryFillableRequiredProperties } from './deliveryFillableRequiredProperties';
import type { DeliveryIncludes } from './deliveryIncludes';

export type Delivery = DeliveryReadonlyProperties & DeliveryFillableProperties & DeliveryFillableRequiredProperties & DeliveryIncludes;
