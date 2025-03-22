/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DeliveryKpi0 } from './deliveryKpi0';
import type { DeliveryKpiResponseMeta } from './deliveryKpiResponseMeta';

export interface DeliveryKpiResponse {
  data: DeliveryKpi0;
  meta?: DeliveryKpiResponseMeta;
}
