/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Доступные статусы скидок:
  * `1` - активен
  * `2` - неактивен

 */
export type MarketingDiscountStatusEnum = typeof MarketingDiscountStatusEnum[keyof typeof MarketingDiscountStatusEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const MarketingDiscountStatusEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;
