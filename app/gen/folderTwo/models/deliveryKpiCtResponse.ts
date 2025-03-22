/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DeliveryKpiCt } from './deliveryKpiCt';
import type { DeliveryKpiCtResponseMeta } from './deliveryKpiCtResponseMeta';

export interface DeliveryKpiCtResponse {
  data: DeliveryKpiCt;
  meta?: DeliveryKpiCtResponseMeta;
}
