/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { BonusOperationReadonlyProperties } from './bonusOperationReadonlyProperties';
import type { BonusOperationFillableProperties } from './bonusOperationFillableProperties';
import type { BonusOperationFillableRequiredProperties } from './bonusOperationFillableRequiredProperties';

export type BonusOperation = BonusOperationReadonlyProperties & BonusOperationFillableProperties & BonusOperationFillableRequiredProperties;
