/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Тип точки выдачи заказов. Расшифровка значений:
  * `1` - Курьерская доставка
  * `2` - Самовывоз
  * `3` - Самовывоз из магазина (самовывоз без доставки)

 */
export type LogisticDeliveryMethodEnum = typeof LogisticDeliveryMethodEnum[keyof typeof LogisticDeliveryMethodEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LogisticDeliveryMethodEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
} as const;
