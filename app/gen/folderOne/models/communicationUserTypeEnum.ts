/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Тип пользователя. Расшифровка значений:
  * `1` - Сотрудник
  * `2` - Продавец
  * `3` - Покупатель

 */
export type CommunicationUserTypeEnum = typeof CommunicationUserTypeEnum[keyof typeof CommunicationUserTypeEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CommunicationUserTypeEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
} as const;
