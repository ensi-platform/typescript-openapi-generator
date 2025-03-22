/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { StoreReadonlyProperties } from './storeReadonlyProperties';
import type { StoreFillableProperties } from './storeFillableProperties';
import type { StoreFillableRequiredProperties } from './storeFillableRequiredProperties';
import type { StoreIncludes } from './storeIncludes';

export type Store = StoreReadonlyProperties & StoreFillableProperties & StoreFillableRequiredProperties & StoreIncludes;
