/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Address0 } from './address0';

export interface PointFillableProperties {
  /**
   * Идентификатор службы доставки из DeliveryServiceEnum
   * @nullable
   */
  delivery_service_id?: number | null;
  /** Активность */
  is_active?: boolean;
  /**
   * ФИАС id населенного пункта
   * @nullable
   */
  city_guid?: string | null;
  address?: Address0;
  /**
   * Широта
   * @nullable
   */
  geo_lat?: string | null;
  /**
   * Долгота
   * @nullable
   */
  geo_lon?: string | null;
  /**
   * Часовой пояс
   * @nullable
   */
  timezone?: string | null;
}
