/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Доступные платформы. Расшифровка значений:
  * `1` - Яндекс.Маркет
  * `2` - Яндекс.Директ

 */
export type CatalogFeedPlatformEnum = typeof CatalogFeedPlatformEnum[keyof typeof CatalogFeedPlatformEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CatalogFeedPlatformEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;
