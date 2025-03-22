/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Category0 } from './category0';
import type { ProductGroupIncludesMainProduct } from './productGroupIncludesMainProduct';
import type { ProductDraftWithoutInclude } from './productDraftWithoutInclude';

export interface ProductGroupIncludes {
  category?: Category0;
  /** @nullable */
  main_product?: ProductGroupIncludesMainProduct;
  products?: ProductDraftWithoutInclude[];
}
