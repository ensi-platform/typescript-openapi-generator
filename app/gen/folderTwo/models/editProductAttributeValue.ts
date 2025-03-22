/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductAttributeValueFillableProperties } from './productAttributeValueFillableProperties';
import type { ProductAttributeValueEditProperties } from './productAttributeValueEditProperties';
import type { ProductAttributeValueRequired } from './productAttributeValueRequired';

export type EditProductAttributeValue = ProductAttributeValueFillableProperties & ProductAttributeValueEditProperties & ProductAttributeValueRequired;
