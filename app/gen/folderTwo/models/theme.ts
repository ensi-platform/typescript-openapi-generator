/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ThemeReadonlyProperties } from './themeReadonlyProperties';
import type { ThemeFillableProperties } from './themeFillableProperties';
import type { ThemeRequiredFillableProperties } from './themeRequiredFillableProperties';

export type Theme = ThemeReadonlyProperties & ThemeFillableProperties & ThemeRequiredFillableProperties;
