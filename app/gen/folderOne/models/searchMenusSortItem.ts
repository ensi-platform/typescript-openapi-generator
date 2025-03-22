/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * "id" - по-возрастанию, "-id" - по-убыванию
 */
export type SearchMenusSortItem = typeof SearchMenusSortItem[keyof typeof SearchMenusSortItem];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SearchMenusSortItem = {
  id: 'id',
  code: 'code',
} as const;
