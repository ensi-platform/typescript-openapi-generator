/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Product1 } from './product1';
import type { SearchProductsResponse1Meta } from './searchProductsResponse1Meta';

export interface SearchProductsResponse1 {
  data: Product1[];
  meta: SearchProductsResponse1Meta;
}
