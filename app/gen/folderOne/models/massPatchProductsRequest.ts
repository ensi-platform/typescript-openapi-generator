/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodyMassOperation } from './requestBodyMassOperation';
import type { MassPatchProductsRequestAllOf } from './massPatchProductsRequestAllOf';
import type { PatchProductAttributesRequest } from './patchProductAttributesRequest';

export type MassPatchProductsRequest = RequestBodyMassOperation & MassPatchProductsRequestAllOf & PatchProductAttributesRequest;
