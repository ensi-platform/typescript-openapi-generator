/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface SearchPropertiesFilter {
  /** Идентификатор(ы) атрибутов */
  id?: number;
  /** Название или часть названия атрибута */
  name_like?: string;
  /** Код(ы) атрибутов */
  code?: string;
  /** Атрибут доступен для фильтрации на витрине */
  is_filterable?: boolean;
  /** Атрибут активен и доступен для товаров */
  is_active?: boolean;
}
