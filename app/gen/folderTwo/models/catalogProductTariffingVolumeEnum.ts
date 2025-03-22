/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Доступные тарификации:
* 1 - цена за 1 кг
* 2 - цена за 100 грамм

 */
export type CatalogProductTariffingVolumeEnum = typeof CatalogProductTariffingVolumeEnum[keyof typeof CatalogProductTariffingVolumeEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CatalogProductTariffingVolumeEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;
