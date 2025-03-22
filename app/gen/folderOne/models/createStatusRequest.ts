/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { StatusFillableProperties } from './statusFillableProperties';
import type { StatusRequiredFillableProperties } from './statusRequiredFillableProperties';

export type CreateStatusRequest = StatusFillableProperties & StatusRequiredFillableProperties;
