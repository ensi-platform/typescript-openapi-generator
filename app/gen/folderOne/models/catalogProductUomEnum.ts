/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Доступные единицы измерения:
* 1 - килограмм
* 2 - грамм

 */
export type CatalogProductUomEnum = typeof CatalogProductUomEnum[keyof typeof CatalogProductUomEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CatalogProductUomEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;
