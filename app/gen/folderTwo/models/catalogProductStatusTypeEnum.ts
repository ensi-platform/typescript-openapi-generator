/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Доступные типы статусов:
* 1 - автоматический
* 2 - ручной

 */
export type CatalogProductStatusTypeEnum = typeof CatalogProductStatusTypeEnum[keyof typeof CatalogProductStatusTypeEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CatalogProductStatusTypeEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;
