/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DirectoryValueReadonlyProperties } from './directoryValueReadonlyProperties';
import type { DirectoryValueFillableProperties } from './directoryValueFillableProperties';
import type { DirectoryValueFillableRequiredProperties } from './directoryValueFillableRequiredProperties';
import type { DirectoryValueExtendedProperties } from './directoryValueExtendedProperties';

export type DirectoryValue = DirectoryValueReadonlyProperties & DirectoryValueFillableProperties & DirectoryValueFillableRequiredProperties & DirectoryValueExtendedProperties;
