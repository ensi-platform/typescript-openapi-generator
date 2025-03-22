/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Статус доставки. Расшифровка значений:
  * `10` - Новый
  * `20` - Собран
  * `30` - Передан СД
  * `40` - Готов к выдаче
  * `100` - Получен
  * `200` - Отменен

 */
export type OrdersDeliveryStatusEnum = typeof OrdersDeliveryStatusEnum[keyof typeof OrdersDeliveryStatusEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const OrdersDeliveryStatusEnum = {
  NUMBER_10: 10,
  NUMBER_20: 20,
  NUMBER_30: 30,
  NUMBER_40: 40,
  NUMBER_100: 100,
  NUMBER_200: 200,
} as const;
