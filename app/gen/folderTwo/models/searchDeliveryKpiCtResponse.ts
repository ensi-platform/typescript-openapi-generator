/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DeliveryKpiCt } from './deliveryKpiCt';
import type { SearchDeliveryKpiCtResponseMeta } from './searchDeliveryKpiCtResponseMeta';

export interface SearchDeliveryKpiCtResponse {
  data: DeliveryKpiCt[];
  meta: SearchDeliveryKpiCtResponseMeta;
}
