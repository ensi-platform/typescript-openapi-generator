/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CategoriesTreeItem } from './categoriesTreeItem';
import type { CategoriesTreeResponseMeta } from './categoriesTreeResponseMeta';

export interface CategoriesTreeResponse {
  data: CategoriesTreeItem[];
  meta?: CategoriesTreeResponseMeta;
}
