/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductGroupProduct } from './productGroupProduct';
import type { SearchProductGroupProductsResponseMeta } from './searchProductGroupProductsResponseMeta';

export interface SearchProductGroupProductsResponse {
  data: ProductGroupProduct[];
  meta: SearchProductGroupProductsResponseMeta;
}
