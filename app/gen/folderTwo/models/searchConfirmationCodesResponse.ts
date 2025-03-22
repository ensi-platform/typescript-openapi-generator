/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ConfirmationCode } from './confirmationCode';
import type { SearchConfirmationCodesResponseMeta } from './searchConfirmationCodesResponseMeta';

export interface SearchConfirmationCodesResponse {
  data: ConfirmationCode[];
  meta: SearchConfirmationCodesResponseMeta;
}
