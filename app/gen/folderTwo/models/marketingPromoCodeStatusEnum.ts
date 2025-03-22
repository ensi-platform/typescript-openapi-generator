/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Доступные статусы промокодов:
  * `1` - активен
  * `2` - неактивен

 */
export type MarketingPromoCodeStatusEnum = typeof MarketingPromoCodeStatusEnum[keyof typeof MarketingPromoCodeStatusEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const MarketingPromoCodeStatusEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;
