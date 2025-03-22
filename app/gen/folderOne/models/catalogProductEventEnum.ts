/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Доступные события:
* 1 - товар создан
* 2 - загружены картинки
* 3 - добавлено описание для витрины
* 4 - заполнены обязательные характеристики
* 5 - заполнены необязательные характеристики
* 6 - товар не активен
* 7 - товар активен
* 8 - добавлен в товарную склейку

 */
export type CatalogProductEventEnum = typeof CatalogProductEventEnum[keyof typeof CatalogProductEventEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CatalogProductEventEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
  NUMBER_5: 5,
  NUMBER_6: 6,
  NUMBER_7: 7,
  NUMBER_8: 8,
} as const;
