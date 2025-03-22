/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Доступные статусы архивности:
* 1 - товар не в архиве
* 2 - товар в архиве

 */
export type CatalogProductArchiveTypeEnum = typeof CatalogProductArchiveTypeEnum[keyof typeof CatalogProductArchiveTypeEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CatalogProductArchiveTypeEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;
