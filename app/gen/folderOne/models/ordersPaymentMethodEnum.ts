/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Способ оплаты. Расшифровка значений:
  * `1` - Онлайн
  * `2` - Оффлайн

 */
export type OrdersPaymentMethodEnum = typeof OrdersPaymentMethodEnum[keyof typeof OrdersPaymentMethodEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const OrdersPaymentMethodEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;
