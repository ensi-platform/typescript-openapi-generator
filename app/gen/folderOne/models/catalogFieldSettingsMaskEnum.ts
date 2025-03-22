/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Значение битов маски редактирования свойств настройки поля товара:
* 1 - имя
* 2 - модерируемость
* 4 - обязательность заполнения
* 8 - категория метрик

 */
export type CatalogFieldSettingsMaskEnum = typeof CatalogFieldSettingsMaskEnum[keyof typeof CatalogFieldSettingsMaskEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CatalogFieldSettingsMaskEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_4: 4,
  NUMBER_8: 8,
} as const;
