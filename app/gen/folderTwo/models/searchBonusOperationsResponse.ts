/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { BonusOperation } from './bonusOperation';
import type { SearchBonusOperationsResponseMeta } from './searchBonusOperationsResponseMeta';

export interface SearchBonusOperationsResponse {
  data: BonusOperation[];
  meta: SearchBonusOperationsResponseMeta;
}
