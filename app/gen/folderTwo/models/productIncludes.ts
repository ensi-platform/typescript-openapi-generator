/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Brand0 } from './brand0';
import type { Category0 } from './category0';
import type { ProductImage } from './productImage';
import type { ProductAttributeValue } from './productAttributeValue';
import type { ProductGroup0 } from './productGroup0';

export interface ProductIncludes {
  brand?: Brand0;
  categories?: Category0[];
  images?: ProductImage[];
  attributes?: ProductAttributeValue[];
  product_groups?: ProductGroup0[];
  /** Product has not filled required attributes */
  no_filled_required_attributes?: boolean;
}
