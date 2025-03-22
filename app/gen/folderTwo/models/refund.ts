/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RefundReadonlyProperties } from './refundReadonlyProperties';
import type { RefundFillableProperties } from './refundFillableProperties';
import type { RefundFillableRequiredProperties } from './refundFillableRequiredProperties';
import type { RefundCreateOnlyProperties } from './refundCreateOnlyProperties';
import type { RefundCreateOnlyRequiredProperties } from './refundCreateOnlyRequiredProperties';
import type { RefundIncludes } from './refundIncludes';

export type Refund = RefundReadonlyProperties & RefundFillableProperties & RefundFillableRequiredProperties & RefundCreateOnlyProperties & RefundCreateOnlyRequiredProperties & RefundIncludes;
