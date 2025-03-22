/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { MenuTreeChildrenItem } from './menuTreeChildrenItem';

export interface MenuTree {
  /** Название пункта */
  name: string;
  /**
   * Ссылка
   * @nullable
   */
  url: string | null;
  /** Видимость пункта меню */
  active: boolean;
  /** Родительские пункты в виде MenuTree */
  children?: MenuTreeChildrenItem[];
}
