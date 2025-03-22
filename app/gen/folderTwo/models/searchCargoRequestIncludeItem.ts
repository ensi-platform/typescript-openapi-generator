/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Подгружаемые связанные сущности
 */
export type SearchCargoRequestIncludeItem = typeof SearchCargoRequestIncludeItem[keyof typeof SearchCargoRequestIncludeItem];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SearchCargoRequestIncludeItem = {
  shipments: 'shipments',
  delivery_service: 'delivery_service',
} as const;
