/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Направление чата. Расшифровка значений:
  * `1` - От админа к пользователю
  * `2` - От пользователя к админу

 */
export type CommunicationChatDirectionEnum = typeof CommunicationChatDirectionEnum[keyof typeof CommunicationChatDirectionEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CommunicationChatDirectionEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;
