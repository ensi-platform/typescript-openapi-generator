/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { PageFillableProperties } from './pageFillableProperties';
import type { PageRequiredFillableProperties } from './pageRequiredFillableProperties';

export type CreatePageRequest = PageFillableProperties & PageRequiredFillableProperties;
