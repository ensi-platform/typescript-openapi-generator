/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { TypeReadonlyProperties } from './typeReadonlyProperties';
import type { TypeFillableProperties } from './typeFillableProperties';
import type { TypeRequiredFillableProperties } from './typeRequiredFillableProperties';

export type Type = TypeReadonlyProperties & TypeFillableProperties & TypeRequiredFillableProperties;
