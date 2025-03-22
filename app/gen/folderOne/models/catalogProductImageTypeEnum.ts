/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Тип изображения товара. Допустимы значения:
* 1 - основное изображение.
* 2 - изображение для каталога.
* 3 - изображения для галереи.
* 4 - изображение для описания.

 */
export type CatalogProductImageTypeEnum = typeof CatalogProductImageTypeEnum[keyof typeof CatalogProductImageTypeEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CatalogProductImageTypeEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
} as const;
