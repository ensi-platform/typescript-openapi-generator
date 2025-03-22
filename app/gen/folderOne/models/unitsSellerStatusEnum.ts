/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Доступные статусы продавцов:
  * `1` - Ожидает подтверждения
  * `2` - Активен
  * `3` - Не активен

 */
export type UnitsSellerStatusEnum = typeof UnitsSellerStatusEnum[keyof typeof UnitsSellerStatusEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UnitsSellerStatusEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
} as const;
