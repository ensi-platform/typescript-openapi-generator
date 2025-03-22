/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductUniqueProperties } from './productUniqueProperties';
import type { ProductMassPatchableProperties } from './productMassPatchableProperties';

export type ProductFillableProperties = ProductUniqueProperties & ProductMassPatchableProperties;
