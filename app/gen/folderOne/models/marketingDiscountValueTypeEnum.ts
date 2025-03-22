/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Доступные типы значений:
  * `1` - скидка в процентах
  * `2` - скидка в рублях

 */
export type MarketingDiscountValueTypeEnum = typeof MarketingDiscountValueTypeEnum[keyof typeof MarketingDiscountValueTypeEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const MarketingDiscountValueTypeEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;
