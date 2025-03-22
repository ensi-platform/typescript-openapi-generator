/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductSubscribe } from './productSubscribe';
import type { SearchProductSubscribesResponseMeta } from './searchProductSubscribesResponseMeta';

export interface SearchProductSubscribesResponse {
  data: ProductSubscribe[];
  meta: SearchProductSubscribesResponseMeta;
}
