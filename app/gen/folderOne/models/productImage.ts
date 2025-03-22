/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductImageReadonlyProperties } from './productImageReadonlyProperties';
import type { ProductImageFillableProperties } from './productImageFillableProperties';
import type { ProductImageResponseRequired } from './productImageResponseRequired';

export type ProductImage = ProductImageReadonlyProperties & ProductImageFillableProperties & ProductImageResponseRequired;
