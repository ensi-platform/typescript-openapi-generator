/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Тип импорта:
 * 1 - Создан, ожидает обработки
 * 2 - Обрабатывается
 * 3 - Успешно завершён
 * 4 - Завершён с ошибкой

 */
export type CatalogProductImportStatusEnum = typeof CatalogProductImportStatusEnum[keyof typeof CatalogProductImportStatusEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CatalogProductImportStatusEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
} as const;
