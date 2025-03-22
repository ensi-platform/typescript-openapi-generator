/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductFillableProperties } from './productFillableProperties';
import type { ProductStatusProperties } from './productStatusProperties';
import type { ProductRequiredProperties } from './productRequiredProperties';
import type { ReplaceProductAttributesRequest } from './replaceProductAttributesRequest';
import type { ReplaceProductImagesRequest } from './replaceProductImagesRequest';

/**
 * Attributes and images are optional. If they do not need to be changed, the corresponding fields must be absent from the request, the null value cannot be used. The update procedure is the same as in the PUT .../products/{id}/attributes and PUT .../products/{id}/images requests.

 */
export type ReplaceProductRequest = ProductFillableProperties & ProductStatusProperties & ProductRequiredProperties & ReplaceProductAttributesRequest & ReplaceProductImagesRequest;
