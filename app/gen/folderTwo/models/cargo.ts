/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CargoReadonlyProperties } from './cargoReadonlyProperties';
import type { CargoFillableProperties } from './cargoFillableProperties';
import type { CargoFillableRequiredProperties } from './cargoFillableRequiredProperties';
import type { CargoIncludes } from './cargoIncludes';

export type Cargo = CargoReadonlyProperties & CargoFillableProperties & CargoFillableRequiredProperties & CargoIncludes;
