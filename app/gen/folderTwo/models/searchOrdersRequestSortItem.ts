/**
 * Не трогать руками, файлы автогенерируемые
 */

export type SearchOrdersRequestSortItem = typeof SearchOrdersRequestSortItem[keyof typeof SearchOrdersRequestSortItem];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SearchOrdersRequestSortItem = {
  number: 'number',
  created_at: 'created_at',
  price: 'price',
  delivery_price: 'delivery_price',
} as const;
