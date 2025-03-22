/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Статус массовой операции:
* 1 - Новая
* 2 - В процессе
* 3 - Завершена
* 4 - Ошибка

 */
export type CatalogBulkOperationStatusEnum = typeof CatalogBulkOperationStatusEnum[keyof typeof CatalogBulkOperationStatusEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CatalogBulkOperationStatusEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
} as const;
