/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductGroupsBindResult } from './productGroupsBindResult';
import type { ProductGroupsBindResponseMeta } from './productGroupsBindResponseMeta';

export interface ProductGroupsBindResponse {
  data: ProductGroupsBindResult;
  meta?: ProductGroupsBindResponseMeta;
}
