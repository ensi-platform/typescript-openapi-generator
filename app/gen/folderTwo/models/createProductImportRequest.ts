/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CreateProductImportRequestType } from './createProductImportRequestType';

export interface CreateProductImportRequest {
  preload_file_id: number;
  /** Import type from CatalogProductImportTypeEnum */
  type: CreateProductImportRequestType;
}
