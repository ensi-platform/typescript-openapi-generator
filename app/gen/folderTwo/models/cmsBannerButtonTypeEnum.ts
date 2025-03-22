/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Тип кнопки:
  * `outline_black` - С чёрной обводкой
  * `outline_white` - С белой обводкой
  * `black` - Чёрная
  * `white` - Белая

 */
export type CmsBannerButtonTypeEnum = typeof CmsBannerButtonTypeEnum[keyof typeof CmsBannerButtonTypeEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CmsBannerButtonTypeEnum = {
  outline_black: 'outline_black',
  outline_white: 'outline_white',
  black: 'black',
  white: 'white',
} as const;
