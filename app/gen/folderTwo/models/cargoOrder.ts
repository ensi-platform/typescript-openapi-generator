/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CargoOrderReadonlyProperties } from './cargoOrderReadonlyProperties';
import type { CargoOrderFillableProperties } from './cargoOrderFillableProperties';
import type { CargoOrderFillableRequiredProperties } from './cargoOrderFillableRequiredProperties';
import type { CargoOrderIncludes } from './cargoOrderIncludes';

export type CargoOrder = CargoOrderReadonlyProperties & CargoOrderFillableProperties & CargoOrderFillableRequiredProperties & CargoOrderIncludes;
