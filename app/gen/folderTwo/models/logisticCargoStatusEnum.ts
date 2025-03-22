/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Статус отгрузки. Расшифровка значений:
  * `1` - Отгружен
  * `2` - Ожидает отгрузки

 */
export type LogisticCargoStatusEnum = typeof LogisticCargoStatusEnum[keyof typeof LogisticCargoStatusEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LogisticCargoStatusEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;
