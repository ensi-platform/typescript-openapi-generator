/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Address0 } from './address0';
import type { DeliveryServiceFillablePropertiesStatus } from './deliveryServiceFillablePropertiesStatus';

export interface DeliveryServiceFillableProperties {
  /** Название */
  name?: string;
  /** Дата регистрации */
  registered_at?: string;
  /**
   * Юр. название компании
   * @nullable
   */
  legal_info_company_name?: string | null;
  legal_info_company_address?: Address0;
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
  /**
   * Дата договора
   * @nullable
   */
  contract_date?: string | null;
  /**
   * Cтавка НДС
   * @nullable
   */
  vat_rate?: number | null;
  /**
   * Тип налогообложения
   * @nullable
   */
  taxation_type?: number | null;
  status?: DeliveryServiceFillablePropertiesStatus;
  /**
   * Комментарий
   * @nullable
   */
  comment?: string | null;
  /**
   * Код в системе ApiShip
   * @nullable
   */
  apiship_key?: string | null;
  /** Приоритет (чем меньше, тем выше) */
  priority?: number;
  /**
   * Максимальное кол-во отправлений в день
   * @nullable
   */
  max_shipments_per_day?: number | null;
  /**
   * Время создания заявки для забора отправления день-в-день
   * @nullable
   */
  max_cargo_export_time?: string | null;
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
  /** Перевозка крупногабаритных грузов? */
  do_transportation_oversized_cargo?: boolean;
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
  /** Planned Consolidation Time - плановое время доставки заказа от склада продавца до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин) */
  pct?: number;
}
