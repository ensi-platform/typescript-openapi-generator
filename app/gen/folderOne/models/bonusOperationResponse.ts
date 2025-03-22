/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { BonusOperation } from './bonusOperation';
import type { BonusOperationResponseMeta } from './bonusOperationResponseMeta';

export interface BonusOperationResponse {
  data: BonusOperation;
  meta?: BonusOperationResponseMeta;
}
