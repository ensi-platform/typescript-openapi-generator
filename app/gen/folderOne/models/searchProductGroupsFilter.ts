/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface SearchProductGroupsFilter {
  /** Идентификатор склейки */
  id?: number;
  /** Идентификатор категории */
  category_id?: number;
  /** Название склейки (поиск по подстроке) */
  name_like?: string;
  /** Название товара, входящего в склейку (поиск по подстроке) */
  product_name_like?: string;
  /** Штрихкод товара, входящего в склейку (поиск по подстроке) */
  product_barcode_like?: string;
  /** Артикул товара, входящего в склейку (поиск по подстроке) */
  product_vendor_code_like?: string;
}
