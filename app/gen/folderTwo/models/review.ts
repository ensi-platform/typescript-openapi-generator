/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ReviewReadonlyProperties } from './reviewReadonlyProperties';
import type { ReviewFillableProperties } from './reviewFillableProperties';
import type { ReviewRequiredProperties } from './reviewRequiredProperties';
import type { ReviewIncludes } from './reviewIncludes';

export type Review = ReviewReadonlyProperties & ReviewFillableProperties & ReviewRequiredProperties & ReviewIncludes;
