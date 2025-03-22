/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Theme } from './theme';
import type { ThemeResponseMeta } from './themeResponseMeta';

export interface ThemeResponse {
  data: Theme;
  meta?: ThemeResponseMeta;
}
