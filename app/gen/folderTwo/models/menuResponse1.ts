/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Menu } from './menu';
import type { MenuResponse1Meta } from './menuResponse1Meta';

export interface MenuResponse1 {
  data: Menu;
  meta?: MenuResponse1Meta;
}
