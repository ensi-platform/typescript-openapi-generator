/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Доступные булевые операторы:
* 1 - «И»
* 2 - «ИЛИ»

 */
export type CatalogEventOperationEnum = typeof CatalogEventOperationEnum[keyof typeof CatalogEventOperationEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CatalogEventOperationEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;
