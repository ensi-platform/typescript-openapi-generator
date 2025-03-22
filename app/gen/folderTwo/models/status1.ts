/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { StatusReadonlyProperties } from './statusReadonlyProperties';
import type { StatusFillableProperties } from './statusFillableProperties';
import type { StatusRequiredFillableProperties } from './statusRequiredFillableProperties';

export type Status1 = StatusReadonlyProperties & StatusFillableProperties & StatusRequiredFillableProperties;
