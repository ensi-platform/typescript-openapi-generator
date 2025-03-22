/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Расположение кнопки:
  * `top_left` - Сверху слева
  * `top` - Сверху
  * `top_right` - Сверху справа
  * `right` - Справа
  * `bottom_right` - Снизу справа
  * `bottom` - Снизу
  * `bottom_left` - Снизу слева
  * `left` - Слева

 */
export type CmsBannerButtonLocationEnum = typeof CmsBannerButtonLocationEnum[keyof typeof CmsBannerButtonLocationEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CmsBannerButtonLocationEnum = {
  top_left: 'top_left',
  top: 'top',
  top_right: 'top_right',
  right: 'right',
  bottom_right: 'bottom_right',
  bottom: 'bottom',
  bottom_left: 'bottom_left',
  left: 'left',
} as const;
