/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface DeliveryReadonlyProperties {
  /** ID отправления */
  id: number;
  /** ID заказа */
  order_id: number;
  /** номер отправления */
  number: string;
  /** дата установки статуса */
  status_at: string;
  /** себестоимость доставки, полученная от службы доставки в копейках */
  cost: number;
  /** ширина */
  width: number;
  /** высота */
  height: number;
  /** длина */
  length: number;
  /** вес */
  weight?: number;
  /** дата создания */
  created_at: string;
  /** дата обновления */
  updated_at: string;
}
