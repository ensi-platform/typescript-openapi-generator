/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Способы доставки на нулевой миле (доставка от продавца до распределительного центра). Расшифровка значений:
  * `1` - Курьер службы доставки
  * `2` - Собственный курьер

 */
export type LogisticShipmentMethodEnum = typeof LogisticShipmentMethodEnum[keyof typeof LogisticShipmentMethodEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LogisticShipmentMethodEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;
