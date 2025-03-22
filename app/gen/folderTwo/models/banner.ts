/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { BannerReadonlyProperties } from './bannerReadonlyProperties';
import type { BannerFillableProperties } from './bannerFillableProperties';
import type { BannerFillableRequiredProperties } from './bannerFillableRequiredProperties';
import type { BannerIncludes } from './bannerIncludes';

export type Banner = BannerReadonlyProperties & BannerFillableProperties & BannerFillableRequiredProperties & BannerIncludes;
