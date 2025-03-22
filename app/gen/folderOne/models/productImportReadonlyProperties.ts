/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductImportReadonlyPropertiesStatus } from './productImportReadonlyPropertiesStatus';

export interface ProductImportReadonlyProperties {
  id: number;
  /** Create time */
  created_at: string;
  /** Update time */
  updated_at: string;
  /** Import status from CatalogProductImportStatusEnum */
  status: ProductImportReadonlyPropertiesStatus;
  /** File url */
  file: string;
  file_name: string;
  /**
   * Count of scheduled queue jobs
   * @nullable
   */
  chunks_count: number | null;
  /** Count of finished queue jobs */
  chunks_finished: number;
}
