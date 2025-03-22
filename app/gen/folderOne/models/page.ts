/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { PageReadonlyProperties } from './pageReadonlyProperties';
import type { PageFillableProperties } from './pageFillableProperties';
import type { PageRequiredFillableProperties } from './pageRequiredFillableProperties';

export type Page = PageReadonlyProperties & PageFillableProperties & PageRequiredFillableProperties;
