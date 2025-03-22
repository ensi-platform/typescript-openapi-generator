/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ErrorResponseData } from './errorResponseData';
import type { Error } from './error';
import type { ErrorResponseMeta } from './errorResponseMeta';

export interface ErrorResponse {
  /** @nullable */
  data: ErrorResponseData;
  errors: Error[];
  /** Object with meta-information */
  meta?: ErrorResponseMeta;
}
