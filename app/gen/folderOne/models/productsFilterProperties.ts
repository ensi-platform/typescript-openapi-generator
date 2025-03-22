/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface ProductsFilterProperties {
  /** Product ID(s) from PIM */
  id?: number;
  /** Name or part of the product name */
  name?: string;
  /** Product code(s) used in URL */
  code?: string;
  external_id?: string;
  /** Category ID(s) from PIM */
  category_id?: number;
  /** Status ID from ProductStatusSetting object from PIM */
  status_id?: number;
  allow_publish?: boolean;
  /** Article */
  vendor_code?: string;
  /** EAN */
  barcode?: string;
  /** Is product 18+ */
  is_adult?: boolean;
  /** Product type from CatalogProductTypeEnum */
  type?: number;
  brand_id?: number[];
  /** Does product belong to at least one product group */
  has_product_groups?: boolean;
  /** Does the product have at least one unfilled required attribute */
  has_no_filled_required_attributes?: boolean;
  /** Belongs to a category with at least one attribute for product groups */
  category_has_is_gluing?: boolean;
  /** Create date is less than or equal to */
  created_at_lte?: string;
  /** Create date is older than or equal to */
  created_at_gte?: string;
  /** Update date is less than or equal to */
  updated_at_lte?: string;
  /** Update date is older than or equal to */
  updated_at_gte?: string;
}
