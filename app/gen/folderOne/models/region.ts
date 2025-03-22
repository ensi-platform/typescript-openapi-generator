/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RegionReadonlyProperties } from './regionReadonlyProperties';
import type { RegionFillableProperties } from './regionFillableProperties';
import type { RegionFillableRequiredProperties } from './regionFillableRequiredProperties';

export type Region = RegionReadonlyProperties & RegionFillableProperties & RegionFillableRequiredProperties;
