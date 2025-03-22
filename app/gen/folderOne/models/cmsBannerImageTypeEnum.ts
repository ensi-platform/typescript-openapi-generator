/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Тип изображения баннера:
  * `desktop` - Десктоп
  * `mobile` - Мобильный

 */
export type CmsBannerImageTypeEnum = typeof CmsBannerImageTypeEnum[keyof typeof CmsBannerImageTypeEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CmsBannerImageTypeEnum = {
  desktop: 'desktop',
  mobile: 'mobile',
} as const;
