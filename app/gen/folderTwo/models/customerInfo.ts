/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CustomerInfoReadonlyProperties } from './customerInfoReadonlyProperties';
import type { CustomerInfoFillableProperties } from './customerInfoFillableProperties';
import type { CustomerInfoFillableRequiredRequestProperties } from './customerInfoFillableRequiredRequestProperties';

export type CustomerInfo = CustomerInfoReadonlyProperties & CustomerInfoFillableProperties & CustomerInfoFillableRequiredRequestProperties;
