/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { BulkOperationProperties } from './bulkOperationProperties';
import type { BulkOperationIncludes } from './bulkOperationIncludes';
import type { BulkOperationRequiredProperties } from './bulkOperationRequiredProperties';

export type BulkOperation = BulkOperationProperties & BulkOperationIncludes & BulkOperationRequiredProperties;
