/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Статус оплаты. Расшифровка значений:
  * `1` - Не оплачен
  * `2` - Средства захолдированы
  * `100` - Оплачен
  * `101` - Возврат
  * `200` - Просрочен
  * `201` - Отменен

 */
export type OrdersPaymentStatusEnum = typeof OrdersPaymentStatusEnum[keyof typeof OrdersPaymentStatusEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const OrdersPaymentStatusEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_50: 50,
  NUMBER_51: 51,
  NUMBER_100: 100,
  NUMBER_101: 101,
} as const;
