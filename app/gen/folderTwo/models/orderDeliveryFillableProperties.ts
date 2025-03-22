/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Address1 } from './address1';

export interface OrderDeliveryFillableProperties {
  /** служба доставки */
  delivery_service?: number;
  /** метод доставки */
  delivery_method?: number;
  /** стоимость доставки (без учета скидки) в коп. */
  delivery_cost?: number;
  /** стоимость доставки (с учетом скидки) в коп. */
  delivery_price?: number;
  /**
   * ID пункта самовывоза из сервиса логистики
   * @nullable
   */
  delivery_point_id?: number | null;
  delivery_address?: Address1;
  /**
   * комментарий к доставке
   * @nullable
   */
  delivery_comment?: string | null;
}
