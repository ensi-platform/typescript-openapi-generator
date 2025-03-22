/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Доступные типы товаров:
* 1 - штучный
* 2 - весовой
* 3 - фасованный

 */
export type CatalogProductTypeEnum = typeof CatalogProductTypeEnum[keyof typeof CatalogProductTypeEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CatalogProductTypeEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
} as const;
