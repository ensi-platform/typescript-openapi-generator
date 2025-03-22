/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CustomerFillableProperties } from './customerFillableProperties';
import type { CustomerFillableRequiredProperties } from './customerFillableRequiredProperties';

export type CreateCustomerRequest = CustomerFillableProperties & CustomerFillableRequiredProperties;
