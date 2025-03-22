/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Статус отгрузки. Расшифровка значений:
  * `10` - Новый
  * `20` - В работе
  * `100` - Собран
  * `200` - Отменен

 */
export type OrdersShipmentStatusEnum = typeof OrdersShipmentStatusEnum[keyof typeof OrdersShipmentStatusEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const OrdersShipmentStatusEnum = {
  NUMBER_10: 10,
  NUMBER_20: 20,
  NUMBER_100: 100,
  NUMBER_200: 200,
} as const;
