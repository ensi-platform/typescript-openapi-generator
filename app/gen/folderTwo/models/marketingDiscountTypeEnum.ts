/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Доступные типы скидок:
  * `1` - скидка на оффер

 */
export type MarketingDiscountTypeEnum = typeof MarketingDiscountTypeEnum[keyof typeof MarketingDiscountTypeEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const MarketingDiscountTypeEnum = {
  NUMBER_1: 1,
} as const;
