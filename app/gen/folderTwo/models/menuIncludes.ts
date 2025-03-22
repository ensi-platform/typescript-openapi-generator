/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { MenuItem } from './menuItem';
import type { MenuTree } from './menuTree';

export interface MenuIncludes {
  /** Пункты меню */
  items?: MenuItem[];
  /** Представление пунктов меню (items) в виде дерева */
  items_tree?: MenuTree[];
}
