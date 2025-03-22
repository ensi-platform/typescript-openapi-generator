/**
 * Не трогать руками, файлы автогенерируемые
 */

export type SearchRefundsRequestIncludeItem = typeof SearchRefundsRequestIncludeItem[keyof typeof SearchRefundsRequestIncludeItem];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SearchRefundsRequestIncludeItem = {
  order: 'order',
  items: 'items',
  itemsproduct: 'items.product',
  reasons: 'reasons',
  files: 'files',
} as const;
