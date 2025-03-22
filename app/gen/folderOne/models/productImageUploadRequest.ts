/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductImageCreateProperties } from './productImageCreateProperties';
import type { ProductImageFillableProperties } from './productImageFillableProperties';
import type { ProductImageCreateRequired } from './productImageCreateRequired';

export type ProductImageUploadRequest = ProductImageCreateProperties & ProductImageFillableProperties & ProductImageCreateRequired;
