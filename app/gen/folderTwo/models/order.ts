/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { OrderReadonlyProperties } from './orderReadonlyProperties';
import type { OrderFillableProperties } from './orderFillableProperties';
import type { OrderFillableRequiredProperties } from './orderFillableRequiredProperties';
import type { OrderDeliveryFillableProperties } from './orderDeliveryFillableProperties';
import type { OrderIncludes } from './orderIncludes';

export type Order = OrderReadonlyProperties & OrderFillableProperties & OrderFillableRequiredProperties & OrderDeliveryFillableProperties & OrderIncludes;
