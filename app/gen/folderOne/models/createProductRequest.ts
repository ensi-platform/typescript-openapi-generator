/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductFillableProperties } from './productFillableProperties';
import type { ProductRequiredProperties } from './productRequiredProperties';
import type { ReplaceProductImagesRequest } from './replaceProductImagesRequest';
import type { ReplaceProductAttributesRequest } from './replaceProductAttributesRequest';

/**
 * Attributes and images are optional. If they are not required, the corresponding field must be absent from the request, the null value cannot be used.

 */
export type CreateProductRequest = ProductFillableProperties & ProductRequiredProperties & ReplaceProductImagesRequest & ReplaceProductAttributesRequest;
