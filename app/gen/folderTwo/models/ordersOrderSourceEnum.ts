/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Источник взаимодействия. Расшифровка значений:
  * `1` - Сайт
  * `2` - Приложение
  * `3` - Админ

 */
export type OrdersOrderSourceEnum = typeof OrdersOrderSourceEnum[keyof typeof OrdersOrderSourceEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const OrdersOrderSourceEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
} as const;
