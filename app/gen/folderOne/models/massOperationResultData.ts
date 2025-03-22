/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { MassOperationResultDataErrorsItem } from './massOperationResultDataErrorsItem';

/**
 * @nullable
 */
export type MassOperationResultData = {
  processed: number[];
  errors: MassOperationResultDataErrorsItem[];
} | null;
