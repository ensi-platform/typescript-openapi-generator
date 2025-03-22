/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Page } from './page';
import type { SearchPagesResponseMeta } from './searchPagesResponseMeta';

export interface SearchPagesResponse {
  data: Page[];
  meta: SearchPagesResponseMeta;
}
