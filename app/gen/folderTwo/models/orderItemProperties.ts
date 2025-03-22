/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { OrderItemPropertiesProductData } from './orderItemPropertiesProductData';

export interface OrderItemProperties {
  /** id элемента корзины */
  id: number;
  /** ID заказа */
  order_id: number;
  /** ID отгрузки */
  shipment_id: number;
  /** ID оффера */
  offer_id: number;
  /** Название товара */
  name: string;
  /** Кол-во товара */
  qty: number;
  /**
   * Старое кол-во товара
   * @nullable
   */
  old_qty: number | null;
  /** Цена товара (цена * qty - скидки), коп. */
  price: number;
  /** Цена единичного товара (в коп.) */
  price_per_one: number;
  /** Цена товара до скидок (цена * qty), коп. */
  cost: number;
  /** Цена единичного товара до скидок (в коп.) */
  cost_per_one: number;
  /** Информация о товаре */
  product_data?: OrderItemPropertiesProductData;
  /**
   * Количество возвращаемых элементов корзины в заявке
   * @nullable
   */
  refund_qty: number | null;
  /** дата создания */
  created_at: string;
  /** дата обновления */
  updated_at: string;
  /** флаг, что товар был добавлен */
  is_added?: boolean;
  /** флаг, что товар был удалён */
  is_deleted?: boolean;
}
