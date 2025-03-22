/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Доступные типы шаблонов:
  * `1` - шаблон на конкретный товар
  * `2` - общий шаблон на товар

 */
export type CmsSeoTemplateTypeEnum = typeof CmsSeoTemplateTypeEnum[keyof typeof CmsSeoTemplateTypeEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CmsSeoTemplateTypeEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;
