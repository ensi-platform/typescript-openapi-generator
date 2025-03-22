/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Статус заказа на забор груза. Расшифровка значений:
  * `1` - Новый
  * `2` - Выполнен
  * `3` - Отменен

 */
export type LogisticCargoOrderStatusEnum = typeof LogisticCargoOrderStatusEnum[keyof typeof LogisticCargoOrderStatusEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LogisticCargoOrderStatusEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
} as const;
