/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Параметры. Расшифровка значений:
  * `timeForPayment` - Срок для оплаты заказа клиентов
  * `timeForRefund` - Срок для осуществления возврата товара
  * `maxTimeOrderProcessing` - Максимальное время обработки заказа

 */
export type OrdersSettingCodeEnum = typeof OrdersSettingCodeEnum[keyof typeof OrdersSettingCodeEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const OrdersSettingCodeEnum = {
  timeForPayment: 'timeForPayment',
  timeForRefund: 'timeForRefund',
  maxTimeOrderProcessing: 'maxTimeOrderProcessing',
} as const;
