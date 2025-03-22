/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * События уведомлений. Расшифровка значений:
  * 101` - Переход заказа в статус 'Ожидает оплаты'
  * 102` - Переход заказа в статус 'Новый'
  * 103` - Переход заказа в статус 'Подтвержден'
  * 104` - Переход заказа в статус 'Завершён'
  * 105` - Переход заказа в статус 'Отменен'
  * 201` - Переход отправления в статус 'Новый'
  * 202` - Переход отправления в статус 'Собран'
  * 203` - Переход отправления в статус 'Передан СД'
  * 204` - Переход отправления в статус 'Готов к выдаче'
  * 205` - Переход отправления в статус 'Получен'
  * 206` - Переход отправления в статус 'Отменен'
  * 401` - Запрос кода подтверждения

 */
export type CommunicationNotificationEventEnum = typeof CommunicationNotificationEventEnum[keyof typeof CommunicationNotificationEventEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CommunicationNotificationEventEnum = {
  NUMBER_101: 101,
  NUMBER_102: 102,
  NUMBER_103: 103,
  NUMBER_104: 104,
  NUMBER_105: 105,
  NUMBER_201: 201,
  NUMBER_202: 202,
  NUMBER_203: 203,
  NUMBER_204: 204,
  NUMBER_205: 205,
  NUMBER_206: 206,
  NUMBER_401: 401,
} as const;
