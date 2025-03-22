/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface SearchPagesFilter {
  /** Идентификатор */
  id?: number;
  /** Наименование страницы */
  name?: string;
  /** Человекопонятный идентификатор для url */
  slug?: string;
  /** Полное или частичное наименование */
  name_like?: string;
  /** Полный или частичный Html блок-контент */
  content_like?: string;
  /** Активность страницы */
  is_active?: boolean;
  /** Только активные записи (имеют флаг активности и попадают в ее промежуток времени) */
  is_visible?: boolean;
}
