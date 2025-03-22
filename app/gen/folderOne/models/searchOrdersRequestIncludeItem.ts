/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * orderItems.* будет добавляться только если загрузить элементы корзины через один из доступных способов (пока это только deliveries.shipments.orderItems)
 */
export type SearchOrdersRequestIncludeItem = typeof SearchOrdersRequestIncludeItem[keyof typeof SearchOrdersRequestIncludeItem];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SearchOrdersRequestIncludeItem = {
  files: 'files',
  deliveries: 'deliveries',
  deliveriesshipments: 'deliveries.shipments',
  deliveriesshipmentsorderItems: 'deliveries.shipments.orderItems',
  deliveriesshipmentsstore: 'deliveries.shipments.store',
  responsible: 'responsible',
  customer: 'customer',
  customeruser: 'customer.user',
  orderItemsproduct: 'orderItems.product',
  orderItemsproductimages: 'orderItems.product.images',
  orderItemsproductcategories: 'orderItems.product.categories',
  orderItemsproductbrand: 'orderItems.product.brand',
  orderItemsstock: 'orderItems.stock',
} as const;
