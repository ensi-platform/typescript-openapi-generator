/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { BindProductGroupProductsRequestProductsItem } from './bindProductGroupProductsRequestProductsItem';

export interface BindProductGroupProductsRequest {
  /** Если true, все отсутствующие в запросе привязки будут удалены */
  replace?: boolean;
  products?: BindProductGroupProductsRequestProductsItem[];
}
