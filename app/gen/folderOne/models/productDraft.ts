/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductReadonlyProperties } from './productReadonlyProperties';
import type { ProductFillableProperties } from './productFillableProperties';
import type { ProductStatusProperties } from './productStatusProperties';
import type { ProductIncludes } from './productIncludes';
import type { ProductResponseRequiredProperties } from './productResponseRequiredProperties';

export type ProductDraft = ProductReadonlyProperties & ProductFillableProperties & ProductStatusProperties & ProductIncludes & ProductResponseRequiredProperties;
