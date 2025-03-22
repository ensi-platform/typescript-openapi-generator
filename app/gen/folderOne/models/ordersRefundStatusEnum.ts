/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Статус заявки на возврат. Расшифровка значений:
  * `1` - Новая
  * `2` - Подтверждена
  * `3` - Отклонена
  * `4` - Отменена

 */
export type OrdersRefundStatusEnum = typeof OrdersRefundStatusEnum[keyof typeof OrdersRefundStatusEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const OrdersRefundStatusEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
} as const;
