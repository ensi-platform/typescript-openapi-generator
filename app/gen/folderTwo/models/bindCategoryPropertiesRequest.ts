/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { BindCategoryPropertiesRequestPropertiesItem } from './bindCategoryPropertiesRequestPropertiesItem';

export interface BindCategoryPropertiesRequest {
  /** Если true, все отсутствующие в запросе привязки будут удалены */
  replace?: boolean;
  properties?: BindCategoryPropertiesRequestPropertiesItem[];
}
