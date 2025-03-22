/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Тип точки выдачи заказов. Расшифровка значений:
  * `1` - Пункт выдачи заказа
  * `2` - Постамат
  * `3` - Отделение почты России
  * `4` - Терминал

 */
export type LogisticPointTypeEnum = typeof LogisticPointTypeEnum[keyof typeof LogisticPointTypeEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LogisticPointTypeEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
} as const;
