/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Address2 } from './address2';

export interface SellerFillableProperties {
  /**
   * ID менеджера
   * @nullable
   */
  manager_id?: number | null;
  /** Юридическое наименование организации */
  legal_name?: string;
  legal_address?: Address2;
  fact_address?: Address2;
  /**
   * ИНН
   * @nullable
   */
  inn?: string | null;
  /**
   * КПП
   * @nullable
   */
  kpp?: string | null;
  /**
   * Номер банковского счета
   * @nullable
   */
  payment_account?: string | null;
  /**
   * Номер корреспондентского счета банка
   * @nullable
   */
  correspondent_account?: string | null;
  /**
   * Наименование банка
   * @nullable
   */
  bank?: string | null;
  bank_address?: Address2;
  /**
   * БИК банка
   * @nullable
   */
  bank_bik?: string | null;
  /**
   * Сайт компании
   * @nullable
   */
  site?: string | null;
  /**
   * Бренды и товары, которыми торгует Продавец
   * @nullable
   */
  info?: string | null;
}
