/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface SearchStoresFilter {
  /** ID склада */
  id?: number;
  /** ID продавца */
  seller_id?: number;
  /** ID склада в системе продавца */
  xml_id?: string;
  /** Флаг активности склада */
  active?: boolean;
  /** Название склада */
  name?: string;
  /** Часовой пояс */
  timezone?: string;
  /** Адрес склада */
  address_string?: string;
  /** ФИО контактного лица */
  contact_name?: string;
  /** Телефон контактного лица */
  contact_phone?: string;
  /** Дата создания меньше или равна */
  created_at_gte?: string;
  /** Дата создания больше или равна */
  created_at_lte?: string;
  /** Дата обновления меньше или равна */
  updated_at_gte?: string;
  /** Дата обновления больше или равна */
  updated_at_lte?: string;
}
