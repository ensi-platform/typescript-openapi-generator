/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { BannerTypeReadonlyProperties } from './bannerTypeReadonlyProperties';
import type { BannerTypeFillableProperties } from './bannerTypeFillableProperties';
import type { BannerTypeFillableRequiredProperties } from './bannerTypeFillableRequiredProperties';

export type BannerType = BannerTypeReadonlyProperties & BannerTypeFillableProperties & BannerTypeFillableRequiredProperties;
