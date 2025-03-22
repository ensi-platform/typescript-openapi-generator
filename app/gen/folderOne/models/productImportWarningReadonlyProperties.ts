/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductImportWarningReadonlyPropertiesImportType } from './productImportWarningReadonlyPropertiesImportType';

export interface ProductImportWarningReadonlyProperties {
  id: number;
  /** Create time */
  created_at: string;
  /** Update time */
  updated_at: string;
  import_id: number;
  /**
   * SKU of product with error
   * @nullable
   */
  vendor_code: string | null;
  /** Import type from CatalogProductImportTypeEnum */
  import_type: ProductImportWarningReadonlyPropertiesImportType;
  message: string;
}
