/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Menu } from './menu';
import type { SearchMenusResponseMeta } from './searchMenusResponseMeta';

export interface SearchMenusResponse {
  data: Menu[];
  meta: SearchMenusResponseMeta;
}
