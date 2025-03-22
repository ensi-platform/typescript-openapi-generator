/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Shipment } from './shipment';
import type { DeliveryService } from './deliveryService';

export interface CargoIncludes {
  /** Ссылки на отправления в OMS */
  shipments?: Shipment[];
  delivery_service?: DeliveryService;
}
