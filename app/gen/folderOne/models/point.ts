/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { PointReadonlyProperties } from './pointReadonlyProperties';
import type { PointFillableProperties } from './pointFillableProperties';
import type { PointFillableRequiredProperties } from './pointFillableRequiredProperties';
import type { PointIncludes } from './pointIncludes';

export type Point = PointReadonlyProperties & PointFillableProperties & PointFillableRequiredProperties & PointIncludes;
