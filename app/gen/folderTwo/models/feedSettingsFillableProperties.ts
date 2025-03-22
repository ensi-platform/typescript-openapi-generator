/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface FeedSettingsFillableProperties {
  /** Название фида */
  name?: string;
  /** Код */
  code?: string;
  /** Активность фида */
  active?: boolean;
  /** Тип фида из FeedTypeEnum */
  type?: number;
  /** Платформа фида из FeedPlatformEnum */
  platform?: number;
  /** Добавлять в фид только активные товары */
  active_product?: boolean;
  /** Добавлять в фид только активные категории */
  active_category?: boolean;
  /** Название магазина */
  shop_name?: string;
  /** Сайт магазина */
  shop_url?: string;
  /** Название организации */
  shop_company?: string;
  /** Частота обновления (в часах) */
  update_time?: number;
  /** Время хранения старых версий фидов (в днях) */
  delete_time?: number;
}
