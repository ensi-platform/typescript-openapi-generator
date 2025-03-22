/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DeliveryKpiPpt } from './deliveryKpiPpt';
import type { DeliveryKpiPptResponseMeta } from './deliveryKpiPptResponseMeta';

export interface DeliveryKpiPptResponse {
  data: DeliveryKpiPpt;
  meta?: DeliveryKpiPptResponseMeta;
}
