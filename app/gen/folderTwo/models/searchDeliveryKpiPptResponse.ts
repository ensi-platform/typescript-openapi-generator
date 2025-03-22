/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DeliveryKpiPpt } from './deliveryKpiPpt';
import type { SearchDeliveryKpiPptResponseMeta } from './searchDeliveryKpiPptResponseMeta';

export interface SearchDeliveryKpiPptResponse {
  data: DeliveryKpiPpt[];
  meta: SearchDeliveryKpiPptResponseMeta;
}
