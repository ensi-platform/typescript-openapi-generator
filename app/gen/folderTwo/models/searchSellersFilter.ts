/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { UnitsSellerStatusEnum } from './unitsSellerStatusEnum';

export interface SearchSellersFilter {
  /** Идентификаторы продавца */
  id?: number[];
  /** Идентификаторы менеджера */
  manager_id?: number;
  status?: UnitsSellerStatusEnum[];
  /** Название организации */
  legal_name_like?: string;
  /** Адрес организации */
  legal_address_like?: string;
  /** Дата регистрации (От) */
  created_at_gte?: string;
  /** Дата регистрации (До) */
  created_at_lte?: string;
  /** Дата обновления (От) */
  updated_at_gte?: string;
  /** Дата обновления (До) */
  updated_at_lte?: string;
}
