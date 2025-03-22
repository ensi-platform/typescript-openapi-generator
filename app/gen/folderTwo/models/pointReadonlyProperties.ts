/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface PointReadonlyProperties {
  /** Идентификатор пункта */
  id: number;
  /** Id пункта у службы доставки */
  external_id: string;
  /** Название пункта */
  name: string;
  /**
   * Описание проезда
   * @nullable
   */
  description: string | null;
  /**
   * Телефон
   * @nullable
   */
  phone: string | null;
  /**
   * Cокращенный адрес пвз
   * @nullable
   */
  address_reduce: string | null;
  /**
   * Cтанция метро
   * @nullable
   */
  metro_station: string | null;
  /**
   * Выдача только полностью оплаченных посылок
   * @nullable
   */
  only_online_payment: boolean | null;
  /**
   * Возможна ли оплата картой
   * @nullable
   */
  has_payment_card: boolean | null;
  /**
   * Осуществляется ли курьерская доставка
   * @nullable
   */
  has_courier: boolean | null;
  /**
   * Отделение является постаматом
   * @nullable
   */
  is_postamat: boolean | null;
  /**
   * Ограничение объема (куб.метры)
   * @nullable
   */
  max_value: string | null;
  /**
   * Ограничение веса (кг)
   * @nullable
   */
  max_weight: number | null;
  /** Дата создания */
  created_at: string;
  /** Дата обновления */
  updated_at: string;
}
