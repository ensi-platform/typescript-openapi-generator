/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Page } from './page';
import type { PageResponseMeta } from './pageResponseMeta';

export interface PageResponse {
  data: Page;
  meta?: PageResponseMeta;
}
