/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface ShipmentReadonlyProperties {
  /** идентификатор */
  id: number;
  /** номер отгрузки */
  number: string;
  /** ид отправления */
  delivery_id: number;
  /** ид склада */
  store_id: number;
  /** дата установки статуса */
  status_at: string;
  /** сумма (в копейках) товаров отгрузки (рассчитывается автоматически) */
  cost: number;
  /** ширина (рассчитывается автоматически) */
  width: number;
  /** высота (рассчитывается автоматически) */
  height: number;
  /** длина (рассчитывается автоматически) */
  length: number;
  /** вес (рассчитывается автоматически) */
  weight: number;
  /** дата создания */
  created_at: string;
  /** дата обновления */
  updated_at: string;
}
