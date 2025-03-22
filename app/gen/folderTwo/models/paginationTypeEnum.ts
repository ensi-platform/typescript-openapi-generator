/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Pagination types:
* `cursor`
* `offset`

 */
export type PaginationTypeEnum = typeof PaginationTypeEnum[keyof typeof PaginationTypeEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PaginationTypeEnum = {
  cursor: 'cursor',
  offset: 'offset',
} as const;
