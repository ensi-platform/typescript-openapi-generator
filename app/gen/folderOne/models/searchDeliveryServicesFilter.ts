/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { LogisticDeliveryServiceStatusEnum } from './logisticDeliveryServiceStatusEnum';

export interface SearchDeliveryServicesFilter {
  /** Идентификатор службы доставки */
  id?: number;
  /** Название */
  name?: string;
  /**
   * Юр. название компании
   * @nullable
   */
  legal_info_company_name?: string | null;
  /**
   * ИНН
   * @nullable
   */
  legal_info_inn?: string | null;
  /**
   * р/с
   * @nullable
   */
  legal_info_payment_account?: string | null;
  /**
   * БИК
   * @nullable
   */
  legal_info_bik?: string | null;
  /**
   * Банк
   * @nullable
   */
  legal_info_bank?: string | null;
  /**
   * К/с банка
   * @nullable
   */
  legal_info_bank_correspondent_account?: string | null;
  /**
   * ФИО ген. директора
   * @nullable
   */
  general_manager_name?: string | null;
  /**
   * Номер договора
   * @nullable
   */
  contract_number?: string | null;
  status?: LogisticDeliveryServiceStatusEnum;
  /**
   * Комментарий
   * @nullable
   */
  comment?: string | null;
  /** Консолидация многоместных отправлений? */
  do_consolidation?: boolean;
  /** Расконсолидация многоместных отправлений? */
  do_deconsolidation?: boolean;
  /** Осуществляет нулевую милю? */
  do_zero_mile?: boolean;
  /** Осуществляет экспресс-доставку? */
  do_express_delivery?: boolean;
  /** Принимает возвраты? */
  do_return?: boolean;
  /** Осуществляет доставку опасных грузов? */
  do_dangerous_products_delivery?: boolean;
  /** Добавлять услугу частичного отказ в заказ на доставку? */
  add_partial_reject_service?: boolean;
  /** Добавлять услугу страхования груза в заказ на доставку? */
  add_insurance_service?: boolean;
  /** Добавлять услугу примерки в заказ на доставку? */
  add_fitting_service?: boolean;
  /** Добавлять услугу возврата в заказ на доставку? */
  add_return_service?: boolean;
  /** Добавлять услугу вскрытия при получении в заказ на доставку? */
  add_open_service?: boolean;
}
