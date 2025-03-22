/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductFieldReadonlyProperties } from './productFieldReadonlyProperties';
import type { ProductFieldFillableProperties } from './productFieldFillableProperties';
import type { ProductFieldFillableRequiredProperties } from './productFieldFillableRequiredProperties';

export type ProductField = ProductFieldReadonlyProperties & ProductFieldFillableProperties & ProductFieldFillableRequiredProperties;
