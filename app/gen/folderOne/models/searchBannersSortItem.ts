/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * "id" - по-возрастанию, "-id" - по-убыванию
 */
export type SearchBannersSortItem = typeof SearchBannersSortItem[keyof typeof SearchBannersSortItem];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SearchBannersSortItem = {
  id: 'id',
  name: 'name',
  is_active: 'is_active',
} as const;
