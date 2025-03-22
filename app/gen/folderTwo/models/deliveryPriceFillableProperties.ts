/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { DeliveryPriceFillablePropertiesDeliveryService } from './deliveryPriceFillablePropertiesDeliveryService';
import type { DeliveryPriceFillablePropertiesDeliveryMethod } from './deliveryPriceFillablePropertiesDeliveryMethod';

export interface DeliveryPriceFillableProperties {
  /** Id федерального округа */
  federal_district_id?: number;
  /**
   * Id региона
   * @nullable
   */
  region_id?: number | null;
  /**
   * Id ФИАС региона
   * @nullable
   */
  region_guid?: string | null;
  /** @nullable */
  delivery_service?: DeliveryPriceFillablePropertiesDeliveryService;
  delivery_method?: DeliveryPriceFillablePropertiesDeliveryMethod;
  /** Цена в копейках */
  price?: number;
}
