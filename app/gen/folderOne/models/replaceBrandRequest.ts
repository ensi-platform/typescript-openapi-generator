/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { BrandFillableProperties } from './brandFillableProperties';
import type { BrandFillableRequiredProperties } from './brandFillableRequiredProperties';
import type { BrandFillableOnlyProperties } from './brandFillableOnlyProperties';
import type { BrandFillableOnlyRequiredProperties } from './brandFillableOnlyRequiredProperties';

export type ReplaceBrandRequest = BrandFillableProperties & BrandFillableRequiredProperties & BrandFillableOnlyProperties & BrandFillableOnlyRequiredProperties;
