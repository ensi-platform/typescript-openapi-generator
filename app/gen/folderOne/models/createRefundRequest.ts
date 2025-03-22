/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RefundCreateOnlyProperties } from './refundCreateOnlyProperties';
import type { RefundFillableProperties } from './refundFillableProperties';
import type { RefundOnlyCreateRequestProperties } from './refundOnlyCreateRequestProperties';
import type { RefundRequiredProperties } from './refundRequiredProperties';

export type CreateRefundRequest = RefundCreateOnlyProperties & RefundFillableProperties & RefundOnlyCreateRequestProperties & RefundRequiredProperties;
