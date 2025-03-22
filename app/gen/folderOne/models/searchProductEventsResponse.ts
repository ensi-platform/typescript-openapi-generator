/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductEvent } from './productEvent';
import type { SearchProductEventsResponseMeta } from './searchProductEventsResponseMeta';

export interface SearchProductEventsResponse {
  data: ProductEvent[];
  meta: SearchProductEventsResponseMeta;
}
