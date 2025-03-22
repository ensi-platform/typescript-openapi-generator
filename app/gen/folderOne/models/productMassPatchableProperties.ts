/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface ProductMassPatchableProperties {
  /** Category IDs from PIM */
  category_ids?: number[];
  /**
   * Brand ID from PIM
   * @nullable
   */
  brand_id?: number | null;
  name?: string;
  /** @nullable */
  description?: string | null;
  /** Product type from CatalogProductTypeEnum */
  type?: number;
  allow_publish?: boolean;
  /**
   * Net weight in kg
   * @nullable
   */
  weight?: number | null;
  /**
   * Gross weight in kg
   * @nullable
   */
  weight_gross?: number | null;
  /**
   * Length in mm
   * @nullable
   */
  length?: number | null;
  /**
   * Width in mm
   * @nullable
   */
  width?: number | null;
  /**
   * Height in mm
   * @nullable
   */
  height?: number | null;
  /**
   * Is product 18+
   * @nullable
   */
  is_adult?: boolean | null;
  /**
   * Unit of measurement from CatalogProductUomEnum from PIM
   * @nullable
   */
  uom?: number | null;
  /** @nullable */
  order_step?: number | null;
  /**
   * Minimum quantity for order
   * @nullable
   */
  order_minvol?: number | null;
  /**
   * Weight deviation limit in percent
   * @nullable
   */
  picking_weight_deviation?: number | null;
}
