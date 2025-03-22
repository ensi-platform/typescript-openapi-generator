/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Каналы отправки уведомлений. Расшифровка значений:
  * `1` - Email
  * `2` - SMS
  * `3` - Витрина

 */
export type CommunicationNotificationChannelEnum = typeof CommunicationNotificationChannelEnum[keyof typeof CommunicationNotificationChannelEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CommunicationNotificationChannelEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
} as const;
