/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CategoriesTreeItemChildrenItem } from './categoriesTreeItemChildrenItem';

export interface CategoriesTreeItem {
  /** Идентификатор категории */
  id: number;
  /** Название категории */
  name: string;
  /** Код категории */
  code: string;
  /** Дочерние категории, если есть */
  children?: CategoriesTreeItemChildrenItem[];
}
