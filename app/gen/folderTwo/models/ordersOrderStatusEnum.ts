/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Статус заказа. Расшифровка значений:
  * `1` - Ожидает оплаты
  * `10` - Новый
  * `20` - Подтвержден
  * `100` - Завершён
  * `200` - Отменен

 */
export type OrdersOrderStatusEnum = typeof OrdersOrderStatusEnum[keyof typeof OrdersOrderStatusEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const OrdersOrderStatusEnum = {
  NUMBER_1: 1,
  NUMBER_10: 10,
  NUMBER_20: 20,
  NUMBER_100: 100,
  NUMBER_200: 200,
} as const;
