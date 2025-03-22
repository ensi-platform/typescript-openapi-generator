/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductFillableProperties } from './productFillableProperties';
import type { ProductStatusProperties } from './productStatusProperties';
import type { PatchProductAttributesRequest } from './patchProductAttributesRequest';
import type { PatchProductImagesRequest } from './patchProductImagesRequest';

/**
 * Attributes and images are optional. If they do not need to be changed, the corresponding fields must be absent from the request, the null value cannot be used. The update procedure is the same as in the PATCH .../products/{id}/attributes and PATCH .../products/{id}/images requests.

 */
export type PatchProductRequest = ProductFillableProperties & ProductStatusProperties & PatchProductAttributesRequest & PatchProductImagesRequest;
