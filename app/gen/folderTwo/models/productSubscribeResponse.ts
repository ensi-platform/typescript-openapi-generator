/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductSubscribe } from './productSubscribe';
import type { ProductSubscribeResponseMeta } from './productSubscribeResponseMeta';

export interface ProductSubscribeResponse {
  data: ProductSubscribe;
  meta?: ProductSubscribeResponseMeta;
}
