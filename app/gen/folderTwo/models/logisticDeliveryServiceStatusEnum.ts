/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Службы доставки. Расшифровка значений:
  * `1` - Активен
  * `2` - Не активен

 */
export type LogisticDeliveryServiceStatusEnum = typeof LogisticDeliveryServiceStatusEnum[keyof typeof LogisticDeliveryServiceStatusEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LogisticDeliveryServiceStatusEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;
