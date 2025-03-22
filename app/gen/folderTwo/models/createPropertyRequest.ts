/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { PropertyFillableProperties } from './propertyFillableProperties';
import type { PropertyRequiredProperties } from './propertyRequiredProperties';

export type CreatePropertyRequest = PropertyFillableProperties & PropertyRequiredProperties;
