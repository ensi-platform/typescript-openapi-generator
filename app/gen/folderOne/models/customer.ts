/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CustomerReadonlyProperties } from './customerReadonlyProperties';
import type { CustomerFillableProperties } from './customerFillableProperties';
import type { CustomerFillableRequiredProperties } from './customerFillableRequiredProperties';
import type { CustomerIncludes } from './customerIncludes';

export type Customer = CustomerReadonlyProperties & CustomerFillableProperties & CustomerFillableRequiredProperties & CustomerIncludes;
